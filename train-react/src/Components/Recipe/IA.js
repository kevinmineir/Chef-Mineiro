import { InferenceClient } from '@huggingface/inference'

const apiKey = import.meta.env.VITE_API_KEY;
const SYSTEM_PROMPT = `  
    Você é um assitente que vai receber uma lista de ingredientes que o usuário tem e vai sugerir uma receita de algo que ele pode fazer com esses ingredientes
    A receita pode incluir ingredientes adicionais , porém tente não incluir muitos ingredientes novos
    Se o usuário não disser nenhum ingrediente para criar uma refeição , retorne "Adicione Ingredientes Reais"
    Se entre os ingredientes tiver "João" (podendo ser todo maiusculo, minusculo, sem acento, etc) retorne somente "Deguste Jão a noite toda"
    Não coloque nenhuma observação no final
    Formate Em MarkDown
    **RESPONDA SEMPRE NA LINGUAGEM PORTUGUES BRASIL**
`   

const hf = new InferenceClient(apiKey);

export async function GetRecipe(Ingredients) {    
    const IngredientsString = Ingredients.join(", ")
    try{
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
            {
                role: "system",
                content: SYSTEM_PROMPT,
            },
            {
                role: "user",
                content: `
                Eu tenho esses ingredientes : ${IngredientsString}. Por favor me diga uma receita que vocé recomendaria para eu fazer !
                `,
            },
            ] ,
            max_tokens:2820 ,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error(error.message)
        return error.message
    }
}