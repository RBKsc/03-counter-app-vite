/**  * @jest-environment jsdom  */

import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe ('Pruebas en <FirstApp />', ()=>{

   /* test('debe de hacer match con el snapshot', ()=>{

        const title = 'Hola, soy Dodo';
        const {container}=render( <FirstApp title={title} />)

        //console.log (container)

        expect (container).toMatchSnapshot();
    });
    */

    test ('debe de mostrar el título en un h1', ()=>{

        const title = 'Hola, soy Dodo';
        const {container, getByText, getByTestId}=render( <FirstApp title={title} />)

        expect (getByText(title)).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //console.log (h1.innerHTML);
        //expect(h1.innerHTML).toContain(title)
        expect (getByTestId ('test-title').innerHTML ). toContain (title)
    })

    test ('debe mostrar el subtitulo enviado por props', ()=>{
        const title = 'Hola, soy Dodo';
        const subTitle = 'Soy, un gato';
        const {getAllByText}=render( 
        <FirstApp 
            title={title}
            subTitle={subTitle}
             />
            );

        //expect (getByText(subTitle)).toBeTruthy();
        expect (getAllByText(subTitle).length).toBe(2);

    })
})