import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Card, Heading } from 'rebass'

import Layout from '../layout'
import UserInfo from '../components/UserInfo/UserInfo'
import Disqus from '../components/Disqus/Disqus'
import PostTags from '../components/PostTags/PostTags'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'
import './post.css'

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter

    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>

        <SEO postPath={slug} postNode={postNode} postSEO />

        <Card
          backgroundImage={`url(${post.cover})`}
          backgroundSize="cover"
          bg="darkgray"
          borderRadius={8}
          mt={80}
          mx="10vw"
          p={4}
          py={6}
        >
          <Heading
            fontFamily="mono"
            fontSize={[5, 6]}
            style={{ color: 'white', textShadow: '1px 1px #484A47' }}
            textAlign="center"
          >
            {post.title}
          </Heading>

          <Heading
            fontFamily="mono"
            fontSize={[4, 5]}
            mt={20}
            style={{ color: 'white', textShadow: '1px 1px #484A47' }}
            textAlign="center"
          >
            {post.date}
          </Heading>
        </Card>

        <div class="markdown-body">
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />

          {/* <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>

            <UserInfo config={config} />
            <Disqus postNode={postNode} /> */}
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        # nextTitle
        # nextSlug
        # prevTitle
        # prevSlug
        slug
        date
      }
    }
  }
`
