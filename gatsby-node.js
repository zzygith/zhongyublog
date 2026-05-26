const path = require(`path`)
const { loadResearchItems } = require(`./src/utils/research-data`)

const researchDir = path.resolve(__dirname, `research`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type ResearchItem implements Node {
      order: Int!
      date: String!
      dateSort: String!
      title: String!
      slug: String!
      url: String!
      image: String!
      summary: String!
      introduction: String!
    }
  `)
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  loadResearchItems(researchDir).forEach(item => {
    createNode({
      ...item,
      id: createNodeId(`ResearchItem-${item.slug}`),
      parent: null,
      children: [],
      internal: {
        type: `ResearchItem`,
        contentDigest: createContentDigest(item),
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { data, errors } = await graphql(`
    query Articles {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/portfolio/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })

  loadResearchItems(researchDir).forEach(item => {
    actions.createPage({
      path: "/research/" + item.slug,
      component: path.resolve("./src/templates/research-details.js"),
      context: { slug: item.slug, image: item.image },
    })
  })
}
