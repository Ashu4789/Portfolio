import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | Ashutosh` : 'Portfolio | Ashutosh'}</title>
      <meta name='description' content={description || 'Personal portfolio of Ashutosh'} />
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title ? `${title} | Ashutosh` : 'Portfolio | Ashutosh'} />
      <meta property="og:description" content={description || 'Personal portfolio of Ashutosh'} />
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'Ashutosh'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Ashutosh` : 'Portfolio | Ashutosh'} />
      <meta name="twitter:description" content={description || 'Personal portfolio of Ashutosh'} />
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default SEO;
