import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, 'docs', 'index.html');
const dest = path.join(__dirname, 'docs', '404.html');

fs.copyFile(src, dest, (err) => {
    if (err) {
        console.error('Error copying 404.html:', err);
        process.exit(1);
    } else {
        console.log('Successfully created 404.html from index.html');
    }
});
