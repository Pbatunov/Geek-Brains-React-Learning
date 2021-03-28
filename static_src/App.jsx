import React,{ useEffect, useState } from 'react';
import MessageField from "./compnents/MessageField/MessageField"
import Button from './compnents/Button/Button'

let dataMessages = [{
      id: 'zxcasd123',
      author: 'Я',
      text: 'Привет'
},
{
      id: 'qwedas321',
      author: 'Я',
      text: 'Как дела?'
}]

const App = () =>{
      const [messages, setMessages] = useState(dataMessages)
      
      const clickHandler = () => {
            dataMessages.push({
                  id: '765wsxcfr',
                  author: 'Я',
                  text: 'Чем занимаешься?'
            });
            setMessages([...dataMessages]);
      }
   return (
         <div>
            <MessageField messages = { messages } />
            <Button clickHandler = { clickHandler } />
         </div>
   )
}

export default App