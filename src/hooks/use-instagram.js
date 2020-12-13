import { useStaticQuery, graphql } from 'gatsby';

export const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          username
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return data.allInstaNode.nodes.map((node) => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    username: node.username,
    caption: node.caption,
  }));
};
