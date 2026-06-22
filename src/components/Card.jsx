import { Link } from "react-router-dom"

function Card({ product }) {
  return (
    <div className="flex flex-col gap-2.5 items-center rounded-[20px] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <img src={product.image} alt="pepsi" className="w-full h-[300px] object-cover" />
      <div className="flex flex-col gap-5 p-5 w-full">
        <h3 className="text-2xl font-heading text-brand-red">{product.name}</h3>
        <p className="text-lg font-body text-brand-blue line-clamp-2">{product.description}</p>
        <p className="text-2xl font-bold italic font-body text-brand-red">${product.price}</p>
        <Link className="w-full" to={`/product-detail/${product.id}`}>
          <button className="w-full font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer">View Product</button>
        </Link>
      </div>
    </div>
  )
}

export default Card
