import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Componente renedirizado nuevamente')

    return (
        <small>
            {value}
        </small>
    )
})


// React.memo se utiliza para que un elemento del dom no se vuelva a renderizar a menos que sus
// properties cambien