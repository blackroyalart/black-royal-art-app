import React from 'react'
import Layout from "../layout/site-layout"
// import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image'
import { graphql } from "gatsby"

const Art = ({ data: { arts }}) => {
  return(
    <Layout>
      <h1>A<div className="highlight">rt</div></h1>
      {arts.edges.map(({node: art}) => (
          <div>
            <h1>{art.title}</h1>
            <Img sizes={art.mainImage.sizes} />
          </div>
        ))
      }
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