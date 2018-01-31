import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <div>
    <Helmet title='404 | Systemcluster' />
    <h1>Page not found</h1>
    <p>It looks like the requested page does not exist. <Link to='/'>Back to the main page</Link></p>
  </div>
)

export default NotFoundPage
