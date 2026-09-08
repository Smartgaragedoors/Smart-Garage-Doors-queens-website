// Rebuild optimized blog assets after editing source illustrations or photo assignments.
// Run python -X utf8 scripts/create-blog-illustrations.py first when artwork changes.
import sharp from 'sharp';
import {readFile,writeFile,readdir} from 'node:fs/promises';
const manifest=JSON.parse(await readFile('scripts/blog-illustration-assignments.json','utf8'));
for(const entry of Object.values(manifest)) {
 await sharp('public'+entry.image.replace(/\.webp$/,'.svg')).webp({quality:90}).toFile('public'+entry.image);
}
const photos=JSON.parse(await readFile('scripts/blog-photo-assignments.json','utf8'));
for(const [slug,p] of Object.entries(photos)) {
 await sharp(p.source).rotate().resize(1200,675,{fit:'cover',position:sharp.strategy.attention}).webp({quality:84}).toFile('public'+p.image);
 manifest[slug]={image:p.image,imageAlt:p.imageAlt,kind:'photograph'};
}
await writeFile('src/data/blogImages.manifest.json',JSON.stringify(manifest,null,2)+'\n');
for(const f of await readdir('content/blog')) {
 if(!f.endsWith('.json'))continue;
 const path='content/blog/'+f;
 const post=JSON.parse((await readFile(path,'utf8')).replace(/^\uFEFF/,''));
 const slug=post.slug.replace(/-([a-z0-9]{4})$/i,(whole,suffix)=>/[a-z]/i.test(suffix)&&/[0-9]/.test(suffix)?'':whole);
 if(manifest[slug]){
  post.image=manifest[slug].image;post.imageAlt=manifest[slug].imageAlt;
  await writeFile(path,JSON.stringify(post,null,2)+'\n');
 }
}
console.log(`Prepared ${Object.keys(manifest).length} article images.`);
