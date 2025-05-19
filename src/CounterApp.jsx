import PropTypes from "prop-types"
import { useState } from "react"



const CounterApp = ({value })=>{

    const [counter, setCounter]= useState ( value) //value viene desde el main

   

    const handleAdd = () => {
       //setCounter ( counter + 1);
       setCounter ( (c)=>c+1)
    }

    const handleRest =()=>{
        setCounter( (c)=> c-1)
    }
    //const handleRest = ()=> setCounter (counter -1); otra forma de resolver

    const handleReset = ()=>{
        setCounter (value)
    }
    //const handleReset = ()=> setCounter (value);

    return(
    <>
    <h1>Counter App</h1>
    <h2>{counter}</h2>

    <button onClick={ handleAdd  }> +1</button>

    <button onClick={ handleRest}> -1 </button>
    <button aria-label="btn-reset" onClick={ handleReset}> Reset </button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp

//https://github.com/Klerith/react-vite-counter-app/tree/fin-seccion-4/src