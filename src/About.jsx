import React from 'react'
import Hero from "./component/Hero/Hero"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"

function About() {
  return (
    <>
     <div className="container ">
        <Header />
        <Hero/>
        <div className="divider" style={{marginBottom :"5rem"}}></div>
        <Footer />
    </div>
    </>
  )
}

export default About
