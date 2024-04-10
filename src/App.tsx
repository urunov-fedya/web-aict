import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './state/store'
import { toggleCount } from './state/defState/defSlice.tsx'
import { Main } from './pages/Main/Main'
import { Header } from './components/widgets/Header'


function App() {

  const value = useSelector((state: RootState) => state.aict.value)
  const dispatch = useDispatch();

  return (
    <>

      {/* <Main/> */}
    </>
  )
}

export default App
