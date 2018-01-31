import React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'
import Helmet from 'react-helmet'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from "@fortawesome/fontawesome-free-solid"

import Fragment from '../components/fragment'


const work = [
	[`Backend development and architecture for Smartjobr GmbH`, 
		`I joined Smartjobr in the beginning of 2016 to aid the development of internal analytics tools for the planned launch of their mobile app, a smart job agency for freelancers and recruiters based on intelligent tag matching. After an internal restructure I took over the role of the lead backend developer. Responsibilities included the architecture and development of the system backend software as well as its integration.`, 
		`2017`, [`smartjobr.com`], `https://smartjobr.com`, ``],
	[`Influencer Relations Management Software for Le Buzz GmbH i.G.`, 
		`For the inception of the Le Buzz brand I was contracted to develop a web-based influencer management application with the functionality to track growth and activity over a wide range of social media channels. This was realized by utilizing time-proven backend and frontend technologies as well as public APIs to quickly produce a fully-featured product, which is now used by dozens of brands and customers.`,
		`2017`, [`relations.lebuzz.de`], `https://relations.lebuzz.de`, `/images/lebuzz-head.png`],
].reverse()

const ArticleWrap = Styled.div`
	margin: auto -3rem 1rem -3rem;
	// border: 1px solid rgba(0,0,0,0.1);
	padding: 2rem 3rem;
	// border-radius: 0.2rem;
	position: relative;
	overflow: hidden;
	box-shadow: 0 0 2px 1px rgba(0,0,0,0.08);
`
const ArticleTitle = Styled.h2`
	display: inline-block;
	margin-top: 0;
	z-index: 10;
`
const ArticleSubtitle = Styled.div`
  position: relative;
  top: -1.6rem;
  &>.date {
    color: #F36170;
  }
  &>.categories {
    
	}
	z-index: 10;
`
const ArticleContent = Styled.div`
	z-index: 10;
`
const ArticleBackgroundColor = Styled.div`
  background-color: #fcfcfc;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: -20;
`
const ArticleBackground = Styled.div`
  background-image: url(${props => props.url});
  background-size:cover;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  position: absolute;
  top: -5px;
  left: -5px;
  opacity: 0.16;
  z-index: -10;
  -webkit-filter: blur(6px);
  -moz-filter: blur(6px);
  -o-filter: blur(6px);
  -ms-filter: blur(6px);
  filter: blur(6px);
  background-position: center;
`
const LinkIcon = Styled(FontAwesomeIcon)`
	width: 0.9rem !important;
	opacity: 0.7;
	margin: 1px 5px;
`

const IndexPage = () => (
  <Fragment>
		<Helmet title='Work | Systemcluster' />
			<h1>Latest Work</h1>
			<Fragment>
			{
				work
				.map((project, index) => (
					<ArticleWrap key={index}>
						<ArticleBackgroundColor />
						{[project[5]].filter(e=>e&&e.length).map(()=><ArticleBackground url={project[5]} />)}
						<a href={project[4]}><ArticleTitle>{project[0]}</ArticleTitle> <LinkIcon icon={faExternalLinkAlt} /></a>
						<ArticleSubtitle><span className='date'>{project[2]}</span> • <span className='categories'>{project[3].join(', ')}</span></ArticleSubtitle>
						<ArticleContent>
							{project[1]}	
						</ArticleContent>
					</ArticleWrap>
				))
			}
		</Fragment>
		<hr />
  </Fragment>
)

export default IndexPage
