import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

export default function Home() {
  return <Layout>Hello</Layout>
}

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
