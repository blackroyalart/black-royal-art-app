import React from 'react'
import { Row, Col } from 'reactstrap';
import '../style/InstagramFeed.scss';
import { InstagramPosts } from '../api/instagram-api'
class InstagramFeed extends React.Component {
  render() {
    return(
      <div className="instagram-feed">
        <h1>
          Check out my <span className="highlight">art</span>
        </h1>
        <Row>
          { InstagramPosts.map((post) =>
            <Col xs="3">
              <div className="instagram-post">
                <img src={post.imageUrl} alt={post.name}/>
                <div className="instagram-link">
                  <a href={post.postUrl} className="highlight">
                    View on Instagram ⟶
                  </a>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}
export default InstagramFeed;