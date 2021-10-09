import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'


export const SimpleForm = () => {

    /* useEffect es un hook que nos va a permitir ejecutar alguna funcion determinada
       cuando algo suceda en nuestro componente
    */

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey')
    }, [])

    useEffect( () => {
        // console.log('cambio en el formulario')
    }, [formState])

    useEffect( () => {
        // console.log('cambio en el email')
    }, [email])

    
    const handleInputChange = ({ target }) =>{
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange } 
                />
            </div>
            
            <div className="form-group">
                <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange } 
                />
            </div>

            { (name === '123') && <Message /> }

        </>
    )
}
