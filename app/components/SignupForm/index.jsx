import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Form, Checkbox, Typography, Icon } from 'antd';
import CustomInput from 'components/CustomInput';
import { Link } from 'react-router-dom';
import CustomButton from 'components/CustomButton';

const { Text } = Typography;

function SignupForm() {
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
      <CustomButton type="primary"><Link to="/onboarding/">Sign up</Link></CustomButton>

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

const WrapperMySignupForm = Form.create({ name: 'signup_form' })(SignupForm);
export default WrapperMySignupForm;
