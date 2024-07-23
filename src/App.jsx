import { useState } from 'react'



import './App.css'
import Landing from './components/Landing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
     <ToastContainer/>
     <Landing/>  
    </>
  )
}

export default App
