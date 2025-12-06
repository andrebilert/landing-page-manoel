import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, 'docs');
const sourceFile = path.join(buildDir, 'index.html');

// Ensure source exists
if (!fs.existsSync(sourceFile)) {
    console.error('Build not found. Run npm run build first.');
    process.exit(1);
}

// 1. Create 404.html (Fallback for GitHub Pages)
const dest404 = path.join(buildDir, '404.html');
fs.copyFileSync(sourceFile, dest404);
console.log('Created 404.html (Fallback)');

// 2. Create physical directories for SEO (200 OK status)
const routes = [
    'missa',
    'festas',
    'colacao',
    'foto-convite'
];

routes.forEach(route => {
    const routeDir = path.join(buildDir, route);

    // Create directory if it doesn't exist
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }

    // Copy index.html to [route]/index.html
    fs.copyFileSync(sourceFile, path.join(routeDir, 'index.html'));
    console.log(`Created physical route: /${route}/index.html`);
});
