import { useState } from 'react'
import './App.css'
import MainPage from './components/mainpage/mainpage'
import Committees from './components/Commitees/Commitees'
import Header from "./components/header"
import Footer from "./components/footer"

function App() {

  // const [selected,setSelected]=useState(false);



  return (
    <>
      <Header />
      {/* <MainPage/> */}
      <Committees/>
      <Footer/>
    </>
  )
}

export default App
