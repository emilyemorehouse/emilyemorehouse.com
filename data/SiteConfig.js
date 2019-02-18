const config = {
  siteTitle: 'Emily Morehouse - Engineer', // Site title.
  siteTitleShort: 'EMV', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Director of Engineering @ Cuttlesoft', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://emilyemorehouse.com', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Emily Morehouse - Engineer.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  // siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-41557354-3', // GA tracking ID.
  // disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Emily Morehouse', // Username to display in the author segment.
  userEmail: 'emilyemorehouse@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'emilyemorehouse', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Denver, CO', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: "👋🏻 I'm Emily: Director of Engineering at Cuttlesoft & Python core developer.", // User description to display in the author segment.
  userSubdescription: [
    'Lover of programming languages.',
    'PyCon 2019 co-chair, 202{0,1} chair.',
    'Wife, fur mama.',
    '🦑👩🏻‍💻🐍🐺',
  ], // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/emilyemorehouse',
      iconClassName: ['fab', 'github'],
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/emilyemorehouse',
      iconClassName: ['fab', 'twitter'],
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/emilycodes',
      iconClassName: ['fab', 'instagram'],
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emily-morehouse-10567459',
      iconClassName: ['fab', 'linkedin'],
    },
    {
      label: 'Email',
      url: 'mailto:emilyemorehouse@gmail.com',
      iconClassName: 'envelope',
    },
  ],
  visiblePages: ['blog', 'about', 'speaking'],
  copyright: 'Copyright © 2015-2019. Emily Morehouse', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
