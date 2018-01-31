import React from 'react'
import Styled from 'styled-components'
import Helmet from 'react-helmet'
import Fragment from '../components/fragment'

const ArticleWrap = Styled.div`

`
const ArticleTitle = Styled.h1`

`
const ArticleContent = Styled.div`

`

export default function Template({data}) {
    const {markdownRemark} = data;
    const {frontmatter, html} = markdownRemark;

    return (
		<Fragment>
          <Helmet title={`${frontmatter.title} | Systemcluster`} />
			<ArticleWrap>
				<ArticleTitle>{frontmatter.title}</ArticleTitle>
				<ArticleContent dangerouslySetInnerHTML={{__html: html}} />
			</ArticleWrap>
		</Fragment>
    )
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      excerpt
      frontmatter {
        date
        template
        date
        title
        categories
      }
    }
  }
`;
