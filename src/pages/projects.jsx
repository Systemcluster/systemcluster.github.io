import React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'
import Helmet from 'react-helmet'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from "@fortawesome/fontawesome-free-solid"

import Fragment from '../components/fragment'


const projects = [
	[`The Impossible Clone`, `Endless Runner 2D game with Java2D.`, `2014`, [`Game`], `https://github.com/Systemcluster/TheImpossibleClone`],
	[`Braintranscriber Brainfuck/Ook! Interpreter`, `Simple interpreter for the Brainfuck esoteric programming language.`, `2014`, [`Programming Language`], `https://github.com/Systemcluster/Braintranscriber`],
	[`Twitter Timeline Auto Update for Chrome`, `Automatically updates the twitter timeline with arriving Tweets.`, `2014`, [`Browser-Addon`], `https://chrome.google.com/webstore/detail/twitter-timeline-auto-upd/ddbjabcmjjifognjcopebcllgpbdjlbm`],
	[`Cleanslate Games Website`, `Webdesign experiment.`, `2015`, [`Webdesign`], `/cleanslategames/`],
	[`Don't Visit - Site Blocker for Chrome`, `Site-blocker extension for productivity enhancement.`, `2015`, [`Browser-Addon`], `https://chrome.google.com/webstore/detail/dont-visit-block-sites/olccdihofjbikcpbejfgipnighnpabai`],
	[`Likes Button in the YouTube Sidebar for Chrome`, `Adds a Link to the Liked Videos playlist to the top of the YouTube sidebar.`, `2015`, [`Browser-Addon`], `https://chrome.google.com/webstore/detail/likes-button-in-the-youtu/ahmdidmhhffpkhgfihmcinmlklpeipjm`],
	[`Likes Button in the YouTube Sidebar for Firefox`, `Port of the Chrome addon with the same name.`, `2017`, [`Browser-Addon`], `https://addons.mozilla.org/de/firefox/addon/youtube-likes-sidebar-button/`],
	[`Elsa C++17/Lua Interface`, `C++ template header-only library for interfacing with Lua and LuaJIT. Work in progress.`, `TBD`, [`C++ Library`], `https://github.com/Systemcluster/Elsa`],
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

const LinkIcon = Styled(FontAwesomeIcon)`
	width: 0.9rem !important;
	opacity: 0.7;
	margin: 1px 5px;
`

const IndexPage = () => (
  <Fragment>
		<Helmet title='Projects | Systemcluster' />
			<h1>Latest Projects</h1>
			<Fragment>
			{
				projects
				.map((project, index) => (
					<ArticleWrap key={index}>
						<ArticleBackgroundColor />
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
