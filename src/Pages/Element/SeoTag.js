import React, { useEffect } from 'react';

function SeoTags({ title, metaDescription, metaKeywords }) {
  const canonicalUrl = window.location.href;
  useEffect(() => {
    // Update the title
    document.title = title;

    // Update the meta description
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDescription);
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'description');
      newMetaTag.setAttribute('content', metaDescription);
      document.head.appendChild(newMetaTag);
    }

    // Update the meta keywords
    const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (metaKeywordsTag) {
      metaKeywordsTag.setAttribute('content', metaKeywords);
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'keywords');
      newMetaTag.setAttribute('content', metaKeywords);
      document.head.appendChild(newMetaTag);
    }

    // Update the canonical URL
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    } else {
      const newCanonicalTag = document.createElement('link');
      newCanonicalTag.setAttribute('rel', 'canonical');
      newCanonicalTag.setAttribute('href', canonicalUrl);
      document.head.appendChild(newCanonicalTag);
    }

    // Clean up function
    return () => {
      // Remove the meta description
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.remove();
      }

      // Remove the meta keywords
      const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
      if (metaKeywordsTag) {
        metaKeywordsTag.remove();
      }

      // Remove the canonical URL
      const canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.remove();
      }
    };
  }, [title, metaDescription, metaKeywords, canonicalUrl]);

  return null; // This component doesn't render anything
}

export default SeoTags;
