import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../component/header'
import Footer from '../component/footer'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div className="page-container">
    <Header/>
    {children}
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

