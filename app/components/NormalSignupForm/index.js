/**
 *
 * NormalSignupForm
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import messages from './messages';

function NormalSignupForm(props) {
  const [state, setState] = useState({
    confirmDirty: false,
    autoCompleteResult: [],
  });
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const handleConfirmBlur = e => {
    const { value } = e.target;
    setState({ confirmDirty: state.confirmDirty || !!value });
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  const { getFieldDecorator } = props.form;

  return (
    <div>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(
            <Input
              prefix={
                <Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm Password"
              onBlur={handleConfirmBlur}
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
            style={{ width: '100%' }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

NormalSignupForm.propTypes = {};
const WrapperSignupForm = Form.create({ name: 'normal_signup' })(
  NormalSignupForm,
);
export default memo(WrapperSignupForm);
