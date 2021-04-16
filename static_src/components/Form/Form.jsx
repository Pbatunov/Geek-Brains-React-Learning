import React from 'react';
import { TextField, Fab } from '@material-ui/core/';
import SendIcon from '@material-ui/icons/Send'
import './styles.scss'

const Form = ({ value, inputHandler, submitHandler }) => {
    return (
        <form className="message__form" onSubmit = {submitHandler}>
            <TextField
                autoComplete="off"
                fullWidth={ true }
                name="text"
                hintText="Введите сообщение"
                style={ { fontSize: '22px' } }
                onChange={ inputHandler }
                value={ value }
            />
            
            <Fab size='small' type='submit' style = { {position: 'relative', top: '10px', color: '#249bd7', padding: '0px', marginLeft: '10px'} }>
                <SendIcon />
            </Fab>
        </form>
    )
}

export default Form;