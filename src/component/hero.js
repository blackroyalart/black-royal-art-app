import React from 'react'
import vectorArt from '../img/vector_art.png';

const Hero = ({page, title}) => {
  const style = {
    width: "100vw",
    height: "90vh",

    display: 'flex',

    justifyContent: 'center',
    textAlign: 'center',
    
    backgroundColor: '#e9e4b1',
    overflow: 'hidden',
  }

  const landingStyle = {
    height: '100%',
    marginTop: '5.5em'
  }

  return(
    <div style={ style }>
      <img src={vectorArt} style={landingStyle} className="landingImage" alt="Black Royal Art landing page"/>
    </div>
  )
}

export default Hero;