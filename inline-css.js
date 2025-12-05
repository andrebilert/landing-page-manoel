import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, 'docs');
const indexHtmlPath = path.join(docsDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
    console.error('docs/index.html not found');
    process.exit(1);
}

let html = fs.readFileSync(indexHtmlPath, 'utf-8');

// Find CSS link
const cssLinkRegex = /<link rel="stylesheet" crossorigin href="([^"]+)">/;
const match = html.match(cssLinkRegex);

if (match) {
    const cssRelativePath = match[1];
    // Remove base path and leading slash
    const cleanPath = cssRelativePath.replace(/^\//, '');
    const cssPath = path.join(docsDir, cleanPath);

    if (fs.existsSync(cssPath)) {
        const cssContent = fs.readFileSync(cssPath, 'utf-8');
        const styleTag = `<style>${cssContent}</style>`;

        // Replace link with style tag
        html = html.replace(match[0], styleTag);

        fs.writeFileSync(indexHtmlPath, html);
        console.log(`Inlined CSS from ${cssRelativePath}`);
    } else {
        console.warn(`CSS file not found: ${cssPath}`);
    }
} else {
    console.log('No CSS link found to inline');
}
