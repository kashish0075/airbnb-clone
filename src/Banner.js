import { Button } from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import './Banner.css';
import Search from './Search.js';
import { useHistory } from 'react-router-dom';

function Banner(){
    const history = useHistory();
    const [show,setShow] = useState(false);

    return (
        <div className='banner'>
            <div className='banner_search'>
               {show && <Search/>}
                <Button variant='outlined' onClick={() => setShow(!show)}>
                    {!show ? "Search Dates" : "Hide"}
                </Button>
            </div>
           <div className='banner_info'>
               <h1>Get out and strech your
                   imagination
               </h1>
               <h5>
                   Plan a different kind of
                   gateway to uncover the hidden
                   gems near you.
               </h5>
               <Button variant='outlined' onClick={()=>history.push('/search')}>
                   Explore Nearby
                </Button>
           </div>
        </div>
    )
}

export default Banner;