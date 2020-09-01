## Web Builder Module - Create SitemapIndex file

This module allows the [@deskeen/web-builder](https://github.com/deskeen/web-builder) engine to create a `sitemapindex` file.

## Install

```
npm install @deskeen/web-builder
npm install @deskeen/web-builder-create-sitemapindex-xml
```

### Usage

And add the module to the list of modules: 

```javascript
const builder = require('@deskeen/web-builder')
const builder.build([
  source: [
    // List of files or directories
  ],
  modules: [
    [
      '@deskeen/web-builder-create-sitemapindex-xml',
      {
        urls: [
          // List of sitemap URLs
        ],
        path: '/sitemapindex/path', // Path where file will be created
        filename: 'sitemap.xml', // Optional filename. Defaults to "sitemap.xml"
      }
    ]
  ]
])
```
