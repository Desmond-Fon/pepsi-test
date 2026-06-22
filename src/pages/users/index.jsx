import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import { useState, useEffect } from "react"

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            <Nav />
            <main className="min-h-[80vh] max-w-[80%] mx-auto pt-10">
                <div className="grid grid-cols-3 gap-4">
                    {users.map((user) => {
                        return(
                            <div key={user.id} className="border border-gray-300 rounded-md p-4">
                                <h1><span className="font-bold">Name:</span> {user.name}</h1>
                                <p><span className="font-bold">Email:</span> {user.email}</p>
                                <p><span className="font-bold">Phone:</span> {user.phone}</p>
                                <p><span className="font-bold">City:</span> {user.address.city}</p>
                                <p><span className="font-bold">Latitude:</span> {user.address.geo.lat}</p>
                            </div>
                        )
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Users