import React from 'react'
import { Row, Col } from 'reactstrap';
import '../style/InstagramFeed.scss';

class InstagramFeed extends React.Component {

  render() {
    return(
      <div className="instagram-feed">
        <h1>
          Check out my <span className="highlight">art</span>
        </h1>
        <Row>
          <Col xs="3">
            <div className="instagram-post">
              <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/91751217_575392699850623_773188962703452609_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=PhK83DRER20AX8yLKNo&tp=16&oh=57c419d8ec4f0d75c264d27579b85b0e&oe=5FA6E31E"/>
              <div className="instagram-link">
                <a href="https://www.instagram.com/p/B-aFT19JRbn/" className="highlight">
                  View on Instagram ⟶
                </a>
              </div>
            </div>
          </Col>
          <Col xs="3">
            <div className="instagram-post">
              <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/91751217_575392699850623_773188962703452609_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=PhK83DRER20AX8yLKNo&tp=16&oh=57c419d8ec4f0d75c264d27579b85b0e&oe=5FA6E31E"/>
              <div className="instagram-link">
                <a href="https://www.instagram.com/p/B-aFT19JRbn/" className="highlight">
                  View on Instagram ⟶
                </a>
              </div>
            </div>
          </Col>
          <Col xs="3">
            <div className="instagram-post">
              <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/91751217_575392699850623_773188962703452609_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=PhK83DRER20AX8yLKNo&tp=16&oh=57c419d8ec4f0d75c264d27579b85b0e&oe=5FA6E31E"/>
              <div className="instagram-link">
                <a href="https://www.instagram.com/p/B-aFT19JRbn/" className="highlight">
                  View on Instagram ⟶
                </a>
              </div>
            </div>
          </Col>
          <Col xs="3">
            <div className="instagram-post">
              <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/91751217_575392699850623_773188962703452609_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=PhK83DRER20AX8yLKNo&tp=16&oh=57c419d8ec4f0d75c264d27579b85b0e&oe=5FA6E31E"/>
              <div className="instagram-link">
                <a href="https://www.instagram.com/p/B-aFT19JRbn/" className="highlight">
                  View on Instagram ⟶
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
export default InstagramFeed;