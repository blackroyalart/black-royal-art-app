import React from 'react'
import landingPicture from '../img/placeholder_landing.jpg'; 

const Hero = ({page, title}) => {
  const style = {
    width: "100vw",
    height: "90vh",

    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    backgroundImage: `url(${landingPicture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }

  return(
    <div style={ style }>
      <h1>{title}</h1>
    </div>
  )
}

export default Hero;