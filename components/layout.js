import React from "react"
import Sidebar from "../components/sidebar/sidebar"
import Timeline from "../components/timeline/timeline"
import Explore from "../components/explore/explore"

function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Explore />
    </div>
  )
}

export default Layout
