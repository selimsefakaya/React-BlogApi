import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SubjectList from './components/SubjectList'
import SubjectDetail from './components/SubjectDetail'

const App = () => {


  return (
    <BrowserRouter>
      <div className="main_wrapper">
        <header>

        </header>
        <div className="ui raised very padded text container segment">

          <Routes>
            <Route path="/" element={<SubjectList />} />
            <Route path="posts/:id" element={<SubjectDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App