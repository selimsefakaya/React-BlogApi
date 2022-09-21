import React, { useState } from 'react'
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'
import AddBlog from './components/AddBlog'
import Header from './components/Header'
import Contact from './components/Contact'

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <div className="main_wrapper">
        <header>
          <Header />
        </header>
        <div className="ui raised very padded text container segment" style={{ marginTop: "60px" }}>

          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="posts/:id" element={<BlogDetail />} />
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App