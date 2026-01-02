import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const inputPath = './public/hero-van.png'; // User needs to save image here first
const outputPath = './public/hero-van-optimized.png';

async function optimizeHeroImage() {
  try {
    // Check if input file exists
    try {
      await fs.access(inputPath);
    } catch (error) {
      console.error(`Error: Input image file not found at ${inputPath}`);
      console.error('Please save your service van image as "hero-van.png" in the public folder first.');
      return;
    }

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Original: ${metadata.width}x${metadata.height}, ${Math.round(metadata.size / 1024)}KB`);

    // Optimize for hero section - multiple sizes for responsive images
    // Large size: 1920x1080 for desktop
    await image
      .clone()
      .resize(1920, 1080, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 85, 
        mozjpeg: true,
        progressive: true 
      })
      .toFile('./public/hero-van-1920.jpg');

    const largeMetadata = await sharp('./public/hero-van-1920.jpg').metadata();
    console.log(`Large (1920x1080): ${largeMetadata.width}x${largeMetadata.height}, ${Math.round(largeMetadata.size / 1024)}KB`);

    // Medium size: 1280x720 for tablets
    await image
      .clone()
      .resize(1280, 720, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 85, 
        mozjpeg: true,
        progressive: true 
      })
      .toFile('./public/hero-van-1280.jpg');

    const mediumMetadata = await sharp('./public/hero-van-1280.jpg').metadata();
    console.log(`Medium (1280x720): ${mediumMetadata.width}x${mediumMetadata.height}, ${Math.round(mediumMetadata.size / 1024)}KB`);

    // Small size: 800x450 for mobile
    await image
      .clone()
      .resize(800, 450, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 80, 
        mozjpeg: true,
        progressive: true 
      })
      .toFile('./public/hero-van-800.jpg');

    const smallMetadata = await sharp('./public/hero-van-800.jpg').metadata();
    console.log(`Small (800x450): ${smallMetadata.width}x${smallMetadata.height}, ${Math.round(smallMetadata.size / 1024)}KB`);

    // Generate WebP versions for better compression (especially on mobile)
    console.log('\nGenerating WebP versions for better mobile performance...');
    
    // WebP 1920
    await image
      .clone()
      .resize(1920, 1080, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile('./public/hero-van-1920.webp');
    
    // WebP 1280
    await image
      .clone()
      .resize(1280, 720, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile('./public/hero-van-1280.webp');
    
    // WebP 800 (most important for mobile)
    await image
      .clone()
      .resize(800, 450, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80 })
      .toFile('./public/hero-van-800.webp');

    const webp800Metadata = await sharp('./public/hero-van-800.webp').metadata();
    const jpg800Metadata = await sharp('./public/hero-van-800.jpg').metadata();
    const savings = Math.round(((jpg800Metadata.size - webp800Metadata.size) / jpg800Metadata.size) * 100);
    
    console.log(`\nWebP 800: ${webp800Metadata.width}x${webp800Metadata.height}, ${Math.round(webp800Metadata.size / 1024)}KB`);
    console.log(`JPG 800: ${jpg800Metadata.width}x${jpg800Metadata.height}, ${Math.round(jpg800Metadata.size / 1024)}KB`);
    console.log(`💾 WebP saves ${savings}% on mobile!`);

    console.log('\n✅ Hero image optimized successfully!');
    console.log('Created responsive images:');
    console.log('  JPG: hero-van-1920.jpg, hero-van-1280.jpg, hero-van-800.jpg');
    console.log('  WebP: hero-van-1920.webp, hero-van-1280.webp, hero-van-800.webp');
  } catch (error) {
    console.error('Error optimizing hero image:', error);
  }
}

optimizeHeroImage();
