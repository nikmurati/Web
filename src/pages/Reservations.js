import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Form1 from '../Form';


const Reservations = ()=>{
    return (
    <>
    <Hero hero="reservationsHero">
     <Banner title = "reserve now" subtitle = "reserve the rooms with different prices">
          <Link to = "/reservations" className = "btn-primaryy" style = {{color:'red'}}>
          click for reserve
          </Link>
          </Banner>
          
    
    </Hero>
    <Form1 />
    </>
    )
};
export default Reservations;