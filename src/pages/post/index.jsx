import { useState } from "react"

function Post() {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
        userId: "",
    })
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: formData.title,
                body: formData.body,
                userId: formData.userId,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setMessage('Post created successfully');
            })
            .catch((error) => {
                console.log(error);
                setMessage('Post creation failed');
            });
    }

    // data comes as a string from the backend, the frontend converts to JSON format....
    // Sending data to the backend has to be in form of a string hence why it is stringified

  return (
    <div>
        <main className="max-w-[80%] mx-auto py-10">
            <div className="flex flex-col gap-2.5">
                <h1 className="text-2xl font-bold text-center">Posts</h1>

                <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2.5">
                    <input className="border border-gray-300 rounded-md p-2 w-[500px]" type="text" name="title" id="title" placeholder="Enter Title" value={formData.title} onChange={handleChange} />
                    <input className="border border-gray-300 rounded-md p-2 w-[500px]" type="text" name="body" id="body" placeholder="Enter Body" value={formData.body} onChange={handleChange} />
                    <input className="border border-gray-300 rounded-md p-2 w-[500px]" type="text" name="userId" id="userId" placeholder="Enter User ID" value={formData.userId} onChange={handleChange} />
                    {message && <p className="text-green-500">{message}</p>}
                      <button className="font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </main>
    </div>
  )
}

export default Post