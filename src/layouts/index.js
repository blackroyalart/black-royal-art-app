import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.scss'
import '../style/home.scss'

const Layout = ({ children, site }) => (
  <div className="page-container">
    <Helmet title="Black Royal Art" />
    <div className="Container">
      <div className="Landing">

      </div>
      {children}
    
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

