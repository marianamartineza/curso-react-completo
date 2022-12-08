import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// import {HelloWorldApp} from './HelloWorldApp';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp />
//     </React.StrictMode>
// );

import {FirstApp} from './FirstApp';
// import {CounterApp} from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* properties - propiedades  */}
        {/* <FirstApp subTitle={1234} /> */}
        {/* <CounterApp value={10} /> */}
         <FirstApp title="Hola, soy vegeta" subTitle={12}/> 
    </React.StrictMode>
)


