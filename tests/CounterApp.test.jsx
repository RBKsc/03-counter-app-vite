
/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp"



describe ('Pruebas en <CounterApp />', ()=>{

    const counter= 10;

   
    //console.log (container)

    test ("debe hacer match con el snapshot", ()=>{
        const {container} = render(<CounterApp value={counter}/>);
        expect (container).toMatchSnapshot();
    });

    test ('debe de mostrar el valor inicial de 100', ()=>{
        
        render(<CounterApp value={counter}/>);
        expect (screen.getByText(counter)).toBeTruthy();
        
        //screen.debug()

        /*
        render(<CounterApp value={100}/>);
        expect (screen.getByText(100)).toBeTruthy();
        */
       
    });

    test ('debe de incrementar con el boton +1', ()=>{

        render (<CounterApp value={counter}/>);
        fireEvent.click( screen.getByText('+1'));
        expect ( screen.getByText('11')).toBeTruthy();
    });

    test ('debe de decrementar con el boton -1', ()=>{

        render (<CounterApp value={counter}/>);
        fireEvent.click( screen.getByText('-1'));
        //screen.debug()
        expect ( screen.getByText('9')).toBeTruthy();
    });

    test('debe de funcionar el boton de reset', ()=>{

         render (<CounterApp value={355}/>);
         fireEvent.click( screen.getByText('+1'));
         fireEvent.click( screen.getByText('+1'));
         fireEvent.click( screen.getByText('+1'));
         //fireEvent.click( screen.getByText('Reset'));
         fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

         //screen.debug()

         expect( screen.getByText (355)). toBeTruthy();
    });
        
});