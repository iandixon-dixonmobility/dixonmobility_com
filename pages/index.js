import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  const pageTitle = "Dixon Mobility | Custom Mobile Apps & Transit Solutions";
  const pageDescription = "Leading development of custom AI-first mobile apps for iOS, Android, and innovative public transit technology. Partner with Dixon Mobility.";
  const pageOgImage = "/og-image-home.png"; // Specific OG image for homepage
  const pageUrl = "https://www.dixonmobility.com"; // Canonical URL for this page

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* You can also override keywords here if needed */}
        {/* <meta name="keywords" content="homepage specific, keywords" /> */}

        {/* Override Open Graph tags for this page */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageOgImage} /> {/* Use a specific image */}

        {/* Override Twitter Card tags for this page */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageOgImage} />

        <link rel="canonical" href={pageUrl} />
        <meta name='robots' content='index, follow' /> {/* Ensure homepage is indexable */}
      </Head>
      <Hero />
      <LogoGrid />
      <GradientWrapper>
        {/* <Features /> */}
        <CTA />
      </GradientWrapper>
      <ToolKit />
      {/* <GradientWrapper>
        <Testimonials />
      </GradientWrapper> */}
      <FooterCTA />
    </>
  );
}
