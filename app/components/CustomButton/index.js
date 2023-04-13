/**
 *
 * CustomButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from 'antd';

function CustomButton(props) {
  return (
    <Button
      block
      size="large"
      className="myButton"
      {...props}
      style={{ margin: `20px auto` }}
    >
      {props.children}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.any,
};

export default CustomButton;
