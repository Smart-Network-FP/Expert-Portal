import { useState } from 'react';

const useInput = value => {
  const [inputState, setInputState] = useState('');
  setInputState(value);

  const handleChange = () => setInputState(value)
  return inputState;
};

export default useInput;
