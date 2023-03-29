import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Form } from 'antd';
import CustomInput from 'components/CustomInput';
import messages from './messages';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);
  // console.log(inputValue);

  return (
    <React.Fragment>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Form layout="vertical">
        <CustomInput
          label="Username"
          type="username"
          onGetData={data => setUsername(data)}
        />
        <CustomInput
          label="Password"
          type="password"
          onGetData={data => setPassword(data)}
        />
      </Form>
    </React.Fragment>
  );
}
LoginForm.propTypes = {};

const WrapperMyLoginForm = Form.create({ name: 'login_form' })(LoginForm);
export default WrapperMyLoginForm;
