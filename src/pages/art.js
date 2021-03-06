import React from 'react'
import Layout from "../layout/site-layout"
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import '../style/Art.scss'

const Art = ({ data: { arts }}) => {
  return(
    <Layout>
      <Container className="themed-container  art-section" fluid="sm">
        <h1>A<div className="highlight">rt</div></h1>
        <Row>
          {arts.edges.map(({node: art}) => (
              <Col xs="3">
                <h1>{art.title}</h1>
                <Img fluid={art.mainImage.sizes} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Layout>
  )
}

export default Art

export const query = graphql`
query {
  arts: allDatoCmsArtwork {
    edges {
      node {
        id
        title
        description
        mainImage {
          url
          sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
            ...GatsbyDatoCmsSizes
          }
        }
        otherImage {
          url
          sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
}
`