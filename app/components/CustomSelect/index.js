/**
 *
 * CustomSelect
 *
 */
import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Select, DatePicker } from 'antd';

const { Option } = Select;
const { MonthPicker, WeekPicker } = DatePicker;

function CustomSelect({
  getData,
  options,
  label,
  mode,
  value,
  firstActive,
  placeHolder,
}) {
  const regular = () =>
    options && (
      <Select
        value={
          !firstActive && value === ''
            ? options[0]
            : firstActive && value === ''
              ? undefined
            : value
        }
        size="large"
        showSearch
        className="mySelect"
        placeholder={placeHolder || 'Select a person'}
        optionFilterProp="children"
        onChange={getData}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {options.map((item, index) => {
          const myKey = index + item;
          return (
            <Option key={myKey} value={item}>
              {item || null}
            </Option>
          );
        })}
      </Select>
    );

  const tagged = () =>
    options && (
      <Select
        mode="tags"
        size="large"
        placeholder={placeHolder || 'Select a person'}
        defaultValue={[]}
        onChange={getData}
        style={{ width: '100%' }}
      >
        {options.map((item, index) => {
          const myKey = index + item;
          return (
            <Option key={myKey} value={item}>
              {item || null}
            </Option>
          );
        })}
      </Select>
    );

  const multiple = () =>
    options && (
      <Select
        mode="multiple"
        size="large"
        placeholder={placeHolder || 'Select a person'}
        defaultValue={[]}
        onChange={getData}
        style={{ width: '100%' }}
      >
        {options.map((item, index) => {
          const myKey = index + item;
          return (
            <Option key={myKey} value={item}>
              {item || null}
            </Option>
          );
        })}
      </Select>
    );

  const DatePick = () => (
    <DatePicker
      size="large"
      onChange={getData}
      placeholder={placeHolder || 'Pick date'}
    />
  );
  return (
    <Main>
      <label htmlFor="Select"> {label || 'Some label'}</label>
      {mode === 'multiple' ? multiple() : ''}
      {mode === 'tag' ? tagged() : ''}
      {mode === 'regular' ? regular() : ''}
      {mode === 'DatePicker' ? DatePick() : ''}
    </Main>
  );
}

CustomSelect.propTypes = {
  getData: PropTypes.func,
  options: PropTypes.array,
  label: PropTypes.string.isRequired,
  mode: PropTypes.string,
  value: PropTypes.any,
  firstActive: PropTypes.bool,
  placeHolder: PropTypes.string,
};

export default CustomSelect;

// styling goes here;

const Main = styled.div`
  width: 100%;
  margin-top: 10px;
  .mySelect {
    min-width: 100%;
  }

  label {
    display: block;
    margin-bottom: 9px;
  }
`;
