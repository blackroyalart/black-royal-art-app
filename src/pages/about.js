import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"

// import { useStaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query AnotherQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <Layout site={data.site}>
        hello about me
      </Layout>
    )}
  />
)
