/* El objetivo del LayoutEffect es que cuando se renderice algo yo puedo sacar mediciones de como
quedaron divs, o diferentes elementos o componentes. 

En este caso, gracias a useRef podemos tener como referencia el parrafo del "quote", con el que lograriamos
observar que primero, al iniciar la aplicacion y todavia no haber cargado nada en el quote, tenemos un tamañp
de caja de 0, y luego, cuando el fetch se completa y tenemos informacion para mostrar el width del parrafo se pasa
a 380px.

En otras palabras, gracias al layoutEffect podemos observar los cambios en los elementos.
*/


import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './layout.css'

export const Layout = () => {

    const {counter, increment, reset} = useCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const { quote } = !!data && data[0]; 
    //Primero data es null---> por lo cual !data = true y !!data = false
    //luego, cuando tenemos resultado en el fetch !!data es igual a true

    const pTag = useRef()
    
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            
            <blockquote className="blockquote text-end">

                <p 
                    ref={ pTag }
                    className="mb-10"
                >
                {quote}
                </p>

            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>


            <button 
            onClick={ increment }
            className="btn btn-primary float-end">
            Siguiente Frase
            </button>
            <button 
            onClick={ reset }
            className="btn btn-primary ">
            Frase Inicial
            </button>

        </div>
    )
}
