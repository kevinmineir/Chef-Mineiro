import {react} from 'react';

export function Travel(props){

    return(
        <>
        <div className='travel'>
            <img className='travel-img' src={props.img.src} alt={props.img.alt} />      
            <div className='travel-info-container'>
            <span className='travel-country'>{props.country} <a className='travel-link' href={props.link}>View on Google Maps</a></span>
            <span className='travel-location'>{props.location}</span>
            <span className='travel-date'>{props.date}</span>
            <span className='travel-desc'>{props.desc}</span>
        </div>
        </div>
        </>
    )
}