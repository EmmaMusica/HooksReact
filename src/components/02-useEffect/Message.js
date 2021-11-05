import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0})

    const {x, y} = coords

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y }
            setCoords(coords)
        }

        window.addEventListener('mousemove', mouseMove)
        
        return () => { //El return en el useEffect se utiliza que el sistema entienda que una accion, o funcion deja de tener efecto.
            
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <>
            <h3>Cool</h3>
            <p>
                x: {x}
            </p>
            <p>
                y: {y}
            </p>
        </>
    )
}
