import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Moto, a web3 programmer.</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage