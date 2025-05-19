import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe ('Pruebas en 09-promesas', ()=>{
    test('getHeroeByIdAsync debe retornar un héroe', (done)=>{

        const id=1;
        getHeroeByIdAsync(id).
        then(hero =>{

            expect (hero).toEqual({
                id:1,
                name:'Batman',
                owner:'DC'
            });
            done();
            // se pone done para que jest sepa que termino la prueba.  porque funciona de forma sincronica
        });
    });

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done)=>{

        const id=100;
        getHeroeByIdAsync(id)
        .then (hero => { // el then esta de más, con el catch en suficientez
            expect(hero).toBeFalsy();
            done();
        })
        .catch (error =>{

           //console.log (error)
            expect (error). toBe(`No se pudo encontrar el héroe ${id}`)

            done();
        });
    });
})