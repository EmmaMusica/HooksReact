//Estado inicial. 1er tarea
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];


//fucnion reducer para modificar las tareas
const todoReducer = ( state = initialState, action ) => {
    
    if(action?.type ==='agregar') { // *****El signo ? al lado del action dice: "si el action tiene un valor, entonces analizalo, sino no hagas nada."
        return [...state, action.payload]
    }
    
    return state;
}


let todos = todoReducer()


//nueva tarea
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}


//accion
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction );



console.log(todos)