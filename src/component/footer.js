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
        <div className="footer-links">
          <p className="footer-link">
            <a href="/art">Art</a>
          </p>
          <p className="footer-link">
            <a href="/shop">Shop</a>
          </p>
          <p className="footer-link">
            <a href="/#!/cart" className="footer-link">Cart</a>
          </p>
        </div>
      </Col>
      <Col xs="3">
        <p>
          Follow us on Instagram @blackroyalart
        </p>
        <p>
          Site design and graphics done by the Levare Team.
        </p>
      </Col>
    </Row>
  </div>
)

export default Footer