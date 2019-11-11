import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Location from '../components/Footer';

function Home(){
    return(
    <>
      <Hero >
          <Banner title = "luxorious rooms" subtitle = "deluxe rooms starting at $299">
            <Link to = "/rooms" className = "btn-primaryy">
          our rooms
            </Link>
          </Banner>
    </Hero>
    <Services />
    {/* <FeaturedRooms /> */}
    <Location />
    
   
    </>
    )
}

export default Home;
