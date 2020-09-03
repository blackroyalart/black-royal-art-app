import React from 'react'
import landingPicture from '../img/home_page/landing_page.png';
import vectorArt from '../img/vector_art.png';

const Hero = ({page, title}) => {
  const style = {
    width: "100vw",
    height: "90vh",

    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
    backgroundColor: '#e9e4b1'
  }

  return(
    <div style={ style }>
      <img src={vectorArt}/>
    </div>
  )
}

export default Hero;