import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from './routes/Layout';
import Contact from './routes/contact';
import Aboutme from './routes/about-me';
import Projects from './routes/projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes className="mb-0">
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Aboutme />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
