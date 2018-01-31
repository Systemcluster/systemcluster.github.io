import React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'

import {headerSizePx} from '../header'
import {footerSizePx} from '../footer'

const MainElement = Styled.main`
  position: relative;
	padding-bottom: 50px;
	margin: 0 auto;
	padding: 0 2rem;
	overflow: visible;
`

const ContentWrap = Styled.div`
	width: 100%;
	box-shadow: inset 0 0 2px 1px rgba(0,0,0,0.12);
	// border: solid 2px #F36170;
  z-index: 100;
  flex-grow: 1;
	flex-shrink: 1;
	flex-basis: content;
	background-color: #fafafa;
	padding-bottom: 2rem;
`

const Content = ({children}) => (
	<ContentWrap id='content'>
		<MainElement id='main' role='main'>
			{children}
		</MainElement>
	</ContentWrap>
)

export default Content
