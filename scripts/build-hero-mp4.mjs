/**
 * Genera `public/hero-pantalla-inicial.mp4` desde `public/hero-pantalla-inicial.ogv`
 * — **toda la duración** (sin `-t`). H.264 + yuv420p + faststart para `<video>` en web.
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import ffmpegPath from 'ffmpeg-static';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const input = path.join(root, 'public', 'hero-pantalla-inicial.ogv');
const output = path.join(root, 'public', 'hero-pantalla-inicial.mp4');

/** Ancho máximo (16:9). */
const MAX_W = 1280;

if (!ffmpegPath) {
  console.error('ffmpeg-static: binario no encontrado');
  process.exit(1);
}
if (!fs.existsSync(input)) {
  console.error('Falta el archivo de entrada:', input);
  process.exit(1);
}

const vf = `scale='min(${MAX_W},iw)':-2,setsar=1`;

const args = [
  '-y',
  '-i',
  input,
  '-an',
  '-vf',
  vf,
  '-c:v',
  'libx264',
  '-preset',
  'medium',
  '-crf',
  '21',
  '-pix_fmt',
  'yuv420p',
  '-movflags',
  '+faststart',
  output,
];

const r = spawnSync(ffmpegPath, args, { stdio: 'inherit' });

if (r.status !== 0) {
  console.error('ffmpeg terminó con código', r.status);
  process.exit(r.status ?? 1);
}

const st = fs.statSync(output);
console.log('OK →', output, '≈', (st.size / 1024 / 1024).toFixed(2), 'MB');
