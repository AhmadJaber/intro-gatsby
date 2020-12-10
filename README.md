<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Introduction to Gatsby by making a blog.
</h1>

In this workshop, learn to build blazing fast apps and websites with React using Gatsby, a static PWA (Progressive Web App) generator. Over 50% of people will abandon a mobile site if it takes more than 3 seconds to load. Unless you’re willing to give up half of your potential customers, performance is no longer optional on the modern web. Fortunately, there are a lot of tools available to help you build screaming fast websites. Unfortunately, there’s a frighteningly large number of performance considerations, and many of them are easy to get wrong.

## What I’ll Learn

- Learn how to leverage free, open source tools including Gatsby, React, and
  GraphQL to build high-performance websites.
- Deliver an excellent experience to your users by providing only critical
  assets on load and prefetching assets for subsequent page loads.
- Implement performance best practices, such as the PRPL pattern, lazy
  loading assets, and more.
- Learn to build and deploy blazing fast websites in the fraction of time.
- Create websites quickly with performance baked in.
- Deploy your sites for free in minutes with Netlify.

### configure gatsby plugins

we need a file called `gatsby-config.js`

```js
module.export = {
  plugins: ['gatsby-plugin-emotion'],
};
```

Doing that gatsby knows how to use `emotion`;

##### Pages & links

Anything created in `src/pages` directory will be treated as a page. Like - `index.js` is `index.html` as
the home page.

_Link & Routing_

```html
<a href="/">&larr; Back to Home.</a>
```

if i do that it will load the whole page when we go to the page. But we do not want that. We want
that to be smooth. As i am generating a react app i have the ability to use dynamic routing. As `Gatsby`
comes prepackaged with `reach-router`.

Also gatsby `Link` comes with prefetching resources in background & other fancy stuff.

### Workshop Info -

- jason Lengstorf [repo](https://github.com/FrontendMasters/gatsby-intro)
- [gatsby_workflow](https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/)

### Style with Emotion(css in js)

`npm i @emotion/react @emotion/styled gatsby-plugin-emotion`

- @emotion/react, will give us access to global styles & css props
- @emotion/styled, give us `styled-components` kind of interface
- gatsby-plugin-emotion, add the things nedded for gatsby to build with emotion.

_add global styles using emotion_

- create a wrapper component, where we pass the `children` & apply global styles
- `import {Global, css} from '@emotion/core`,
- where `Global` is component that emotion give us to apply global styles.
- With this component, common components like - `<Header />`, also for every page `<main>{children}</main>`

**add google font in gatsby project** [gatsby-plugin-google-fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/?=gatsby-plugin-google-fonts)

### Gatsby & GraphQL, adding data to gatsby site using graphql.

_at first, add site metadata_

- without it browser will show only url in tab. user will have no idea what is tab about,
  if he or she in another tab. which is not good user experience.
- so i want to show the title & for seo purposes i will add some description.
- go to `gatsby-config.json`, add a property `siteMetadata`, which is an object.
- add `{title: '', description: ''}` or anything i want. This will not show anything on browser.
- we have to use graphql to access the metadata.

**GraphQL**
To access in graphql-playground `http://localhost:8000/___graphql`.

So, `graphql` at its core is way of describe the relation between types of data. we can write `query` or `mutation`
in graphql. `query` is for getting data & `mutation` is for create, update, delete.

With gatsby, gatsby doesn't do a whole lot with graphql. It will setup some default QUERIES, like -
sitePage, sitePlugin, site etc. to acess site-metadata, using `query`

```graphql
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
```

_now after knowing how to get the data, i want to modify the title of my site._

- to do that i have to add some boilerplate, `gatsby-plugin-react-helmet, react-helmet`.
- react-helmet, is a library which allows us to modify the head of html document in react. it allows us
  to create title, metatags, twitter-cards, opengrah-descriptions also i can set language attribute of my
  html tag.
- gatsby-plugin-react-helmet, this allow us to do server side rendering with helmet. just i have to add it
  `gatsby-config.js`.
- create a hook, sothat i can use this siteMetadata anwhere in my app.
