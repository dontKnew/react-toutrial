import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async'; 

function SeoTags({ title }) {
  const currentUrl = window.location.href;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={currentUrl} />
      </Helmet>
    </HelmetProvider>
  );
}

export default SeoTags;
