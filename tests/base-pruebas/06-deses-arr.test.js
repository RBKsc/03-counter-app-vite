import { usContext } from "../../src/base-pruebas/06-deses-obj";




describe ('Pruebas en 06-desed-arr', ()=>{
    test ('usContext debe retornar u  objeto', ()=>{
       
        const clave = "Pelusa";
        const edad = 15;

        const objectTest = {
            nombreClave: clave,
            anios: edad,
            latlng: {
              lat: 14.1232,
              lng: -12.3232
           }
         }
 
        const test = usContext({clave, edad});

        expect (objectTest). toEqual ( test)
    })
})