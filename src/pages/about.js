import React from 'react'
import Layout from "../layout/site-layout"
import { Container, Row, Col } from 'reactstrap'
import '../style/About.scss'

const About = () => (
  <Layout>
    <Container className="themed-container" fluid="sm">
        <Row>
          <Col xs="6">
            <img src="https://i.gyazo.com/7e30aa97ff545883ffd73f98b3079321.png"/>
          </Col>
          <Col xs="6">
            <h1>A<div className="highlight">bout</div></h1>
            <p>
              Akwaaba! Hello Kings and Queens, my name is Eva Odoom. 
            </p>
            <p>
              As a Ghanaian American self-taught artist, my hands always gravitated toward creating art ever since I can remember. I have a strong love with working with elements such as shape, texture, space, color and value. Passions for creativity grow from a foundation of love represented by my close relationships. Foundationally, my art reflects and gratifies family and the passing of my loved one who fiercely encouraged me in life and beyond. Life is too short to keep my dreams a dream. I took the bold step of transforming them into reality. Hence, this website!
            </p>
            <p>
              Currently, my art includes custom handmade paintings, artwork, and African print masks. Driven by the power of personal ties, I curate personalized pieces upon request. Growing up in Ghana exposed me to rich culture from art to food to language. My early experiences helped me understand how significant the magic of art and beauty that lies in black pride was. This magic is not a trend or a hashtag but rather core self-love and form of identity. My art is inclusive and highlights the African diaspora. Products that finally welcome everyone from all walks of life to the rich culture that I grew up knowing.
            </p>
            <p>
              Now that you got to know me, I hope you love my product as much as I love creating them. By supporting my small black-owned business, you are transforming my dream into reality!
            </p>
            <Row>
              <Col xs="3">
                <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/74517422_887202568346620_2532542046813128212_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=0AZUNIaZh7cAX81TKnw&oh=1df7926c5527b5816c447cfa3a4a990e&oe=5F8336B3"/>
              </Col>
              <Col xs="3">
              <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/74517422_887202568346620_2532542046813128212_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=0AZUNIaZh7cAX81TKnw&oh=1df7926c5527b5816c447cfa3a4a990e&oe=5F8336B3"/>
              </Col>
              <Col xs="3">
              <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/74517422_887202568346620_2532542046813128212_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=0AZUNIaZh7cAX81TKnw&oh=1df7926c5527b5816c447cfa3a4a990e&oe=5F8336B3"/>
              </Col>
              <Col xs="3">
              <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/74517422_887202568346620_2532542046813128212_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=104&_nc_ohc=0AZUNIaZh7cAX81TKnw&oh=1df7926c5527b5816c447cfa3a4a990e&oe=5F8336B3"/>
              </Col>
            </Row>
          </Col>
        </Row>
    </Container>
  </Layout>
)

export default About