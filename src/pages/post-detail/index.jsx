import { useParams, Link, useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { useState, useEffect } from "react"

function PostDetail() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [post, setPost] = useState({ title: "", body: "" })
    const [loading, setLoading] = useState(true)
    const [updated, setUpdated] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        name: "",
        capital: "",
        currency: "",
        abbreviation: "",
    })
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.sampleapis.com/countries/countries/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: formData.name,
                capital: formData.capital,
                currency: formData.currency,
                abbreviation: formData.abbreviation,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUpdated(!updated)
                setMessage('Country updated successfully');
            })
            .catch((error) => {
                console.log(error);
                setMessage('Country creation failed');
            });
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.sampleapis.com/countries/countries/${id}`)
                .then(res => res.json())
                .then(data => {
                    setPost(data)
                    setFormData({
                        name: data.name,
                        capital: data.capital,
                        currency: data.currency,
                        abbreviation: data.abbreviation,
                    })
                })
                .catch(err => {
                    console.log(err)
                    setError(err.message)
                    setLoading(false)
                })
                .finally(() => setLoading(false))
        }, 500);
    }, [id, updated])

    const handleDelete = () => {
        fetch(`https://api.sampleapis.com/countries/countries/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => navigate("/users"))
            .catch(err => console.log(err))
    }

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg></div>
    }

    return (
        <div>
            <Nav />
            <main className="min-h-[80vh] max-w-[80%] mx-auto pt-10">
                <div>
                    <main className="max-w-[80%] mx-auto py-10">
                        <div className="flex flex-col gap-2.5">
                            <h1 className="text-2xl font-bold text-center">Edit Country</h1>

                            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2.5">
                                <input className="border border-gray-300 rounded-md p-2 w-[500px]" type="text" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
                                <input className="border border-gray-300 rounded-md p-2 w-[500px]" type="text" name="capital" id="capital" placeholder="Enter capital" value={formData.capital} onChange={handleChange} />
                                <input className="border border-gray-300 rounded-md p-2 w-[500px]" type="text" name="currency" id="currency" placeholder="Enter currency ID" value={formData.currency} onChange={handleChange} />
                                <input className="border border-gray-300 rounded-md p-2 w-[500px]" type="text" name="abbreviation" id="abbreviation" placeholder="Enter abbreviation" value={formData.abbreviation} onChange={handleChange} />
                                {message && <p className="text-green-500">{message}</p>}
                                <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer" type="submit" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </main>
                </div>

                <Link to={"/users"} className=" hover:text-brand-red transition-all duration-300 font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer">Back to Countries</Link>

                <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-red text-white border-none cursor-pointer" onClick={handleDelete}>Delete Country</button>

                <div className="flex flex-col gap-2.5 mt-10">
                    <img src={post.media.flag ? post.media.flag : post.media.emblem} alt="" className="w-[200px] h-[200px] object-contain" />
                    <h1 className="text-2xl font-bold capitalize">{post.name} <span className="text-sm font-body text-brand-blue">{post.abbreviation}</span></h1>
                    <p className="text-lg font-body">Capital: {post.capital} </p>
                    <p className="text-lg font-body">Currency: {post.currency}</p>
                </div>

                {error && <div className="text-red-500">{error}</div>}
            </main>
            <Footer />
        </div>
    )
}

export default PostDetail