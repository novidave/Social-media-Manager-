import {cp,mkdir,rm} from 'node:fs/promises';
import {resolve} from 'node:path';
const out=resolve('dist');if(!out.endsWith('dist'))throw Error('Unexpected output path');
await rm(out,{recursive:true,force:true});await mkdir(out,{recursive:true});
await cp('index.html',out+'/index.html');await cp('src',out+'/src',{recursive:true});
console.log('Built static application in dist/');
