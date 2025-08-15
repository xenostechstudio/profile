export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xenostech Studio",
    "description": "Custom software development and business consulting services",
    "url": "https://xenostechstudio.com",
    "logo": "https://xenostechstudio.com/logo.png",
    "foundingDate": "2021",
    "founder": {
      "@type": "Person",
      "name": "Xenostech Studio Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Jakarta"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62",
      "contactType": "customer service",
      "email": "hello@xenostechstudio.com",
      "availableLanguage": ["English", "Indonesian"]
    },
    "sameAs": [
      "https://linkedin.com/company/xenostechstudio",
      "https://github.com/xenostechstudio",
      "https://twitter.com/xenostechstudio"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "Global"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Xenostech Studio"
    },
    "serviceType": "Software Development",
    "description": "Custom application development, business process automation, cloud solutions, and digital transformation consulting",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Application Development",
            "description": "Build tailored software solutions that perfectly match your business processes and requirements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Process Automation",
            "description": "Streamline your operations with intelligent automation solutions that save time and reduce costs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions & Infrastructure",
            "description": "Modern, scalable cloud architectures that grow with your business needs"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Xenostech Studio",
    "url": "https://xenostechstudio.com",
    "description": "Transform your business ideas into powerful applications with custom software development and consulting services",
    "publisher": {
      "@type": "Organization",
      "name": "Xenostech Studio"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://xenostechstudio.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
