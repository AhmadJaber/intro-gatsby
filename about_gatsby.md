#### Workshop, Introduction to Gatsby by jason Lengstorf

**content - introduction**

##### What we are learning:
- What Gatsby is and why it matters.
- Gatsby fundamentals.
- What is GraphQL & how to use it (GraphQL specific for Gatsby)
- What MDX (MDX way to write react component in your markdown. Powerful way to write content for developers) is
& what it means for our content.
- Programmatic page creation.
- Image optimization & other performance strategies.
- How to use third party data in gatsby sites.
- How to build & deploy gatsby sites.

##### Challenges of modern web development.
- Getting started is overhelming. (Many things to learn)
- Thr way of managing data is evolving.
- It is hard to get everything write.

[What is gatsby & how it works](https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/)
##### What is Gatsby?
Gatsby is a shortcut to allow developer to quickly build exellent apps & sites.
By eleminating boilerplate. Most workflow envolve a lot boilerplate to get started.

*process taking place to use a console to open something up  to show it on the browser*

console --------------> browser

		webpack - module bundler, bundle the js so that we can use on the page.
		babel - If i want to use es2015+.
		post-css - for css optimization.
		node - I need to get it on a server, so i am using nodejs.
		deploy(host) - docket, Kubernetes.
		nginx(server) - To route this, to make sure it is pointing to my app, when people hits
		my domain.
		fastly(CDN) - assets are chewing through my bandwidth, so i need a cdn.

This all the stuff a have to do to get my website up&running on the browser & then out on the internet.

*In case of Gatsby. It removes the boilerplate for getting started & deploying apps to production*

console --------------> browser

		Gatsby (React, GraphQL) - Install Gatsby & start building a site.
		Netlify - deploy it to netlify.

*As Gatsby is deploying as static assets, we do not have to worry about - server-scaling, database-sharding. Instead here is a bucket of static files, i am gonna put them in CDN, which is desiged to distribute this stuff geographically. Because it is static i do not have to worry about database-access, server-down, ddos(as it takes a lot to ddos a CDN)*


###### Monolithic CMS - wordpress, drupal. (is dying)
So there is shift towards being `headless`, means act as an api instead of a ui layer.
Like - decoupled drupal, wordpress api to do headless wordpress.
There CMS built design to be headless, like - contentful, Strapi. They r designed without ui layer.
They are just for managing data.

###### To dill with this, gatsby uses `content mesh`
If i have data in all the places, we can stitch them together in a common layer which is the mesh.
This process normalizes the data, so where it comes from doesn't matter. It can come from - wordpress, shopify,
localdata. so it will feel the same.

wordpress - built to be blogging software, but we can add ecommerce.
magenta - for ecommerce software.

**with content mesh, i will use a tool built for solving a problem & combine them. Like - **
- algolia -> for great search experiencre.
- contentful -> content management for my text.
- Cloudinary -> if i want my assets served as optimized & cachable way.
- stripe -> to sell something.

so i can choose the best tools for a specific task & stictch them together in one silidified layer.


###### Gatsby is a progressive web app generator.

*Ultimate goal is gatsby give me good default. sothat when i publish it, it gonna score hundred on performance.*
- Follows PRPL pattern *make the webpage load & interactive faster*
P - Push (or preload) the most important resources.
R - Render the initial route as soon as possible.
P - Pre-cache remaining assets.
L - Lazy load other routes and non-critical assets.

- code splitting.
- prefetching.
- Generates only static assets, so no server required. i only need database and server available during build.
- Less security risk, there is no database access.
- optimize & lazyload assets.
- Normalize third-party data.

###### I have the control what i want to use.