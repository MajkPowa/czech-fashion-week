import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { zipSync, strToU8 } from 'fflate';
import { iconPaths, iconLabels } from '../src/lib/iconography.ts';

const output = new URL('../public/icons/', import.meta.url);
await mkdir(output, { recursive: true });
const attributes = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="square" stroke-linejoin="miter"';
const files = {};
const symbols = [];
for (const [name, path] of Object.entries(iconPaths)) {
  const svg = `<svg ${attributes}><path d="${path}" vector-effect="non-scaling-stroke"/></svg>\n`;
  await writeFile(new URL(`${name}.svg`, output), svg);
  files[`${name}.svg`] = strToU8(svg);
  symbols.push(`<symbol id="${name}" viewBox="0 0 24 24"><path d="${path}" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="square" stroke-linejoin="miter" vector-effect="non-scaling-stroke"/></symbol>`);
}
const sprite = `<svg xmlns="http://www.w3.org/2000/svg">${symbols.join('')}</svg>\n`;
const manifest = JSON.stringify({ grid: 24, stroke: 1.65, icons: Object.keys(iconPaths).map(name => ({ name, label: iconLabels[name], file: `${name}.svg` })) }, null, 2);
files['cfw-icons.svg'] = strToU8(sprite);
files['manifest.json'] = strToU8(manifest);
files['README.txt'] = strToU8('CFW iconography\n24 x 24 grid; 1.65px square-cut strokes; currentColor.\nUse individual SVGs or cfw-icons.svg as an SVG symbol sprite.\nIcon-only controls require an accessible name; decorative icons should be hidden from assistive technology.\n');
await writeFile(new URL('cfw-icons.svg', output), sprite);
await writeFile(new URL('manifest.json', output), manifest);
await writeFile(new URL('cfw-icons.zip', output), zipSync(files, { level: 6, mtime: new Date(1980, 0, 1) }));
process.stdout.write(`Exported ${Object.keys(iconPaths).length} CFW icons to ${fileURLToPath(output)}\n`);
