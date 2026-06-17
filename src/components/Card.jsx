
function Card({product}) {
  return (
      <div className="product-grid-item">
          <img src={product.image} alt="pepsi" className="product-grid-item-img" />
          <div className="product-grid-item-content">
              <h3 className="grid-heading heading hero-red">{product.name}</h3>
              <p className="grid-description paragraph hero-blue two-line-ellipsis">{product.description}</p>
              <p className="grid-price paragraph hero-red">${product.price}</p>
              <button className="grid-button">Buy Now</button>
          </div>
      </div>  )
}

export default Card