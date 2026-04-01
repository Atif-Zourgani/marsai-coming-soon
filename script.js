/* =============================================
   TRANSLATIONS
============================================= */
const t = {
  fr: {
    lang: 'fr',
    metaTitle: 'MarsAI Festival — Imaginez des futurs souhaitables | 19-20 Juin 2026, Marseille',
    metaDesc: "Festival international du film IA. Appel à films IA et hybrides d'1 minute. 10 000 € pour le premier lauréat. 19 & 20 juin 2026 à Marseille & en ligne.",
    ogTitle: 'MarsAI Festival — Imaginez des futurs souhaitables',
    heroKicker: 'Festival International du Film IA',
    heroTagline: '"Imaginez des futurs souhaitables"',
    cdPrefix: 'Clôture des soumissions dans', cdSuffix: 'jours',
    callLabel: 'Appel à films',
    callTitle: 'Films IA ou Hybrides<br />1 minute',
    rule1: 'Films 100% IA ou œuvres hybrides',
    rule2: 'Durée maximale : 1 minute',
    rule3: 'Tous genres acceptés : fiction, documentaire, animation, expérimental',
    rule4: 'Imaginez des futurs souhaitables',
    prizeLabel: 'Prix du premier lauréat — Édition 2026',
    deadlineText: 'Clôture des soumissions :',
    deadlineDate: '12 mai 2026',
    trailer: 'https://www.youtube.com/embed/6Xw48yCo59I?rel=0&modestbranding=1',
    manifestoLabel: 'Le Festival',
    manifestoTitle: "L'IA : un nouveau langage cinématographique",
    manifestoP1: "Après l'invention du cinématographe, puis l'avènement de la caméra légère, l'intelligence artificielle marque une nouvelle ère. Le MarsAI Festival est né de cette conviction profonde : l'IA n'est pas une fin en soi, mais un nouveau langage. Elle devient une matière inédite, mise à disposition de la créativité des artistes.",
    manifestoP2: "<em>Créer, c'est choisir. En une minute, tout compte.</em>",
    manifestoP3: "Le festival recherche celles et ceux qui osent, qui détournent, qui expérimentent et qui écrivent autrement. Celles et ceux pour qui l'intelligence artificielle est un geste d'auteur, une décision artistique pleinement assumée.",
    valuesTitle: 'Nos valeurs',
    valuesP1: "L'IA ne crée pas à ta place. Elle t'ouvre un terrain que personne n'a encore cartographié. Ce que tu en fais, c'est toi. C'est ça qui nous intéresse.",
    valuesP2: "On croit que la technologie la plus puissante ne vaut rien sans point de vue. Qu'un film de 60 secondes peut dire plus qu'un long-métrage. Que l'intention compte autant que le résultat.",
    valuesP3: "On croit aux futurs qu'on a envie de construire, pas à ceux qu'on nous prédit. À la création qui rassemble plutôt qu'elle n'effraie. À l'art qui ouvre des portes plutôt qu'il n'en ferme.",
    valuesCta: "C'est pour ça qu'on existe.",
    datesLabel: 'Dates clés',
    datesTitle: 'Agenda',
    date1Date: '12 mai 2026',
    date1Label: 'Clôture des soumissions',
    date1Sub: 'Envoyez vos films avant cette date',
    date2Date: '19 juin 2026',
    date2Label: 'Festival MarsAI',
    date2Sub: 'Marseille &amp; en ligne',
    socialLabel: 'Suivez-nous',
    footerCopy: '© 2026 MarsAI Festival. Tous droits réservés.',
  },
  en: {
    lang: 'en',
    metaTitle: 'MarsAI Festival — Imagine Desirable Futures | June 19-20, 2026, Marseille',
    metaDesc: 'International AI film festival. Call for AI and hybrid films of 1 minute. €10,000 for the first laureate. June 19 & 20, 2026 in Marseille & online.',
    ogTitle: 'MarsAI Festival — Imagine Desirable Futures',
    heroKicker: 'International AI Film Festival',
    heroTagline: '"Imagine desirable futures"',
    cdPrefix: 'Submissions close in', cdSuffix: 'days',
    callLabel: 'Call for films',
    callTitle: 'AI or Hybrid Films<br />1 minute',
    rule1: '100% AI films or hybrid works',
    rule2: 'Maximum duration: 1 minute',
    rule3: 'All genres accepted: fiction, documentary, animation, experimental',
    rule4: 'Imagine desirable futures',
    prizeLabel: 'Prize for the first laureate — 2026 Edition',
    deadlineText: 'Submission deadline:',
    deadlineDate: '12 May 2026',
    trailer: 'https://www.youtube.com/embed/6Xw48yCo59I?rel=0&modestbranding=1',
    manifestoLabel: 'The Festival',
    manifestoTitle: 'AI: A New Cinematic Language',
    manifestoP1: "After the invention of the cinematograph, then the advent of the lightweight camera, artificial intelligence marks a new era. The MarsAI Festival was born from this deep conviction: AI is not an end in itself, but a new language. It becomes an unprecedented medium, placed at the disposal of artists' creativity.",
    manifestoP2: '<em>To create is to choose. In one minute, everything matters.</em>',
    manifestoP3: 'The festival is looking for those who dare, who subvert, who experiment and who write differently. Those for whom artificial intelligence is an authorial gesture, a fully assumed artistic decision.',
    valuesTitle: 'Our values',
    valuesP1: "AI doesn't create in your place. It opens up a territory no one has mapped yet. What you do with it is you. That's what interests us.",
    valuesP2: "We believe the most powerful technology is worthless without a point of view. That a 60-second film can say more than a feature. That intention matters as much as the result.",
    valuesP3: "We believe in the futures we want to build, not the ones predicted for us. In creation that brings together rather than frightens. In art that opens doors rather than closes them.",
    valuesCta: "That's why we exist.",
    datesLabel: 'Key dates',
    datesTitle: 'Schedule',
    date1Date: 'May 12, 2026',
    date1Label: 'Submission deadline',
    date1Sub: 'Submit your films before this date',
    date2Date: 'June 19, 2026',
    date2Label: 'MarsAI Festival',
    date2Sub: 'Marseille &amp; online',
    socialLabel: 'Follow us',
    footerCopy: '© 2026 MarsAI Festival. All rights reserved.',
  }
};

/* =============================================
   LANGUAGE
============================================= */
function detectLang() {
  const stored = localStorage.getItem('marsai-lang');
  if (stored && t[stored]) return stored;
  return (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

function setLang(lang) {
  localStorage.setItem('marsai-lang', lang);
  applyLang(lang);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val;
}

function setMeta(id, attr, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

function applyLang(lang) {
  const tr = t[lang];
  document.documentElement.lang = tr.lang;
  document.title = tr.metaTitle;

  setMeta('meta-desc', 'content', tr.metaDesc);
  setMeta('og-title',  'content', tr.ogTitle);
  setMeta('og-desc',   'content', tr.metaDesc);
  setMeta('tw-title',  'content', tr.ogTitle);
  setMeta('tw-desc',   'content', tr.metaDesc);

  setText('hero-kicker',      tr.heroKicker);
  setText('hero-tagline',     tr.heroTagline);
  setText('cd-prefix', tr.cdPrefix);
  setText('cd-suffix', tr.cdSuffix);

  setText('call-label',    tr.callLabel);
  setText('call-title',    tr.callTitle);
  setText('rule-1',        tr.rule1);
  setText('rule-2',        tr.rule2);
  setText('rule-3',        tr.rule3);
  setText('rule-4',        tr.rule4);
  setText('prize-label',   tr.prizeLabel);
  setText('deadline-text', tr.deadlineText);
  setText('deadline-date', tr.deadlineDate);

  document.getElementById('trailer').setAttribute('src', tr.trailer);

  setText('manifesto-label', tr.manifestoLabel);
  setText('manifesto-title', tr.manifestoTitle);
  setText('manifesto-p1',    tr.manifestoP1);
  setText('manifesto-p2',    tr.manifestoP2);
  setText('manifesto-p3',    tr.manifestoP3);
  setText('values-title',    tr.valuesTitle);
  setText('values-p1',       tr.valuesP1);
  setText('values-p2',       tr.valuesP2);
  setText('values-p3',       tr.valuesP3);
  setText('values-cta',      tr.valuesCta);

  setText('dates-label', tr.datesLabel);
  setText('dates-title', tr.datesTitle);
  setText('date1-date',  tr.date1Date);
  setText('date1-label', tr.date1Label);
  setText('date1-sub',   tr.date1Sub);
  setText('date2-date',  tr.date2Date);
  setText('date2-label', tr.date2Label);
  setText('date2-sub',   tr.date2Sub);

  setText('social-label', tr.socialLabel);
  setText('footer-copy',  tr.footerCopy);

  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
}

/* =============================================
   COUNTDOWN
============================================= */
function updateCountdown() {
  const target = new Date('2026-05-12T00:00:00').getTime();
  const diff   = target - Date.now();
  document.getElementById('cd-days').textContent = diff > 0 ? Math.ceil(diff / 86400000) : '0';
}

/* =============================================
   SCROLL ANIMATIONS
============================================= */
function initAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

/* =============================================
   INIT
============================================= */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(detectLang());
  updateCountdown();
  initAnimations();
});
