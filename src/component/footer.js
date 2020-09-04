import React from 'react'
import { Row, Col } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import '../style/Footer.scss'

const Footer = () => (
  <div className="footer">
    <Row>
      <Col xs="6">
        <h2>Black Royal Art</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Sapien eget mi proin sed libero enim.
        </p>
      </Col>
      <Col xs="3">
        <h2>Shop</h2>
        <p><a href="/art">Art</a></p>
        <p><a href="/shop">Shop</a></p>
        <p><a href="/#!/cart">Cart</a></p>
      </Col>
      <Col xs="3">
        <h2>Social</h2>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Social Media #3</p>
      </Col>
    </Row>
  </div>
)

export default Footer