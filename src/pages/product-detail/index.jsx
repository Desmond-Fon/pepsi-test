import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import products from "../../components/products"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function ProductDetail() {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        console.log(quantity)
        console.log('This useeffect is called')
    }, [quantity])

    const product = products.find((product) => product.id === Number(id))

    if (!product) {
        return <div>No product found!</div>
    }

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${quantity} ${product.name} added to cart!`)
    }


    return (
        <div className="">
            <Nav />
            <main className="w-4/5 mx-auto flex flex-col gap-10 py-10">
                <Link to={"/"}>
                    <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer">Back to Home</button>
                </Link>

                <div className="mt-4 flex justify-between items-center gap-20">
                    <img src={product.image} alt={product.name} className="w-[40%] h-[500px] object-contain" />

                    <div className="w-[60%] flex flex-col gap-6 ">
                        <h1 className="text-[40px] font-heading bg-gradient-to-br from-brand-red to-brand-blue bg-clip-text text-transparent inline-block">{product.name}</h1>
                        <p className="text-lg font-body">{product.description}</p>
                        <p className="text-2xl font-bold italic font-body text-brand-red">${product.price}</p>

                        <div className="flex justify-start items-center gap-2.5">
                            <button className="w-10 h-10 rounded-[50%] bg-brand-blue text-white border-none cursor-pointer" onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button className="w-10 h-10 rounded-[50%] bg-brand-blue text-white border-none cursor-pointer" onClick={increaseQuantity}>+</button>
                        </div>
                        <button className="w-fit font-body px-10 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer" onClick={(e) => handleSubmit(e)}
                        >Buy Now</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProductDetail;