import React from 'react';
import * as S from './styles';

export function Main() {
    const [Ingredients, SetIngredients] = React.useState([])
    
    const IngredientsList = Ingredients.map((ingredient) => {
        return (
            <>
            <S.ListItem key={ingredient} >{ingredient}</S.ListItem>        
            </>
        )
    })



    function RenderList(){

        if (Ingredients.length > 0 && Ingredients.length < 4) {
            return (
            <div>
                <S.ListaContainer>
                    <S.ListaText>Lista De Ingredientes :</S.ListaText>
                </S.ListaContainer>
                
                <S.ListaContent>
                   {IngredientsList}
                </S.ListaContent>
    
            <S.ClearButton onClick={ClearIngredient}>Limpar Ingredientes</S.ClearButton>
          </div>
        )    
    }


       if (Ingredients.length >= 4) {
        return (
        <div>
            
            <S.ListaContainer>
                <S.ListaText>Lista De Ingredientes :</S.ListaText>
            </S.ListaContainer>
            
        <S.ListaContent>
        {IngredientsList}
        </S.ListaContent>

        <S.ClearButton onClick={ClearIngredient}>Limpar Ingredientes</S.ClearButton>

        <S.RecipeGeneratorContainer>
                <S.RecipeGeneratorTextContainer>
                <S.RecipeGeneratorText>Pronto Para a Receita?</S.RecipeGeneratorText>
                <S.RecipeGeneratorDesc>Criar Uma Receita De Acordo Com Sua Lista De Ingredientes</S.RecipeGeneratorDesc>
                </S.RecipeGeneratorTextContainer>

                <S.RecipeGeneratorButtonContainer>
                    <S.RecipeGeneratorButton>Criar Receita</S.RecipeGeneratorButton>
                </S.RecipeGeneratorButtonContainer>
        </S.RecipeGeneratorContainer>

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
        <S.InfoContainer>
            <S.InfoText>Escreva Os Ingredientes Disponiveis e Eu Te Darei Uma Receita !</S.InfoText>
         </S.InfoContainer>

        <form action={AddIngredient}>
            <S.AddIngredientContainer>
            <S.AddIngredientInput name='Ingredient' type="search" placeholder='Ex : Orégano , Queijo ...' />
            <S.AddIngredientButton> + Adicionar Ingrediente</S.AddIngredientButton>
            </S.AddIngredientContainer>
        </form>

        {RenderList()}
       </>
    )
}