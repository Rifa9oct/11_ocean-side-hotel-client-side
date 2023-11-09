import { useEffect } from "react";

const Helmet = ({ title, meta }) => {
  useEffect(() => {
    // Set document title
    document.title = title || 'Default Title';

    // Remove existing meta tags
    const existingMetaTags = document.querySelectorAll('meta');
    existingMetaTags.forEach((tag) => tag.parentNode.removeChild(tag));

    // Add new meta tags
    if (meta && Array.isArray(meta)) {
      meta.forEach((metaTag) => {
        const newMetaTag = document.createElement('meta');
        Object.keys(metaTag).forEach((key) => {
          newMetaTag.setAttribute(key, metaTag[key]);
        });
        document.head.appendChild(newMetaTag);
      });
    }
  }, [title, meta]);

  return null;
};

export default Helmet;
