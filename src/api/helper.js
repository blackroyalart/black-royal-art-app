 export default function filterProducts(data, filter={}) {
  if (Object.keys(filter).length === 0) return data 

  if (filter.paintings && filter.paintingType === 'canvas') {
    return data.filter(({node: product}) => {
      return product.paintingType === 'canvas'
    })
  }

  if (filter.paintings && filter.paintingType === 'print') {
    return data.filter(({node: product}) => {
      return product.paintingType === 'print'
    })
  }

  if (filter.paintings && filter.paintingType === 'product') {
    return data.filter(({node: product}) => {
      return product.paintingType === 'product'
    })
  }

  if (filter.paintings) {
    return data.filter(({node: product}) => {
      return product.productType === 'painting'
    })
  }
  
  if (filter.mask) {
    return data.filter(({node: product}) => {
      return product.productType === 'mask'
    })
  }

  if (filter.custom) {
    return data.filter(({node: product}) => {
      return product.productType === 'custom'
    })
  }
  
  if (filter.other) {
    return data.filter(({node: product}) => {
      return product.productType === 'other'
    })
  }

}
