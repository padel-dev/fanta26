// ─────────────────────────────────────────────────────────────────────────────
// ASTA-CONFIG.JS — Asta Fantacalcio · Torneo dei Quartieri
// Modifica solo questo file per personalizzare la pagina dell'asta.
// ─────────────────────────────────────────────────────────────────────────────

const ASTA_CONFIG = {

  // ── DATI GOOGLE SHEETS ────────────────────────────────────────────────────
  spreadsheetId: '1683TYgYh9Pihfq3lQ0UFB7GQo7NnIBjck2VL-ntAYLQ',
  apiKey:        'AIzaSyAdN7BX1xID-YDW2ZwAoivSbAPbqz_Tr50',
  foglioAsta:    'Asta',

  budgetTotaleDefault: 250,
  refreshSeconds: 20,

  // ── IDENTITÀ ──────────────────────────────────────────────────────────────
  title:       'ASTA FANTACALCIO',
  titleAccent: 'FANTACALCIO',
  edition:     'EDIZIONE · 2026/2027',
  eyebrow:     'FantaFedelissimi',
  tagline:     'Le squadre aggiornate in diretta.',
  pageTitle:   'Asta Fantacalcio – FantaFedelissimi',
  footerSub:   'FantaFedelissimi · Asta Fantacalcio 2026',

  // ── PALETTE — tabellone da asta, non campo da gioco ────────────────────────
  palette: {
    '--bg':           '#0b0e13',
    '--bg2':          '#12161d',
    '--card':         '#171c24',
    '--border':       '#262c37',
    '--text':         '#edf1f6',
    '--muted':        '#7c8494',
    '--accent':       '#ffb020',
    '--accent-light': '#ffc85a',
    '--accent-dim':   '#2a2008',
    '--accent-mid':   '#4d3b10',
    '--gold':         '#ffd166',
    '--danger':       '#ff6b5e',
  },

  // ── RUOLI ─────────────────────────────────────────────────────────────────
  ruoli: [
    { sheet: 'por', short: 'POR', label: 'Portieri',        color: '#5fb8ff', cssVars: { '--r-dim': '#081826', '--r-mid': '#0f304d' } },
    { sheet: 'dif', short: 'DIF', label: 'Difensori',       color: '#4fd98a', cssVars: { '--r-dim': '#082a1a', '--r-mid': '#104d30' } },
    { sheet: 'cen', short: 'CEN', label: 'Centrocampisti',  color: '#c98fff', cssVars: { '--r-dim': '#1c0826', '--r-mid': '#341049' } },
    { sheet: 'att', short: 'ATT', label: 'Attaccanti',      color: '#ff7a5c', cssVars: { '--r-dim': '#2a1108', '--r-mid': '#4d2210' } },
  ],

  // ── COLORI SQUADRE ────────────────────────────────────────────────────────
  squadreColori: [
    { h:'#c98a2a', t:'#ffc95a', dim:'rgba(255,201,90,0.10)'  },
    { h:'#2a7ac9', t:'#5aa8ff', dim:'rgba(90,168,255,0.10)'  },
    { h:'#c9422a', t:'#ff7a5c', dim:'rgba(255,122,92,0.10)'  },
    { h:'#2ac98a', t:'#5affc0', dim:'rgba(90,255,192,0.10)'  },
    { h:'#8a2ac9', t:'#c98fff', dim:'rgba(201,143,255,0.10)' },
    { h:'#c9c02a', t:'#f0e85a', dim:'rgba(240,232,90,0.10)'  },
    { h:'#2ac9c0', t:'#5af0e8', dim:'rgba(90,240,232,0.10)'  },
    { h:'#c92a6b', t:'#ff5a9e', dim:'rgba(255,90,158,0.10)'  },
    { h:'#5a8a2a', t:'#a0e85a', dim:'rgba(160,232,90,0.10)'  },
    { h:'#4a4ac9', t:'#8a8aff', dim:'rgba(138,138,255,0.10)' },
  ],
};
