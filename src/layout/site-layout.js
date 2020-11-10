import React from 'react'
import PropTypes from 'prop-types'

import Header from '../component/header'
import Footer from '../component/footer'
import '../style/mobile.scss'
import '../style/index.scss'

import favicon from '../img/favicon.ico'
import Helmet from 'react-helmet'

const Layout = ({ children, site }) => (
  <div className="page-container">
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header/>
    <div className="content">
      {children}
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

