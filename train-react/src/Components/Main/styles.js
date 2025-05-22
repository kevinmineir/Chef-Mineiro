import styled from 'styled-components';

export const InfoContainer = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    margin-top: 1rem;
    margin-left: 1rem;
`
export const InfoText = styled.span`
    font-size: 1.1rem;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
`
export const AddIngredientContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`
export const AddIngredientInput = styled.input`
    width: 38rem;
    height: 1.8rem;
    border-radius: 10px;
    font-size: 0.9rem;
    border: none;
    outline: 1px solid rgb(136, 135, 135);
`
export const AddIngredientButton = styled.button`
    height: 1.8rem;
    border: none;
    background-color:black;
    color: white;
    border-radius: 14px;
    margin-left: 0.9rem;
    font-size: 0.85rem;
    font-weight:400;
    transition: background-color 0.3s;

    &:hover{
        background-color:rgb(53, 53, 53);
    }
`









export const ListaContainer = styled.div`
    display: flex;
    width: fit-content;
    padding-left: 6vw;
    padding-right: 6vw;
    flex-direction: column;
    margin-top: 2rem;
`
export const ListaText = styled.span`
    font-size: 1.5rem;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
`
export const ListaContent = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 8%;
    height: 24rem;
    max-height: 300px;
    overflow-y:scroll;
`
export const ListItem = styled.li`
    font-size: 1.3rem;
    font-weight: 200;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const ClearButton = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 8px 10px 8px 10px;
    margin-right: 6.5%;
    display: flex;
    justify-self: flex-end ;
    transition: background-color 0.3s;

    &:hover{
        background-color: rgb(53, 53, 53);
    }

    &:active{
        background-color: rgb(23, 23, 23);
    }
`
export const IngredientsInfo = styled.span`
    display: flex;
    justify-self: center;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Times New Roman', Times, serif ;
`










export const RecipeGeneratorContainer = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    margin-top: 3rem;
    width: 100%;
    max-width: 850px;
    padding: 1.5rem 2rem 1.5rem 2rem;
    background-color: rgba(241, 221, 198, 0.66);
    align-items: center;
    border-radius: 5px;
`
export const RecipeGeneratorTextContainer = styled.div`
    display: flex;
    margin-left: 0.8rem;
    flex-direction: column;
    width: fit-content;
`
export const RecipeGeneratorText = styled.span`
    font-size: 1.6rem;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: 500;
`
export const RecipeGeneratorDesc = styled.span`
    font-size: 0.9rem;
    margin-top: 0.5rem;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    width: fit-content;
`
export const RecipeGeneratorButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`
export const RecipeGeneratorButton = styled.button`
    background-color: rgb(243, 120, 5);
    color: white;
    font-size: 0.85rem;
    margin-left: 1rem;
    border-radius: 20px;
    font-weight: 400;
    border: none;
    padding: 8px 80px 8px 80px;
    transition: background-color 0.3s;

    &:hover{
        background-color: rgb(253, 133, 28);
    }
    &:active{
        background-color: rgb(223, 113, 5);
    }
`