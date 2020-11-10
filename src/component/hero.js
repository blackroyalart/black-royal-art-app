import React from 'react'
import vectorArt from '../img/vector_art.png';

const Hero = ({page, title}) => {
  const style = {
    // marginTop: '-1rem',
    // display: 'flex',

    // justifyContent: 'center',
    // textAlign: 'center',
    
    backgroundColor: '#e9e4b1',
    // overflow: 'hidden',
  }

  const landingStyle = {
    // width: '50%',
    // zIndex: '1'
  }

  return(
    <div style={ style }>
      <img src={vectorArt} style={landingStyle} className="landingImage" alt="Black Royal Art landing page"/>
    </div>
  )
}

export default Hero;