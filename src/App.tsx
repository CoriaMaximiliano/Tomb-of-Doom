import React, { useEffect, useMemo, useState } from 'react';
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
  ExternalLink,
  Calculator,
  Download,
  Languages,
} from 'lucide-react';
import type { ChapterStatusVariant, Lang, RoadmapChapter, RoadmapTone } from './App.types';
import { CHAPTERS_EN, CHAPTERS_ES } from './roadmapChapters';
import { getDesgloseDoc } from './roadmapDesglose';
import { getUi } from './roadmapUiStrings';

/**
 * Roadmap — Tomb of Doom (TOD)
 * Fuente única del sitio: repo Tomb-of-Doom. Ver INSTRUCCIONES_PAGINA_ROADMAP.txt
 */
const baseUrl = import.meta.env.BASE_URL;
const HERO_MP4_SRC = `${baseUrl}hero-pantalla-inicial.mp4`;

const WINDOWS_GAME_RELEASE_URL =
  'https://github.com/CoriaMaximiliano/Tomb-of-Doom/releases/tag/1.0.201';

function statusBadgeClass(variant: ChapterStatusVariant, progress: number): string {
  if (progress > 0) {
    return 'text-xs uppercase tracking-widest bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 shadow-[0_0_28px_rgba(249,115,22,0.45)]';
  }
  switch (variant) {
    case 'in_dev':
      return 'text-xs uppercase tracking-widest bg-violet-500/12 text-violet-100 ring-1 ring-violet-400/35';
    case 'q_window':
      return 'text-xs uppercase tracking-widest bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/35';
    case 'planned':
      return 'text-xs uppercase tracking-widest bg-emerald-500/12 text-emerald-100 ring-1 ring-emerald-400/30';
    case 'alpha':
      return 'max-w-[14rem] text-center text-[10px] font-bold leading-snug tracking-normal text-orange-100 sm:max-w-none sm:text-[11px] bg-orange-500/12 ring-1 ring-orange-400/35';
    default:
      return 'text-xs uppercase tracking-widest bg-zinc-800/80 text-slate-200 ring-1 ring-zinc-600/50';
  }
}

const langBtnClass =
  'inline-flex cursor-pointer items-center gap-2 rounded-full border border-sky-500/35 bg-sky-600/15 px-3 py-2 text-xs font-semibold normal-case tracking-normal text-sky-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-[border-color,background-color] hover:border-sky-400/45 hover:bg-sky-500/20';

const Roadmap = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'es';
    const s = localStorage.getItem('tod-roadmap-lang');
    return s === 'en' ? 'en' : 'es';
  });

  const t = getUi(lang);

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';
    document.title = t.docTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.metaDescription);
  }, [lang, t.docTitle, t.metaDescription]);

  const desgloseDoc = useMemo(() => getDesgloseDoc(lang), [lang]);

  const chapters: RoadmapChapter[] = useMemo(() => {
    const src = lang === 'en' ? CHAPTERS_EN : CHAPTERS_ES;
    const icons = [
      <Swords key="i1" className="h-7 w-7 text-orange-300" />,
      <Scale key="i2" className="h-7 w-7 text-violet-200" />,
      <Coins key="i3" className="h-7 w-7 text-cyan-200" />,
      <Trophy key="i4" className="h-7 w-7 text-emerald-200" />,
    ];
    return src.map((ch, i) => ({
      ...ch,
      icon: icons[i],
    }));
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('tod-roadmap-lang', next);
      return next;
    });
  };

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

  const LangToggle = ({ className = '' }: { className?: string }) => (
    <button type="button" onClick={toggleLang} className={`${langBtnClass} ${className}`}>
      <Languages className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>{lang === 'es' ? t.langSwitchToEnglish : t.langSwitchToSpanish}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0d14] via-[#0f111a] to-[#1a1224] text-slate-100 antialiased selection:bg-orange-400/35">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_0%,rgba(88,28,135,0.14),transparent_50%)]" />
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

      <div className="relative mx-auto flex w-full max-w-[min(100%,1440px)] flex-col gap-10 px-4 py-10 md:px-6 md:py-14 xl:flex-row xl:items-start xl:gap-10 2xl:gap-12">
        <div className="order-2 min-w-0 flex-1 xl:order-1 xl:max-w-6xl">
          <header className="mb-14 md:mb-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-10">
              <div className="flex min-h-0 flex-col justify-between gap-8 lg:col-span-5 lg:h-full lg:pr-2">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className={docPill}>{t.docPillTod}</div>
                      <a
                        href="#documento-tod-nft"
                        className={`${docPill} cursor-pointer text-inherit no-underline transition-[border-color,background-color] hover:border-orange-400/40 hover:bg-orange-500/[0.14]`}
                      >
                        {t.docPillNft}
                      </a>
                      <a
                        href={WINDOWS_GAME_RELEASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-600/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100 no-underline shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-[border-color,background-color] hover:border-emerald-400/45 hover:bg-emerald-500/20"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden />
                        {t.downloadShort}
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <LangToggle />
                    </div>
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
                        {t.heroSub}
                      </span>
                    </h1>
                    {lang === 'es' ? (
                      <p className="max-w-xl text-[15px] leading-relaxed text-slate-300 md:text-base">
                        <span className="font-semibold text-slate-200">Visión:</span> un ecosistema{' '}
                        <span className="text-orange-100">Tower Defense 3D</span> donde el valor nace
                        de la <span className="text-orange-100">maestría técnica (skill-first)</span>{' '}
                        y la <span className="text-orange-100">sostenibilidad financiera</span>.
                        Construimos sobre Ronin una economía con reglas claras, lejos de esquemas
                        inflacionarios y del &quot;clic para ganar&quot; de muchos juegos web3.
                      </p>
                    ) : (
                      <p className="max-w-xl text-[15px] leading-relaxed text-slate-300 md:text-base">
                        <span className="font-semibold text-slate-200">Vision:</span> a{' '}
                        <span className="text-orange-100">3D tower defense</span> ecosystem where
                        value comes from{' '}
                        <span className="text-orange-100">technical mastery (skill-first)</span> and{' '}
                        <span className="text-orange-100">financial sustainability</span>. We are
                        building on Ronin an economy with clear rules—far from inflationary schemes
                        and the &quot;click-to-earn&quot; loop of many web3 games.
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm lg:pt-2">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-orange-500/25 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                    <Target className="h-4 w-4 text-orange-400" />
                    {t.tagSkill}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-sky-500/25 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                    <Users className="h-4 w-4 text-sky-300" />
                    {t.tagIntegrity}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-orange-600/30 bg-zinc-900/70 px-3 py-2 text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                    <Flame className="h-4 w-4 text-orange-500" />
                    {t.tagSupply}
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
                    aria-label={t.heroVideoAria}
                  >
                    <source src={HERO_MP4_SRC} type="video/mp4" />
                  </video>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0d14]/80 via-transparent to-transparent" />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end px-3 pb-3 pt-12">
                    <span className="rounded-lg border border-orange-500/35 bg-zinc-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-100 backdrop-blur-sm md:text-[11px]">
                      {t.heroFigcaption}
                    </span>
                  </figcaption>
                </figure>

                <div className="shrink-0 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/15 via-zinc-900/80 to-zinc-950 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_20px_50px_-24px_rgba(234,88,12,0.35)] backdrop-blur-md md:p-6">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-orange-200/90">
                    {t.estadoLabel}
                  </p>
                  <p className="flex items-center gap-2 text-lg font-semibold text-white">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                    </span>
                    {t.estadoStatus}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-300">{t.estadoBody}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />
          </header>

          <div className="mb-10 rounded-2xl border border-zinc-600/40 bg-zinc-900/55 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:p-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-orange-200/90">
              {t.howToReadTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-slate-200">{t.howToReadRoadmap}</span>{' '}
              {t.howToReadRest}
              <span className="font-semibold text-slate-200">{t.howToReadAnnex}</span>{' '}
              {t.howToReadAnnexBody}
            </p>
          </div>

          <div className="relative space-y-7 md:space-y-9">
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
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.35rem]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${ch.accent}`} aria-hidden />
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
                            <span>{t.phaseProgress}</span>
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
                      className={`inline-flex items-center rounded-full px-4 py-1.5 font-extrabold ${statusBadgeClass(ch.statusVariant, ch.progress)}`}
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
                              <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
                                {m.detail}
                              </p>
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

          <section
            id="arquitectura-staking-tod"
            className="relative mt-12 scroll-mt-24 overflow-hidden rounded-[1.35rem] border border-zinc-600/40 bg-gradient-to-br from-zinc-900/95 via-[#10151f] to-[#141828] p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(52,211,153,0.12)] md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[90px]" />
            <div className="pointer-events-none absolute -left-12 bottom-8 h-48 w-48 rounded-full bg-cyan-500/8 blur-[75px]" />

            <h3 className="relative mb-4 flex flex-wrap items-center gap-2 text-xl font-extrabold text-white md:text-2xl">
              <Coins className="h-6 w-6 shrink-0 text-emerald-400" />
              {t.stakingTitle}
            </h3>
            <p className="relative max-w-3xl text-sm leading-relaxed text-slate-300 md:text-[15px]">
              {lang === 'es' ? (
                <>
                  El modelo económico de TOD se fundamenta en un sistema de{' '}
                  <span className="text-slate-200">Staking de Utilidad Eficiente</span>. La
                  rentabilidad y el posicionamiento de los activos no son estáticos; dependen del
                  colateral asignado por el usuario en contratos inteligentes específicos, vinculando
                  el valor del token directamente al uso y la competitividad dentro del juego.
                </>
              ) : (
                t.stakingLead
              )}
            </p>

            <div className="relative mt-10 space-y-12">
              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-emerald-400">1</span>
                  <h4 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.stakingM1Title}
                  </h4>
                </div>
                {lang === 'es' ? (
                  <>
                    <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                      La productividad económica de un activo NFT está regida por un{' '}
                      <span className="text-slate-200">Índice de Eficiencia Operativa (IEO)</span>.
                      Este índice determina qué porcentaje del potencial del NFT se activa en función
                      del colateral depositado en el contrato de recompensas.
                    </p>
                    <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                      <span className="font-semibold text-emerald-100/95">
                        Dinámica de eficiencia:
                      </span>{' '}
                      el NFT operará de forma proporcional al staking realizado. Si se cubre el{' '}
                      <span className="text-emerald-200">50%</span> del colateral requerido, el activo
                      producirá el <span className="text-emerald-200">50%</span> de su bonus de
                      recompensa. El potencial total (
                      <span className="text-emerald-200">+100%</span> de eficiencia) se alcanza al
                      completar el colateral definido por tier.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                      {t.stakingM1p1}
                    </p>
                    <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                      <span className="font-semibold text-emerald-100/95">{t.stakingM1p2Lead}</span>{' '}
                      {t.stakingM1p2}
                    </p>
                  </>
                )}

                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  {t.stakingTblYield}
                </p>
                <div className="overflow-x-auto rounded-2xl border border-zinc-600/50 bg-zinc-950/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                  <table className="w-full min-w-[min(100%,480px)] text-left text-[13px] text-slate-200">
                    <thead>
                      <tr className="border-b border-zinc-600/60 bg-zinc-900/85 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <th className="px-4 py-3">{t.stakingThTier}</th>
                        <th className="px-4 py-3">{t.stakingThStake}</th>
                        <th className="px-4 py-3">{t.stakingThBonus}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700/60">
                      {t.stakingRowsYield.map(([tier, stake, bonus]) => (
                        <tr key={tier} className="bg-zinc-950/40">
                          <td className="px-4 py-2.5 font-mono font-bold text-emerald-200">{tier}</td>
                          <td className="px-4 py-2.5 font-mono text-white">{stake}</td>
                          <td className="px-4 py-2.5 text-slate-300">{bonus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-cyan-400">2</span>
                  <h4 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.stakingM2Title}
                  </h4>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{t.stakingM2p}</p>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                  {t.stakingTblRank}
                </p>
                <div className="overflow-x-auto rounded-2xl border border-zinc-600/50 bg-zinc-950/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                  <table className="w-full min-w-[min(100%,520px)] text-left text-[13px] text-slate-200">
                    <thead>
                      <tr className="border-b border-zinc-600/60 bg-zinc-900/85 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <th className="px-4 py-3">{t.stakingThBand}</th>
                        <th className="px-4 py-3">{t.stakingThLock}</th>
                        <th className="px-4 py-3">{t.stakingThMult}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700/60">
                      {t.stakingRowsRank.map(([rango, lock, mult]) => (
                        <tr key={rango} className="bg-zinc-950/40">
                          <td className="px-4 py-2.5 font-semibold text-cyan-100">{rango}</td>
                          <td className="px-4 py-2.5 font-mono text-white">{lock}</td>
                          <td className="px-4 py-2.5 text-slate-300">{mult}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-orange-400">3</span>
                  <h4 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.stakingP3Title}
                  </h4>
                </div>
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.stakingCardFiniteT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                      {t.stakingCardFiniteB}
                    </p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.stakingCardZeroT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                      {t.stakingCardZeroB}
                    </p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.stakingCardFairT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                      {t.stakingCardFairB}
                    </p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.stakingCardRetainT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                      {t.stakingCardRetainB}
                    </p>
                  </div>
                </div>
                <div
                  className={`${wpCard} border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-zinc-950/80 to-zinc-950/90`}
                >
                  <p className="text-sm font-extrabold text-white">{t.stakingCommitT}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.stakingCommitB}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mt-12 overflow-hidden rounded-[1.35rem] border border-zinc-600/40 bg-gradient-to-br from-zinc-900/95 via-[#15101f] to-[#1f1428] p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(249,115,22,0.15)] md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/14 blur-[95px]" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-emerald-500/10 blur-[80px]" />
            <h3 className="relative mb-4 flex items-center gap-2 text-xl font-extrabold text-white md:text-2xl">
              <GitBranch className="h-6 w-6 text-orange-400" />
              {t.docReadingTitle}
            </h3>
            <p className="relative mb-6 max-w-3xl text-sm leading-relaxed text-slate-300">
              {t.docReadingP1}
            </p>
            <p className="relative mb-8 max-w-3xl text-sm leading-relaxed text-slate-300">
              {t.docReadingP2}
            </p>

            <div className="relative flex flex-col items-start gap-3 rounded-2xl border border-zinc-600/45 bg-zinc-900/70 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Server className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
                <div>
                  <p className="text-sm font-bold text-white">{t.ecoNoticeTitle}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{t.ecoNoticeBody}</p>
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
              <div className={docPill}>{t.nftLeadPill}</div>
              <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                {t.nftMainTitle}
              </h2>
              <p className="text-lg font-semibold leading-snug text-orange-100/95 md:text-xl">
                {t.nftMainSub}
              </p>
              <div className="space-y-4 text-[15px] leading-relaxed text-slate-300 md:text-base">
                <p>{t.nftIntro}</p>
              </div>
              <p className="mt-6">
                <a
                  href={WINDOWS_GAME_RELEASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-600/15 px-4 py-2.5 text-sm font-bold text-emerald-50 no-underline shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-[border-color,background-color] hover:border-emerald-400/55 hover:bg-emerald-500/25"
                >
                  <Download className="h-4 w-4 shrink-0" aria-hidden />
                  {t.nftDlFull}
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                </a>
              </p>
            </div>

            <div className="relative mt-12 space-y-14">
              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-orange-400">1</span>
                  <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.nftS1Title}
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{t.nftS1p}</p>
                <div className="overflow-x-auto rounded-2xl border border-zinc-600/50 bg-zinc-950/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
                  <table className="w-full min-w-[min(100%,520px)] text-left text-[13px] text-slate-200">
                    <thead>
                      <tr className="border-b border-zinc-600/60 bg-zinc-900/85 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <th className="px-4 py-3">{t.stakingThTier}</th>
                        <th className="px-4 py-3">{t.nftThSupply}</th>
                        <th className="px-4 py-3">{t.nftThNotes}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700/60">
                      {t.nftTierRows.map(([tier, sup, note]) => (
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
                  <p className="text-sm font-extrabold text-white">{t.nftBreakTitle}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                    <span className="font-semibold text-orange-100">
                      {lang === 'es' ? 'Tope agregado por diseño.' : 'Aggregate design cap.'}
                    </span>{' '}
                    {lang === 'es'
                      ? 'Suma de cupos por tier (suministro máximo teórico antes de políticas de reserva):'
                      : 'Sum of per-tier quotas (theoretical max supply before reserve policy):'}
                  </p>
                  <p className="mt-3 rounded-xl border border-zinc-600/50 bg-zinc-950/80 px-4 py-3 font-mono text-[12px] leading-relaxed text-slate-100 md:text-[13px]">
                    {t.nftBreakFormula}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-200">{t.nftBreakP2}</p>

                  <p className="mt-3 rounded-xl border border-zinc-600/50 bg-zinc-950/80 px-4 py-3 font-mono text-[12px] leading-relaxed text-slate-100 md:text-[13px] whitespace-pre-line">
                    {t.nftBreakMath}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-200">{t.nftBreakP3}</p>
                  <ul className="mt-2 list-inside list-disc space-y-1.5 text-[13px] leading-relaxed text-slate-200 marker:text-orange-400">
                    <li>{t.nftBreakLi1}</li>
                    <li>{t.nftBreakLi2}</li>
                    <li>{t.nftBreakLi3}</li>
                  </ul>
                  <p className="mt-3 text-[12px] leading-relaxed text-slate-400">{t.nftBreakNote}</p>
                </div>

                <div className="grid gap-3.5 md:grid-cols-2">
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftCardInstT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftCardInstB}</p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftCardSchedT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftCardSchedB}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-orange-400">2</span>
                  <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.nftS2Title}
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{t.nftS2p}</p>
                <div className="grid gap-3.5 md:grid-cols-2">
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftCardOrgT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftCardOrgB}</p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftCardAsymT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftCardAsymB}</p>
                  </div>
                  <div className={`${wpCard} md:col-span-2`}>
                    <p className="text-sm font-extrabold text-white">{t.nftCardElemT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftCardElemB}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-orange-400">3</span>
                  <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.nftS3Title}
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{t.nftS3p}</p>
                <div className="grid gap-3.5 md:grid-cols-2">
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftCardHerT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftCardHerB}</p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftCardAucT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftCardAucB}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-orange-400">4</span>
                  <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.nftS4Title}
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{t.nftS4p}</p>
                <div className="rounded-2xl border border-zinc-600/50 bg-zinc-950/90 p-5 font-mono text-sm text-slate-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] md:text-base">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-200/90">
                    {t.nftAlgoTitle}
                  </p>
                  <p className="mt-3 text-center text-lg text-white md:text-xl">
                    Mint = max(0, min(Ep, Ci)) · Am
                  </p>
                </div>
                <ul className="max-w-3xl list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-300 marker:text-orange-400">
                  <li>{t.nftAlgoLi1}</li>
                  <li>{t.nftAlgoLi2}</li>
                  <li>{t.nftAlgoLi3}</li>
                </ul>
              </div>

              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-orange-400">5</span>
                  <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.nftS5Title}
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{t.nftS5p}</p>
                <div className="grid gap-3.5 md:grid-cols-2">
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftFlowSecT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftFlowSecB}</p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftFlowBetT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftFlowBetB}</p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftFlowSaleT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftFlowSaleB}</p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftFlowBizT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftFlowBizB}</p>
                  </div>
                  <div className={`${wpCard} md:col-span-2`}>
                    <p className="text-sm font-extrabold text-white">{t.nftFlowFairT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">{t.nftFlowFairB}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className={wpSectionTitle}>
                  <span className="font-mono text-sm font-bold text-orange-400">6</span>
                  <h3 className="text-lg font-extrabold tracking-tight text-white md:text-xl">
                    {t.nftS6Title}
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{t.nftS6p}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-orange-500/25 bg-orange-500/10 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-orange-200/90">
                      {t.nftMultLabel}
                    </p>
                    <p className="mt-3 font-mono text-[13px] leading-relaxed text-slate-200 whitespace-pre-line">
                      {t.nftMultLines}
                    </p>
                  </div>
                  <div className={wpCard}>
                    <p className="text-sm font-extrabold text-white">{t.nftModelFocusT}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-200">
                      {t.nftModelFocusB}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside
          id="enlaces-oficiales"
          className="order-1 flex w-full max-w-[220px] shrink-0 flex-col self-center xl:self-start xl:order-2 xl:sticky xl:top-8 xl:max-w-none xl:w-48 2xl:w-52"
          aria-label={t.asideAriaLabel}
        >
          <div className="relative flex min-h-[min(72vh,520px)] w-full flex-col overflow-hidden rounded-2xl border border-orange-500/35 bg-gradient-to-b from-zinc-900/95 via-zinc-950/98 to-[#120a18] p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_20px_60px_-20px_rgba(249,115,22,0.12)] ring-1 ring-orange-500/15 xl:min-h-[calc(100dvh-6rem)] xl:p-3.5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-80" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-200/90">
              {t.asideTitle}
            </p>

            <nav className="mt-4 flex flex-col gap-2" aria-label={t.asideNavAria}>
              <a
                href="https://discord.gg/qAVWRgWhSe"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-[#5865F2]/40 bg-[#5865F2]/10 px-2.5 py-2.5 text-xs font-semibold text-slate-100 no-underline transition-[border-color,background-color,box-shadow] hover:border-[#5865F2]/70 hover:bg-[#5865F2]/18 hover:shadow-[0_0_20px_-8px_rgba(88,101,242,0.4)]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#5865F2]/25 text-sm font-bold text-white">
                  D
                </span>
                <span className="min-w-0 flex-1 truncate">Discord</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-300 opacity-60 transition group-hover:opacity-100" />
              </a>
              <a
                href="https://x.com/TombofDoomDOT"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-zinc-500/45 bg-zinc-950/70 px-2.5 py-2.5 text-xs font-semibold text-slate-100 no-underline transition-[border-color,background-color,box-shadow] hover:border-slate-400/55 hover:bg-zinc-900/85 hover:shadow-[0_0_18px_-10px_rgba(255,255,255,0.1)]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-zinc-800 text-[10px] font-black tracking-tight text-white">
                  X
                </span>
                <span className="min-w-0 flex-1 truncate">X</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-300 opacity-60 transition group-hover:opacity-100" />
              </a>

              <details className="rounded-lg border border-orange-500/35 bg-zinc-950/75 text-left transition-[border-color,box-shadow] open:border-orange-400/45 open:shadow-[0_0_20px_-10px_rgba(249,115,22,0.2)]">
                <summary className="flex cursor-pointer list-none items-center gap-2 px-2.5 py-2.5 text-xs font-semibold text-slate-100 outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-orange-500/20 text-orange-100">
                    <Calculator className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 leading-snug">{t.asideMathDetail}</span>
                </summary>
                <div className="max-h-[min(70vh,480px)] overflow-y-auto overscroll-contain border-t border-orange-500/20 bg-[#0a0c12]/95 px-2 py-2">
                  <pre className="whitespace-pre-wrap break-words font-sans text-[9px] leading-relaxed text-slate-300">
                    {desgloseDoc}
                  </pre>
                </div>
              </details>

              <a
                href={WINDOWS_GAME_RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-600/12 px-2.5 py-2.5 text-xs font-semibold text-slate-100 no-underline transition-[border-color,background-color,box-shadow] hover:border-emerald-400/60 hover:bg-emerald-500/18 hover:shadow-[0_0_18px_-8px_rgba(16,185,129,0.35)]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-emerald-600/25 text-emerald-100">
                  <Download className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 leading-snug">{t.downloadShort}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-300 opacity-60 transition group-hover:opacity-100" />
              </a>

              <LangToggle className="w-full justify-center" />
            </nav>

            <div className="mt-3 min-h-[1px] flex-1" aria-hidden />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Roadmap;
