import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layout/index"
import Hero from "../component/hero"

// import InstagramFeed from "../component/instagram-feed"
import { Container, Row, Col } from 'reactstrap'

// import Img from 'gatsby-image'
import aboutMePicture from '../img/home_page/about_me.jpg';

import '../style/home.scss'

export default function Index() {
  return(
    <>
      <Layout>
        <Hero title="Black Royal Art"/>
        
        <Container className="themed-container" fluid="sm">
          <Row className="about-me">
            <Col xs="6">
              <img src={aboutMePicture} />
            </Col>
            <Col xs="6">
              <h1>Hi I am Eva Odoom</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis risus. Cras nec libero volutpat, 
                tempor leo cursus, condimentum ipsum. Quisque quis est 
                nec enim mollis convallis nec ac felis. Donec libero risus, 
                tristique a felis consectetur, dignissim vestibulum urna. 
                Sed ac magna fermentum, condimentum felis pretium, tempor arcu. 
                Cras orci felis, imperdiet quis nibh et, convallis aliquam enim. 
                Suspendisse condimentum massa quis eros mattis, eu lacinia urna 
                sagittis. Mauris cursus sapien ut libero tristique suscipit.
              </p>
            </Col>
          </Row>
        </Container>
        {/* <InstagramFeed/> */}
      </Layout>
    </>
  )
}
