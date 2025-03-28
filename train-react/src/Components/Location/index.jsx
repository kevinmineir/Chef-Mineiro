import {react} from 'react';

export function Travel({img,country,location,link,date,desc}){

    return(
        <>
        <div className='travel'>
            <img className='travel-img' src={img.src} alt={img.alt} />      
            <div className='travel-info-container'>
            <span className='travel-country'>{country} <a className='travel-link' href={link}>View on Google Maps</a></span>
            <span className='travel-location'>{location}</span>
            <span className='travel-date'>{date}</span>
            <span className='travel-desc'>{desc}</span>
        </div>
        </div>
        </>
    )
}