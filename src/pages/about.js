import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I'm Moto Sakanosita, author of <a href="https://www.smacon.dev">smacon.dev</a></p>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage