import React from 'react'
import { Link } from 'gatsby'
import { Card, Heading, Text } from 'rebass'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: white;
  padding: 5px;
  text-decoration: none;

  &:link,
  &:visited {
    color: white;
  }
  &:hover {
    color: #8ef9f3;
  }
`

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        id: postEdge.node.id,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <StyledLink to={post.path} key={post.title}>
            <Card
              backgroundImage={`url(${post.cover})`}
              backgroundSize="cover"
              bg="darkgray"
              borderRadius={8}
              m="2vh 10vw"
              p={4}
              py={6}
            >
              <Heading
                fontFamily="mono"
                fontSize={[5, 6]}
                style={{ color: 'inherit', textShadow: '1px 1px #484A47' }}
                textAlign="center"
              >
                {post.title}
              </Heading>

              <Text
                fontFamily="mono"
                mt={20}
                style={{ color: 'inherit', textDecoration: 'none', textShadow: '1px 1px #484A47' }}
                textAlign="center"
              >
                {post.description || post.excerpt}
              </Text>
            </Card>
          </StyledLink>
        ))}
      </div>
    )
  }
}

export default PostListing
