const url = 'https://www.course-api.com/javascript-store-products'
const productsContainer = document.querySelector('.products-container')

const fetchProducts = async () => {
  /*productDOM.innerHTML = `<div>
        <p>Loading...</p>
      </div>`*/

  try {
    const product = await fetch(url)
    const data = await product.json()

    return data
  } catch (error) {
    /*productDOM.innerHTML = `<div>
        <p>Sorry, error</p>
      </div>`*/
    console.log(error)
  }
}

const displayProducts = (list) => {
  let productsList = list
    .map((product) => {
      const { id } = product
      const { name: title, price } = product.fields
      const { url: image } = product.fields.image[0]

      return `<div class="single-product">
        <a href="products.html?id=${id}">
          <img src="${image}"
            alt="${title}">
          <footer>
            <p class="product-title">${title}</p>
            <p class="product-price">$${price / 100}</p>
          </footer>
        </a>
      </div>`
    })
    .join('')

  productsContainer.innerHTML = productsList
}

const start = async () => {
  const data = await fetchProducts()
  displayProducts(data)
}

start()
