import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe ('Pruebas en 05-funciones', ()=>{
    test ('getUser debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        //console.log (user) 

        expect (testUser). toEqual (user);
        // también se puede usar toStrictEqual
    });

    test ('getUsuarioActivo debe retornar un objeto', ()=>{
        /*const nombre='Pelusa'; mi respuesta

        const name= {
            uid: 'ABC567',
            username: nombre
        }

        const testActivo = getUsuarioActivo(nombre);
        //console.log (getUsuarioActivo(testName))

        expect (name). toEqual (testActivo);*/

        const name = 'Pelusa';
        const user= getUsuarioActivo (name);

        expect (user). toStrictEqual({
            uid: 'ABC567',
            username: name
        })
        
    })
})