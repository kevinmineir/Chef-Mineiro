import React from 'react';
import * as S from './styles';
import { Recipe } from '../Recipe';
import { GetRecipe } from '../Recipe/IA';

export function Main() {
    function ClearIngredient(){
        SetIngredients([])
        SetReceita('')
        SetShownReceita(false)
    }


    function AddIngredient(FormData){
        const newIngredient = FormData.get("Ingredient")
        SetIngredients(PrevIngredients => [...PrevIngredients, newIngredient])
    } 
    
   
    function RenderList(){

        if (Ingredients.length <= 2) {
            return (
            <div>
                <S.ListaContainer>
                    <S.ListaText>Lista De Ingredientes :</S.ListaText>
                </S.ListaContainer>
                
                <S.ListaContent>
                   {IngredientsList}
                </S.ListaContent>
    
            <S.ClearButton onClick={ClearIngredient}>Limpar Ingredientes</S.ClearButton>
            <S.IngredientsInfo>Adicione Pelo Menos 3 Ingredientes Para Gerar A Receita</S.IngredientsInfo>
          </div>
        )    
    }  
       if (Ingredients.length >= 3) {
        return (
        <div>
            
            <S.ListaContainer>
                <S.ListaText>Lista De Ingredientes :</S.ListaText>
            </S.ListaContainer>
            
        <S.ListaContent>
        {IngredientsList}
        </S.ListaContent>

        <S.ClearButton onClick={ClearIngredient}>Limpar Ingredientes {Receita !== '' ? 'e Receita' : undefined}</S.ClearButton>

        <S.RecipeGeneratorContainer>
                <S.RecipeGeneratorTextContainer>
                <S.RecipeGeneratorText>Pronto Para a Receita?</S.RecipeGeneratorText>
                <S.RecipeGeneratorDesc>Criar Uma Receita De Acordo Com Sua Lista De Ingredientes</S.RecipeGeneratorDesc>
                </S.RecipeGeneratorTextContainer>

                <S.RecipeGeneratorButtonContainer>
                    <S.RecipeGeneratorButton onClick={Receita === '' ? RenderRecipe : ToggleReceita}>{Receita === '' ? 'Gerar' : (ShowReceita === true ? 'Esconder' : 'Mostrar')} Receita</S.RecipeGeneratorButton>
                </S.RecipeGeneratorButtonContainer>
        </S.RecipeGeneratorContainer>

        </div>
        )
    }  
    }
    const [Receita,SetReceita] = React.useState('')
    async function RenderRecipe() {
       const AIreceita = await GetRecipe(Ingredients)
       SetReceita(AIreceita)
       SetShownReceita(true)
    }


    const [ShowReceita,SetShownReceita] = React.useState(false)
    function ToggleReceita(){
    SetShownReceita(PrevShownReceita => !PrevShownReceita)
    }


    const [Ingredients, SetIngredients] = React.useState([]) 
    const IngredientsList = Ingredients.map((ingredient) => {
        return (
            <>
            <S.ListItem key={ingredient} >{ingredient}</S.ListItem>        
            </>
        )
    })

   
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

        <Recipe ShowReceita={ShowReceita} Receita={Receita} />
       </>
    )
}