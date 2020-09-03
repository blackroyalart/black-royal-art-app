import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layout/site-layout"
import Hero from "../component/hero"
import InstagramFeed from "../component/instagram-feed"

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
          <div className="landing-image"/>
          <Container className="themed-container" fluid="sm">
            <Row className="about-me">
              <Col xs="6"></Col>
              <Col xs="6">
                <h1>Hi, I am <span className="highlight">Eva Odoom</span></h1>
                <p>
                  <a href="/about">Learn more about me and my art.</a>
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container className="themed-container" fluid="sm">
            <Row className="about-me">
              <Col xs="6">
                <h1>With my art, I like to <span className="highlight">comfort.</span></h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lectus orci. Duis ultricies velit in odio mattis, nec semper.
                </p>
              </Col>
              <Col xs="6"></Col>
            </Row>
          </Container>
          {/* <div className="landing-image"/> */}
        </div>

        <Container className="themed-container" fluid="sm">
          <Row className="about-me">
            <Col xs="6"></Col>
            <Col xs="6">
              <h1>With my art, I like to <span className="highlight">love.</span></h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lectus orci. Duis ultricies velit in odio mattis, nec semper.
              </p>
            </Col>
          </Row>
          <div>
          </div>
        </Container>

        <Container className="themed-container" fluid="sm">
          <Row className="about-me">
            <Col xs="6">
              <h1>With my art, I like to <span className="highlight">beautify.</span></h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lectus orci. Duis ultricies velit in odio mattis, nec semper.
              </p>
            </Col>
          </Row>
          
        </Container>
        <InstagramFeed/>
      </Layout>
    </>
  )
}
