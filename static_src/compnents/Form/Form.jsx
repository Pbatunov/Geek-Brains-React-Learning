import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';

const Form = ({ input, value, inputHandler, submitHandler }) => {
    return (
        <form onClick = {submitHandler}>
            <Input input = { input } value = { value } inputHandler = { inputHandler } />
            <Button />
        </form>
    )
}

export default Form;