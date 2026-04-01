/* =============================================
   TRANSLATIONS
============================================= */
const t = {
  fr: {
    lang: 'fr',
    metaTitle: 'MarsAI Festival — Imaginez des futurs souhaitables | 19-20 Juin 2026, Marseille',
    metaDesc: "Festival international du film IA. Appel à films IA et hybrides d'1 minute. 10 000 € pour le premier lauréat. 19 & 20 juin 2026 à Marseille & en ligne.",
    ogTitle: 'MarsAI Festival — Imaginez des futurs souhaitables',
    heroLogo: 'assets/logos/marsai-by-laplateforme-fr.png',
    heroKicker: 'Festival International du Film IA',
    heroTagline: '"Imaginez des futurs souhaitables"',
    cdPrefix: 'J -', cdSuffix: 'pour envoyer votre film',
    callLabel: 'Appel à films',
    callTitle: 'Films IA ou Hybrides<br />1 minute',
    rule1: 'Films IA ou œuvres hybrides',
    rule2: 'Durée maximale : 1 minute',
    rule3: 'Tous genres acceptés : fiction, documentaire, animation, expérimental',
    rule4: 'Imaginez des futurs souhaitables',
    prizeLabel: "Bourse d'aide à la production",
    deadlineText: 'Clôture des soumissions :',
    deadlineDate: '12 mai 2026',
    trailer: 'https://www.youtube.com/embed/if6WTlUPwpw?rel=0&modestbranding=1',
    manifestoLabel: 'Manifeste',
    manifestoP1: "Nous vivons un moment de bascule. Un moment où la technologie ouvre des possibles et où tout dépend de celles et ceux qui s'en saisissent. L'intelligence artificielle n'est pas une finalité, elle est un langage, un terrain de jeu, une promesse entre nos mains. Créer, c'est choisir.",
    manifestoP2: "En une minute, tout compte. Chaque idée tranche, chaque silence raconte, chaque image engage.",
    manifestoP3: "Nous vivons un moment unique avec l'IA, vous pouvez inventer les règles d'un langage que personne ne maîtrise encore.",
    manifestoP4: "Au travers du MarsAI Festival, nous recherchons celles et ceux qui osent, qui détournent, expérimentent et écrivent autrement.",
    manifestoP5: "Films IA et œuvres hybrides. Ce qui compte, c'est l'élan, la vision, la nécessité de créer.",
    manifestoP6: "Nous vous invitons à imaginer des futurs souhaitables. Pas un futur imposé, des futurs pluriels, intimes ou collectifs, ancrés dans le réel autant que dans l'imaginaire. Des futurs où l'on respire mieux, où l'on vit ensemble autrement, où la technologie n'écrase pas, mais révèle. Assez des récits de fin du monde, inventez ceux qui donnent envie de le construire. Au-delà des dystopies, racontez ce qui pourrait advenir de beau, de juste, de vivant.",
    manifestoP7: "Nous sommes là pour révéler ces visions et accompagner celles et ceux qui les portent à continuer de créer.",
    manifestoP8: "Ce festival est un point de départ — à vous d'en faire un territoire d'invention.",
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
    heroLogo: 'assets/logos/marsai-by-laplateforme-en.png',
    heroKicker: 'International AI Film Festival',
    heroTagline: '"Imagine desirable futures"',
    cdPrefix: 'D -', cdSuffix: 'to submit your film',
    callLabel: 'Call for films',
    callTitle: 'AI or Hybrid Films<br />1 minute',
    rule1: 'AI films or hybrid',
    rule2: 'Maximum duration: 1 minute',
    rule3: 'All genres accepted: fiction, documentary, animation, experimental',
    rule4: 'Imagine desirable futures',
    prizeLabel: 'Production grant',
    deadlineText: 'Submission deadline:',
    deadlineDate: '12 May 2026',
    trailer: 'https://www.youtube.com/embed/6Xw48yCo59I?rel=0&modestbranding=1',
    manifestoLabel: 'Manifesto',
    manifestoP1: "We are living through a turning point. A moment when technology opens up new possibilities — and everything depends on those who choose to seize them.",
    manifestoP2: "Artificial intelligence is not an end. It is a language, a playground, a promise in our hands. To create is to choose.",
    manifestoP3: "In one minute, everything matters. Every idea cuts through. Every silence tells a story. Every image commits.",
    manifestoP4: "We are living a unique moment with AI. You can invent the rules of a language that no one has mastered yet.",
    manifestoP5: "Through the MarsAI Festival, we are looking for those who dare — who bend, experiment, and write in new ways.",
    manifestoP6: "AI films and hybrid works. What matters is the drive, the vision, the need to create.",
    manifestoP7: "We invite you to imagine desirable futures. Not a single imposed future, but plural ones — intimate or collective — rooted as much in reality as in imagination. Futures where we breathe more freely, where we live together differently, where technology does not dominate, but reveals. Enough of end-of-the-world narratives. Invent the ones that make us want to build what's next. Beyond dystopias, tell stories of what could be beautiful, fair, and alive.",
    manifestoP8: "We are here to reveal these visions — and to support those who carry them to keep creating. This festival is a starting point. It's up to you to turn it into a territory of invention.",
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

  document.getElementById('hero-logo').setAttribute('src', tr.heroLogo);
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
  setText('manifesto-p1',    tr.manifestoP1);
  setText('manifesto-p2',    tr.manifestoP2);
  setText('manifesto-p3',    tr.manifestoP3);
  setText('manifesto-p4',    tr.manifestoP4);
  setText('manifesto-p5',    tr.manifestoP5);
  setText('manifesto-p6',    tr.manifestoP6);
  setText('manifesto-p7',    tr.manifestoP7);
  setText('manifesto-p8',    tr.manifestoP8);

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
