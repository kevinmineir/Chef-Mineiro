import Markdown from 'react-markdown'


export function Recipe(props){   
    const styles = {
        display:"flex",
        flexDirection:"column",
        justifySelf:"Center",
        fontSize: "1.25rem",
        lineHeight:"28px",
        alingSelf:"Center",
        marginLeft:"1rem",
        maxWidth:"60rem"
    }
    const styles2 = {
        fontSize: "1.5rem",
        marginTop:"1rem",
        fontWeight:"bold",
        marginLeft:"1rem"
    }
    if (props.ShowReceita === true) {
    return (
        <>
        <div style={styles2}>Chef Mineiro Recomenda: </div>
        <div style={styles}>
            <Markdown>{props.Receita}</Markdown>
        </div>
        </>
        )
    }
    else{
        return undefined
    }
}