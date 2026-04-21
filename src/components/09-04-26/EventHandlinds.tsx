import React, { useState } from 'react'
import '../Counter.css'
export default function EventHandlinds() {
    const [name, setName] = useState('');

    const InputChnage = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(event.target.value)
        console.log(event.target.value)
    }
    return (
        <div>
            <input type="text" className='name-input' onChange={InputChnage} />
            
            <h3 className='name-heading'>Hello! {name}</h3>
        </div>
    )
}
