import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Form, Checkbox, Typography, Icon } from 'antd';
import CustomInput from 'components/CustomInput';
import { Link, withRouter } from 'react-router-dom';
import CustomButton from 'components/CustomButton';
import axios from 'axios';
import { compose } from 'redux';
import { setCookie } from 'utils/cookies';

const { Text } = Typography;

// eslint-disable-next-line react/prop-types
function LoginForm({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(username, password, rememberMe);
  }, [username, password]);
  // console.log(inputValue);

  const onSubmitForm = async () => {
    console.log('onsubmitForm');
    setLoading(true);
    axios
      .post('/api/expert/login', {
        email: username, // 'habeeb1234@test.com',
        password, // 'Habeeb123',
      })
      .then(res => {
        console.log('apiRes, ', res.data);
        setCookie('authToken', res.data.tokens.access.token, 1); // Set for 7 days, for example
        setLoading(false);
        history.push('/onboarding/personal');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return loading ? (
    <p>Loading</p>
  ) : (
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
      <CustomButton onClick={onSubmitForm} type="primary">
        Login
      </CustomButton>

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

const enhance = compose(
  withRouter,
  Form.create({ name: 'login_form' }),
);

export default enhance(LoginForm);
