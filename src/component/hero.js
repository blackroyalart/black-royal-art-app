import React from 'react'
import vectorArt from '../img/vector_art.png';

const Hero = ({page, title}) => {
  const style = {
    backgroundColor: '#e9e4b1',
  }

  return(
    <div style={ style }>
      <img src={vectorArt} className="landingImage" alt="Black Royal Art landing page"/>
    </div>
  )
}

export default Hero;