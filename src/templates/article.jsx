import React from 'react'
import Styled from 'styled-components'
import Helmet from 'react-helmet'
import Fragment from '../components/fragment'


const ArticleWrap = Styled.div`

`
const ArticleTitle = Styled.h1`

`
const ArticleSubtitle = Styled.div`
  position: relative;
  top: -1.6rem;
  &>.date {
    color: #F36170;
  }
  &>.categories {
    
  }
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
              <ArticleSubtitle><span className='date'>{(new Date(frontmatter.date)).toISOString().slice(0,-14)}</span> • <span className='categories'>{frontmatter.categories.split(' ').join(', ')}</span></ArticleSubtitle>
              <ArticleContent dangerouslySetInnerHTML={{__html: html}} />
          </ArticleWrap>
          <hr />
          
        </Fragment>
    )
}

export const pageQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      excerpt
      frontmatter {
        template
        date
        title
        categories
      }
    }
  }
`;
