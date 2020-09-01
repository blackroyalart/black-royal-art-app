exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDatoCmsProduct {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)
  data.allDatoCmsProduct.edges.forEach(edge => {
    const {name, id} = edge.node
    actions.createPage({
      path: name,
      component: require.resolve(`./src/layouts/product-detail.js`),
      context: { 
        slug: name,
        id: id
      },
    })
  })
}

// edges {
//   node {
//     id
//     name
//     price
//     image {
//       url
//       sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
//         ...GatsbyDatoCmsSizes
//       }
//     }
//   }
// }