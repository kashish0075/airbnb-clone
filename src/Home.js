import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import './Card.css';
import {details} from './Detail.js';
import {details2} from './Detail.js';

function createCard(detail){
   return (<Card
     key = {detail.id}
     img = {detail.src}
     title = {detail.title}
     description = {detail.description}
   />)
}

function Home(){
    return (
      <div className='home'>
       <Banner/>
       
       <div className= 'home_section'>
         <div className='card'>
             <img src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320" alt="" />
             <div className="card_info">
                 <h2>
                     Outdoors gataways
                 </h2>
             </div>
         </div>

         <div className='card'>
             <img src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320" alt="" />
             <div className="card_info">
                 <h2>
                     Unique stays
                 </h2>
             </div>
         </div>

         <div className='card'>
             <img src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320" alt="" />
             <div className="card_info">
                 <h2>
                     Entire homes
                 </h2>
             </div>
         </div>

         <div className='card'>
             <img src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=320" alt="" />
             <div className="card_info">
                 <h2>
                     Pets allowed
                 </h2>
             </div>
         </div>
       </div>
       
       <div className= 'home_section'>
         {details.map(createCard)}
       </div>
       
       <div className= 'home_section'>
         {details2.map((detail2)=>
         {
            return (<Card
                key = {detail2.id}
                img = {detail2.src}
                title = {detail2.title}
                description = {detail2.description}
              />)
         }
         )}
       </div>

      </div>

    )
}

export default Home;