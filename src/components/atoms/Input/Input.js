import React from 'react';
import { StyledInput } from './Input.style';
const Input = ({ onKeyUpFunction, placeholder, type }) => {
    return <StyledInput type={type} placeholder={placeholder} onKeyUp={onKeyUpFunction} />;
};

export default Input;
