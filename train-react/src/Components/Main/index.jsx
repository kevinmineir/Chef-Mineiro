import { react } from 'react';


export function Main() {
    return (
        <>
        <div className='info-Container'>
            <span className='info-text'>Escreva Os Ingredientes Disponiveis e Eu Te Darei Uma Receita !</span>
        </div>

        <form onSubmit={SubmitIngredient}>
            <div className='AddIngredient-Container'>
            <input className='AddIngredient-search' name='Ingredient' type="search" placeholder='Ex : Orégano , Queijo ...' />
            <button className='AddIngredient-button'> + Adicionar Ingrediente</button>
            </div>
        </form>

        <div className='Lista-Container'>
            <span className='Lista-text'>Lista De Ingredientes :</span>
        </div>
        </>
    )
}