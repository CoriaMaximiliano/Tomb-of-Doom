/**
 * Genera `public/hero-pantalla-inicial.gif` desde `public/hero-pantalla-inicial.ogv`
 * — colores más vivos (eq + paleta 256) y bucle más largo (~22 s).
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

/** Segundos de clip a incluir en el GIF (más = archivo más grande). */
const DURATION_SEC = 22;
/** FPS del GIF (equilibrio suavidad / peso). */
const FPS = 11;
/** Ancho en px (mantiene 16:9). */
const WIDTH = 768;

if (!ffmpegPath) {
  console.error('ffmpeg-static: binario no encontrado');
  process.exit(1);
}
if (!fs.existsSync(input)) {
  console.error('Falta el archivo de entrada:', input);
  process.exit(1);
}

// eq: más saturación y contraste. Paleta 256 + full + Floyd-Steinberg = colores más vivos y menos “lavado”.
const vf = `fps=${FPS},scale=${WIDTH}:-1:flags=lanczos,eq=saturation=1.48:contrast=1.08:brightness=0.02,split[s0][s1];[s0]palettegen=max_colors=256:stats_mode=full[p];[s1][p]paletteuse=dither=floyd_steinberg`;

const r = spawnSync(
  ffmpegPath,
  ['-y', '-i', input, '-t', String(DURATION_SEC), '-an', '-vf', vf, output],
  { stdio: 'inherit' }
);

if (r.status !== 0) {
  console.error('ffmpeg terminó con código', r.status);
  process.exit(r.status ?? 1);
}

const st = fs.statSync(output);
console.log('OK →', output, '≈', (st.size / 1024 / 1024).toFixed(2), 'MB');
