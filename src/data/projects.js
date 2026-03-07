export const projects = [
  {
    id: 1,
    number: '// 01',
    name: 'Balance Blueprint',
    desc: 'A productivity and personal growth platform designed to help users structure goals, track habits, and visualize life systems through performance analytics dashboards.',
    tags: ['React', 'TypeScript', 'Context API', 'Charts', 'UI Architecture'],
    previewGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    previewLines: [
      `<span class="ck">const</span> blueprint = <span class="cv">createSystem</span>()`,
      `<span class="cv">trackHabit</span>(dailyMetrics)`,
      `<span class="cc">// goals · habits · analytics</span>`,
    ],
    emoji: '⚖️',
    barWidth: '95%',
    status: 'completed',
    locked: false,
    liveHref: 'https://front-end-mern-project.onrender.com',    // UPDATE
    API: 'https://backend-projectmern.onrender.com',  // UPDATE
    githubHref: 'https://github.com/Kaniyakm/front-end-MERN-project',  // UPDATE
  },

  {
    id: 2,
    number: '// 02',
    name: 'GroGlow Recipe',
    desc: 'A TypeScript-powered wellness recipe platform with structured interfaces, reusable components, and advanced filtering for ingredient-based discovery.',
    tags: ['React', 'TypeScript', 'Interfaces', 'Filtering Logic'],
    previewGradient: 'linear-gradient(135deg, #065f46 0%, #064e3b 100%)',
    previewLines: [
      `<span class="ck">interface</span> Recipe { ingredients: string[] }`,
      `<span class="cv">filterRecipes</span>('growth')`,
      `<span class="cc">// types · search · tags</span>`,
    ],
    emoji: '🌿',
    barWidth: '85%',
    status: 'completed',
    locked: false,
    liveHref: 'https://groglow.netlify.app/',    // UPDATE
    githubHref: 'https://github.com/Kaniyakm/growglow-recipe',  // UPDATE
  },

  {
    id: 3,
    number: '// 03',
    name: 'NeoPod-Replay',
    desc: 'A fully interactive iPod-inspired digital music player built with React, featuring scroll-wheel navigation logic, nested menu systems, and persistent audio state management.',
    tags: ['React', 'JavaScript', 'Audio API', 'State Machines'],
    previewGradient: 'linear-gradient(135deg, #111827 0%, #000000 100%)',
    previewLines: [
      `<span class="ck">const</span> menu = <span class="cv">navigateWheel</span>()`,
      `<span class="cv">playTrack</span>(selectedSong)`,
      `<span class="cc">// scrollwheel · audio · state machine</span>`,
    ],
    emoji: '🎧',
    barWidth: '97%',
    status: 'completed',
    locked: false,
    liveHref: 'https://neopod-replay.netlify.app',
    githubHref: 'https://github.com/Kaniyakm/neopod-replay',
  },

  {
    id: 4,
    number: '// 04',
    name: 'PacMan-Peach JavaScript',
    desc: 'A browser-based PacMan arcade clone built using vanilla JavaScript and Canvas API, featuring ghost AI, collision detection, and modular game state logic.',
    tags: ['JavaScript', 'Canvas API', 'Game Loop', 'OOP'],
    previewGradient: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
    previewLines: [
      `<span class="ck">const</span> player = <span class="cv">new</span> Pacman()`,
      `<span class="cv">detectCollision</span>(ghost, player)`,
      `<span class="cc">// canvas · score · lives</span>`,
    ],
    emoji: '🍑',
    barWidth: '75%',
    status: 'completed',
    locked: false,
    liveHref: 'https://kaniyakm.github.io/pacman-peach/',    // UPDATE
    githubHref: 'https://github.com/Kaniyakm/pacman-peach',  // UPDATE
  },

  {
    id: 5,
    number: '// 05',
    name: 'CineTrackATL',
    desc: 'A full-stack movie tracking platform integrating TMDB API for real-time data, user authentication, watchlists, and personalized dashboards.',
    tags: ['MERN', 'TMDB API', 'JWT', 'MongoDB', 'REST'],
    previewGradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    previewLines: [
      `<span class="ck">const</span> movies = <span class="cv">fetchTrending</span>()`,
      `<span class="cv">addToWatchlist</span>(movie)`,
      `<span class="cc">// api · auth · dashboard</span>`,
    ],
    emoji: '🎬',
    barWidth: '98%',
    status: 'completed',
    locked: false,
    liveHref: 'https://cine-trac-atl.vercel.app',
    API: 'https://cinetrac-atl.onrender.com',
    githubHref: 'https://github.com/Kaniyakm/CineTrac-ATL',

  },

  {
    id: 6,
    number: '// 06',
    name: 'Luxe Ecommerce Store',
    desc: 'A luxury frontend ecommerce storefront showcasing custom-colored wigs with premium UI design, dynamic cart logic, and responsive product systems.',
    tags: ['React', 'TailwindCSS', 'Context API', 'Ecommerce UI'],
    previewGradient: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
    previewLines: [
      `<span class="ck">const</span> cart = <span class="cv">useCart</span>()`,
      `<span class="cv">addToCart</span>(product)`,
      `<span class="cc">// products · cart · checkout</span>`,
    ],
    emoji: '💎',
    barWidth: '92%',
    status: 'in-progress',
    locked: true,
    liveHref: '#',    // UPDATE
    githubHref: '#',  // UPDATE

  },

  {
    id: 7,
    number: '// 07',
    name: 'AI Music Platform',
    desc: 'An AI-powered interactive music and media platform featuring avatar-based voice interaction, persistent media player architecture, and broadcast streaming capabilities.',
    tags: ['MERN', 'AI Integration', 'YouTube API', 'Streaming', 'Context API'],
    previewGradient: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
    previewLines: [
      `<span class="ck">const</span> avatar = <span class="cv">initAI</span>()`,
      `<span class="cv">broadcastLive</span>(stream)`,
      `<span class="cc">// ai · media · live mode</span>`,
    ],
    emoji: '🤖',
    barWidth: '100%',
    status: 'locked',
    locked: true,
    liveHref: '#',    // UPDATE
    githubHref: '#',  // UPDATE
  },
]