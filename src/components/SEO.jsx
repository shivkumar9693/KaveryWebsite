import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO Component for Kavery Tubing Solutions
 * Automatically configures:
 * - Page titles & meta descriptions
 * - Dynamic canonical links tied strictly to the new domain
 * - Open Graph & Twitter Cards for social media
 * - JSON-LD Schema.org Structured Data for Search Engine rich snippets
 */
const SEO = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = 'https://kaverytubingsolutions.com/assets/hero_stainless_steel.png',
  schemaData = null,
  noIndex = false,
}) => {
  const { pathname } = useLocation();
  const domain = 'https://kaverytubingsolutions.com';
  
  // Clean trailing slashes and ensure strictly formatted canonical URL
  const path = pathname === '/' ? '' : pathname;
  const canonicalUrl = `${domain}${path}`;

  // Default values
  const defaultTitle = 'Kavery Tubing Solutions Pvt. Ltd. | Premium Stainless Steel Tubes Manufacturer';
  const defaultDescription = 'Kavery Tubing Solutions Pvt. Ltd. is a premier ISO 9001:2015 certified manufacturer of high-grade stainless steel seamless and welded tubes for demanding global industrial applications, heat exchangers, and boilers.';
  const defaultKeywords = 'stainless steel tubes, seamless tubes, welded tubes, SS tubes manufacturer, Kavery Tubing, industrial tubing solutions, ASTM standards, boiler tubes, heat exchanger tubes, Ahmedabad GIDC steel';

  const displayTitle = title ? `${title} | Kavery Tubing Solutions` : defaultTitle;
  const displayDescription = description || defaultDescription;
  const displayKeywords = keywords || defaultKeywords;

  // Standard Company / Business Schema.org JSON-LD (used globally on Homepage or merged)
  const defaultCompanySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${domain}/#organization`,
    'name': 'Kavery Tubing Solutions Pvt. Ltd.',
    'alternateName': 'Kavery Tubing Solutions',
    'url': domain,
    'logo': `${domain}/assets/logo.png`,
    'image': `${domain}/assets/hero_stainless_steel.png`,
    'description': defaultDescription,
    'telephone': '+91 98987 40495',
    'email': 'kaverytubingsolutions@gmail.com',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Plot No. 45, Industrial Area, Phase II, GIDC',
      'addressLocality': 'Ahmedabad',
      'addressRegion': 'Gujarat',
      'postalCode': '380015',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '22.9868', // Latitude of Ahmedabad industrial zone
      'longitude': '72.6026'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '09:00',
      'closes': '18:00'
    },
    'sameAs': [
      // Add social media profiles here if any, e.g.,
      // 'https://www.linkedin.com/company/kavery-tubing-solutions'
    ]
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${domain}/#website`,
    'url': domain,
    'name': 'Kavery Tubing Solutions',
    'description': defaultDescription,
    'publisher': {
      '@id': `${domain}/#organization`
    }
  };

  // Select schemas to inject
  const schemasToInject = [];
  
  if (pathname === '/') {
    // Inject both Website and Company schemas on Home Page
    schemasToInject.push(defaultCompanySchema);
    schemasToInject.push(websiteSchema);
  }

  if (schemaData) {
    schemasToInject.push(schemaData);
  }

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{displayTitle}</title>
      <meta name="title" content={displayTitle} />
      <meta name="description" content={displayDescription} />
      <meta name="keywords" content={displayKeywords} />
      <meta name="author" content="Kavery Tubing Solutions Pvt. Ltd." />

      {/* Indexing Directive: Critical to make sure Google indexes everything and obeys canonical */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Canonical URL - Extremely Important to redirect link equity to the new domain */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={displayDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kavery Tubing Solutions" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={displayDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon & Web App Styling */}
      <link rel="icon" type="image/png" href="/assets/logo.png" />
      <link rel="apple-touch-icon" href="/assets/logo.png" />
      <meta name="theme-color" content="#D10000" />

      {/* Google Result Customization / Logo Markup */}
      <meta name="google-site-verification" content="VERCEL_OR_GOOGLE_CONSOLE_VERIFICATION_TOKEN" />

      {/* Schema.org Structured Data */}
      {schemasToInject.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
