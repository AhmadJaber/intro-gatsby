import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  console.log(data.site.siteMetadata);
  // data gives a jason file.
  return data.site.siteMetadata;
};
