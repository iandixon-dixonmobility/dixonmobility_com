import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import { useAnalytics } from '../hooks/useAnalytics'

const Layout = ({ children }) => {
    // Initialize analytics
    useAnalytics();

    return (
        <>
            <Head>
                <title>Dixon Mobility</title>
                <meta name='description' content='Dixon Mobility develops great custom mobile app for public transit and more.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout