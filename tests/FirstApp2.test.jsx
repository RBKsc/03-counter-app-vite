/**  * @jest-environment jsdom  */

import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe ('Pruebas en <FirstApp />', ()=>{

    const title = "Hola, soy Pelusa";
    const subTitle= "Soy un gato";

   test ('debe de hacer match con el snapshot', ()=>{
    const {container} = render (<FirstApp title={ title } />);
    expect (container).toMatchSnapshot();
   });

   test ('debe de mostrar el mensaje "Hola, soy Pelusa"', () =>{
    
    render (<FirstApp title={ title } />);
    //screen.debug();
    expect (screen.getByText(title)).toBeTruthy();
    //expect (screen.getByText(title)).not.toBeTruthy();
   })

   test('debe de mostrar el titulo en un h1', ()=>{
    render (<FirstApp title={ title } />);
    expect (screen.getByRole('heading', {level:1}).innerHTML).toContain( title)
   });

   test ('debe de mostrar el subtitulo enviado por props', ()=>{
    render (
         <FirstApp 
            title={ title } 
            subTitle={subTitle}
            />);
    
     expect (screen.getAllByText(subTitle).length).toBe(2);
   });
});