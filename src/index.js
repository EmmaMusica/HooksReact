import React from 'react';
import ReactDOM from 'react-dom';


// import { CounterApp } from './components/01-useStates/CounterApp.js';
// import {HooksApp} from './HooksApp.js' 
// import { CounterWithCustomHook } from './components/01-useStates/CounterWithCustomHook.js';
// import { SimpleForm } from './components/02-useEffect/SimpleForm.js';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook.js';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';



ReactDOM.render(

    <MainApp /> 
    ,

  document.getElementById('root')
);

