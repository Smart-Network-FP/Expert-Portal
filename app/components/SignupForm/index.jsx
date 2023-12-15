import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Form, Checkbox, Typography, Icon } from 'antd';
import CustomInput from 'components/CustomInput';
import { Link, withRouter } from 'react-router-dom';
import CustomButton from 'components/CustomButton';
import axios from 'axios';
import { setCookie } from 'utils/cookies';
import { compose } from 'redux';

const { Text } = Typography;

function SignupForm({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // console.log(username, password, rememberMe);
  }, [username, password]);
  // console.log(inputValue);
  const createAccount = async () => {
    console.log('createAccount');
    // setLoading(true);
    axios
      .post('/api/expert/register', {
        email: username, // 'habeeb1234@test.com',
        password, // 'Habeeb123',
      })
      .then(res => {
        console.log('apiRes, ', res.data);
        setCookie('authToken', res.data.tokens.access.token, 1); // Set for 7 days, for example
        // setLoading(false);
        history.push('/onboarding/personal');
      })
      .catch(err => {
        // setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <Form layout="vertical">
        <CustomInput
          label="Firstname"
          type="text"
          rules={[{ required: true, message: `Firstname is required.` }]}
          onGetData={data => setUsername(data)}
        />
        <CustomInput
          label="Lastname"
          type="text"
          rules={[{ required: true, message: `Lastname is required.` }]}
          onGetData={data => setUsername(data)}
        />
        <CustomInput
          label="Email"
          type="email"
          rules={[{ required: true, message: `Email is required.` }]}
          onGetData={data => setUsername(data)}
        />
        <CustomInput
          label="Password"
          type="Password"
          rules={[{ required: true, message: `Password is required.` }]}
          onGetData={data => setPassword(data)}
          suffix={<Icon type="eye" style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
        <CustomInput
          label="Confirm password"
          type="Password"
          rules={[{ required: true, message: `password is required.` }]}
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
      <CustomButton type="primary" onClick={createAccount}>
        {/* <Link to="/onboarding/">Sign up</Link> */}
        Sign up
      </CustomButton>

      <Text
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Already registered ?<Link to="/">. Login here </Link>
      </Text>
    </>
  );
}
SignupForm.propTypes = {};

const enhance = compose(
  withRouter,
  Form.create({ name: 'signup_form' }),
);

export default enhance(SignupForm);
