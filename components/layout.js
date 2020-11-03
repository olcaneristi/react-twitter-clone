import React, { useEffect, useState } from "react"
import Sidebar from "../components/sidebar/sidebar"
import Timeline from "../components/timeline/timeline"
import Explore from "../components/explore/explore"
import Loader from "../components/loading/loaderspinner"

function Layout() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="app">
          <Sidebar />
          <Timeline />
          <Explore />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Layout
