import {react} from 'react';

import { Travelheader } from '../header/index';
import { Travel } from "../Location/index";

export function TravelJournal(){
    return(
        <>
        <Travelheader/>
        
        <Travel 
        link="" 
        location="Mount Fuji" 
        country="Japan" 
        date="12 Mar, 2025 - 24 Mar, 2025" 
        desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists." 
        img={{
            src:"https://th.bing.com/th/id/OIP.K4k0S97ooL5HlCbVVx6wXgHaE8?w=288&h=192&c=7&r=0&o=5&pid=1.7}",
            alt:"Mount Fuji"
        }}
        />

        <Travel 
        link="" 
        location="Sydney Opera House" 
        country="Australia" 
        date="12 Set, 2025 - 24 Set, 2025" 
        desc="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famoust and distinctive buildings." 
        img={{
            src:"https://th.bing.com/th/id/OIP.5yBUJVeuYbcYHPbFJqXkfwHaE4?w=358&h=193&c=7&r=0&o=5&pid=1.7",
            alt:"Sydney Opera House"
        }}
        />

        <Travel 
        link="" 
        location="Iguaçu Falls" 
        country="Brazil - Argentine" 
        date="12 Jan, 2025 - 24 Jan, 2025" 
        desc="The Iguaçu Falls are one of the largest waterfall systems in the world, located on the border between Brazil And Argentina. The falls consist of around 275 cascades, with heights reaching up to 82 meters. The most famous is the Devil's Troat, a massive U-shaped waterfall about 80 meters high and 150 meters wide." 
        img={{
            src:"https://th.bing.com/th/id/OIP.h1h7pKuVR8vQQhn4cfebpQHaE7?w=270&h=180&c=7&r=0&o=5&pid=1.7",
            alt:"Iguaçu Falls"
        }}
        />

        </>
        
    )
}