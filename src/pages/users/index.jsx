import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { useState, useEffect } from "react"
import Post from "../post"

function Users() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => alert("Item deleted successfully!"))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Nav />
            <main className="min-h-[80vh] max-w-[80%] mx-auto py-10">
                <Post />
                <div className="grid grid-cols-3 gap-4">
                    {posts.slice(1,150).filter((post) => post.id !== 9 && post.id !== 10).map((post) => {
                        return(
                            <>
                            <div className="flex flex-col border border-gray-300 rounded-md p-4 justify-between items-center gap-2.5" key={post.id}>
                                <Link to={`/post-detail/${post.id}`}>
                                    <h1><span className="font-bold">ID:</span> {post.id}</h1>
                                    <p><span className="font-bold">Title:</span> {post.title}</p>
                                    <p><span className="font-bold line-clamp-1">Body:</span><span className="line-clamp-2"> {post.body}</span></p>
                                </Link>
                                    <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-red text-white border-none cursor-pointer" onClick={() => handleDelete(post.id)}>Delete Post</button>
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