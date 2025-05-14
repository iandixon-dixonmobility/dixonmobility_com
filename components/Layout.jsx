import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import { useAnalytics } from '../hooks/useAnalytics'

const Layout = ({
    children,
    title = "Dixon Mobility | Custom Mobile Apps & Transit Tech",
    description = "Dixon Mobility specializes in AI-first iOS and Android apps, APIs, and transit-focused technology solutions. Let's build your next idea.",
    ogImage = "/default-og-image.png",
    ogUrl = "https://www.dixonmobility.com",
}) => {
    // Initialize analytics
    useAnalytics();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="mobile apps, iOS development, Android development, API development, public transit tech, AI, software development, Dixon Mobility" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={ogUrl} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:site_name" content="Dixon Mobility" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout