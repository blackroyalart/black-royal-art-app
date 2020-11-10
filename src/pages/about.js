import React from 'react'
import Layout from "../layout/site-layout"
import { Container, Row, Col } from 'reactstrap'
import '../style/About.scss'
import aboutMePicture from '../img/home_page/image_3.jpg';

const About = () => (
  <Layout>
    <Container className="themed-container" fluid="sm">
        <Row>
          <Col xs="6">
            <h1>
              A<div className="highlight">bout Me</div>
            </h1>
            <p>
              Akwaaba! Hello Kings and Queens, my name is Eva Odoom. I am a Ghanaian Ameerican
              self-taught artist and am highly motivated by my culture and personal ties.
            </p>
            <p>
              My hands have always gravitated towards creating art ever since I can remember. I have 
              a strong love for working with elements such as shape, texture, space, color and value. 
              Passions for creativity grow from a foundation of love represented by my close relationships.
            </p>
            <p className="highlight-text">
              &emsp;&emsp;Foundationally, my art reflects and gratifies family and the passing of my 
              loved one who fiercely encouraged me in life and beyond.
            </p>
            <p>
              Growing up in Ghana exposed me to rich culture from art to food to language. My early 
              experiences helped me understand how significant the magiic of art and beauty that lies in 
              black pride was.
            </p>
            <p className="highlight-text">
              &emsp;&emsp;This magic is not a trend or a hashtag but rather core self-love and form of 
              identity.
            </p>
            <p>
              My art is inclusive and highlights the African diaspora. Products that finally welcome 
              everyone from all walks of liife to the rich culture that I grew up knowing. Currently, my 
              art includes custom handmade paintings, artwork and African print masks. Driven by the power 
              of personal ties, I curate personalized pieces upon request.
            </p>
            <p>
              Now that you got to know me, I hope you love my product as much as I love creating them. By 
              supporting my small black-owned business, you are transforming my dream into reality!
            </p>
          </Col>
          <Col xs="6">
            <img src={aboutMePicture} className="about-me" alt="about me picture"/>
          </Col>
        </Row>
    </Container>
  </Layout>
)

export default About