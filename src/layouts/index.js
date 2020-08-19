import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div className="page-container">
    <Helmet title="Black Royal Art" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div>
              <Link data-text="shop" to="/shop">
                Shop
              </Link>
              <Link data-text="art" to="/art">
                Art
              </Link>
              <Link data-text="about" to="/about">
                About
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      <div className="Landing">

      </div>
      <div className="Wrap" >
        <div className="page-container">
        {children}
        </div>

      </div>
        
    </div>
    <div className="Footer">
      Footer here
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

