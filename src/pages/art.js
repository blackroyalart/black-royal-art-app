import React from 'react'
import Layout from "../layout/site-layout"
import { Container, Row, Col } from 'reactstrap';

const Art = () => (
  <Layout>
    <Container>
      <Row>
        <Col xs="3"><img src="https://i.gyazo.com/ed886157e9f217e1dbdea0696f5b9441.jpg"/></Col>
        <Col xs="3"><img src="https://i.gyazo.com/ed886157e9f217e1dbdea0696f5b9441.jpg"/></Col>
        <Col xs="3"><img src="https://i.gyazo.com/ed886157e9f217e1dbdea0696f5b9441.jpg"/></Col>
        <Col xs="3"><img src="https://i.gyazo.com/ed886157e9f217e1dbdea0696f5b9441.jpg"/></Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
    </Container>
  </Layout>
)

export default Art