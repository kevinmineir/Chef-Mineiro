import { react } from 'react';

export function Lista(props) {
    return (
        <>
            <ul className='Lista-content'>
                <li className='List-item'>{props.ingredient}</li>
             </ul>   
           
      </>
    )                
}