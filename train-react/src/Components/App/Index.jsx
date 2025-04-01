import {react} from 'react';

import { Travelheader } from '../header/index';
import { Travel } from "../Location/index";
import { travelData } from '../Location/data';

export function TravelJournal(){

    const travelElements = travelData.map((info) => {
        return (
            <Travel
            key = {info.id}
            {...info} 
            />
        )
    }
    )

    return(
        <>
        <Travelheader/>
        
        {travelElements}

        </>
        
    )
}