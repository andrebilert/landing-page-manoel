const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
    const inputPath = path.join(__dirname, 'public', 'favicon.png');
    const outputPath = path.join(__dirname, 'public', 'favicon.ico');

    // Generate multiple sizes for ICO
    const sizes = [16, 32, 48];

    const buffers = await Promise.all(
        sizes.map(size =>
            sharp(inputPath)
                .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
                .png()
                .toBuffer()
        )
    );

    // Create ICO file header
    const iconDir = Buffer.alloc(6);
    iconDir.writeUInt16LE(0, 0); // Reserved
    iconDir.writeUInt16LE(1, 2); // Type: 1 = ICO
    iconDir.writeUInt16LE(sizes.length, 4); // Number of images

    // Create icon directory entries and collect image data
    const iconDirEntries = [];
    let offset = 6 + (16 * sizes.length); // Header + directory entries

    for (let i = 0; i < sizes.length; i++) {
        const entry = Buffer.alloc(16);
        entry.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 0); // Width
        entry.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 1); // Height
        entry.writeUInt8(0, 2); // Color palette
        entry.writeUInt8(0, 3); // Reserved
        entry.writeUInt16LE(1, 4); // Color planes
        entry.writeUInt16LE(32, 6); // Bits per pixel
        entry.writeUInt32LE(buffers[i].length, 8); // Image size
        entry.writeUInt32LE(offset, 12); // Image offset
        iconDirEntries.push(entry);
        offset += buffers[i].length;
    }

    // Combine all parts
    const ico = Buffer.concat([iconDir, ...iconDirEntries, ...buffers]);
    fs.writeFileSync(outputPath, ico);

    console.log(`✅ favicon.ico generated successfully (${(ico.length / 1024).toFixed(1)} KB)`);
    console.log(`   Sizes included: ${sizes.join('x, ')}px`);
}

generateFavicon().catch(console.error);
