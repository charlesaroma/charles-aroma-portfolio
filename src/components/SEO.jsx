import { Helmet } from "react-helmet";
import { siteConfig } from "@/lib/seo";

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
}) {
  const pageTitle = buildTitle(title);
  const pageDescription = description || siteConfig.defaultDescription;
  const pageUrl = canonical || `${siteConfig.siteUrl}${path}`;
  const pageImage = image || siteConfig.defaultImage;

  return (
    <Helmet>
      {/* Primary */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <link rel="canonical" href={pageUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      {siteConfig.twitterHandle && (
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
      )}

      {/* PWA + misc best practices */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />

      {/* JSON-LD structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}


