// import { useStaticQuery, graphql } from "gatsby"

// // export const data = useStaticQuery(graphql`
// //   query {
// //     products: allDatoCmsProduct {
// //       edges {
// //         node {
// //           id
// //           name
// //           price
// //           image {
// //             url
// //             sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
// //               ...GatsbyDatoCmsSizes
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
// // `)

// // export const currentPayoutBalanceQuery = (payee_type, payee_id) => {
// //   return `{
// //       payoutBalance(payeeId: ${payee_id}, payeeType: "${payee_type}")
// //     }
// //   `
// // }

// // export const query = (requestedResource) => {
// //   return useStaticQuery(graphql`${requestedResource}`)
// // }

// export function getProducts() {
//   useStaticQuery(graphql`
//     query allShopProducts {
      
//         allProducts: allDatoCmsProduct {
//           edges {
//             node {
//               id
//               name
//               price
//               image {
//                 url
//                 sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
//                   ...GatsbyDatoCmsSizes
//                 }
//               }
//             }
//           }
//         }
      

//         paintings: allDatoCmsProduct(filter: {productType: {eq: "painting"}}) {
//           edges {
//             node {
//               id
//               name
//               price
//               image {
//                 url
//                 sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
//                   ...GatsbyDatoCmsSizes
//                 }
//               }
//             }
//           }
//         }
      
//     }
//   `)
// }
// //   return query(`
// //     query allProducts {
// //       products: allDatoCmsProduct {
// //         edges {
// //           node {
// //             id
// //             name
// //             price
// //             image {
// //               url
// //               sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
// //                 ...GatsbyDatoCmsSizes
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `)
// // }

// // export const getAllPaintings = () => {
// //   return query(`
// //     query allPaintings {
// //       products: allProducts(filter: {productType: {eq: "painting"}}) {
// //         edges {
// //           node {
// //             id
// //             name
// //             price
// //             image {
// //               url
// //               sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
// //                 ...GatsbyDatoCmsSizes
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `) 
// // }

// // query MyQuery {
// //   allProducts(filter: {productType: {eq: "painting"}}) {
// //     id
// //   }
// // }