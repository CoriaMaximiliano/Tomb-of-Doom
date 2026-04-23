/**
 * Genera `public/hero-pantalla-inicial.gif` desde `public/hero-pantalla-inicial.ogv`
 * — **toda la duración** del video de entrada (sin `-t`), colores vivos (eq + paleta 256).
 *
 * El FPS y el ancho bajan un poco respecto a un clip corto para que el GIF completo
 * (~80–90 s) no supere fácilmente ~100 MB en el repo.
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

/** FPS del GIF (más bajo = menos peso con videos largos). */
const FPS = 8;
/** Ancho en px (mantiene 16:9). */
const WIDTH = 720;

if (!ffmpegPath) {
  console.error('ffmpeg-static: binario no encontrado');
  process.exit(1);
}
if (!fs.existsSync(input)) {
  console.error('Falta el archivo de entrada:', input);
  process.exit(1);
}

const vf = `fps=${FPS},scale=${WIDTH}:-1:flags=lanczos,eq=saturation=1.48:contrast=1.08:brightness=0.02,split[s0][s1];[s0]palettegen=max_colors=256:stats_mode=full[p];[s1][p]paletteuse=dither=floyd_steinberg`;

// Sin `-t`: se codifica el .ogv entero (duración total del archivo).
const r = spawnSync(ffmpegPath, ['-y', '-i', input, '-an', '-vf', vf, output], { stdio: 'inherit' });

if (r.status !== 0) {
  console.error('ffmpeg terminó con código', r.status);
  process.exit(r.status ?? 1);
}

const st = fs.statSync(output);
console.log('OK →', output, '≈', (st.size / 1024 / 1024).toFixed(2), 'MB');
