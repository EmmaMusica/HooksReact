import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment, reset} = useCounter(1)

    const {loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const { author, quote } = !!data && data[0]; 
    //Primero data es null---> por lo cual !data = true y !!data = false
    //luego, cuando tenemos resultado en el fetch !!data es igual a true

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading
                ?
                    (
                        <div className=" alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <div>
                            <blockquote className="blockquote text-end">
                                <p className="mb-10">{quote}</p>
                                <footer className="blockquote-footer"> {author} </footer>
                            </blockquote>

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

            

        </div>
    )
}
