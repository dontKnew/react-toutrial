import React from 'react';
import { Helmet } from 'react-helmet';

function SeoTags(props) {
  const { title, description, keywords } = props;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </div>
  );
}

export default SeoTags;
