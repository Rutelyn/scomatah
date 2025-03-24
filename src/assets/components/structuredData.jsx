import { Helmet } from "react-helmet-async";

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Business",
    "name": "Scomatah Enterprise",
    "url": "https://scomatah.netlify.app/",
    "logo": "https://scomatah.netlify.app/images/logo.png",
    "description": "We are passionate about promoting health and sustainability through our plantain-based products. Our journey started with a simple idea: to create nutritious and eco-friendly food options while supporting local farmers and communities.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Asante",
        "addressCountry": "Ghana"
    }
};

<Helmet>
    <title>Start Your Healthy Snacking Journey With Us</title>
    <meta name="description" content="We are passionate about promoting health and sustainability through our plantain-based products. Our journey started with a simple idea: to create nutritious and eco-friendly food options while supporting local farmers and communities." />
    <meta name="keywords" content="Scomatah, plant-based snacks, Asante region Ghana agro-processing business, nutritional snacks, health, wellbeing, Agogo Asante" />
    <meta property="og:title" content="Start Your Healthy Snacking Journey With Us" />
    <meta property="og:description" content="Prioritizing health and wellness, Encouraging sustainable farming and production, Empowering local communities and farmers" />
    <meta property="og:image" content="https://scomatah.netlify.app/images/logo.png" />
    <meta property="og:url" content="https://scomatah.netlify.app/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Start Your Healthy Snacking Journey With Us" />
    <meta name="twitter:description" content="We are passionate about promoting health and sustainability through our plantain-based products. Our journey started with a simple idea: to create nutritious and eco-friendly food options while supporting local farmers and communities." />
    <meta name="twitter:image" content="https://scomatah.netlify.app/images/logo.png" />
    <link rel="canonical" href="https://scomatah.netlify.app/" />
    <script type="application/ld+json">
        {JSON.stringify(structuredData)}
    </script>
</Helmet>