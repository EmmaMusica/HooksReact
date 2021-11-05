/* 
    Cuando un componente se renderiza vuelve a generar una funciones, en nuestros casos, las funciones
    son constantes que quedan almacenadas en memoria, por consecuencia cuando la volvemos ejecutar se vuelve
    a generar un nuevo espacio en memoria para almacenar la funcion ( tengamos en cuenta que la funciones esta almacenada
        en una constante, lo que la convierte en un objeto que apunta a un espacio de memoria cambiante.) y consecuentemente
    React.memo , en el componente ShowIncrement, toma a la property como variante y no como un objeto estatico.

    Por eso hace neseario la utilizacion de useCallBack.

    **Explicacion en el video 118 minuto 4:33 del curso "React: De cero a experto ( Hooks y MERN )" - UDEMY.com
*/



import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => {
    //     setCounter( counter + 1)
    // }

    const increment = useCallback(
        () => { setCounter( c => c + 1 ) 
        }, [setCounter])


    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    )
}
