import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
try {
  await fs.access(outputDir);
} catch {
  await fs.mkdir(outputDir, { recursive: true });
}

// Sizes for responsive images
const sizes = [400, 800, 1200];

async function optimizeImage(inputPath, filename) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Generate responsive images
  for (const width of sizes) {
    if (width <= metadata.width) {
      await image
        .resize(width)
        .jpeg({ 
          quality: 80,
          progressive: true,
          force: false,
        })
        .toFile(path.join(outputDir, `${path.parse(filename).name}-${width}.jpg`));
    }
  }

  // Generate base optimized image
  await image
    .jpeg({ 
      quality: 80,
      progressive: true,
      force: false,
    })
    .toFile(path.join(outputDir, filename));

  // Generate placeholder blur
  await image
    .resize(20)
    .blur()
    .toFile(path.join(outputDir, `${path.parse(filename).name}-placeholder.jpg`));
}

async function processImages() {
  const files = (await fs.readdir(inputDir)).filter(file => 
    file.match(/\.(jpg|jpeg|png)$/i)
  );

  for (const file of files) {
    console.log(`Optimizing ${file}...`);
    await optimizeImage(path.join(inputDir, file), file);
  }

  console.log('Image optimization complete!');
}

processImages().catch(console.error);
