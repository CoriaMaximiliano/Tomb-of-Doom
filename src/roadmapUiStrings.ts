import type { Lang } from './App.types';

export type { Lang };

export type UiPack = {
  docTitle: string;
  metaDescription: string;
  docPillTod: string;
  docPillNft: string;
  downloadShort: string;
  downloadLong: string;
  langSwitchToEnglish: string;
  langSwitchToSpanish: string;
  heroSub: string;
  heroVideoAria: string;
  heroFigcaption: string;
  estadoLabel: string;
  estadoStatus: string;
  estadoBody: string;
  tagSkill: string;
  tagIntegrity: string;
  tagSupply: string;
  howToReadTitle: string;
  howToReadRoadmap: string;
  howToReadAnnex: string;
  howToReadRest: string;
  howToReadAnnexBody: string;
  asideAriaLabel: string;
  phaseProgress: string;
  asideTitle: string;
  asideNavAria: string;
  asideMathDetail: string;
  stakingTitle: string;
  stakingLead: string;
  stakingM1Title: string;
  stakingM1p1: string;
  stakingM1p2Lead: string;
  stakingM1p2: string;
  stakingTblYield: string;
  stakingThTier: string;
  stakingThStake: string;
  stakingThBonus: string;
  stakingM2Title: string;
  stakingM2p: string;
  stakingTblRank: string;
  stakingThBand: string;
  stakingThLock: string;
  stakingThMult: string;
  stakingP3Title: string;
  stakingCardFiniteT: string;
  stakingCardFiniteB: string;
  stakingCardZeroT: string;
  stakingCardZeroB: string;
  stakingCardFairT: string;
  stakingCardFairB: string;
  stakingCardRetainT: string;
  stakingCardRetainB: string;
  stakingCommitT: string;
  stakingCommitB: string;
  docReadingTitle: string;
  docReadingP1: string;
  docReadingP2: string;
  ecoNoticeTitle: string;
  ecoNoticeBody: string;
  nftLeadPill: string;
  nftMainTitle: string;
  nftMainSub: string;
  nftIntro: string;
  nftDlFull: string;
  nftS1Title: string;
  nftS1p: string;
  nftThSupply: string;
  nftThNotes: string;
  nftTierRows: [string, string, string][];
  nftBreakTitle: string;
  nftBreakP1: string;
  nftBreakFormula: string;
  nftBreakP2: string;
  nftBreakMath: string;
  nftBreakP3: string;
  nftBreakLi1: string;
  nftBreakLi2: string;
  nftBreakLi3: string;
  nftBreakNote: string;
  nftCardInstT: string;
  nftCardInstB: string;
  nftCardSchedT: string;
  nftCardSchedB: string;
  nftS2Title: string;
  nftS2p: string;
  nftCardOrgT: string;
  nftCardOrgB: string;
  nftCardAsymT: string;
  nftCardAsymB: string;
  nftCardElemT: string;
  nftCardElemB: string;
  nftS3Title: string;
  nftS3p: string;
  nftCardHerT: string;
  nftCardHerB: string;
  nftCardAucT: string;
  nftCardAucB: string;
  nftS4Title: string;
  nftS4p: string;
  nftAlgoTitle: string;
  nftAlgoLi1: string;
  nftAlgoLi2: string;
  nftAlgoLi3: string;
  nftS5Title: string;
  nftS5p: string;
  nftFlowSecT: string;
  nftFlowSecB: string;
  nftFlowBetT: string;
  nftFlowBetB: string;
  nftFlowSaleT: string;
  nftFlowSaleB: string;
  nftFlowBizT: string;
  nftFlowBizB: string;
  nftFlowFairT: string;
  nftFlowFairB: string;
  nftS6Title: string;
  nftS6p: string;
  nftMultLabel: string;
  nftMultLines: string;
  nftModelFocusT: string;
  nftModelFocusB: string;
  stakingRowsYield: [string, string, string][];
  stakingRowsRank: [string, string, string][];
};

const ES: UiPack = {
  docTitle: 'Tomb of Doom — Arquitectura económica y roadmap',
  metaDescription:
    'Roadmap y arquitectura económica de Tomb of Doom: fases, tokenomics y enlaces oficiales.',
  docPillTod: 'Documento · TOD',
  docPillNft: 'Documento · TOD - NFT',
  downloadShort: 'Descarga de Windows y Android (GitHub)',
  downloadLong: 'Descarga de Windows y Android — release 1.0.201 en GitHub',
  langSwitchToEnglish: 'English version',
  langSwitchToSpanish: 'Versión en español',
  heroSub: 'Arquitectura económica y roadmap',
  heroVideoAria: 'Tomb of Doom: pantalla inicial del juego (animación en bucle).',
  heroFigcaption: 'Pantalla inicial',
  estadoLabel: 'Estado Actual',
  estadoStatus: 'Alpha cerrada · 0% — próximo',
  estadoBody:
    'Objetivo: auditar servidores y calibrar el anti-abuso antes de abrir al público. Pre-Temporada 1 con entrada en escrow (10 RON) y puntos de ranking (1.000 victoria / 600 derrota) hacia el TGE.',
  tagSkill: 'Skill-first, economía real',
  tagIntegrity: 'Integridad (ELO / MMR)',
  tagSupply: '10M TOD · suministro fijo',
  howToReadTitle: 'Cómo leer estos documentos',
  howToReadRoadmap: 'Roadmap (arriba):',
  howToReadAnnex: 'Anexo NFT (abajo):',
  howToReadRest:
    'cuatro bloques ITO — economía PvP e infraestructura, integridad competitiva, capital y tokenomics, y temporadas con contingencia. ',
  howToReadAnnexBody:
    'activos, balance, breeding y flujos hacia holders. Podés seguir el orden o saltar al anexo si tu foco son los NFT.',
  asideAriaLabel: 'Enlaces oficiales',
  phaseProgress: 'Progreso de Fase',
  asideTitle: 'Enlaces',
  asideNavAria: 'Redes y comunidad',
  asideMathDetail: 'Desglose matemático de emisión NFT',
  stakingTitle: 'Arquitectura de Staking sin emisión: ecosistema de doble contrato TOD',
  stakingLead:
    'El modelo económico de TOD se fundamenta en un sistema de Staking de Utilidad Eficiente. La rentabilidad y el posicionamiento de los activos no son estáticos; dependen del colateral asignado por el usuario en contratos inteligentes específicos, vinculando el valor del token directamente al uso y la competitividad dentro del juego.',
  stakingM1Title: 'Módulo de rendimiento: contrato de recompensas NFT',
  stakingM1p1:
    'La productividad económica de un activo NFT está regida por un Índice de Eficiencia Operativa (IEO). Este índice determina qué porcentaje del potencial del NFT se activa en función del colateral depositado en el contrato de recompensas.',
  stakingM1p2Lead: 'Dinámica de eficiencia:',
  stakingM1p2:
    'el NFT operará de forma proporcional al staking realizado. Si se cubre el 50% del colateral requerido, el activo producirá el 50% de su bonus de recompensa. El potencial total (+100% de eficiencia) se alcanza al completar el colateral definido por tier.',
  stakingTblYield: 'Tabla de potencial de rendimiento (100% eficiencia)',
  stakingThTier: 'Tier',
  stakingThStake: 'Staking requerido (100%)',
  stakingThBonus: 'Bonus de recompensa',
  stakingM2Title: 'Módulo competitivo: contrato de posición de torneo',
  stakingM2p:
    'Este contrato independiente gestiona la jerarquía en la tabla clasificatoria (leaderboard). Actúa como un multiplicador de puntos globales, optimizando la posición del jugador para el acceso a la bolsa de premios de cada temporada.',
  stakingTblRank: 'Multiplicador de posición en el ranking',
  stakingThBand: 'Rango de staking',
  stakingThLock: 'Requisito de bloqueo',
  stakingThMult: 'Multiplicador de puntos',
  stakingP3Title: 'Pilares de sostenibilidad estratégica',
  stakingCardFiniteT: 'Suministro finito',
  stakingCardFiniteB:
    'El suministro total está estrictamente limitado a 10.000.000 $TOD. No existe mecanismo de emisión adicional.',
  stakingCardZeroT: 'Cero inflación por staking',
  stakingCardZeroB:
    'A diferencia de modelos inflacionarios, este sistema no genera nuevos tokens para pagar recompensas. El valor se redistribuye desde la tesorería y los flujos de comisiones del ecosistema, protegiendo al holder de la dilución.',
  stakingCardFairT: 'Justicia contable',
  stakingCardFairB:
    'Los tokens de recompensas asignados a tiers de NFT que aún no han sido acuñados (minteados) se derivan automáticamente a la tesorería de premios, incrementando los incentivos para la comunidad activa.',
  stakingCardRetainT: 'Objetivo de retención',
  stakingCardRetainB:
    'La estructura de doble contrato está diseñada para incentivar el bloqueo de hasta el 40% del suministro total mediante utilidad real, reduciendo drásticamente la oferta circulante en el mercado abierto.',
  stakingCommitT: 'Compromiso técnico',
  stakingCommitB:
    'TOD es una maquinaria económica donde la escasez y la utilidad operativa trabajan en conjunto. Este diseño asegura que el precio del activo se vea respaldado por la necesidad técnica de los usuarios de mantener liquidez bloqueada para operar al máximo nivel competitivo.',
  docReadingTitle: 'Lectura del documento',
  docReadingP1:
    'Los bloques ITO-1A / ITO-1B conviven en el mismo tramo de producto: economía de partida e integridad competitiva. ITO-2 concentra recaudación NFT y reglas de suministro. OPS define cómo se juega en el tiempo (temporadas, parches y pausa ante crisis). Los porcentajes son diseño macroeconómico; la implementación puede ajustar detalles técnicos sin romper los pilares del protocolo.',
  docReadingP2:
    'Las apuestas en RON y los retiros condicionados al MMR existen para proteger el ecosistema frente a abusos y extracción; su operación concreta depende del marco legal y técnico aplicable en cada jurisdicción y de la implementación final del producto.',
  ecoNoticeTitle: 'Aviso de Transparencia Económica',
  ecoNoticeBody:
    'Los porcentajes y asignaciones reflejan el diseño macroeconómico; la puesta en marcha on-chain u off-chain puede requerir ajustes técnicos menores, sin abandonar los pilares: competitividad basada en skill, tesorería transparente, suministro máximo fijo (10 millones TOD) y mecanismos deflacionarios acordes al modelo maduro post–Temporada 1. Las mecánicas de apuestas en RON y retiros ligados al MMR se comunican con transparencia y se implementan respetando normativa aplicable.',
  nftLeadPill: 'Documento · TOD - NFT',
  nftMainTitle: 'TOD: Arquitectura económica y whitepaper estratégico',
  nftMainSub: 'Sostenibilidad algorítmica y valor estructural de activos',
  nftIntro:
    'Este documento detalla la infraestructura de activos finitos, las mecánicas de equilibrio sistémico y el motor matemático que sustenta el ecosistema TOD. Nuestro enfoque prioriza la escasez real, la meritocracia competitiva y el rendimiento de activos, blindando la economía frente a la volatilidad sistémica del entorno web3.',
  nftDlFull: 'Descarga de Windows y Android — release 1.0.201 en GitHub',
  nftS1Title: 'Matriz de escasez y distribución génesis',
  nftS1p:
    'La escasez es el pilar fundamental de nuestra economía. El suministro total está estrictamente limitado por una jerarquía de tiers para garantizar la exclusividad y la apreciación del valor a largo plazo.',
  nftThSupply: 'Suministro total',
  nftThNotes: 'Notas de rareza',
  nftTierRows: [
    ['T1', '1.002', 'Base de la pirámide económica.'],
    ['T2', '502', 'Primer escalón de especialización.'],
    ['T3', '252', 'Alta demanda estratégica.'],
    ['T4', '127', 'Umbral de escasez institucional.'],
    ['T5', '62', 'Prestigio y exclusividad.'],
    ['T6', '32', 'Rareza extrema.'],
    ['T7', '12', 'Cénit del ecosistema TOD.'],
  ],
  nftBreakTitle: 'Desglose matemático de emisión NFT',
  nftBreakP1:
    'Tope agregado por diseño. Suma de cupos por tier (suministro máximo teórico antes de políticas de reserva):',
  nftBreakFormula: 'Σ NFT = 1.002 + 502 + 252 + 127 + 62 + 32 + 12 = 1.989 NFT',
  nftBreakP2:
    'Reserva institucional (tiers T1–T4). Se retiene el 10% únicamente sobre el cupo de los tiers base e intermedio (financiamiento de tesorería de torneos). Tiers T5–T7 quedan fuera de este recorte para maximizar escasez en la cúspide.',
  nftBreakMath:
    'Cupo T1–T4 = 1.002 + 502 + 252 + 127 = 1.883\nReserva = 0,10 × 1.883 = 188,3 NFT\nSaldo orientado a circulación primaria ≈ 1.989 − 188,3 = 1.800,7 NFT',
  nftBreakP3:
    'Calendario de salida (sobre el tope Σ = 1.989). Distribución porcentual coherente con la tarjeta «Emisión programada»:',
  nftBreakLi1: 'Génesis: 0,50 × 1.989 = 994,5 NFT (etapa inicial).',
  nftBreakLi2: 'Subastas semestrales: 0,25 × 1.989 = 497,25 NFT (calendarización 2027–2028).',
  nftBreakLi3:
    'Protocolo (eventos, expansión, colchón): 0,25 × 1.989 = 497,25 NFT.',
  nftBreakNote:
    'Nota: la reserva del 10% (solo T1–T4) y el calendario 50/25/25% son ejes distintos del diseño; su acoplamiento exacto en contrato puede ordenar prioridades de mint sin superar el tope Σ. Los valores decimales son desglose contable; la tokenización final puede redondear a enteros. La emisión dinámica por temporada sigue el motor de la sección 4 (Mint = max(0, min(Ep, Ci)) · Am).',
  nftCardInstT: 'Reserva institucional',
  nftCardInstB:
    'Se retiene el 10% únicamente de los tiers 1 al 4 para financiar la tesorería de torneos. Los tiers 5, 6 y 7 están exentos, maximizando su escasez.',
  nftCardSchedT: 'Emisión programada',
  nftCardSchedB:
    'El 50% de los activos se libera en la etapa génesis. El 25% restante se distribuirá mediante subastas semestrales (2027–2028) para prevenir shocks de oferta.',
  nftS2Title: 'Equilibrio competitivo (skill-over-capital)',
  nftS2p:
    'Rechazamos modelos donde el capital garantiza la victoria. El NFT es una ventaja estratégica; el motor del éxito sigue siendo la habilidad del jugador.',
  nftCardOrgT: 'Progresión orgánica',
  nftCardOrgB:
    'Para desplegar una torre T7 es necesario evolucionar la cadena completa (T1 → T7), generando una demanda constante sobre los activos base.',
  nftCardAsymT: 'Asimetría táctica',
  nftCardAsymB:
    'Los NFT poseen exclusividad en daño mágico. No obstante, los jugadores free-to-play pueden desplegar unidades con resistencia mágica, obligando al poseedor del NFT a gestionar sus recursos con criterio táctico.',
  nftCardElemT: 'Composición elemental',
  nftCardElemB:
    'Cada NFT posee 5 partes de ADN. Los ejemplares puros (5/5 de un mismo elemento) reciben un bono de sinergia del 5%, premiando la especialización sin romper el balance del juego.',
  nftS3Title: 'Protocolo de expansión y subastas',
  nftS3p:
    'A mediados de 2027, la expansión demográfica pasará a manos de la comunidad mediante el sistema de breeding.',
  nftCardHerT: 'Herencia y entropía',
  nftCardHerB:
    'El cruce de dos torres permite generar hasta 3 crías. Se aplica un factor de entropía del 5% en los atributos para evitar la clonación masiva de estrategias ganadoras.',
  nftCardAucT: 'Subastas cíclicas',
  nftCardAucB:
    'El breeding no tiene un costo inflacionario fijo; opera como un mercado libre en temporadas pares. Las pujas más altas obtienen el derecho de emisión, mientras que las pujas no ganadoras se reembolsan íntegramente.',
  nftS4Title: 'Motor algorítmico de emisión (v1.0)',
  nftS4p:
    'La salud del ecosistema está gobernada por un sistema matemático diseñado para la supervivencia a largo plazo: amortigua picos de especulación (hype) y recorta la oferta ante contracciones de actividad.',
  nftAlgoTitle: 'Algoritmo de autorregulación',
  nftAlgoLi1:
    'Emisión potencial (Ep): mide la presión de demanda real basándose en usuarios activos y volumen de red.',
  nftAlgoLi2:
    'Control de inflación (Ci): actúa como techo macroeconómico basado en medias móviles para proteger la escasez.',
  nftAlgoLi3:
    'Ajuste por mercado (Am): freno de emergencia ante caídas de precio. Una contracción en el mercado puede llevar la emisión de nuevos activos a cero.',
  nftS5Title: 'Distribución de valor y flujos del ecosistema',
  nftS5p:
    'Poseer un NFT en TOD representa una participación estructural en los flujos económicos del juego.',
  nftFlowSecT: 'Mercado secundario (5%)',
  nftFlowSecB:
    '2,5% destinado a quema (deflación) y 2,5% a la pool de recompensas de los holders.',
  nftFlowBetT: 'Apuestas competitivas (10%)',
  nftFlowBetB: '5% quema, 2,5% desarrollo técnico y 2,5% a la pool de recompensas.',
  nftFlowSaleT: 'Ventas in-game (7%)',
  nftFlowSaleB:
    '2,5% pool de recompensas, 2,5% quema y 2% tesorería de desarrollo.',
  nftFlowBizT: 'Expansión comercial',
  nftFlowBizB:
    'El 2,5% de ingresos por publicidad o alianzas globales se deriva directamente a los tenedores de NFT.',
  nftFlowFairT: 'Justicia contable y eficiencia de tesorería',
  nftFlowFairB:
    'Todos los activos participan de esta lógica. Mientras un NFT de cualquier tier no haya sido minteado, los beneficios proporcionales que le corresponderían se desvían automáticamente a la tesorería de premios, fortaleciendo la bolsa de recompensas para los jugadores activos.',
  nftS6Title: 'Rendimiento extendido de tokens',
  nftS6p:
    'Los tenedores de NFT cuentan con un multiplicador de recompensa en tokens por partida (hasta 10 partidas diarias), sustentado por una reserva de 225.000 tokens.',
  nftMultLabel: 'Multiplicadores por tier',
  nftMultLines: 'T1: +1% · T2: +2% · T3: +3%\nT4: +10% · T5: +15% · T6: +20% · T7: +30%',
  nftModelFocusT: 'Enfoque del modelo',
  nftModelFocusB:
    'Este modelo no busca una fórmula estática, sino un blindaje pragmático que proteja el valor de los activos en cualquier escenario de mercado.',
  stakingRowsYield: [
    ['T1', '100 $TOD', '+1%'],
    ['T2', '250 $TOD', '+2%'],
    ['T3', '600 $TOD', '+3%'],
    ['T4', '1.500 $TOD', '+10%'],
    ['T5', '3.000 $TOD', '+15%'],
    ['T6', '5.000 $TOD', '+20%'],
    ['T7', '10.000 $TOD', '+30%'],
  ],
  stakingRowsRank: [
    ['Iniciación', '10 $TOD', '+1%'],
    ['Competidor', '200 $TOD', '+3%'],
    ['Veterano', '1.000 $TOD', '+7%'],
    ['Élite', '2.500 $TOD', '+12%'],
    ['Leyenda', '5.000 $TOD', '+20%'],
  ],
};

const EN: UiPack = {
  docTitle: 'Tomb of Doom — Economic architecture & roadmap',
  metaDescription:
    'Roadmap and economic architecture for Tomb of Doom: phases, tokenomics, and official links.',
  docPillTod: 'Paper · TOD',
  docPillNft: 'Paper · TOD — NFT',
  downloadShort: 'Windows & Android download (GitHub)',
  downloadLong: 'Windows & Android download — release 1.0.201 on GitHub',
  langSwitchToEnglish: 'English version',
  langSwitchToSpanish: 'Versión en español',
  heroSub: 'Economic architecture & roadmap',
  heroVideoAria: 'Tomb of Doom: title screen (looping animation).',
  heroFigcaption: 'Title screen',
  estadoLabel: 'Current status',
  estadoStatus: 'Closed alpha · 0% — up next',
  estadoBody:
    'Goal: audit servers and tune anti-abuse before opening to the public. Pre–Season 1 with escrow entry (10 RON) and ranking points (1,000 win / 600 loss) toward the TGE.',
  tagSkill: 'Skill-first, real economy',
  tagIntegrity: 'Integrity (ELO / MMR)',
  tagSupply: '10M TOD · fixed supply',
  howToReadTitle: 'How to read these documents',
  howToReadRoadmap: 'Roadmap (above):',
  howToReadAnnex: 'NFT annex (below):',
  howToReadRest:
    'four ITO tracks — PvP economy & infrastructure, competitive integrity, capital & tokenomics, and seasons with contingency. ',
  howToReadAnnexBody:
    'assets, balance, breeding, and flows to holders. Follow in order or jump to the annex if NFTs are your focus.',
  asideAriaLabel: 'Official links',
  phaseProgress: 'Phase progress',
  asideTitle: 'Links',
  asideNavAria: 'Social & community',
  asideMathDetail: 'NFT emission math breakdown',
  stakingTitle: 'Zero-emission staking architecture: dual-contract TOD ecosystem',
  stakingLead:
    'TOD’s economic model rests on Efficient Utility Staking. Yield and positioning are not static—they depend on collateral users commit in purpose-built smart contracts, tying token value directly to in-game usage and competitiveness.',
  stakingM1Title: 'Yield module: NFT rewards contract',
  stakingM1p1:
    'An NFT’s economic productivity is governed by an Operational Efficiency Index (OEI). It determines what share of the NFT’s potential activates based on collateral posted to the rewards contract.',
  stakingM1p2Lead: 'Efficiency dynamics:',
  stakingM1p2:
    'the NFT scales with actual staking. At 50% of required collateral, it earns 50% of its reward bonus. Full potential (+100% efficiency) unlocks when tier collateral is complete.',
  stakingTblYield: 'Yield potential table (100% efficiency)',
  stakingThTier: 'Tier',
  stakingThStake: 'Staking required (100%)',
  stakingThBonus: 'Reward bonus',
  stakingM2Title: 'Competitive module: tournament rank contract',
  stakingM2p:
    'This standalone contract manages leaderboard hierarchy. It acts as a global points multiplier, optimizing placement for each season’s prize pool.',
  stakingTblRank: 'Leaderboard position multiplier',
  stakingThBand: 'Staking band',
  stakingThLock: 'Lock requirement',
  stakingThMult: 'Points multiplier',
  stakingP3Title: 'Strategic sustainability pillars',
  stakingCardFiniteT: 'Finite supply',
  stakingCardFiniteB:
    'Total supply is strictly capped at 10,000,000 $TOD. There is no additional issuance mechanic.',
  stakingCardZeroT: 'Zero staking inflation',
  stakingCardZeroB:
    'Unlike inflationary models, this system does not mint new tokens to pay rewards. Value is recycled from treasury and ecosystem fees—protecting holders from dilution.',
  stakingCardFairT: 'Accounting fairness',
  stakingCardFairB:
    'Reward tokens earmarked for NFT tiers that have not been minted yet automatically flow to the prize treasury, boosting incentives for active players.',
  stakingCardRetainT: 'Retention objective',
  stakingCardRetainB:
    'The dual-contract structure is designed to incentivize locking up to 40% of total supply through real utility, materially reducing float on the open market.',
  stakingCommitT: 'Engineering commitment',
  stakingCommitB:
    'TOD is economic machinery where scarcity and operational utility move together. Price is backed by the technical need to keep liquidity locked to compete at the highest level.',
  docReadingTitle: 'Reading this document',
  docReadingP1:
    'ITO-1A / ITO-1B cover the same product slice: match economy and competitive integrity. ITO-2 focuses on NFT fundraising and supply rules. OPS defines how the game runs over time—seasons, patches, and crisis pauses. Percentages are macro design; implementation may tune technical details without breaking protocol pillars.',
  docReadingP2:
    'RON stakes and MMR-gated withdrawals exist to protect the ecosystem from abuse and extraction; how they operate depends on applicable law in each jurisdiction and the final product implementation.',
  ecoNoticeTitle: 'Economic transparency notice',
  ecoNoticeBody:
    'Percentages reflect macro design; on-chain or off-chain rollout may require minor technical tweaks without abandoning the pillars: skill-based competitiveness, transparent treasury, hard cap of ten million TOD, and deflationary mechanics aligned with the mature model after Season 1. RON wagering and MMR-linked withdrawals are communicated transparently and implemented in line with applicable regulation.',
  nftLeadPill: 'Paper · TOD — NFT',
  nftMainTitle: 'TOD: Economic architecture & strategic whitepaper',
  nftMainSub: 'Algorithmic sustainability & structural asset value',
  nftIntro:
    'This paper explains finite asset infrastructure, systemic balance mechanics, and the math engine underpinning TOD. We prioritize real scarcity, competitive meritocracy, and asset performance—shielding the economy from systemic web3 volatility.',
  nftDlFull: 'Windows & Android download — release 1.0.201 on GitHub',
  nftS1Title: 'Scarcity matrix & genesis distribution',
  nftS1p:
    'Scarcity is the cornerstone of our economy. Total supply is strictly capped by a tier ladder to preserve exclusivity and long-term value appreciation.',
  nftThSupply: 'Total supply',
  nftThNotes: 'Rarity notes',
  nftTierRows: [
    ['T1', '1,002', 'Base of the economic pyramid.'],
    ['T2', '502', 'First specialization tier.'],
    ['T3', '252', 'High strategic demand.'],
    ['T4', '127', 'Institutional scarcity threshold.'],
    ['T5', '62', 'Prestige & exclusivity.'],
    ['T6', '32', 'Extreme rarity.'],
    ['T7', '12', 'Apex of the TOD ecosystem.'],
  ],
  nftBreakTitle: 'NFT emission math breakdown',
  nftBreakP1:
    'Aggregate design cap. Sum of per-tier quotas (theoretical max supply before reserve policy):',
  nftBreakFormula: 'Σ NFT = 1,002 + 502 + 252 + 127 + 62 + 32 + 12 = 1,989 NFT',
  nftBreakP2:
    'Institutional reserve (T1–T4). 10% is withheld only on base and mid-tier quotas (tournament treasury funding). T5–T7 are excluded from this haircut to preserve apex scarcity.',
  nftBreakMath:
    'T1–T4 cap = 1,002 + 502 + 252 + 127 = 1,883\nReserve = 0.10 × 1,883 = 188.3 NFT\nBalance aimed at primary circulation ≈ 1,989 − 188.3 ≈ 1,800.7 NFT',
  nftBreakP3:
    'Release calendar (over Σ = 1,989). Percent split aligned with the “Scheduled emission” card:',
  nftBreakLi1: 'Genesis: 0.50 × 1,989 = 994.5 NFT (initial stage).',
  nftBreakLi2: 'Semiannual auctions: 0.25 × 1,989 = 497.25 NFT (2027–2028 cadence).',
  nftBreakLi3: 'Protocol (events, expansion, buffer): 0.25 × 1,989 = 497.25 NFT.',
  nftBreakNote:
    'Note: the 10% reserve (T1–T4 only) and the 50/25/25% calendar are separate design axes; exact contract wiring can prioritize mint order without exceeding Σ. Decimals are accounting detail; final tokenization may round to integers. Seasonal dynamic emission follows Section 4 (Mint = max(0, min(Ep, Ci)) · Am).',
  nftCardInstT: 'Institutional reserve',
  nftCardInstB:
    '10% is withheld only from tiers 1–4 to fund the tournament treasury. Tiers 5–7 are exempt, maximizing their scarcity.',
  nftCardSchedT: 'Scheduled emission',
  nftCardSchedB:
    '50% of assets unlock at genesis. Another 25% is distributed through semiannual auctions (2027–2028) to dampen supply shocks.',
  nftS2Title: 'Competitive balance (skill over capital)',
  nftS2p:
    'We reject models where money guarantees victory. The NFT is a strategic edge—skill still drives outcomes.',
  nftCardOrgT: 'Organic progression',
  nftCardOrgB:
    'Deploying a T7 tower requires evolving the full chain (T1 → T7), keeping baseline assets in constant demand.',
  nftCardAsymT: 'Tactical asymmetry',
  nftCardAsymB:
    'NFTs have exclusive magic damage—yet free-to-play players can field magic-resistant units, forcing NFT holders to manage resources tactically.',
  nftCardElemT: 'Elemental composition',
  nftCardElemB:
    'Each NFT has 5 DNA segments. Pure sets (5/5 of one element) gain a 5% synergy bonus—rewarding specialization without breaking balance.',
  nftS3Title: 'Expansion protocol & auctions',
  nftS3p:
    'By mid-2027, population expansion shifts to the community through breeding.',
  nftCardHerT: 'Inheritance & entropy',
  nftCardHerB:
    'Breeding two towers yields up to 3 offspring. A 5% entropy factor on stats prevents mass cloning of winning strategies.',
  nftCardAucT: 'Cyclical auctions',
  nftCardAucB:
    'Breeding has no fixed inflationary cost; it behaves as a free market on even seasons. Highest bids win emission rights; losing bids are refunded in full.',
  nftS4Title: 'Algorithmic emission engine (v1.0)',
  nftS4p:
    'Ecosystem health is governed by math built for the long haul—it dampens hype spikes and cuts supply when activity contracts.',
  nftAlgoTitle: 'Self-regulating algorithm',
  nftAlgoLi1:
    'Potential emission (Ep): measures real demand pressure from active users and network volume.',
  nftAlgoLi2:
    'Inflation control (Ci): macro ceiling based on moving averages to defend scarcity.',
  nftAlgoLi3:
    'Market adjustment (Am): emergency brake on price drops—severe downturns can drive new asset emission to zero.',
  nftS5Title: 'Value distribution & ecosystem flows',
  nftS5p: 'Owning an NFT is structural participation in the game’s economic flows.',
  nftFlowSecT: 'Secondary market (5%)',
  nftFlowSecB:
    '2.5% to burn (deflation) and 2.5% to the holder rewards pool.',
  nftFlowBetT: 'Competitive wagering (10%)',
  nftFlowBetB: '5% burn, 2.5% engineering, 2.5% to the rewards pool.',
  nftFlowSaleT: 'In-game sales (7%)',
  nftFlowSaleB:
    '2.5% rewards pool, 2.5% burn, and 2% development treasury.',
  nftFlowBizT: 'Commercial expansion',
  nftFlowBizB:
    '2.5% of advertising or global partnership revenue goes straight to NFT holders.',
  nftFlowFairT: 'Accounting fairness & treasury efficiency',
  nftFlowFairB:
    'Every asset follows this logic. Until an NFT of any tier is minted, its proportional benefits are redirected to the prize treasury—strengthening rewards for active players.',
  nftS6Title: 'Extended token yield',
  nftS6p:
    'NFT holders get a per-match token reward multiplier (up to 10 matches per day), backed by a 225,000-token reserve.',
  nftMultLabel: 'Tier multipliers',
  nftMultLines: 'T1: +1% · T2: +2% · T3: +3%\nT4: +10% · T5: +15% · T6: +20% · T7: +30%',
  nftModelFocusT: 'Model focus',
  nftModelFocusB:
    'This is not a static formula—it is pragmatic armor to protect asset value in any market scenario.',
  stakingRowsYield: [
    ['T1', '100 $TOD', '+1%'],
    ['T2', '250 $TOD', '+2%'],
    ['T3', '600 $TOD', '+3%'],
    ['T4', '1,500 $TOD', '+10%'],
    ['T5', '3,000 $TOD', '+15%'],
    ['T6', '5,000 $TOD', '+20%'],
    ['T7', '10,000 $TOD', '+30%'],
  ],
  stakingRowsRank: [
    ['Initiate', '10 $TOD', '+1%'],
    ['Contender', '200 $TOD', '+3%'],
    ['Veteran', '1,000 $TOD', '+7%'],
    ['Elite', '2,500 $TOD', '+12%'],
    ['Legend', '5,000 $TOD', '+20%'],
  ],
};

export function getUi(lang: Lang): UiPack {
  return lang === 'en' ? EN : ES;
}
