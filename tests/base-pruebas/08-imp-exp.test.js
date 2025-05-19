import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe ('Pruebas en 08-imp-exp', ()=>{
    test ('getHeroeById debe de retornar un héroe por ID', () => {
        const id=1;
        const hero = getHeroeById(id);
        //console.log (hero)

        expect(hero). toEqual ({id:1, name: 'Batman', owner:'DC'})
    });

    test ('getHeroeById debe de retornar undefined si no existe', () => {
        const id=100;
        const hero = getHeroeById(id);
        //console.log (hero)

        expect(hero). toBeFalsy ();
    });

    //retornar arreglo con los heroes de DC

    test ('getHeroeByOwner debe retornar los heroes de DC', ()=>{
        const owner = 'DC'
        const hero = getHeroesByOwner(owner);
        //console.log (hero)

        expect (hero.length).toBe (3);
        expect (hero). toEqual ([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }

        ])

        expect (hero).toEqual(heroes.filter((heroe)=>heroe.owner === owner))
    })

    test ('getHeroeByOwner debe retornar los heroes de Marvel', ()=>{
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner);
        //console.log (hero)

        expect (hero.length).toBe (2);
       

        expect (hero).toEqual(heroes.filter((heroe)=>heroe.owner === owner))
    })



})