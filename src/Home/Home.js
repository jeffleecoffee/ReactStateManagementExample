import React from 'react'
import '../App.css'
import HeaderList from '../Header/HeaderList'
import SideBar from '../Sidebar/SideBar'
import ViewController from '../View/ViewController'

const Home = () => {
  console.log("Home is being rendered")
  return (
    <div className="App">
      <HeaderList />
      <div className="Body">
        <SideBar />
        <ViewController />
      </div>
    </div>
  )
}

export default Home
