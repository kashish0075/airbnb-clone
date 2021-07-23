import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import {Button} from '@material-ui/core';
import destinations from './Destinations';

function SearchPage(){
    return (
        <div className='searchpage'>
            <div className='searchpage_info'>
                <p>62 stays . 26 august to 30 august
                    . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div>
             
             {destinations.map((destination)=>
             {
                 return ( <SearchResult
                 key = {destination.id}
                img = {destination.img}
                location = {destination.location}
                title = {destination.title}
                description = {destination.description}
                star = {destination.star}
                price = {destination.price}
                total = {destination.total}
                />
                 )
             }
             )}

            </div>
    )
}

export default SearchPage;