import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  twitterCard?: string;
  canonical?: string;
}

const SEO = ({
  title = "ThreeAtoms - AI Solutions | Transform Your Business with AI",
  description = "ThreeAtoms helps businesses integrate AI solutions with ease. Expert services in LLM fine-tuning, RAG implementation, AI agents, content automation and more.",
  keywords = "AI solutions, LLM fine-tuning, RAG implementation, AI agents, content automation, website development, AI consulting",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://threeatoms.com",
  type = "website",
  twitterCard = "summary_large_image",
  canonical = ""
}: SEOProps) => {
  // Ensure URL ends with a slash for consistency
  const formattedUrl = url.endsWith("/") ? url : `${url}/`;
  // Create canonical URL if not provided
  const canonicalUrl = canonical || formattedUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={formattedUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ThreeAtoms" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={formattedUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#F26E50" />
    </Helmet>
  );
};

export default SEO; 