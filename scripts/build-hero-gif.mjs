/**
 * Genera `public/hero-pantalla-inicial.gif` desde `public/hero-pantalla-inicial.ogv`
 * (bucle visual, sin audio, ~10 s máx. para mantener el peso razonable).
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import ffmpegPath from 'ffmpeg-static';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const input = path.join(root, 'public', 'hero-pantalla-inicial.ogv');
const output = path.join(root, 'public', 'hero-pantalla-inicial.gif');

if (!ffmpegPath) {
  console.error('ffmpeg-static: binario no encontrado');
  process.exit(1);
}
if (!fs.existsSync(input)) {
  console.error('Falta el archivo de entrada:', input);
  process.exit(1);
}

const vf =
  'fps=10,scale=720:-1:flags=lanczos,split[s0][s1];[s0]palettegen=128:stats_mode=single[p];[s1][p]paletteuse=dither=bayer';

const r = spawnSync(
  ffmpegPath,
  ['-y', '-i', input, '-t', '10', '-an', '-vf', vf, output],
  { stdio: 'inherit' }
);

if (r.status !== 0) {
  console.error('ffmpeg terminó con código', r.status);
  process.exit(r.status ?? 1);
}

const st = fs.statSync(output);
console.log('OK →', output, '≈', (st.size / 1024 / 1024).toFixed(2), 'MB');
