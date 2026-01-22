const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_IMAGE = 'C:/Users/User/.gemini/antigravity/brain/120945b2-1435-45ac-a9de-ccee2afdcb76/uploaded_image_1769088658940.jpg';
const OUTPUT_DIR = path.join(__dirname, 'public');

async function generateFavicons() {
    console.log(`Processing image: ${INPUT_IMAGE}`);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const tasks = [
        { name: 'favicon-16x16.png', size: 16 },
        { name: 'favicon-32x32.png', size: 32 },
        { name: 'apple-touch-icon.png', size: 180 },
        { name: 'android-chrome-192x192.png', size: 192 },
        { name: 'android-chrome-512x512.png', size: 512 },
        { name: 'favicon.png', size: 512 },
        // Generating a 48x48 png just in case it's useful to have even if not explicitly served alone
        { name: 'favicon-48x48.png', size: 48 }
    ];

    // Generate PNGs
    for (const task of tasks) {
        await sharp(INPUT_IMAGE)
            .resize(task.size, task.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile(path.join(OUTPUT_DIR, task.name));
        console.log(`✅ Generated ${task.name}`);
    }

    // Generate ICO
    console.log('Generating favicon.ico...');
    const icoSizes = [16, 32, 48];
    const buffers = await Promise.all(
        icoSizes.map(size =>
            sharp(INPUT_IMAGE)
                .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
                .png()
                .toBuffer()
        )
    );

    const iconDir = Buffer.alloc(6);
    iconDir.writeUInt16LE(0, 0); // Reserved
    iconDir.writeUInt16LE(1, 2); // Type: 1 = ICO
    iconDir.writeUInt16LE(icoSizes.length, 4); // Number of images

    const iconDirEntries = [];
    let offset = 6 + (16 * icoSizes.length);

    for (let i = 0; i < icoSizes.length; i++) {
        const entry = Buffer.alloc(16);
        const size = icoSizes[i];
        entry.writeUInt8(size === 256 ? 0 : size, 0);
        entry.writeUInt8(size === 256 ? 0 : size, 1);
        entry.writeUInt8(0, 2);
        entry.writeUInt8(0, 3);
        entry.writeUInt16LE(1, 4);
        entry.writeUInt16LE(32, 6);
        entry.writeUInt32LE(buffers[i].length, 8);
        entry.writeUInt32LE(offset, 12);
        iconDirEntries.push(entry);
        offset += buffers[i].length;
    }

    const ico = Buffer.concat([iconDir, ...iconDirEntries, ...buffers]);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'favicon.ico'), ico);
    console.log(`✅ Generated favicon.ico containing sizes: ${icoSizes.join(', ')}`);
}

generateFavicons().catch(err => {
    console.error('Error generating favicons:', err);
    process.exit(1);
});
