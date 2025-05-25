import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Banner from './banner/Banner'

function Main() {
  return (
    <div className="flex section">
        <Sidebar />
        <Banner />
    </div>
  )
}

export default Main