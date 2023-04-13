import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Form, Checkbox, Typography, Icon } from 'antd';
import CustomInput from 'components/CustomInput';
import { Link } from 'react-router-dom';
import CustomButton from 'components/CustomButton';

const { Text } = Typography;

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    console.log(username, password, rememberMe);
  }, [username, password]);
  // console.log(inputValue);

  return (
    <>
      <Form layout="vertical">
        <CustomInput
          label="Username"
          type="username"
          rules={[{ required: true, message: `Email is required.` }]}
          onGetData={data => setUsername(data)}
        />
        <CustomInput
          label="Password"
          type="Password"
          rules={[{ required: true, message: `Email is required.` }]}
          onGetData={data => setPassword(data)}
          suffix={<Icon type="eye" style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
      </Form>

      <div className="remember_me_section">
        <Checkbox onChange={e => setRememberMe(e.target.checked)}>
          Remember me
        </Checkbox>
        <Link to="/">Forgot password ?</Link>
      </div>
      <CustomButton type="primary">Login</CustomButton>

      <Text
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Not registered ?<Link to="/signup">. Create an account </Link>
      </Text>
    </>
  );
}
LoginForm.propTypes = {};

const WrapperMyLoginForm = Form.create({ name: 'login_form' })(LoginForm);
export default WrapperMyLoginForm;
