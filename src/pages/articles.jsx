import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Styled from 'styled-components'

import Fragment from '../components/fragment'

const ArticleWrap = Styled.div`
	margin: auto -3rem 1rem -3rem;
	// border: 1px solid rgba(0,0,0,0.1);
	padding: 2rem 3rem;
	// border-radius: 0.2rem;
	position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px 1px rgba(0,0,0,0.12);
`
const ArticleTitle = Styled.h2`
	display: inline-block;
  margin-top: 0;
  color: #fcfcfc;
`
const ArticleSubtitle = Styled.div`
  position: relative;
  top: -1.6rem;
  color: #fcfcfc;
  &>.date {
    color: #F36170;
  }
  &>.categories {
    
  }
`
const ArticleContent = Styled.div`
  color: #fcfcfc;
`
const ArticleBackgroundColor = Styled.div`
  // background-color: #fcfcfc;
  background-color: #272822;
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

export default ({data}) => {
	const { edges: posts } = data.allMarkdownRemark
	return (
		<Fragment>
			<Helmet title='Articles | Systemcluster' />
			<h1>Latest Articles</h1>
			<Fragment>
			{
				posts
				.filter((post) => post.node.frontmatter.template === 'article')
				.map((post) => (
					<ArticleWrap key={post.node.id}>
            <ArticleBackgroundColor />
            {[post.node.frontmatter.coverimage].filter(ci=>ci && ci.trim().length>1)
                .map(()=><ArticleBackground url={post.node.frontmatter.coverimage} />)
            }
						<Link to={post.node.frontmatter.path}><ArticleTitle>{post.node.frontmatter.title}</ArticleTitle></Link>
						<ArticleSubtitle><span className='date'>{(new Date(post.node.frontmatter.date)).toISOString().slice(0,-14)}</span> • <span className='categories'>{post.node.frontmatter.categories.split(' ').join(', ')}</span></ArticleSubtitle>
						<ArticleContent>
							{post.node.excerpt}	
						</ArticleContent>
					</ArticleWrap>
				))
			}
			</Fragment>
      <hr />
		</Fragment>
	)
}

export const pageQuery = graphql`
  query ArticleListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            template
            date
			path
			categories
			coverimage
          }
        }
      }
    }
  }
`;
