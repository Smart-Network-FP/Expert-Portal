// LOGIN FORM
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Form, Input, Icon } from 'antd';

function CustomInput({ form, label, type, rules, suffix }) {
  // console.log(inputValue);
  console.log(rules);
  const renderInput = () => {
    if (type === 'Password')
      return (
        <Input.Password type="password" placeholder={label} size="large" />
      );
    if (type === 'Text')
      return (
        <Input.TextArea type="password" placeholder={label} size="large" />
      );
    return <Input type="text" placeholder={label} size="large" />;
  };

  const { getFieldDecorator } = form;
  return (
    <React.Fragment>
      <Form.Item label={label || 'label'}>
        {getFieldDecorator(type || 'username', {
          rules: [...(rules || { required: false })],
          trigger: 'onChange',
        })(renderInput())}
      </Form.Item>
    </React.Fragment>
  );
}

// DECLARING PROP TYPES
CustomInput.propTypes = {
  form: PropTypes.object,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  suffix: PropTypes.element,
  rules: PropTypes.arrayOf(PropTypes.object),
};

const WrapperMyLoginForm = Form.create({
  name: 'custom_input',
  onFieldsChange: ({ onGetData, type }, changedFields) => {
    onGetData(changedFields[type].value);
  },
})(CustomInput);
export default WrapperMyLoginForm;
