import { useState } from "react"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"

function Contact() {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [gender, setGender] = useState("")
    // const [message, setMessage] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        message: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${formData.name} \n Email: ${formData.email} \n Gender: ${formData.gender} \n Message: ${formData.message}`)
    }

    return (
        <>
            <Nav />
            <main className="min-h-[80vh] flex justify-center items-center">
                <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" placeholder=" Enter Your Name" className="border border-gray-500 rounded-md p-2 w-[500px]" value={formData.name}  onChange={handleChange} />
                    <input type="email" name="email" id="email" placeholder=" Enter Your Email" className="border border-gray-500 rounded-md p-2 w-[500px]" value={formData.email}  onChange={handleChange} />
                    <select name="gender" id="gender" className="border border-gray-500 rounded-md p-2 w-[500px]" value={formData.gender}  onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <textarea name="message" id="message" placeholder="Enter your message" className="border border-gray-500 rounded-md p-2 w-[500px] h-[100px]" value={formData.message}  onChange={handleChange}></textarea>
                    <button type="submit" className="bg-brand-blue text-white rounded-md p-2 w-[500px]" onClick={handleSubmit}>Submit</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact