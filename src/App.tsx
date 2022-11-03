import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { Settings } from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Settings />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
