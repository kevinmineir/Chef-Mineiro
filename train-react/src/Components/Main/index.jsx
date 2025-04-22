import React from 'react';



export function Main() {
    const [Ingredients, SetIngredients] = React.useState([])
    
    const IngredientsList = Ingredients.map((ingredient) => {
        return (
            <>
            <ul className='Lista-content'>
            <li key={ingredient} className='List-item'>{ingredient}</li>
            </ul> 
            </>
        )
    })

    function SubmitIngredient(event){
        event.preventDefault();

        const formdata = new FormData(event.currentTarget)
        const newIngredient = formdata.get("Ingredient")
        
        SetIngredients(PrevIngredients => [...PrevIngredients, newIngredient])

        event.currentTarget.reset()
    } 
   
    return (
        <>
        <div className='info-Container'>
            <span className='info-text'>Escreva Os Ingredientes Disponiveis e Eu Te Darei Uma Receita !</span>
        </div>

        <form onSubmit={SubmitIngredient}>
            <div className='AddIngredient-Container'>
            <input onSubmit={SubmitIngredient} className='AddIngredient-search' name='Ingredient' type="search" placeholder='Ex : Orégano , Queijo ...' />
            <button onSubmit={SubmitIngredient} className='AddIngredient-button'> + Adicionar Ingrediente</button>
            </div>
        </form>

        <div className='Lista-Container'>
            <span className='Lista-text'>Lista De Ingredientes :</span>
        </div>
        
       {IngredientsList}
        </>
    )
}