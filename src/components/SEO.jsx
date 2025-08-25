import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { 
  siteConfig, 
  generatePersonStructuredData, 
  generateWebsiteStructuredData, 
  generateProfessionalServiceStructuredData 
} from "@/lib/seo";

function buildTitle(title) {
  if (!title) return siteConfig.defaultTitle;
  if (title === siteConfig.defaultTitle) return title;
  return `${title} | ${siteConfig.siteName}`;
}

export function SEO({
  title,
  description,
  path = "/",
  image = siteConfig.defaultImage,
  canonical,
  noindex = false,
  structuredData,
  includePersonSchema = false,
  includeWebsiteSchema = false,
  includeProfessionalSchema = false,
}) {
  const pageTitle = buildTitle(title);
  const pageDescription = description || siteConfig.defaultDescription;
  const pageUrl = canonical || `${siteConfig.siteUrl}${path}`;
  const pageImage = image || siteConfig.defaultImage;

  // Generate structured data arrays
  const structuredDataArray = [];
  
  if (includePersonSchema) {
    structuredDataArray.push(generatePersonStructuredData());
  }
  
  if (includeWebsiteSchema) {
    structuredDataArray.push(generateWebsiteStructuredData());
  }
  
  if (includeProfessionalSchema) {
    structuredDataArray.push(generateProfessionalServiceStructuredData());
  }
  
  if (structuredData) {
    structuredDataArray.push(structuredData);
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta name="author" content={siteConfig.author.name} />
      <meta name="creator" content={siteConfig.author.name} />
      <meta name="publisher" content={siteConfig.author.name} />
      <link rel="canonical" href={pageUrl} />
      
      {/* Robots and Indexing */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Language and Locale */}
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-US" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={`${siteConfig.author.name} - ${siteConfig.author.jobTitle}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={`${siteConfig.author.name} - ${siteConfig.author.jobTitle}`} />
      {siteConfig.twitterHandle && (
        <>
          <meta name="twitter:site" content={siteConfig.twitterHandle} />
          <meta name="twitter:creator" content={siteConfig.twitterHandle} />
        </>
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="application-name" content={siteConfig.siteName} />
      <meta name="apple-mobile-web-app-title" content={siteConfig.siteName} />
      <meta name="msapplication-TileColor" content="#0ea5e9" />
      <meta name="theme-color" content="#0ea5e9" />
      
      {/* Mobile and PWA */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance and Security */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* JSON-LD Structured Data */}
      {structuredDataArray.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(structuredDataArray.length === 1 ? structuredDataArray[0] : structuredDataArray)}
        </script>
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
  canonical: PropTypes.string,
  noindex: PropTypes.bool,
  structuredData: PropTypes.object,
  includePersonSchema: PropTypes.bool,
  includeWebsiteSchema: PropTypes.bool,
  includeProfessionalSchema: PropTypes.bool,
};


