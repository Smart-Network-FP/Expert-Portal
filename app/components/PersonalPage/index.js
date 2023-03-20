/**
 *
 * PersonalPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Form, Icon, Input, Select } from 'antd';
import messages from './messages';

function PersonalPage(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched,
    getFieldValue,
    getFieldsValue,
  } = props.form;
  const { Option } = Select;
  // Only show error after a field is touched.
  const firstnameError =
    isFieldTouched('firstname') && getFieldError('firstname');
  const lastnameError = isFieldTouched('lastname') && getFieldError('lastname');

  return (
    <PersonalFormWrapper>
      {/* <FormattedMessage {...messages.header} /> */}
      <Form
        onSubmit={handleSubmit}
        className="login-form"
        layout="vertical"
        style={{
          height: '400px',
          border: '1px solid #eee',
          boxShadow: '2px 2px 12px 0.1px rgb(0 0 0 / 20%)',
          padding: '40px',
          background: '#fff',
        }}
      >
        <FormInline>
          <Form.Item
            validateStatus={firstnameError ? 'error' : ''}
            help={firstnameError || ''}
            style={{ minWidth: '300px' }}
          >
            {getFieldDecorator('firstname', {
              rules: [
                { required: true, message: 'Please input your First Name!' },
              ],
            })(
              <Input style={{ maxWidth: '300px' }} placeholder="First Name" />,
            )}
          </Form.Item>
          <Form.Item
            validateStatus={lastnameError ? 'error' : ''}
            help={lastnameError || ''}
            style={{ minWidth: '300px' }}
          >
            {getFieldDecorator('lastname', {
              rules: [
                { required: true, message: 'Please input your Last Name!' },
              ],
            })(<Input style={{ maxWidth: '300px' }} placeholder="Last Name" />)}
          </Form.Item>
        </FormInline>
        <Form.Item>
          {getFieldDecorator('select-industry', {
            rules: [{ required: true, message: 'Please select the industry!' }],
          })(
            <Select placeholder="Please select an industry">
              <Option value="electrical">Accounting</Option>
              <Option value="accounting">Electrical</Option>
              <Option value="accounting">Information Technology</Option>
            </Select>,
          )}
        </Form.Item>
        <FormInline>
          <Form.Item style={{ flex: '0 0 30%' }}>
            {getFieldDecorator('select-country', {
              rules: [
                { required: true, message: 'Please select the country!' },
              ],
            })(
              <Select placeholder="Country of residence">
                <Option value="electrical">Accounting</Option>
                <Option value="accounting">Electrical</Option>
                <Option value="accounting">Information Technology</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item style={{ flex: '0 0 30%' }}>
            {getFieldDecorator('select-state', {
              rules: [{ required: true, message: 'Please select the state!' }],
            })(
              <Select
                placeholder="State"
                disabled={!!getFieldValue('select-country')}
              >
                <Option value="electrical">Accounting</Option>
                <Option value="accounting">Electrical</Option>
                <Option value="accounting">Information Technology</Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item style={{ flex: '0 0 30%' }}>
            {getFieldDecorator('select-city', {
              rules: [{ required: true, message: 'Please select the city!' }],
            })(
              <Select placeholder="City">
                <Option value="electrical">Accounting</Option>
                <Option value="accounting">Electrical</Option>
                <Option value="accounting">Information Technology</Option>
              </Select>,
            )}
          </Form.Item>
        </FormInline>
      </Form>
    </PersonalFormWrapper>
  );
}

PersonalPage.propTypes = {};

const PersonalPageWrapper = Form.create({ name: 'personal-page' })(
  PersonalPage,
);

export default memo(PersonalPageWrapper);

const FormInline = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PersonalFormWrapper = styled.div`
  width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
