import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Hero from "../component/hero"
import InstagramFeed from "../component/InstagramFeed"


export default () => (
  <StaticQuery
    query={graphql`
      query {
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
  <>
  <Hero title="Black Royal Art"/>
  <Layout site={data.site}>
    
    <div>
      <div className="body">
        <img src="https://i.gyazo.com/4c0a5f665303a483ead995a5758b97bc.jpg"/>
        <div>
          <h1>Hi I am Eva</h1>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Tincidunt morbi aliquet sodales
            curabitur sollicitudin imperdiet
            rhoncus. Ultricies egestas tellus
            risus erat amet in elit.
          </p>
        </div>
      </div>
      <InstagramFeed/>
    </div>
  </Layout></>
     )}
   />
)
