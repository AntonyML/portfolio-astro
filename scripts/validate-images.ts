/// <reference types="node" />
// simple validation script executed via ts-node
import { sync } from 'glob';


// asegurarse de que sólo hay .webp en public
const bad: string[] = sync('public/**/*.{png,jpg,jpeg,gif,svg,bmp}');
if (bad.length) {
  console.error('¡Se han encontrado imágenes no‑WebP!');
  bad.forEach((f: string) => console.error('  ' + f));
  process.exit(1);
}
console.log('Todas las imágenes son WebP');
