/*
  - it is a asnync function because we are loading data.
  * report - gatsby internal console.log, add some styling
  * graphql - to make a graphql query, here graphql is a function, we are not using as a template-literal, because it is a node interface.
*/
exports.createPages = async ({ actions, graphql, report }) => {
  // i am getting only slug, because here i only want to create the pages
  // then have the pages query for the data they want.
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // for local sources not needed, but for 3rd party sources must check
  // report.panic(), print out the error, pause the gatsby built, sothat i have a chance to fix it.
  if (result.errors) {
    report.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  // component - telling the page what component to use for layout
  posts.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
