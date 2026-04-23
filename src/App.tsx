import React from 'react';
import {
  Shield,
  Swords,
  Coins,
  Server,
  Flame,
  Trophy,
  Users,
  Target,
  GitBranch,
  Scale,
} from 'lucide-react';

/**
 * Roadmap — Tomb of Doom (TOD)
 * Pegá este archivo en bolt.new (React + Tailwind + lucide-react).
 *
 * Hero: vídeo `hero-pantalla-inicial.mp4` en `public/` (duración completa; GIF largo puede cortarse).
 */
const baseUrl =
  (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
const HERO_MP4_SRC = `${baseUrl}hero-pantalla-inicial.mp4`;

type RoadmapTone = 'amber' | 'violet' | 'cyan' | 'emerald';

type RoadmapCard = { bold: string; text: string };

type RoadmapMetric = { kicker: string; value: string; detail: string };

type RoadmapSection = {
  title: string;
  lead?: string;
  items?: RoadmapCard[];
  metrics?: RoadmapMetric[];
};

type RoadmapChapter = {
  id: number;
  /** Etiqueta corta sobre el icono (ej. ITO-1A) */
  badge: string;
  title: string;
  subtitle: string;
  status: string;
  progress: number;
  accent: string;
  tone: RoadmapTone;
  sections: RoadmapSection[];
  icon: React.ReactNode;
};

const Roadmap = () => {
  const chapters: RoadmapChapter[] = [
    {
      id: 1,
      badge: 'ITO-1A',
      title: 'Economía PvP e infraestructura',
      subtitle: 'Donde el juego cobra vida y se valida la economía.',
      status: 'Alpha cerrada · 0% — próximo',
      progress: 0,
      accent: 'from-orange-500/28 via-amber-500/12 to-transparent',
      tone: 'amber',
      icon: <Swords className="h-7 w-7 text-orange-300" />,
      sections: [
        {
          title: 'Objetivo en esta fase',
          items: [
            {
              bold: 'Validación antes de abrir',
              text: 'Auditar servidores, estabilidad y el sistema anti-abuso con datos reales; calibrar el loop competitivo antes del acceso público general.',
            },
          ],
        },
        {
          title: 'Pre-Temporada 1',
          lead: 'Depósito en escrow por partida; los puntos alimentan tu posición para el TGE (generación del token).',
          metrics: [
            {
              kicker: 'Entrada',
              value: '10 RON',
              detail: 'Por jugador y partida, depositados en escrow según el contrato del match.',
            },
            {
              kicker: 'Victoria',
              value: '1.000 pts',
              detail: 'Puntos de ranking que consolidan tu trayectoria hacia el evento TGE.',
            },
            {
              kicker: 'Derrota',
              value: '600 pts',
              detail: 'Reconocimiento por jugar limpio y cerrar la partida; sigue sumando al ranking.',
            },
          ],
        },
        {
          title: 'Comisión del pozo (fee del 10%)',
          lead: 'En la fase madura el ganador se lleva el 90% del pozo; el 10% restante cumple una función macro según el activo de liquidación.',
          items: [
            {
              bold: 'Pre-Temporada 1',
              text: 'El 100% de esa tarifa se destina a desarrollo y servidores: prioridad operativa, sin distracciones.',
            },
            {
              bold: 'Fase madura — tramos en TOD',
              text: '5% a holders de NFT vía pool publicada y 5% a quema permanente, alineando valor a la comunidad y al suministro.',
            },
            {
              bold: 'Fase madura — tramos en RON',
              text: '8% a liquidez y 2% a operaciones, para profundidad de mercado y ejecución sostenible.',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      badge: 'ITO-1B',
      title: 'Integridad competitiva',
      subtitle: 'Reglas claras para que gane el mejor, sin trampas.',
      status: 'En desarrollo',
      progress: 0,
      accent: 'from-violet-500/22 via-purple-600/10 to-transparent',
      tone: 'violet',
      icon: <Scale className="h-7 w-7 text-violet-200" />,
      sections: [
        {
          title: 'MMR de incertidumbre',
          items: [
            {
              bold: 'Cuentas nuevas, riesgo controlado',
              text: 'Las cuentas recién calibradas pasan por una fase de prueba con mayor varianza en el ranking. Los retiros pueden retenerse entre 7 y 30 días hasta confirmar comportamiento humano y consistente — protegemos el ecosistema sin castigar al jugador legítimo.',
            },
          ],
        },
        {
          title: 'Sistema ELO inteligente',
          items: [
            {
              bold: 'Puntuación con contexto',
              text: 'La victoria pesa distinto según la dificultad real del rival: ganarle a quien está arriba suma más; perder contra un rival claramente inferior duele más en el registro.',
            },
            {
              bold: 'K-Factor dinámico',
              text: 'Detectamos rachas anómalas y ajustamos la velocidad de ascenso para que un perfil real suba de nivel sin abrir la puerta al smurfing encubierto.',
            },
          ],
        },
        {
          title: 'Cero colusión',
          items: [
            {
              bold: 'Tope diario por rival',
              text: 'Máximo de cinco partidas por día contra el mismo oponente. El objetivo es un ranking transparente, donde el volumen no reemplace al mérito.',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      badge: 'ITO-2',
      title: 'Capital y tokenomics',
      subtitle: 'Suministro fijo y transparencia total. Financiación = profundidad.',
      status: 'Q1–Q2 2027',
      progress: 0,
      accent: 'from-sky-400/18 via-cyan-500/8 to-transparent',
      tone: 'cyan',
      icon: <Coins className="h-7 w-7 text-cyan-200" />,
      sections: [
        {
          title: 'Principio rector',
          items: [
            {
              bold: 'Financiación = profundidad',
              text: 'Los fondos se piensan para mercado profundo y ejecución seria del producto, no para ciclos de extracción cortoplacistas.',
            },
          ],
        },
        {
          title: 'Suministro máximo de TOD',
          items: [
            {
              bold: 'Tope fijo e inmutable',
              text: 'Diez millones de tokens, sin emisión adicional programada: la escasez es parte del diseño, no un parche posterior.',
            },
          ],
        },
        {
          title: 'Primer millón (distribución TGE)',
          lead: 'El primer tramo concentra el arranque del circulante con reglas explícitas y meritocracia medible.',
          metrics: [
            { kicker: 'Subasta', value: '80%', detail: '800.000 TOD al mejor postor en RON.' },
            {
              kicker: 'Referidos',
              value: '5%',
              detail: '50.000 TOD: 100 puntos por cada victoria de tus invitados en la tabla publicada.',
            },
            {
              kicker: 'Opción de compra',
              value: '5%',
              detail: '50.000 TOD al precio promedio de la subasta de salida — equidad frente al mínimo táctico.',
            },
            { kicker: 'Meritocracia', value: '10%', detail: '100.000 TOD por puntos semanales acumulados.' },
          ],
        },
        {
          title: 'Vesting (seguridad)',
          items: [
            {
              bold: 'Liberación gradual',
              text: 'Salida del 5% mensual para evitar shocks de liquidez: el compromiso con el proyecto se ve en el calendario, no solo en el discurso.',
            },
          ],
        },
        {
          title: 'Los nueve millones restantes (100% del remanente)',
          metrics: [
            {
              kicker: 'Reserva estratégica',
              value: '30%',
              detail: '2.700.000 TOD · torneos y eventos que sostienen el interés a largo plazo.',
            },
            {
              kicker: 'Liquidez DEX',
              value: '30%',
              detail: '3.000.000 TOD · par en Katana / Uniswap con RON para consolidar el mercado secundario.',
            },
            {
              kicker: 'Pool NFT + PvP',
              value: '25%',
              detail: '2.250.000 TOD · recompensas por tier y dividendos ligados a partidas.',
            },
            {
              kicker: 'Desarrollo técnico',
              value: '15%',
              detail: '1.350.000 TOD · roadmap, infraestructura y mantenimiento del meta.',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      badge: 'OPS',
      title: 'Temporadas y contingencia',
      subtitle: 'El ritmo del juego y protección ante crisis.',
      status: 'Planeado',
      progress: 0,
      accent: 'from-emerald-400/18 via-teal-600/8 to-transparent',
      tone: 'emerald',
      icon: <Trophy className="h-7 w-7 text-emerald-200" />,
      sections: [
        {
          title: 'Temporada 1 y ciclo habitual',
          items: [
            {
              bold: 'Beta abierta con foco en datos',
              text: 'La primera temporada prioriza telemetría técnica y económica: aprendemos del mundo real antes de acelerar el calendario competitivo.',
            },
            {
              bold: 'Ciclo estable a partir de ahí',
              text: 'Dos semanas de competencia activa y una semana de descanso para parches, torres nuevas y saneamiento del meta sin romper la integridad intra-temporada.',
            },
          ],
        },
        {
          title: 'Contingencia y transparencia',
          items: [
            {
              bold: 'Botón de pausa',
              text: 'Ante fallas críticas o exploits, el PvP puede congelarse. Preferimos pausar, traer especialistas y reparar antes que operar un sistema dañado.',
            },
            {
              bold: 'Aviso de transparencia',
              text: 'El límite de diez millones de TOD es inmutable por diseño. Buscamos que cada token tenga peso real, con tesorería orientada a liquidez y a quien juega con criterio.',
            },
          ],
        },
      ],
    },
  ];

  const phaseShell = (tone: RoadmapTone, active: boolean) => {
    const base =
      'relative isolate rounded-[1.35rem] border border-zinc-500/50 bg-gradient-to-br from-zinc-900/92 to-zinc-950/95 p-6 pt-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_12px_40px_-20px_rgba(0,0,0,0.65)] backdrop-blur-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-[1px] hover:border-zinc-400/55 md:p-9 md:pt-10';
    if (!active) {
      const glow = {
        cyan: 'hover:shadow-[0_0_36px_-12px_rgba(34,211,238,0.2)]',
        violet: 'hover:shadow-[0_0_36px_-12px_rgba(167,139,250,0.22)]',
        emerald: 'hover:shadow-[0_0_36px_-12px_rgba(52,211,153,0.2)]',
        amber: 'hover:shadow-[0_0_36px_-12px_rgba(249,115,22,0.18)]',
      }[tone];
      return `${base} ${glow}`;
    }
    return `${base} shadow-[0_24px_70px_-18px_rgba(234,88,12,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] ring-1 ring-orange-500/30`;
  };

  const phaseLeftAccent = (tone: RoadmapTone) =>
    ({
      amber: 'from-orange-500 via-amber-400 to-orange-700',
      cyan: 'from-sky-400 via-cyan-400 to-sky-700',
      violet: 'from-violet-400 via-purple-500 to-violet-900',
      emerald: 'from-emerald-400 via-teal-500 to-emerald-800',
    })[tone];

  const docPill =
    'inline-flex items-center rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]';

  const wpCard =
    'rounded-2xl border border-zinc-600/40 bg-zinc-900/65 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)]';

  const wpSectionTitle =
    'flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-zinc-600/35 pb-3';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0d14] via-[#0f111a] to-[#1a1224] text-slate-100 antialiased selection:bg-orange-400/35">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Cielo / tumba */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(88,28,135,0.14),transparent_50%)]" />
        {/* Brasas / lava (como el puente del juego) */}
        <div className="absolute -top-32 left-1/2 h-[480px] w-[560px] -translate-x-1/2 rounded-full bg-orange-500/14 blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-5%] h-[420px] w-[min(90vw,520px)] rounded-full bg-gradient-to-tr from-red-600/25 via-orange-600/20 to-amber-500/10 blur-[90px]" />
        <div className="absolute bottom-[10%] right-[-15%] h-[360px] w-[420px] rounded-full bg-fuchsia-600/12 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1224]/95" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/35 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[min(100%,1440px)] px-4 py-10 md:px-6 md:py-14">
        <div className="min-w-0 max-w-6xl">
        <header className="mb-14 md:mb-20">
          {/* Grid: misma altura en lg; pills abajo en la columna izquierda para no “flotar” en medio */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-10">
            <div className="flex min-h-0 flex-col justify-between gap-8 lg:col-span-5 lg:h-full lg:pr-2">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <div className={docPill}>Documento · TOD</div>
                  <a
                    href="#documento-tod-nft"
                    className={`${docPill} cursor-pointer text-inherit no-underline transition-[border-color,background-color] hover:border-orange-400/40 hover:bg-orange-500/[0.14]`}
                  >
                    Documento · TOD - NFT
                  </a>
                </div>

                <div className="space-y-4">
                  <h1 className="font-black tracking-tight text-white">
                    <span className="block text-3xl leading-[1.05] text-white/95 md:text-4xl">
                      Tomb of
                    </span>
                    <span className="mt-1 block bg-gradient-to-r from-amber-100 via-orange-400 to-orange-600 bg-clip-text text-5xl leading-[0.95] text-transparent drop-shadow-[0_0_32px_rgba(249,115,22,0.28)] md:text-6xl lg:text-7xl">
                      Doom
                    </span>
                    <span className="mt-3 block text-lg font-semibold tracking-tight text-slate-300 md:text-xl">
                      Arquitectura económica y roadmap
                    </span>
                  </h1>
                  <p className="max-w-xl text-[15px] leading-relaxed text-slate-300 md:text-base">
                    <span className="font-semibold text-slate-200">Visión:</span> un ecosistema{' '}
                    <span className="text-orange-100">Tower Defense 3D</span> donde el valor nace de
                    la <span className="text-orange-100">maestría técnica (skill-first)</span> y la{' '}
                    <span className="text-orange-100">sostenibilidad financiera</span>. Construimos
                    sobre Ronin una economía con reglas claras, lejos de esquemas inflacionarios y
                    del &quot;clic para ganar&quot; de muchos juegos web3.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm lg:pt-2">
                <span className="inline-flex items-center gap-2 rounded-xl border border-orange-500/25 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Target className="h-4 w-4 text-orange-400" />
                  Skill-first, economía real
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-sky-500/25 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Users className="h-4 w-4 text-sky-300" />
                  Integridad (ELO / MMR)
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl border border-orange-600/30 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                  <Flame className="h-4 w-4 text-orange-500" />
                  10M TOD · suministro fijo
                </span>
              </div>
            </div>

            <div className="flex min-h-0 flex-col gap-4 lg:col-span-7 lg:h-full">
              <figure className="relative isolate h-56 w-full overflow-hidden rounded-2xl border border-orange-500/35 bg-zinc-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(59,130,246,0.28),0_18px_40px_-24px_rgba(249,115,22,0.22)] ring-1 ring-orange-500/20 sm:h-64 lg:h-auto lg:min-h-0 lg:flex-1">
                <video
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="auto"
                  aria-label="Tomb of Doom: pantalla inicial del juego (animación en bucle)."
                >
                  <source src={HERO_MP4_SRC} type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0d14]/80 via-transparent to-transparent" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end px-3 pb-3 pt-12">
                  <span className="rounded-lg border border-orange-500/35 bg-zinc-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-100 backdrop-blur-sm md:text-[11px]">
                    Pantalla inicial
                  </span>
                </figcaption>
              </figure>

              <div className="shrink-0 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/15 via-zinc-900/80 to-zinc-950 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_50px_-24px_rgba(234,88,12,0.35)] backdrop-blur-md md:p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-orange-200/90">
                  Estado Actual
                </p>
                <p className="flex items-center gap-2 text-lg font-semibold text-white">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                  </span>
                  Alpha cerrada · 0% — próximo
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  Objetivo: auditar servidores y calibrar el anti-abuso antes de abrir al público.
                  Pre-Temporada 1 con entrada en escrow (10 RON) y puntos de ranking (1.000 victoria /
                  600 derrota) hacia el TGE.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />
        </header>

        <div className="mb-10 rounded-2xl border border-zinc-600/40 bg-zinc-900/55 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-200/90">
            Cómo leer estos documentos
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-slate-200">Roadmap (arriba):</span> cuatro bloques
            ITO — economía PvP e infraestructura, integridad competitiva, capital y tokenomics, y
            temporadas con contingencia.{' '}
            <span className="font-semibold text-slate-200">Anexo NFT (abajo):</span> activos,
            balance, breeding y flujos hacia holders. Podés seguir el orden o saltar al anexo si tu
            foco son los NFT.
          </p>
        </div>

        <div className="relative space-y-7 md:space-y-9">
          {/* Línea de tiempo: gradiente por fase (ya no solo “dorado”) */}
          <div
            className="pointer-events-none absolute bottom-16 left-[26px] top-6 hidden w-[3px] rounded-full opacity-75 md:block"
            style={{
              background:
                'linear-gradient(180deg, rgba(251,146,60,0.88) 0%, rgba(167,139,250,0.55) 28%, rgba(56,189,248,0.55) 62%, rgba(52,211,153,0.8) 100%)',
              boxShadow: '0 0 18px rgba(251,146,60,0.25)',
            }}
          />

          {chapters.map((ch) => (
            <article key={ch.id} className={phaseShell(ch.tone, ch.progress > 0)}>
              {/* Clip solo al fondo: el borde del article no se recorta (evita “borde superior incompleto”) */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.35rem]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ch.accent}`}
                  aria-hidden
                />
              </div>
              <div
                className={`pointer-events-none absolute left-3 top-10 bottom-10 z-[1] w-1 rounded-full bg-gradient-to-b opacity-90 md:left-4 ${phaseLeftAccent(ch.tone)}`}
                aria-hidden
              />

              <div className="relative z-[2] flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4 md:gap-5">
                  <div
                    className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl border ${
                      ch.progress > 0
                        ? 'border-orange-400/40 bg-zinc-950/80 shadow-[0_0_32px_-4px_rgba(249,115,22,0.55)]'
                        : 'border-zinc-600/50 bg-zinc-900/60'
                    }`}
                  >
                    <span className="absolute -right-1 -top-1 max-w-[4.5rem] truncate rounded-full bg-zinc-950/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-orange-100 ring-1 ring-orange-500/30">
                      {ch.badge}
                    </span>
                    {ch.icon}
                  </div>

                  <div className="min-w-0 space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                      {ch.title}
                    </h2>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {ch.subtitle}
                    </p>

                    {ch.progress > 0 && (
                      <div className="pt-2">
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                          <span>Progreso de Fase</span>
                          <span className="font-mono text-orange-200">{ch.progress}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-950 ring-1 ring-zinc-600/60">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-200 shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                            style={{ width: `${ch.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="shrink-0 md:pt-1">
                  <span
                    className={`inline-flex items-center rounded-full px-4 py-1.5 font-extrabold ${
                      ch.progress > 0
                        ? 'text-xs uppercase tracking-widest bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 shadow-[0_0_28px_rgba(249,115,22,0.45)]'
                        : ch.status === 'En desarrollo'
                          ? 'text-xs uppercase tracking-widest bg-violet-500/12 text-violet-100 ring-1 ring-violet-400/35'
                          : ch.status === 'Q1–Q2 2027'
                            ? 'text-xs uppercase tracking-widest bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/35'
                            : ch.status === 'Planeado'
                              ? 'text-xs uppercase tracking-widest bg-emerald-500/12 text-emerald-100 ring-1 ring-emerald-400/30'
                              : ch.status.startsWith('Alpha')
                                ? 'max-w-[14rem] text-center text-[10px] font-bold leading-snug tracking-normal text-orange-100 sm:max-w-none sm:text-[11px] bg-orange-500/12 ring-1 ring-orange-400/35'
                                : ch.status === 'EN CURSO'
                                  ? 'text-xs uppercase tracking-widest bg-orange-500/12 text-orange-100 ring-1 ring-orange-400/35'
                                  : ch.status === 'SIGUIENTE'
                                    ? 'text-xs uppercase tracking-widest bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/35'
                                    : 'text-xs uppercase tracking-widest bg-zinc-800/80 text-slate-200 ring-1 ring-zinc-600/50'
                    }`}
                  >
                    {ch.status}
                  </span>
                </div>
              </div>

              {ch.progress > 0 && (
                <div
                  className="relative z-[2] mt-6 h-px w-full bg-gradient-to-r from-transparent via-orange-400/55 to-transparent md:mt-8"
                  aria-hidden
                />
              )}

              <div className="relative z-[2] mt-8 space-y-10">
                {ch.sections.map((sec, sIdx) => (
                  <div key={`${ch.id}-${sIdx}`} className="space-y-4">
                    <div className="flex flex-col gap-1 border-b border-zinc-600/35 pb-3 md:flex-row md:items-end md:justify-between">
                      <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                        {sec.title}
                      </h3>
                      {sec.lead ? (
                        <p className="max-w-2xl text-[13px] leading-snug text-slate-500 md:text-right">
                          {sec.lead}
                        </p>
                      ) : null}
                    </div>

                    {sec.metrics && sec.metrics.length > 0 ? (
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {sec.metrics.map((m) => (
                          <div
                            key={m.kicker + m.value}
                            className="rounded-2xl border border-zinc-600/45 bg-zinc-950/55 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                          >
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                              {m.kicker}
                            </p>
                            <p className="mt-2 font-mono text-2xl font-bold tracking-tight text-white">
                              {m.value}
                            </p>
                            <p className="mt-2 text-[13px] leading-relaxed text-slate-300">{m.detail}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {sec.items && sec.items.length > 0 ? (
                      <div className="grid gap-3.5 sm:gap-4 md:grid-cols-2">
                        {sec.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="group rounded-2xl border border-zinc-600/40 bg-zinc-900/65 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] transition-[border-color,background-color,box-shadow] duration-200 hover:border-zinc-500/55 hover:bg-zinc-800/70 hover:shadow-[0_0_24px_-12px_rgba(249,115,22,0.12)]"
                          >
                            <div className="flex gap-3">
                              <div
                                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                                  ch.progress > 0
                                    ? 'bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.85)]'
                                    : 'bg-zinc-500 shadow-none group-hover:bg-orange-400 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.45)]'
                                }`}
                              />
                              <div className="min-w-0">
                                <p className="text-sm font-extrabold tracking-tight text-white">
                                  {item.bold}
                                </p>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-200 md:text-sm">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="relative mt-12 overflow-hidden rounded-[1.35rem] border border-zinc-600/40 bg-gradient-to-br from-zinc-900/95 via-[#15101f] to-[#1f1428] p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(249,115,22,0.15)] md:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/14 blur-[95px]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-[80px]" />
          <h3 className="relative mb-4 flex items-center gap-2 text-xl font-extrabold text-white md:text-2xl">
            <GitBranch className="h-6 w-6 text-orange-400" />
            Lectura del documento
          </h3>
          <p className="relative mb-6 max-w-3xl text-sm leading-relaxed text-slate-300">
            Los bloques <span className="text-slate-200">ITO-1A / ITO-1B</span> conviven en el
            mismo tramo de producto: economía de partida e integridad competitiva.{' '}
            <span className="text-slate-200">ITO-2</span> concentra recaudación NFT y reglas de
            suministro. <span className="text-slate-200">OPS</span> define cómo se juega en el
            tiempo (temporadas, parches y pausa ante crisis). Los porcentajes son diseño
            macroeconómico; la implementación puede ajustar detalles técnicos sin romper los
            pilares del protocolo.
          </p>
          <p className="relative mb-8 max-w-3xl text-sm leading-relaxed text-slate-300">
            Las apuestas en <span className="text-slate-200">RON</span> y los{' '}
            <span className="text-slate-200">retiros condicionados al MMR</span> existen para
            proteger el ecosistema frente a abusos y extracción; su operación concreta depende del
            marco legal y técnico aplicable en cada jurisdicción y de la implementación final del
            producto.
          </p>

          <div className="relative flex flex-col items-start gap-3 rounded-2xl border border-zinc-600/45 bg-zinc-900/70 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Server className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
              <div>
                <p className="text-sm font-bold text-white">Aviso de Transparencia Económica</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  Los porcentajes y asignaciones reflejan el diseño macroeconómico; la puesta en
                  marcha on-chain u off-chain puede requerir ajustes técnicos menores, sin abandonar
                  los pilares:{' '}
                  <span className="text-slate-200">competitividad basada en skill</span>,{' '}
                  <span className="text-slate-200">tesorería transparente</span>,{' '}
                  <span className="text-slate-200">suministro máximo fijo (10 millones TOD)</span> y{' '}
                  <span className="text-slate-200">mecanismos deflacionarios acordes al modelo
                  maduro post–Temporada 1</span>. Las mecánicas de apuestas en RON y retiros ligados al
                  MMR se comunican con transparencia y se implementan respetando normativa aplicable.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <Shield className="h-4 w-4 text-orange-400" />
              TOD Protocol
            </div>
          </div>
        </section>

        <section
          id="documento-tod-nft"
          className="relative mt-12 scroll-mt-24 overflow-hidden rounded-[1.35rem] border border-orange-500/30 bg-gradient-to-br from-zinc-900/95 via-[#15101f] to-[#1f1428] p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(249,115,22,0.18)] md:p-10"
        >
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-orange-500/12 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-amber-600/8 blur-[90px]" />

          <div className="relative max-w-3xl space-y-5">
            <div className={docPill}>Documento · TOD - NFT</div>
            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              TOD: Arquitectura económica y whitepaper estratégico
            </h2>
            <p className="text-lg font-semibold leading-snug text-orange-100/95 md:text-xl">
              Sostenibilidad algorítmica y valor estructural de activos
            </p>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-300 md:text-base">
              <p>
                Este documento detalla la infraestructura de activos finitos, las mecánicas de
                equilibrio sistémico y el motor matemático que sustenta el ecosistema TOD. Nuestro
                enfoque prioriza la <span className="text-orange-100">escasez real</span>, la{' '}
                <span className="text-orange-100">meritocracia competitiva</span> y el{' '}
                <span className="text-orange-100">rendimiento de activos</span>, blindando la
                economía frente a la volatilidad sistémica del entorno web3.
              </p>
            </div>
          </div>

          <div className="relative mt-12 space-y-14">
            {/* 1 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">1</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Matriz de escasez y distribución génesis
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                La escasez es el pilar fundamental de nuestra economía. El suministro total está
                estrictamente limitado por una jerarquía de tiers para garantizar la exclusividad y
                la apreciación del valor a largo plazo.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-zinc-600/50 bg-zinc-950/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                <table className="w-full min-w-[min(100%,520px)] text-left text-[13px] text-slate-200">
                  <thead>
                    <tr className="border-b border-zinc-600/60 bg-zinc-900/85 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      <th className="px-4 py-3">Tier</th>
                      <th className="px-4 py-3">Suministro total</th>
                      <th className="px-4 py-3">Notas de rareza</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700/60">
                    {[
                      ['T1', '1.002', 'Base de la pirámide económica.'],
                      ['T2', '502', 'Primer escalón de especialización.'],
                      ['T3', '252', 'Alta demanda estratégica.'],
                      ['T4', '127', 'Umbral de escasez institucional.'],
                      ['T5', '62', 'Prestigio y exclusividad.'],
                      ['T6', '32', 'Rareza extrema.'],
                      ['T7', '12', 'Cénit del ecosistema TOD.'],
                    ].map(([tier, sup, note]) => (
                      <tr key={tier} className="bg-zinc-950/40">
                        <td className="px-4 py-2.5 font-mono font-bold text-orange-200">{tier}</td>
                        <td className="px-4 py-2.5 font-mono text-white">{sup}</td>
                        <td className="px-4 py-2.5 text-slate-300">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className={`${wpCard} border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-zinc-950/80 to-zinc-950/90`}
              >
                <p className="text-sm font-extrabold text-white">Desglose matemático de emisión NFT</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                  <span className="font-semibold text-orange-100">Tope agregado por diseño.</span>{' '}
                  Suma de cupos por tier (suministro máximo teórico antes de políticas de reserva):
                </p>
                <p className="mt-3 rounded-xl border border-zinc-600/50 bg-zinc-950/80 px-4 py-3 font-mono text-[12px] leading-relaxed text-slate-100 md:text-[13px]">
                  Σ NFT = 1.002 + 502 + 252 + 127 + 62 + 32 + 12 ={' '}
                  <span className="text-orange-200">1.989 NFT</span>
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-200">
                  <span className="font-semibold text-orange-100">Reserva institucional (tiers T1–T4).</span>{' '}
                  Se retiene el <span className="text-orange-200">10%</span> únicamente sobre el cupo
                  de los tiers base e intermedio (financiamiento de tesorería de torneos). Tiers T5–T7
                  quedan fuera de este recorte para maximizar escasez en la cúspide.
                </p>
                <p className="mt-2 rounded-xl border border-zinc-600/50 bg-zinc-950/80 px-4 py-3 font-mono text-[12px] leading-relaxed text-slate-100 md:text-[13px]">
                  Cupo T1–T4 = 1.002 + 502 + 252 + 127 = 1.883
                  <br />
                  Reserva = 0,10 × 1.883 = <span className="text-orange-200">188,3 NFT</span>
                  <br />
                  Saldo orientado a circulación primaria ≈ 1.989 − 188,3 ={' '}
                  <span className="text-orange-200">1.800,7 NFT</span>
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-200">
                  <span className="font-semibold text-orange-100">Calendario de salida (sobre el tope
                  Σ = 1.989).</span> Distribución porcentual coherente con la tarjeta «Emisión
                  programada»:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1.5 text-[13px] leading-relaxed text-slate-200 marker:text-orange-400">
                  <li>
                    Génesis: 0,50 × 1.989 = <span className="font-mono text-orange-100">994,5 NFT</span>{' '}
                    (etapa inicial).
                  </li>
                  <li>
                    Subastas semestrales: 0,25 × 1.989 ={' '}
                    <span className="font-mono text-orange-100">497,25 NFT</span> (calendarización
                    2027–2028).
                  </li>
                  <li>
                    Protocolo (eventos, expansión, colchón): 0,25 × 1.989 ={' '}
                    <span className="font-mono text-orange-100">497,25 NFT</span>.
                  </li>
                </ul>
                <p className="mt-3 text-[12px] leading-relaxed text-slate-400">
                  Nota: la reserva del 10% (solo T1–T4) y el calendario 50/25/25% son ejes distintos
                  del diseño; su acoplamiento exacto en contrato puede ordenar prioridades de mint sin
                  superar el tope Σ. Los valores decimales son desglose contable; la tokenización
                  final puede redondear a enteros. La emisión dinámica por temporada sigue el motor de
                  la sección 4 (Mint = max(0, min(Ep, Ci)) · Am).
                </p>
              </div>

              <div className="grid gap-3.5 md:grid-cols-2">
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Reserva institucional</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Se retiene el <span className="text-orange-200">10%</span> únicamente de los tiers
                    1 al 4 para financiar la tesorería de torneos. Los tiers 5, 6 y 7 están exentos,
                    maximizando su escasez.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Emisión programada</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Sobre el cupo total de la matriz: el <span className="text-orange-200">50%</span>{' '}
                    se libera en <span className="text-orange-200">génesis</span>. Un{' '}
                    <span className="text-orange-200">25%</span> adicional se distribuye en{' '}
                    <span className="text-orange-200">subastas semestrales</span> (2027–2028) para
                    amortiguar shocks de oferta. El <span className="text-orange-200">25%</span>{' '}
                    final queda bajo control del protocolo (eventos, calendario de expansión y
                    colchón operativo).
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">2</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Equilibrio competitivo (skill-over-capital)
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                Rechazamos modelos donde el capital garantiza la victoria. El NFT es una ventaja
                estratégica; el motor del éxito sigue siendo la habilidad del jugador.
              </p>
              <div className="grid gap-3.5 md:grid-cols-2">
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Progresión orgánica</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Para desplegar una torre T7 es necesario evolucionar la cadena completa (T1 →
                    T7), generando una demanda constante sobre los activos base.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Asimetría táctica</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Los NFT poseen exclusividad en daño mágico. No obstante, los jugadores
                    free-to-play pueden desplegar unidades con resistencia mágica, obligando al
                    poseedor del NFT a gestionar sus recursos con criterio táctico.
                  </p>
                </div>
                <div className={`${wpCard} md:col-span-2`}>
                  <p className="text-sm font-extrabold text-white">Composición elemental</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Cada NFT posee <span className="text-orange-200">5 partes de ADN</span>. Los
                    ejemplares <span className="text-orange-200">puros</span> (5/5 de un mismo
                    elemento) reciben un bono de sinergia del{' '}
                    <span className="text-orange-200">5%</span>, premiando la especialización sin
                    romper el balance del juego.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">3</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Protocolo de expansión y subastas
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                A mediados de 2027, la expansión demográfica pasará a manos de la comunidad mediante el
                sistema de breeding.
              </p>
              <div className="grid gap-3.5 md:grid-cols-2">
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Herencia y entropía</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    El cruce de dos torres permite generar hasta <span className="text-orange-200">3</span>{' '}
                    crías. Se aplica un factor de entropía del{' '}
                    <span className="text-orange-200">5%</span> en los atributos para evitar la
                    clonación masiva de estrategias ganadoras.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Subastas cíclicas</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    El breeding no tiene un costo inflacionario fijo; opera como un mercado libre en{' '}
                    <span className="text-orange-200">temporadas pares</span>. Las pujas más altas
                    obtienen el derecho de emisión, mientras que las pujas no ganadoras se reembolsan
                    íntegramente.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">4</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Motor algorítmico de emisión (v1.0)
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                La salud del ecosistema está gobernada por un sistema matemático diseñado para la
                supervivencia a largo plazo: amortigua picos de especulación (hype) y recorta la oferta
                ante contracciones de actividad.
              </p>
              <div className="rounded-2xl border border-zinc-600/50 bg-zinc-950/90 p-5 font-mono text-sm text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] md:text-base">
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-200/90">
                  Algoritmo de autorregulación
                </p>
                <p className="mt-3 text-center text-lg text-white md:text-xl">
                  Mint = max(0, min(Ep, Ci)) · Am
                </p>
              </div>
              <ul className="max-w-3xl list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-300 marker:text-orange-400">
                <li>
                  <span className="font-semibold text-slate-200">Emisión potencial (Ep):</span> mide
                  la presión de demanda real basándose en usuarios activos y volumen de red.
                </li>
                <li>
                  <span className="font-semibold text-slate-200">Control de inflación (Ci):</span>{' '}
                  actúa como techo macroeconómico basado en medias móviles para proteger la escasez.
                </li>
                <li>
                  <span className="font-semibold text-slate-200">Ajuste por mercado (Am):</span> freno
                  de emergencia ante caídas de precio. Una contracción en el mercado puede llevar la
                  emisión de nuevos activos a cero.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">5</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Distribución de valor y flujos del ecosistema
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                Poseer un NFT en TOD representa una participación estructural en los flujos
                económicos del juego.
              </p>
              <div className="grid gap-3.5 md:grid-cols-2">
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Mercado secundario (5%)</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    <span className="text-orange-200">2,5%</span> destinado a quema (deflación) y{' '}
                    <span className="text-orange-200">2,5%</span> a la pool de recompensas de los
                    holders.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Apuestas competitivas (10%)</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    <span className="text-orange-200">5%</span> quema,{' '}
                    <span className="text-orange-200">2,5%</span> desarrollo técnico y{' '}
                    <span className="text-orange-200">2,5%</span> a la pool de recompensas.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Ventas in-game (7%)</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    <span className="text-orange-200">2,5%</span> pool de recompensas,{' '}
                    <span className="text-orange-200">2,5%</span> quema y{' '}
                    <span className="text-orange-200">2%</span> tesorería de desarrollo.
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Expansión comercial</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    El <span className="text-orange-200">2,5%</span> de ingresos por publicidad o
                    alianzas globales se destina directamente a los tenedores de NFT.
                  </p>
                </div>
                <div className={`${wpCard} md:col-span-2`}>
                  <p className="text-sm font-extrabold text-white">
                    Justicia contable y eficiencia de tesorería
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Todos los activos participan de esta lógica. Mientras un NFT de cualquier tier no
                    haya sido minteado, los beneficios proporcionales que le corresponderían se
                    redirigen automáticamente a la tesorería de premios, fortaleciendo la bolsa de
                    recompensas para los jugadores activos.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 */}
            <div className="space-y-5">
              <div className={wpSectionTitle}>
                <span className="font-mono text-sm font-bold text-orange-400">6</span>
                <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                  Rendimiento extendido de tokens
                </h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                Los tenedores de NFT cuentan con un multiplicador de recompensa en tokens por partida
                (hasta <span className="text-orange-200">10 partidas diarias</span>), sustentado por
                una reserva de <span className="text-orange-200">225.000</span> tokens.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-orange-500/25 bg-orange-500/10 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-200/90">
                    Multiplicadores por tier
                  </p>
                  <p className="mt-3 font-mono text-[13px] leading-relaxed text-slate-200">
                    T1: +1% · T2: +2% · T3: +3%
                    <br />
                    T4: +10% · T5: +15% · T6: +20% · T7: +30%
                  </p>
                </div>
                <div className={wpCard}>
                  <p className="text-sm font-extrabold text-white">Enfoque del modelo</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    Este modelo no busca una fórmula estática, sino un blindaje pragmático que proteja
                    el valor de los activos en cualquier escenario de mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
