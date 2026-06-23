import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import ProductDetail from './pages/product-detail'
import Users from './pages/users'
import PostDetail from "./pages/post-detail"
// import Post from "./pages/post"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/post-detail/:id" element={<PostDetail />} />
          {/* <Route path="/post" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
