import {react} from 'react';

import { ChefHeader } from '../header/index';
import { Main } from "../Main/index";
import { Lista } from "../List/index";

const ingredientes = [
    {
        id: 1,
        ingredient: 'Orégano',
    }
]

export function ChefMineiro(){
    
    const ingredientesLista = ingredientes.map((item) => {
        return (
            <Lista key={item.id} ingredient ={item.ingredient}/>
        )
    }

    )

    return(
        <>

        <ChefHeader/>
        <Main/>
        {ingredientesLista}
        </>
        
    )
}