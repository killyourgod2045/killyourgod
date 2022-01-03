import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import notFoundStyles from '../styles/pages/404.module.scss'

export default function NotFound() {
    return (
        <Layout page="404" bgColor="inherit">
            <div className={notFoundStyles.notFound__container}>
                <Link to="/">
                    <h1>404, REALITY NOT FOUND.</h1>
                </Link>
            </div>
        </Layout>
    )
}
