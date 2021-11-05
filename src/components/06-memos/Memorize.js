import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const {counter, increment } = useCounter( 10 )
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <hr />

            <h3 className="text-center">Counter: <Small value={ counter } /></h3>

            <button 
                className="btn btn-primary mt-4" 
                onClick={ increment }
            >
            Incrementar
            </button>

            <button 
                className="btn btn-primary ms-3 mt-4"
                onClick={() => {setShow(!show)}}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
