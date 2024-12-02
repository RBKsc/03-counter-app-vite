import PropTypes from "prop-types";

/*const newMessage = {
    message: 'Hola Mundo',
    title: 'Pelusa'
};


function saludo (){
    let nombre= 'Pelusa';

    //console.log ('hola' + nombre);

    return 'hola ' + nombre;

}

const getResult = (a,b) =>{
    return a+b;
}
    */

const FirstApp = ({
    title='No hay titulo', 
    subTitle= 'No hay subtitulo', 
    name= 'Yoda'}) =>{

    //console.log (props)

    
return (
    //Fragmento, nodo padre para poner elementos debajo de otros
    <>
        <h1>{title}</h1>

        {/* las funciones se escriben con el parentesis
        <h1>{ saludo() }</h1>
        <h1>{getResult(1,2) }</h1> */}

       {/* se pone entre llaves para escribir codigo JS
       <code> { JSON.stringify (newMessage)}</code> */} 

        <p>{subTitle}</p>
        <p>{name}</p>
    </>
);
}

FirstApp.propTypes ={
title: PropTypes.string.isRequired,
subTitle: PropTypes.string,
}



export default FirstApp;