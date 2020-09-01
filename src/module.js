'use strict'
/* eslint-env node */

const { join } = require('path')

/**
 * @param {Map} fileMap Source files
 * @param {array} opt.urls List of url
 * @param {string} opt.path Deploy path
 * @param {string} [opt.filename=sitemap.xml] Sitemap name
 */
module.exports = async(fileMap, opt, { log }) => {
  const path = opt.path
  const filename = opt.filename || 'sitemap.xml'

  if (path == null) {
    throw 'sitemapindex-xml: Invalid or missing path.'
  }

  const items = opt.urls
    .map(url => `
      <sitemap>
        <loc>${url}</loc>
      </sitemap>`)
    .join('')

  const content = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${items}
    </sitemapindex>`

  const contentMinified = content.replace(/(?:\n|\s{2,})/g, '')

  const fullPath = join(path, filename)

  fileMap.set(fullPath, contentMinified)

  log(`${fullPath} created.`)
}
