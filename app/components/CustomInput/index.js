// LOGIN FORM
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Form, Input } from 'antd';

function CustomInput({ form, label, type }) {
  // console.log(inputValue);

  const { getFieldDecorator } = form;
  return (
    <React.Fragment>
      <Form.Item label={label || 'label'}>
        {getFieldDecorator(type || 'username', {
          rules: [{ required: true, message: 'Username is required' }],
          trigger: 'onChange',
        })(<Input placeholder="username" size="large" />)}
      </Form.Item>
    </React.Fragment>
  );
}

// DECLARING PROP TYPES
CustomInput.propTypes = {
  form: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const WrapperMyLoginForm = Form.create({
  name: 'custom_input',
  onFieldsChange: ({ onGetData, type }, changedFields) => {
    onGetData(changedFields[type].value);
  },
})(CustomInput);
export default WrapperMyLoginForm;
