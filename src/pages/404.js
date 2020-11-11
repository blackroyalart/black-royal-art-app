import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from "../layout/site-layout"
import vectorArt from '../img/404_vector_art.png';
import '../style/404.scss';

const NotFoundPage = () => (
  <Layout>
    <Container className="themed-container page-not-found" fluid="sm">
      <Row>
        <Col className="vertical-align">
          <p className="not-found-text">
            Page Not Found!
          </p>
        </Col>
        <Col className="vertical-align">
          <img src={vectorArt} className="about-me" alt="about me picture"/>
        </Col>
      </Row>

    </Container>
  </Layout>
)

export default NotFoundPage
