import type { RoadmapChapterBase } from './App.types';

export const CHAPTERS_ES: RoadmapChapterBase[] = [
  {
    id: 1,
    badge: 'ITO-1A',
    title: 'Economía PvP e infraestructura',
    subtitle: 'Donde el juego cobra vida y se valida la economía.',
    status: 'Alpha cerrada · 0% — próximo',
    statusVariant: 'alpha',
    progress: 0,
    accent: 'from-orange-500/28 via-amber-500/12 to-transparent',
    tone: 'amber',
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
    statusVariant: 'in_dev',
    progress: 0,
    accent: 'from-violet-500/22 via-purple-600/10 to-transparent',
    tone: 'violet',
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
    statusVariant: 'q_window',
    progress: 0,
    accent: 'from-sky-400/18 via-cyan-500/8 to-transparent',
    tone: 'cyan',
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
    statusVariant: 'planned',
    progress: 0,
    accent: 'from-emerald-400/18 via-teal-600/8 to-transparent',
    tone: 'emerald',
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

export const CHAPTERS_EN: RoadmapChapterBase[] = [
  {
    id: 1,
    badge: 'ITO-1A',
    title: 'PvP economy & infrastructure',
    subtitle: 'Where the game comes alive and the economy proves itself.',
    status: 'Closed alpha · 0% — up next',
    statusVariant: 'alpha',
    progress: 0,
    accent: 'from-orange-500/28 via-amber-500/12 to-transparent',
    tone: 'amber',
    sections: [
      {
        title: 'Goal for this phase',
        items: [
          {
            bold: 'Validate before opening up',
            text: 'Audit servers, stability, and the anti-abuse system with real data; tune the competitive loop before general public access.',
          },
        ],
      },
      {
        title: 'Pre–Season 1',
        lead: 'Per-match escrow deposit; points feed your standing toward the TGE (token generation event).',
        metrics: [
          {
            kicker: 'Entry',
            value: '10 RON',
            detail: 'Per player and match, held in escrow per the match contract.',
          },
          {
            kicker: 'Win',
            value: '1,000 pts',
            detail: 'Ranking points that build your track record toward the TGE.',
          },
          {
            kicker: 'Loss',
            value: '600 pts',
            detail: 'Credit for playing fair and finishing the match; still counts toward the leaderboard.',
          },
        ],
      },
      {
        title: 'Pot rake (10% fee)',
        lead: 'At maturity the winner takes 90% of the pot; the remaining 10% serves a macro role based on the settlement asset.',
        items: [
          {
            bold: 'Pre–Season 1',
            text: '100% of that fee goes to development and servers—operations first, no distractions.',
          },
          {
            bold: 'Mature phase — TOD legs',
            text: '5% to NFT holders via a published pool and 5% to permanent burn, aligning community value with supply.',
          },
          {
            bold: 'Mature phase — RON legs',
            text: '8% to liquidity and 2% to operations—for market depth and sustainable execution.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    badge: 'ITO-1B',
    title: 'Competitive integrity',
    subtitle: 'Clear rules so the best player wins—no shortcuts.',
    status: 'In development',
    statusVariant: 'in_dev',
    progress: 0,
    accent: 'from-violet-500/22 via-purple-600/10 to-transparent',
    tone: 'violet',
    sections: [
      {
        title: 'Uncertainty MMR',
        items: [
          {
            bold: 'New accounts, controlled risk',
            text: 'Freshly calibrated accounts enter a trial phase with higher variance on the ladder. Withdrawals may be held 7–30 days while we confirm consistent human behavior—we protect the ecosystem without punishing legitimate players.',
          },
        ],
      },
      {
        title: 'Smart ELO system',
        items: [
          {
            bold: 'Context-aware scoring',
            text: 'Wins weigh differently based on true opponent difficulty: beating someone above you pays more; losing to a clearly weaker rival hurts your record more.',
          },
          {
            bold: 'Dynamic K-factor',
            text: 'We detect abnormal streaks and adjust climb speed so real profiles rank up without opening the door to covert smurfing.',
          },
        ],
      },
      {
        title: 'Zero collusion',
        items: [
          {
            bold: 'Daily cap per opponent',
            text: 'No more than five matches per day against the same player. The goal is a transparent ladder where volume cannot replace merit.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    badge: 'ITO-2',
    title: 'Capital & tokenomics',
    subtitle: 'Fixed supply, full transparency. Funding = depth.',
    status: 'Q1–Q2 2027',
    statusVariant: 'q_window',
    progress: 0,
    accent: 'from-sky-400/18 via-cyan-500/8 to-transparent',
    tone: 'cyan',
    sections: [
      {
        title: 'North star',
        items: [
          {
            bold: 'Funding = depth',
            text: 'Capital is earmarked for deep markets and serious product execution—not short-term extraction cycles.',
          },
        ],
      },
      {
        title: 'TOD max supply',
        items: [
          {
            bold: 'Hard cap, immutable',
            text: 'Ten million tokens with no further programmed issuance—scarcity is by design, not a later patch.',
          },
        ],
      },
      {
        title: 'First million (TGE distribution)',
        lead: 'This tranche concentrates the circulating launch with explicit rules and measurable merit.',
        metrics: [
          { kicker: 'Auction', value: '80%', detail: '800,000 TOD to the top bidder in RON.' },
          {
            kicker: 'Referrals',
            value: '5%',
            detail: '50,000 TOD: 100 points per win by your invitees on the public leaderboard.',
          },
          {
            kicker: 'Purchase option',
            value: '5%',
            detail: '50,000 TOD at the average auction clearing price—fairness versus tactical minimum bids.',
          },
          { kicker: 'Merit', value: '10%', detail: '100,000 TOD from accumulated weekly points.' },
        ],
      },
      {
        title: 'Vesting (safety)',
        items: [
          {
            bold: 'Gradual unlock',
            text: '5% monthly releases to avoid liquidity shocks—commitment shows up on the calendar, not just in talk.',
          },
        ],
      },
      {
        title: 'The remaining nine million (100% of the remainder)',
        metrics: [
          {
            kicker: 'Strategic reserve',
            value: '30%',
            detail: '2,700,000 TOD · tournaments and events that sustain long-term engagement.',
          },
          {
            kicker: 'DEX liquidity',
            value: '30%',
            detail: '3,000,000 TOD · Katana / Uniswap pair with RON to deepen secondary trading.',
          },
          {
            kicker: 'NFT + PvP pool',
            value: '25%',
            detail: '2,250,000 TOD · tier rewards and dividends tied to matches.',
          },
          {
            kicker: 'Engineering',
            value: '15%',
            detail: '1,350,000 TOD · roadmap, infrastructure, and meta upkeep.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    badge: 'OPS',
    title: 'Seasons & contingency',
    subtitle: 'Game rhythm and protection when things go wrong.',
    status: 'Planned',
    statusVariant: 'planned',
    progress: 0,
    accent: 'from-emerald-400/18 via-teal-600/8 to-transparent',
    tone: 'emerald',
    sections: [
      {
        title: 'Season 1 & regular cadence',
        items: [
          {
            bold: 'Open beta, data-first',
            text: 'The first season emphasizes technical and economic telemetry—we learn from the real world before accelerating the competitive calendar.',
          },
          {
            bold: 'Stable cadence after that',
            text: 'Two weeks of active play and one week off for patches, new towers, and meta fixes without breaking intra-season integrity.',
          },
        ],
      },
      {
        title: 'Contingency & transparency',
        items: [
          {
            bold: 'Pause button',
            text: 'On critical failures or exploits, PvP can freeze. We would rather pause, bring in specialists, and fix than run a broken system.',
          },
          {
            bold: 'Transparency notice',
            text: 'The ten-million TOD cap is immutable by design. We want every token to matter, with treasury aimed at liquidity and players who think long-term.',
          },
        ],
      },
    ],
  },
];
