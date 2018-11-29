import React from 'react'
import { graphql } from 'gatsby'
import PostLink from '../../components/post-link'
import Layout from '../../components/layout'
import styles from './blog.module.css'

console.log(styles)
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <div key={edge.node.id} className={styles.blogPostContainer}>
        <PostLink post={edge.node} />
      </div>
    ))

  return <Layout>{Posts}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
