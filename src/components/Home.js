import React from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'

function Home() {
    return (
        <Layout>
            <p>
                Hello
            </p>
            <p>
                <Link to='/dynamic'>Navigate to Dynamic Page</Link>
            </p>
        </Layout>
    )
}

export default Home
