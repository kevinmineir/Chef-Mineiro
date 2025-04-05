import {react} from 'react';

import { ChefHeader } from '../header/index';
import { Main } from "../Main/index";
import { Lista } from "../List/index";

const ingredientes = [
    {
        id: 1,
        ingredient: 'Orégano',
    },
    {
        id: 2,
        ingredient: 'Queijo',
    },
    {
        id: 3,
        ingredient: 'Tomate',
    },
    {
        id: 4,
        ingredient: 'Cebola',
    },
    {
        id: 5,
        ingredient: 'Alho',
    },
    {
        id: 6,
        ingredient: 'Pimenta',
    },
    {
        id: 7,
        ingredient: 'Sal',
    },
    {
        id: 8,
        ingredient: 'Azeite',
    },
    {
        id: 9,
        ingredient: 'Açucar',
    },
    {
        id: 10,
        ingredient: 'Cenoura',
    },
    {
        id: 11,
        ingredient: 'Batata',
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