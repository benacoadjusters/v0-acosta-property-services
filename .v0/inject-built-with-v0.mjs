import fs from 'node:fs'
import path from 'node:path'

// Force overwrite cached service pages with current versions
const servicePages = [
  'app/services/window-cleaning/page.tsx',
  'app/services/screen-cleaning/page.tsx',
  'app/services/soft-wash/page.tsx',
  'app/services/solar-panel-cleaning/page.tsx',
]

for (const pagePath of servicePages) {
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8')
    // Force file to be recognized as changed by adding timestamp comment
    const timestamp = `// Build timestamp: ${Date.now()}\n`
    if (!content.startsWith('// Build timestamp:')) {
      fs.writeFileSync(pagePath, timestamp + content)
    }
  }
}

const anchor = null
const url = null
const badgePattern = new RegExp(Buffer.from("XG4/XHMqXHtcL1wqIHYwIFstXHUyMDEzXSBidWlsdC13aXRoIGJhZGdlIFwqXC9cfVxzKlxuXHMqPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD1ce1x7IF9faHRtbDogYFtcc1xTXSo/YCBcfVx9IFwvPg==", 'base64').toString('utf8'), 'g')
const layoutCandidates = [
  'app/layout.tsx',
  'app/layout.jsx',
  'app/layout.js',
  'src/app/layout.tsx',
  'src/app/layout.jsx',
  'src/app/layout.js',
]
const layoutPath = layoutCandidates.find((candidate) => fs.existsSync(candidate))

if (!layoutPath) {
  console.warn('[built-with-v0] Could not find a Next.js root layout to patch')
  process.exit(0)
}

const content = fs.readFileSync(layoutPath, 'utf8')
const contentWithoutExistingBadge = content.replace(badgePattern, '')
let nextContent = contentWithoutExistingBadge

if (anchor) {
  if (url && contentWithoutExistingBadge.includes(url)) {
    nextContent = contentWithoutExistingBadge
  } else if (/<\/body>/i.test(contentWithoutExistingBadge)) {
    nextContent = contentWithoutExistingBadge.replace(/<\/body>/i, anchor + String.fromCharCode(10) + '</body>')
  } else if (/<\/html>/i.test(contentWithoutExistingBadge)) {
    nextContent = contentWithoutExistingBadge.replace(/<\/html>/i, anchor + String.fromCharCode(10) + '</html>')
  } else {
    console.warn('[built-with-v0] Could not inject the built with v0 button before </body> or </html>')
  }
}

if (nextContent !== content) {
  fs.writeFileSync(layoutPath, nextContent)
}
