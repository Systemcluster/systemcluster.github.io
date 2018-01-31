import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Styled from 'styled-components'

import Header from '../components/header'
import Content from '../components/content'
import Fragment from '../components/fragment'
import Footer from '../components/footer'

require('./code.css')
require('./fonts.css')

const PageWrap = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  
  /* fix for printing issues */
  @media print {
    display: block;
  }
`

const TemplateWrapper = ({children, data}) => (
  <PageWrap>
    <Helmet
      title="Systemcluster"
      meta={[
        { name: 'author', content: 'Christian Sdunek' },
        { name: 'keywords', content: 'systemcluster, christian sdunek, programming, development, game dev' },
        { name: 'charset', content: 'utf8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: "msapplication-config", content: "browserconfig.xml" },
        { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
        { httpEquiv: 'expires', content: '86400' },
        { httpEquiv: 'last-modified', content: `${Date.now().toString()}` }
      ]}
    />
    <Header />
    <Content>
      {children()}
    </Content>
    <Footer />
  </PageWrap>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
