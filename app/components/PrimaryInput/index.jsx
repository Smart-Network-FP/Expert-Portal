/**
 *
 * PrimaryInput
 *
 */

import React, { useState } from 'react';
import { Input } from 'antd';
import useInput from 'hooks/useInput';

function PrimaryInput({ label }) {
  const [val, setVal] = useState('');
  return (
    <>
      <Input
        placeholder={label || 'Label'}
        onChange={e => setVal(e.target.value)}
        size="large"
      />
      <h1>{val}</h1>
    </>
  );
}

PrimaryInput.propTypes = {};

export default PrimaryInput;
