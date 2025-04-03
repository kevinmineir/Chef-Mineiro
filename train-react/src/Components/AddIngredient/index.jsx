import { react } from 'react';

export function AddIngredient() {
    return (
        <>
        <div className='AddIngredient-Container'>
        <input className='AddIngredient-search' type="search" placeholder='Ex : Oregáno , Queijo ...' />
        <button className='AddIngredient-button'>Add Ingredient</button>
        </div>
        </>
    )
}