import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { useState, useEffect } from "react"
import Post from "../post"

function Users() {
    const [posts, setPosts] = useState([])
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        fetch('https://api.sampleapis.com/countries/countries')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
            .catch(error => console.log(error))
    }, [deleted])

    const handleDelete = (id) => {
        fetch(`https://api.sampleapis.com/countries/countries/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                alert("Country deleted successfully!")
                setDeleted(!deleted)
                // window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Nav />
            <main className="min-h-[80vh] max-w-[80%] mx-auto py-10">
                <Post />
                <div className="grid grid-cols-3 gap-4">
                    {posts.slice(0, 100).map((post) => {
                        return (
                            <>
                                <div className="flex flex-col border border-gray-300 rounded-md p-4 justify-between items-center gap-2.5" key={post.id}>
                                    <Link to={`/post-detail/${post.id}`}>
                                        <img src={post.media.flag ? post.media.flag : post.media.emblem} alt="" className="" />
                                        <h1><span className="font-bold">Name:</span> {post.name}</h1>
                                        <p><span className="font-bold">Capital:</span> {post.capital}</p>
                                        <p><span className="font-bold line-clamp-1">Population:</span><span className="line-clamp-2"> {post.population}</span></p>
                                    </Link>
                                    <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-red text-white border-none cursor-pointer" onClick={() => handleDelete(post.id)}>Delete Country</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Users