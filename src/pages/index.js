import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layout/site-layout"
import Hero from "../component/hero"
// import InstagramFeed from "../component/instagram-feed"

import { Container, Row, Col } from 'reactstrap'

// import Img from 'gatsby-image'
import aboutMePicture from '../img/home_page/about_me.jpg';
import '../style/theme.scss';

export default function Index() {
  return(
    <>
      <Layout>
        <Hero title="Black Royal Art"/>
        <div className="section">
          <div className="section-image" style={{ backgroundImage: `url(${aboutMePicture})`}}/>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lectus orci. Duis ultricies velit in odio mattis, nec semper.
            </p>
          </div>

          <div className="section-image right" style={{ backgroundImage: `url('https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/116246982_2354994268129898_4957744808134394923_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=lN25dTzlGekAX_cru5A&oh=6d770b62d168d6b8df7694b9ae1e2f47&oe=5F540EDB')`}}/>
        </div>

        <div className="section">
          <div className="section-image" style={{ backgroundImage: `url('https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/64248611_423612378226916_7276536199394248878_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=l3-3atLo3DcAX_9N-5A&_nc_tp=18&oh=27884861141104fccac2c4cf01c47f20&oe=5F7A3818')`}}/>
          <div className="section-text">
            <h1>With art, I <span className="highlight">love.</span></h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lectus orci. Duis ultricies velit in odio mattis, nec semper.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="section-text left">
            <h1>With art, I <span className="highlight">brighten.</span></h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lectus orci. Duis ultricies velit in odio mattis, nec semper.
            </p>
          </div>

          <div className="section-image right" style={{ backgroundImage: `url('https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/57488378_1294037424095351_8604289678034662113_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=T7snD2dqce0AX-Mm9hy&_nc_tp=18&oh=a90cd4ed5c631a82421a734f29c47b07&oe=5F7C61AC')`}}/>
        </div>
        {/* <InstagramFeed/> */}
      </Layout>
    </>
  )
}
