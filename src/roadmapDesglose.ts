import type { Lang } from './App.types';

const DESGLOSE_ES = `SISTEMA DE EMISIÓN NFT AUTORREGULADO (v1.0)

Prioridad: Defensa de Valor y Resistencia a Exploits
=========================================================

1. MÓDULO DE EMISIÓN POTENCIAL (Ep)
Mide la presión de demanda real del ecosistema.
---------------------------------------------------------
Ratio = ( (w1 * P avg) + (w2 * P s) ) / P ref

Ep = (UA * Actividad) * ((min(1.25, Ratio)^beta) - 1)

2. MÓDULO DE CONTROL DE INFLACIÓN (Ci)
Actúa como techo físico para proteger la escasez.
---------------------------------------------------------
EMA_mint = (0.5 * Mint_t1) + (0.3 * Mint_t2) + (0.2 * Mint_t3)
Ci = min( EMA_mint * F, Supply * r_max )

3. MÓDULO DE AJUSTE POR MERCADO (Am)
Freno de emergencia ante caídas de precio.
---------------------------------------------------------
Am = max( 0, min( 1, Ratio )^k )

4. FÓRMULA FINAL UNIFICADA (Mint)
---------------------------------------------------------
Mint = max( 0, min( Ep, Ci ) ) * Am

=========================================================
PARÁMETROS RECOMENDADOS Y FUNCIONAMIENTO
=========================================================
beta  = 0.5 (Suavizado de volatilidad)
k     = 2.0 (Penalización cuadrática en caídas)
r_max = 0.05 (Inflación máxima del 5% por temporada)
F     = 2.0 (Límite de aceleración de emisión)
UA    = Usuarios únicos con transacciones verificadas

1) El "Ratio" (El Termómetro): Compara el precio actual contra el de la temporada pasada. Si es >1, el mercado crece; si es <1, la emisión se frena.

2) Módulo Ep (El Deseo): Calcula cuántos NFTs nuevos requiere la demanda. El Cap del 1.25 actúa como seguro contra burbujas irracionales.

3) Módulo Ci (El Techo): Límite macroeconómico inquebrantable basado en el historial y r_max.

4) Módulo Am (El Freno): Defensa agresiva. Caídas leves de precio generan recortes cuadráticos en la emisión; caídas severas paralizan el minteo a cero.

=========================================================
ANEXO NUMÉRICO — SUMINISTRO FIJO POR TIER (v1.0)
=========================================================
Σ NFT (tope de diseño) = 1.002 + 502 + 252 + 127 + 62 + 32 + 12 = 1.989

Reserva institucional (10% solo sobre T1–T4):
  Cupo T1–T4 = 1.002 + 502 + 252 + 127 = 1.883  →  Reserva = 0,10 × 1.883 = 188,3 NFT
  Saldo orientado a circulación primaria ≈ 1.989 − 188,3 = 1.800,7 NFT

Calendario porcentual sobre Σ = 1.989 (coherente con emisión programada):
  Génesis:     0,50 × 1.989 = 994,5 NFT
  Subastas:    0,25 × 1.989 = 497,25 NFT
  Protocolo:   0,25 × 1.989 = 497,25 NFT
  (994,5 + 497,25 + 497,25 = 1.989)

Un Compromiso de Transparencia Real:
Siendo sinceros: ni el mejor modelo económico puede predecir la irracionalidad humana a perpetuidad. La fórmula actual es extremadamente robusta porque no intenta adivinar el futuro, sino que reacciona al presente integrando datos de mercado, adopción y subastas en tiempo real. Sin embargo, como todo sistema vivo, requerirá calibración. Mi compromiso no es mantener una fórmula matemática estática por capricho, sino garantizar una economía sana. Dejo esto en claro: no soy futurólogo; opero con datos fácticos. Por ello, cualquier ajuste futuro será resultado de un análisis técnico profundo y será ejecutado con total transparencia. No buscamos la utopía de una "fórmula perfecta", buscamos un blindaje pragmático que proteja el valor de sus activos incluso en los escenarios más impredecibles.`;

const DESGLOSE_EN = `SELF-REGULATING NFT EMISSION SYSTEM (v1.0)

Priority: Value Defense & Exploit Resistance
=========================================================

1. POTENTIAL EMISSION MODULE (Ep)
Measures real demand pressure in the ecosystem.
---------------------------------------------------------
Ratio = ( (w1 * P avg) + (w2 * P s) ) / P ref

Ep = (UA * Activity) * ((min(1.25, Ratio)^beta) - 1)

2. INFLATION CONTROL MODULE (Ci)
Acts as a hard ceiling to protect scarcity.
---------------------------------------------------------
EMA_mint = (0.5 * Mint_t1) + (0.3 * Mint_t2) + (0.2 * Mint_t3)
Ci = min( EMA_mint * F, Supply * r_max )

3. MARKET ADJUSTMENT MODULE (Am)
Emergency brake on price drawdowns.
---------------------------------------------------------
Am = max( 0, min( 1, Ratio )^k )

4. UNIFIED FINAL FORMULA (Mint)
---------------------------------------------------------
Mint = max( 0, min( Ep, Ci ) ) * Am

=========================================================
RECOMMENDED PARAMETERS & HOW IT WORKS
=========================================================
beta  = 0.5 (Volatility smoothing)
k     = 2.0 (Quadratic penalty on drawdowns)
r_max = 0.05 (Max inflation 5% per season)
F     = 2.0 (Emission acceleration cap)
UA    = Unique users with verified transactions

1) "Ratio" (the thermometer): Compares current price with last season. If >1, the market is expanding; if <1, emission is throttled.

2) Ep module (desire): Estimates how many new NFTs demand requires. The 1.25 cap is insurance against irrational bubbles.

3) Ci module (the ceiling): Unbreakable macro cap anchored to history and r_max.

4) Am module (the brake): Aggressive defense—mild price drops mean quadratic cuts to emission; severe drops can push new mints to zero.

=========================================================
NUMERIC ANNEX — FIXED SUPPLY BY TIER (v1.0)
=========================================================
Σ NFT (design cap) = 1,002 + 502 + 252 + 127 + 62 + 32 + 12 = 1,989

Institutional reserve (10% on T1–T4 only):
  T1–T4 cap = 1,002 + 502 + 252 + 127 = 1,883  →  Reserve = 0.10 × 1,883 = 188.3 NFT
  Balance aimed at primary circulation ≈ 1,989 − 188.3 ≈ 1,800.7 NFT

Percentage calendar over Σ = 1,989 (aligned with scheduled emission):
  Genesis:     0.50 × 1,989 = 994.5 NFT
  Auctions:    0.25 × 1,989 = 497.25 NFT
  Protocol:    0.25 × 1,989 = 497.25 NFT
  (994.5 + 497.25 + 497.25 = 1,989)

A Real Transparency Commitment:
Let’s be honest: no economic model can predict human irrationality forever. This formula is robust because it does not guess the future—it reacts to the present using live market, adoption, and auction data. Like any living system, it will need tuning. My commitment is not to freeze math for its own sake, but to keep the economy healthy. I am not a futurist; I work from facts. Any future change will follow deep technical analysis and full transparency. We are not chasing a utopian “perfect formula”—we are building pragmatic armor to protect asset value even in the wildest scenarios.`;

export function getDesgloseDoc(lang: Lang): string {
  return lang === 'en' ? DESGLOSE_EN : DESGLOSE_ES;
}
