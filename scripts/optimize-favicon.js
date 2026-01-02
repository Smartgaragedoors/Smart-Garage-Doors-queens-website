import sharp from 'sharp';
import { existsSync } from 'fs';
import { stat } from 'fs/promises';
import { join } from 'path';

const faviconPath = join(process.cwd(), 'public', 'favicon.png');
const outputPath = join(process.cwd(), 'public', 'favicon.png');

async function optimizeFavicon() {
  try {
    if (!existsSync(faviconPath)) {
      console.error('Favicon file not found:', faviconPath);
      process.exit(1);
    }

    // Get original image info
    const metadata = await sharp(faviconPath).metadata();
    console.log(`Original: ${metadata.width}x${metadata.height}, ${Math.round(metadata.size / 1024)}KB`);

    // Create optimized 32x32 favicon (primary size)
    const optimized32 = await sharp(faviconPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toBuffer();

    // Write optimized favicon
    await sharp(optimized32).toFile(outputPath);

    const newMetadata = await sharp(outputPath).metadata();
    const stats = await stat(outputPath);
    
    console.log(`Optimized favicon: ${newMetadata.width}x${newMetadata.height}, ${Math.round(stats.size / 1024)}KB`);

    // Also create Apple touch icon (180x180) for mobile
    const appleTouchPath = join(process.cwd(), 'public', 'apple-touch-icon.png');
    await sharp(faviconPath)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(appleTouchPath);

    const appleStats = await stat(appleTouchPath);
    console.log(`Apple touch icon created: 180x180, ${Math.round(appleStats.size / 1024)}KB`);
    console.log('✅ Favicon optimized successfully!');
    
  } catch (error) {
    console.error('Error optimizing favicon:', error);
    process.exit(1);
  }
}

optimizeFavicon();

