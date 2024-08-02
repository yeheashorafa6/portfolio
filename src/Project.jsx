import React from 'react'
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import ProjectPage from "./ProjectPage/ProjectPage"

function Project() {
  return (
    <div className="container ">
      <Header />
      <ProjectPage/>
      <div className="divider"></div>
      <Footer />
  </div>
  )
}

export default Project
