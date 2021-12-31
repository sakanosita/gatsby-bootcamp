import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <>
            <Header />
            <h1>About Me</h1>
            <p>I'm Moto Sakanosita, author of <a href="https://www.smacon.dev">smacon.dev</a></p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
            <Footer />
        </>
    )
}

export default AboutPage