---
title: Migrating My Blog to GatsbyJS in Less Than 10 Hours
cover: 'https://images.unsplash.com/photo-1529220502050-f15e570c634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2301&q=80'
date: '2019-02-20'
description: ''
slug: 'blog/016-migrating-to-gatsby'
category: 'tech'
tags:
  - javascript
  - gatsby
---

Last weekend, I took some time to fully rebuild my personal blog from “scratch”.

I tossed my [Lektor](https://www.getlektor.com/) site and rebuilt it with with
[GatsbyJS](https://www.gatsbyjs.org), [GraphQL](https://graphql.org/) and
[Rebass](https://rebassjs.org/). It took less than 10 hours to implement and deploy! That time was
broken into:

- 6 hours to get the baseline of the site where I wanted it to be
- 2 hours to tweak styles and layouts
- 5 minutes to deploy
- 55 minutes to debug my SSL config (😂)

## Planning

My original site (and the many incarnations of it before that) was a static site built around blog
posts written in Markdown or reStructuredText. I would use different themes from [HTML5
UP](http://html5up.net) and manually split out the files into templates, work with verbose
stylesheets that someone else wrote, and would generally sink more time into maintaining my site
than actually writing blog posts. [Lektor](https://www.getlektor.com/) was great but I needed
something more streamlined, and wanted something that was going to give me a more modern web
experience out of the box.

### Pain-Points To Alleviate:

- No more difficult asset-wrangling ([Lektor](https://www.getlektor.com/) has
  [webpack](https://webpack.js.org/) support, but I was tired of trying to fix/change my config all
  the time)
- Toss out any "design". I've previously used fancy templates that took hours to split into usable
  pieces that I never felt great about. I wanted something super simple and minimal
- Keep my previous minimal static site set up! I love the idea of generating static files with
  super simple hosting

### First-class Support For:

- Markdown support for blog posts
- Tags/Categories for blog posts
- Google Analytics
- Syntax highlighting

* RSS feed
* Offline support
* Optimized image loading

## Implementation

I found a [Gatsby starter](https://github.com/Vagr9K/gatsby-advanced-starter) by [Ruben
Harutyunyan](https://twitter.com/Vagr9K) that gave me an awesome starting place for almost
everything I was looking for. I was especially happy to find a starter that was so fully featured,
but had _very_ minimal pages and _no_ styling or CSS frameworks included. It also uses
[GraphQL](https://graphql.org/) under the hood to retrieve blog post data, which is makes
interacting with post data really clean.

I had to handle a couple of formatting differences from my previous Markdown files for my blog
posts, but those were basically able to be dropped into the new site. I'm a huge fan of
[Rebass](https://rebassjs.org/) and used all stock components for the UI.

I was super impressed with the myriad of plugins/libraries available for Gastby. Things like
offline support, uploading files to AWS, optimized image loading, and RSS feeds all have plugins
that sometimes complex tasks essentially plug-and-play.

The only major issue that I encountered was that I needed to customize the blog post URL in order
to make sure links from my previous blog were supported. Diving into how the blog slugs were
determined and used took a little more time than I would have liked, but was still fairly
low-effort.

## My Next Steps

- Code clean-up! I sped through my initial build, so there's a lot of refactoring that I want to do
  (add my preferred import style, split out components, clean up styles, etc.)
- Add support for toggling between light and dark themes
- Expose the ability to browse by category/tag
- Write more blog posts!

## Repositories

The repo for my original Lektor site as well as my new site are on GitHub:

**GatsbyJS/GraphQL/Rebass repo:** [GitHub - emilyemorehouse/emilyemorehouse.com: Personal website,
built using Gatsby, Rebass, and GraphQL](https://github.com/emilyemorehouse/emilyemorehouse.com)

**Original Lektor repo:** [GitHub - emilyemorehouse/emilyemorehouse.com-archive: Personal website,
built using Lektor](https://github.com/emilyemorehouse/emilyemorehouse.com-archive)
