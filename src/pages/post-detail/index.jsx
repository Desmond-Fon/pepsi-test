import { useParams, Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { useState, useEffect } from "react"

function PostDetail() {
    const { id } = useParams()
    const [post, setPost] = useState({ title: "", body: "" })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [comments, setComments] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => res.json())
                .then(data => setPost(data))
                .catch(err => {
                    console.log(err)
                    setError(err.message)
                    setLoading(false)
                })
                .finally(() => setLoading(false))
        }, 500);
    }, [id])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => {
                console.log(err)
                setError(err.message)
                setLoading(false)
            })
            .finally(() => setLoading(false))
    }, [id])

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg></div>
    }

    return (
        <div>
            <Nav />
            <main className="min-h-[80vh] max-w-[80%] mx-auto pt-10">
                <Link to={"/users"} className=" hover:text-brand-red transition-all duration-300 font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer">Back to Users</Link>

                <div className="flex flex-col gap-2.5 mt-10">
                    <h1 className="text-2xl font-bold capitalize">{post.title}</h1>
                    <p className="text-lg font-body">{post.body}</p>
                </div>

                <div className="flex flex-col gap-2.5 mt-10">
                    <h2 className="text-xl font-bold">Comments</h2>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <h3 className="text-lg font-bold">{comment.name}: ({comment.email})</h3>
                            <p className="text-lg font-body">{comment.body}</p>
                        </div>
                    ))}
                </div>

                {error && <div className="text-red-500">{error}</div>}
            </main>
            <Footer />
        </div>
    )
}

export default PostDetail