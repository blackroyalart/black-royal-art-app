import React from 'react'
import PropTypes from 'prop-types'

import Header from '../component/header'
import Footer from '../component/footer'
import '../style/mobile.scss'
import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div className="page-container">
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

