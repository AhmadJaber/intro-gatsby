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

### configure gatsby plugins

we need a file called `gatsby-config.js`

```js
module.export = {
  plugins: ['gatsby-plugin-emotion'],
};
```

Doing that gatsby knows how to use `emotion`;
