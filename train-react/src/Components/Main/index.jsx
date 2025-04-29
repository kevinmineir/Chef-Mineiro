import React from 'react';



export function Main() {
    const [Ingredients, SetIngredients] = React.useState([])
    
    const IngredientsList = Ingredients.map((ingredient) => {
        return (
            <>
            <li key={ingredient} className='List-item'>{ingredient}</li>        
            </>
        )
    })



    function RenderList(){
       if (Ingredients.length >= 4) {
        return (
        <div>
            <div className='Lista-Container'>
                <span className='Lista-text'>Lista De Ingredientes :</span>
            </div>
            
        <ul className='Lista-content'>
        {IngredientsList}
        </ul>

        <button className='Clear-Button' onClick={ClearIngredient}>Limpar Ingredientes</button>

        <div className='RecipeGenerator-Container'>
                <div className='RecipeGeneratorText-Container'>
                <span className='RecipeGeneratorText'>Pronto Para a Receita?</span>
                <span className='RecipeGeneratorDesc'>Criar Uma Receita De Acordo Com Sua Lista De Ingredientes</span>
                </div>
                <div className='RecipeGenerator-Button-container'>
                <button className='RecipeGenerator-Button'>Criar Receita</button>
                </div>
            </div>
        </div>
        )
    }
        if (Ingredients.length > 0 && Ingredients.length < 4) {
            return (
            <div>
                <div className='Lista-Container'>
                    <span className='Lista-text'>Lista De Ingredientes :</span>
                </div>
                
            <ul className='Lista-content'>
            {IngredientsList}
            </ul>
    
            <button className='Clear-Button' onClick={ClearIngredient}>Limpar Ingredientes</button>
          </div>
        )    
    }  
    }
   
    function ClearIngredient(){
        SetIngredients([])
    }

    function AddIngredient(FormData){
        const newIngredient = FormData.get("Ingredient")
        SetIngredients(PrevIngredients => [...PrevIngredients, newIngredient])
    } 

    return (
        <>
        <div className='info-Container'>
            <span className='info-text'>Escreva Os Ingredientes Disponiveis e Eu Te Darei Uma Receita !</span>
        </div>

        <form action={AddIngredient}>
            <div className='AddIngredient-Container'>
            <input  className='AddIngredient-search' name='Ingredient' type="search" placeholder='Ex : Orégano , Queijo ...' />
            <button className='AddIngredient-button'> + Adicionar Ingrediente</button>
            </div>
        </form>

        {RenderList()}
       </>
    )
}