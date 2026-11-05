import fs from 'node:fs/promises';
const read = p => fs.readFile(new URL('../'+p, import.meta.url),'utf8');
const [header,styles,runtime,body] = await Promise.all(['header.html','header-styles.html','header-runtime.html','body-tag.html'].map(p=>read('components/'+p)));
await fs.mkdir('dist',{recursive:true});
await fs.writeFile('dist/index.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Capitalist ltd Party — header preview</title>${styles}</head>${body}${header}${runtime}</body></html>`);
console.log('Built original-header preview. This is not the full website.');
