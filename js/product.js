const url = 'https://www.course-api.com/javascript-store-single-product'
const productDOM = document.querySelector('.product')

const fetchProducts = async () => {
  try {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    const resp = await fetch(`${url}?id=${id}`)
    const data = resp.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const displayProducts = (product) => {
  const { name, price, description, company, image } = product.fields
  const { url: img } = image[0]

  productDOM.innerHTML = `<div class="product-wrapper">
            <img src="${img}"
                alt="${name}">
            <div class="product-info">
                <p class="title">${name}</p>
                <p class="brand">${company}</p>
                <p class="price">${price / 100}</p>
                <p class="desc">${description}</p>
                <a href="btn">Add To Cart</a>
            </div>
        </div>`
}

const start = async () => {
  const data = await fetchProducts()
  displayProducts(data)
}

start()
