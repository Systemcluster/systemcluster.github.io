import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faEnvelope, faKey} from '@fortawesome/fontawesome-free-solid'
import {faGithub, faBitbucket} from '@fortawesome/fontawesome-free-brands'
import Styled from 'styled-components'

export const footerSizePx = 45;
export const footerSize = `${footerSizePx}px`;

const FooterElement = Styled.footer`
  display: flex;
  position: relative;
  background-color: #fefefe;
  overflow: hidden;
  height: ${footerSize};
  z-index: 5;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: ${footerSize};
  justify-content: center;
  align-items: center;
`

const FooterLink = Styled.span`
  margin: auto 10px;
  line-height: ${footerSize};
  vertical-align: middle;
`

const Footer = () => (
  <FooterElement id='footer' role='footer'>
    <FooterLink><Link to='/contact' activeStyle={{color:'grey'}}><FontAwesomeIcon icon={faEnvelope} /></Link></FooterLink>
    <FooterLink><a href='//github.com/systemcluster'><FontAwesomeIcon icon={faGithub} /></a></FooterLink>
    <FooterLink><a href='//bitbucket.com/systemcluster'><FontAwesomeIcon icon={faBitbucket} /></a></FooterLink>
    <FooterLink><a href='//keybase.io/systemcluster'><FontAwesomeIcon icon={faKey} /></a></FooterLink>
  </FooterElement>
)

export default Footer
