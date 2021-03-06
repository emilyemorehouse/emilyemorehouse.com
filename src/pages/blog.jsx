import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Heading } from 'rebass'

import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import Layout from '../layout'
import config from '../../data/SiteConfig'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const postEdges = data.allMarkdownRemark.edges

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />

        <Heading mt={80} mb={40} fontFamily="mono" fontSize={[5, 6]} textAlign="center">
          Blog Posts
        </Heading>

        <PostListing postEdges={postEdges} />
      </Layout>
    )
  }
}

export default Blog

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 2000, sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
