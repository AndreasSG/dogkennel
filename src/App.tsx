import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import NoPage from './views/NoPage';
import Litters from './views/litters';

function App() {

  return (
    <div data-theme="cupcake" className="bg-base-300 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="litters" element={<Litters />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
