import React from 'react'
import Layout from "../layout/site-layout"
import Hero from "../component/hero"

import aboutMePicture from '../img/home_page/about_me.jpg';
import picture1 from '../img/home_page/image_1.jpg';
import picture2 from '../img/home_page/image_2.jpg';
import picture3 from '../img/home_page/image_3.jpg';

import InstagramFeed from '../component/instagram-feed';

export default function Index() {
  return(
    <>
      <Layout>
        <Hero title="Black Royal Art"/>
        <div className="section">
          <div className="section-image" style={{ backgroundImage: `url(${aboutMePicture})`, marginTop: '5rem'}}/>
          <div className="section-text">
            <h1>Hi, I am <span className="highlight">Eva Odoom.</span></h1>
            <p>
              <a href="/about">Learn more about me and my art.</a>
            </p>
          </div>
        </div>

        <div className="section">
          <div className="section-text left">
            <h1>With art, I <span className="highlight">comfort.</span></h1>
          </div>

          <div className="section-image right" style={{ backgroundImage: `url(${picture1})`, backgroundPosition: '-10em -40em'}}/>
        </div>

        <div className="section">
          <div className="section-image" style={{ backgroundImage: `url(${picture2})`}}/>
          <div className="section-text">
            <h1>With art, I <span className="highlight">love.</span></h1>
          </div>
        </div>

        <div className="section">
          <div className="section-text left">
            <h1>With art, I <span className="highlight">brighten.</span></h1>
          </div>

          <div className="section-image right" style={{ backgroundImage: `url(${picture3})`, backgroundPosition: '-42em -5em'}}/>
        </div>
        <div className="section section-instagram">
          <InstagramFeed/>
        </div>
      </Layout>
    </>
  )
}
