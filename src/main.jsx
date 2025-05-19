import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './HelloWorldApp'
import FirstApp from './FirstApp';
import './styles.css';
import CounterApp from './CounterApp';




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       {/* <FirstApp title='Hola, soy Pelusa'/> */}
       
     <CounterApp value={10} />
    </React.StrictMode>
)