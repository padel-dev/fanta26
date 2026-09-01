// ─────────────────────────────────────────────────────────────────────────────
// ASTA-CONFIG.JS — Asta Fantacalcio · Torneo dei Quartieri
// Modifica solo questo file per personalizzare la pagina dell'asta.
// ─────────────────────────────────────────────────────────────────────────────

const ASTA_CONFIG = {

  // ── DATI GOOGLE SHEETS ────────────────────────────────────────────────────
  spreadsheetId: '1683TYgYh9Pihfq3lQ0UFB7GQo7NnIBjck2VL-ntAYLQ',
  apiKey:        'AIzaSyAdN7BX1xID-YDW2ZwAoivSbAPbqz_Tr50',

  // Nome del foglio con partecipanti e crediti (per leggere il budget totale)
  foglioAsta: 'Asta',

  // Budget di riserva usato SOLO se non riesco a leggere i crediti dal foglio "Asta"
  budgetTotaleDefault: 250,

  // Ogni quanti secondi ricontrollare il foglio durante l'asta
  refreshSeconds: 20,

  // ── IDENTITÀ ──────────────────────────────────────────────────────────────
  title:       'ASTA FANTACALCIO',
  titleAccent: 'FANTACALCIO',
  edition:     'V EDIZIONE · 2026',
  eyebrow:     'Torneo dei Quartieri · Benevento',
  tagline:     'I giocatori disponibili e le squadre che prendono forma, aggiornati in diretta durante l\u2019asta.',
  pageTitle:   'Asta Fantacalcio – Torneo dei Quartieri',
  footerSub:   'Torneo dei Quartieri · Asta Fantacalcio 2026',
  footerCredit:'Fatto con passione per i rioni di Benevento',

  // ── PALETTE (stessa identit\u00e0 visiva del sito del torneo) ──────────────
  palette: {
    '--accent':       '#2db866',
    '--accent-light': '#3fd97a',
    '--accent-dim':   '#0f2a1a',
    '--accent-mid':   '#1a4d2e',
    '--bg':           '#080c09',
    '--bg2':          '#0d1210',
    '--card':         '#111714',
    '--border':       '#1e2b22',
    '--muted':        '#5a7060',
    '--text':         '#e8f0ea',
    '--gold':         '#f5c842',
  },

  // ── RUOLI ─────────────────────────────────────────────────────────────────
  // "sheet" deve corrispondere ESATTAMENTE al nome del tab nel foglio Google
  ruoli: [
    {
      sheet: 'por', short: 'POR', label: 'Portieri',
      color: '#f5c842',
      cssVars: { '--r-dim': '#2a2308', '--r-mid': '#4d4310' },
    },
    {
      sheet: 'dif', short: 'DIF', label: 'Difensori',
      color: '#4f9fe8',
      cssVars: { '--r-dim': '#081c2a', '--r-mid': '#10384d' },
    },
    {
      sheet: 'cen', short: 'CEN', label: 'Centrocampisti',
      color: '#3fd9a8',
      cssVars: { '--r-dim': '#082a22', '--r-mid': '#104d3d' },
    },
    {
      sheet: 'att', short: 'ATT', label: 'Attaccanti',
      color: '#e8622a',
      cssVars: { '--r-dim': '#2a1408', '--r-mid': '#4d2810' },
    },
  ],

  // ── COLORI SQUADRE (assegnati in ordine ai partecipanti letti dal foglio) ─
  squadreColori: [
    { h:'#1a6b3a', b:'#0d3d20', t:'#4fd988', dim:'rgba(79,217,136,0.12)'  },
    { h:'#1a3d6b', b:'#0d2040', t:'#4fa8d9', dim:'rgba(79,168,217,0.12)'  },
    { h:'#6b1a1a', b:'#3d0d0d', t:'#d94f4f', dim:'rgba(217,79,79,0.12)'   },
    { h:'#5a3a0a', b:'#321f05', t:'#e8a030', dim:'rgba(232,160,48,0.12)'  },
    { h:'#3a1a6b', b:'#200d3d', t:'#9b6fd9', dim:'rgba(155,111,217,0.12)' },
    { h:'#1a5a5a', b:'#0d3232', t:'#3fd9d9', dim:'rgba(63,217,217,0.12)'  },
    { h:'#6b4a1a', b:'#3d2a0d', t:'#d9a04f', dim:'rgba(217,160,79,0.12)'  },
    { h:'#1a6b5a', b:'#0d3d32', t:'#4fd9b8', dim:'rgba(79,217,184,0.12)'  },
    { h:'#6b1a4a', b:'#3d0d2a', t:'#d94fa8', dim:'rgba(217,79,168,0.12)'  },
  ],
};
