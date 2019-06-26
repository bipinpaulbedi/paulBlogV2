const path = require("path")
const R = require("ramda")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.js`)
    const tagCloudListTemplate = path.resolve(`src/templates/tagCloudList.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    pathForPage
                    tags
                    categories
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const tagAndCategories = []

        result.data.allMarkdownRemark.edges.forEach(
          ({
            node: {
              frontmatter: { categories, tags },
            },
          }) => {
            tagAndCategories.push(categories)
            tagAndCategories.push(...tags)
          }
        )

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: `/${node.frontmatter.pathForPage}`,
            component: blogPostTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              pathForPage: `${node.frontmatter.pathForPage}`,
            },
          })
        })

        R.uniq(tagAndCategories).forEach(t => {
          createPage({
            path: `/tagcloud/${t}`,
            component: tagCloudListTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              tag: t,
            },
          })
        })
      })
    )
  })
}
