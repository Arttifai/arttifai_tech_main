/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.arttifai.tech', // Make sure this matches your live domain
  generateRobotsTxt: true, // Generates a robots.txt file along with the sitemap
  sitemapSize: 5000, // Limits URLs per sitemap file (optional)
};
