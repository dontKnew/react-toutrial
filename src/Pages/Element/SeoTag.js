import { Helmet } from 'react-helmet';

export default function SeoTag({ tag }) {
  const currentUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>{tag.title}</title>
        <meta name="description" content={tag.description} />
        <meta name="keywords" content={tag.keywords} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>
    </>
  );
}
