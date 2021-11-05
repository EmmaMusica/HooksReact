import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado'

import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const {counter, increment } = useCounter( 1000 )
    const [show, setShow] = useState(true)
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

    /* useMemo es um hook que se utiliza para "memorizar" una funcion y que no vuelva a renderizar
    todos los componentes si es que no se la ejecuta */

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            <h3 className="text-center">Counter: <small>{ counter }</small></h3>

            <p className="text-center">{ memoProcesoPesado }</p>
            <button 
                className="btn btn-primary mt-4" 
                onClick={ increment }
            >
            Incrementar
            </button>

            <button 
                className="btn btn-secondary ms-3 mt-4"
                onClick={() => {setShow(!show)}}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
