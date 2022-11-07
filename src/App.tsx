import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Result } from './pages/Result/Result'

import { Settings } from './pages/Settings/Settings'

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/sorteio" element={<Result />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
