const symbols = [
  { id: "usd", name: "美元", role: "USD", label: "$", bg: "#f8d66d", accent: "#2f7a55", kind: "currency" },
  { id: "eur", name: "歐元", role: "EUR", label: "€", bg: "#ffe08a", accent: "#315da8", kind: "currency" },
  { id: "jpy", name: "日圓", role: "JPY", label: "¥", bg: "#f9c46a", accent: "#b9362a", kind: "currency" },
  { id: "gbp", name: "英鎊", role: "GBP", label: "£", bg: "#f6d487", accent: "#60439b", kind: "currency" },
  { id: "twd", name: "台幣", role: "TWD", label: "NT$", bg: "#f5d773", accent: "#1f8b6d", kind: "currency" },
  { id: "cny", name: "人民幣", role: "CNY", label: "¥", bg: "#ffd089", accent: "#c5392b", kind: "currency" },
  { id: "krw", name: "韓元", role: "KRW", label: "₩", bg: "#f7e08d", accent: "#2f72b8", kind: "currency" },
  { id: "policy", name: "保單", role: "Policy", label: "保", bg: "#e8f5b6", accent: "#2f8f60", kind: "policy" },
  { id: "hong-kong", name: "香港", role: "HK", label: "HK", bg: "#ffd7a8", accent: "#c74631", kind: "hongKong" },
  { id: "lucas", name: "Lucas", role: "第一國際創辦人", label: "Lucas", bg: "#ffe4a8", accent: "#ba5a28", kind: "lucas" },
  { id: "first-logo", name: "第一國際", role: "Logo", label: "FI", bg: "#f6d487", accent: "#c49a20", kind: "imageLogo", image: "assets/logos/first-international-round-logo.png" },
  { id: "zongzi", name: "肉粽", role: "端午節", label: "粽", bg: "#cfe88c", accent: "#3f7f45", kind: "zongzi" },
  { id: "dragon-boat", name: "龍舟", role: "端午節", label: "龍", bg: "#ffd176", accent: "#c83f2f", kind: "dragonBoat" },
  { id: "golden-egg", name: "金雞蛋", role: "Golden Egg", label: "蛋", bg: "#ffe69a", accent: "#c98200", kind: "goldenEgg" },
  { id: "us-dollar", name: "美金", role: "US Dollar", label: "US$", bg: "#dff1cf", accent: "#2f7a55", kind: "dollarBill" },
  { id: "triangle-zongzi", name: "三角粽", role: "Duanwu", label: "粽", bg: "#cfe88c", accent: "#3f7f45", kind: "triangleZongzi" },
  { id: "dragon-head", name: "龍頭", role: "Dragon", label: "龍", bg: "#ffd176", accent: "#c83f2f", kind: "dragonHead" },
  { id: "aud", name: "澳幣", role: "AUD", label: "A$", bg: "#f8df9a", accent: "#2f7a70", kind: "currency" },
  { id: "gold-ingot", name: "金元寶", role: "財富", label: "寶", bg: "#ffe07f", accent: "#c98200", kind: "ingot" },
  { id: "chart", name: "成長線", role: "投資", label: "↗", bg: "#e8f5b6", accent: "#2f8f60", kind: "chart" },
  { id: "bank", name: "銀行", role: "金融", label: "Bank", bg: "#fff0b8", accent: "#8a6121", kind: "bank" },
  { id: "globe", name: "全球市場", role: "World", label: "🌐", bg: "#d8efe7", accent: "#2a7f75", kind: "globe" },
  { id: "exchange", name: "匯率", role: "FX", label: "FX", bg: "#fde4a9", accent: "#ab5c16", kind: "exchange" },
  { id: "safe", name: "保管箱", role: "Asset", label: "Safe", bg: "#e8d4a3", accent: "#7b673a", kind: "safe" },
  { id: "credit", name: "信用卡", role: "Card", label: "CARD", bg: "#f8dca0", accent: "#344f86", kind: "card" },
  { id: "diamond", name: "鑽石", role: "Value", label: "♦", bg: "#e7f8ff", accent: "#3c8faa", kind: "gem" },
  { id: "coin-stack", name: "金幣", role: "Coins", label: "$", bg: "#ffe391", accent: "#b77400", kind: "coinStack" },
  { id: "pouch", name: "錢袋", role: "Bonus", label: "袋", bg: "#ffe0ad", accent: "#9b6127", kind: "pouch" },
  { id: "lantern", name: "節慶燈", role: "Festival", label: "燈", bg: "#ffd2a8", accent: "#c74631", kind: "lantern" },
  { id: "bamboo", name: "粽葉", role: "Leaf", label: "葉", bg: "#dff0a0", accent: "#4f8a42", kind: "bamboo" },
  { id: "fortune", name: "好運", role: "Luck", label: "福", bg: "#ffd67b", accent: "#c2342f", kind: "fortune" },
  { id: "medal", name: "榮耀", role: "Rotary", label: "★", bg: "#f8dd91", accent: "#f2a900", kind: "medal" }
];

const levels = [
  { rows: 2, cols: 2, time: 45, preview: 2800, maxMiss: 7 },
  { rows: 2, cols: 3, time: 55, preview: 2600, maxMiss: 10 },
  { rows: 3, cols: 4, time: 85, preview: 2400, maxMiss: 18 },
  { rows: 4, cols: 4, time: 105, preview: 2200, maxMiss: 24 },
  { rows: 4, cols: 5, time: 130, preview: 2000, maxMiss: 30 },
  { rows: 5, cols: 6, time: 170, preview: 1800, maxMiss: 42 },
  { rows: 6, cols: 6, time: 210, preview: 1600, maxMiss: 48 },
  { rows: 6, cols: 8, time: 270, preview: 1400, maxMiss: 65 }
];

const STORAGE_KEY = "first-international-memory-progress-v1";

const state = {
  levelIndex: 0,
  score: 0,
  misses: 0,
  streak: 0,
  matchedPairs: 0,
  firstCard: null,
  secondCard: null,
  locked: true,
  paused: false,
  seconds: levels[0].time,
  timerId: null,
  completedLevels: new Set()
};

const els = {
  board: document.querySelector("#gameBoard"),
  levelText: document.querySelector("#levelText"),
  scoreText: document.querySelector("#scoreText"),
  timeText: document.querySelector("#timeText"),
  matchedText: document.querySelector("#matchedText"),
  missText: document.querySelector("#missText"),
  streakText: document.querySelector("#streakText"),
  roundText: document.querySelector("#roundText"),
  levelBadge: document.querySelector("#levelBadge"),
  levelArt: document.querySelector("#levelArt"),
  levelGrid: document.querySelector("#levelGrid"),
  messageBar: document.querySelector("#messageBar"),
  modal: document.querySelector("#modal"),
  modalKicker: document.querySelector("#modalKicker"),
  modalTitle: document.querySelector("#modalTitle"),
  modalText: document.querySelector("#modalText"),
  modalBrief: document.querySelector("#modalBrief"),
  continueButton: document.querySelector("#continueButton"),
  quitButton: document.querySelector("#quitButton"),
  newGameButton: document.querySelector("#newGameButton"),
  pauseButton: document.querySelector("#pauseButton")
};

function symbolSvg(item) {
  const label = escapeHtml(item.label);
  const accent = item.accent;
  const base = `
    <circle cx="68" cy="68" r="48" fill="#fff7d7" opacity="0.94"/>
    <circle cx="68" cy="68" r="39" fill="none" stroke="${accent}" stroke-width="5" opacity="0.36"/>
  `;

  const art = {
    currency: `
      ${base}
      <text x="68" y="${label.length > 2 ? 74 : 82}" text-anchor="middle" font-size="${label.length > 2 ? 30 : 62}" font-weight="900" fill="${accent}" font-family="Arial Rounded MT Bold, Arial">${label}</text>
      <path d="M34 104c23 14 48 14 68 0" fill="none" stroke="#e4aa27" stroke-width="6" stroke-linecap="round"/>
    `,
    coin: `
      <circle cx="68" cy="70" r="46" fill="#ffd25f" stroke="#fff3b0" stroke-width="8"/>
      <circle cx="68" cy="70" r="33" fill="#f2a900"/>
      <text x="68" y="86" text-anchor="middle" font-size="56" font-weight="900" fill="#fff6c7" font-family="Arial Rounded MT Bold, Arial">${label}</text>
    `,
    lucas: `
      <circle cx="68" cy="40" r="24" fill="#e6a77f" stroke="#fff1c6" stroke-width="5"/>
      <path d="M43 39c4-20 19-30 38-25 11 3 18 12 20 25-12-8-25-8-39-2-8 3-14 4-19 2z" fill="#2f251f"/>
      <path d="M48 52c7 7 31 7 39 0-3 18-35 18-39 0z" fill="#d8906d" opacity=".35"/>
      <circle cx="58" cy="42" r="3.2" fill="#2b2522"/>
      <circle cx="78" cy="42" r="3.2" fill="#2b2522"/>
      <path d="M58 53c6 6 16 6 22 0" fill="none" stroke="#8a4c3c" stroke-width="3" stroke-linecap="round"/>
      <path d="M31 104c7-27 21-41 37-41s30 14 37 41H31z" fill="#143f35"/>
      <path d="M46 104c5-18 13-27 22-27s17 9 22 27H46z" fill="#fff7d7"/>
      <path d="M63 78l5 19 6-19" fill="#c49a20"/>
      <rect x="29" y="96" width="78" height="25" rx="12" fill="#fff7d7" stroke="${accent}" stroke-width="4"/>
      <text x="68" y="114" text-anchor="middle" font-size="23" font-weight="900" text-decoration="none" fill="${accent}" font-family="Arial Rounded MT Bold, Arial">Lucas</text>
    `,
    imageLogo: `
      <image href="${escapeHtml(item.image)}" x="18" y="14" width="100" height="100" preserveAspectRatio="xMidYMid meet"/>
      <circle cx="68" cy="64" r="47" fill="none" stroke="${accent}" stroke-width="5" opacity=".45"/>
    `,
    zongzi: `
      <path d="M68 21 111 103H25L68 21z" fill="#4f8a42"/>
      <path d="M68 32 98 94H38L68 32z" fill="#b8d66a"/>
      <path d="M31 104c16-25 36-45 77-61" fill="none" stroke="#fff6c7" stroke-width="7" stroke-linecap="round"/>
      <path d="M42 101c17-13 39-23 54-31" fill="none" stroke="#2f6f3c" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
      <text x="68" y="118" text-anchor="middle" font-size="18" font-weight="900" fill="#ffffff" font-family="Arial Rounded MT Bold, Arial">肉粽</text>
    `,
    dragonBoat: `
      <path d="M22 88c25 18 66 18 92 0-4 16-18 27-44 30-28 3-45-8-48-30z" fill="#b9362a"/>
      <path d="M28 87h80c-9 12-25 18-42 18-17 0-30-6-38-18z" fill="#f2a900"/>
      <path d="M94 58c11-10 18-10 25-1-8 0-13 4-17 13" fill="none" stroke="#b9362a" stroke-width="8" stroke-linecap="round"/>
      <circle cx="98" cy="61" r="5" fill="#fff7d7"/>
      <path d="M38 75h47" stroke="#fff7d7" stroke-width="7" stroke-linecap="round"/>
      <path d="M34 112c21 8 47 8 68 0" stroke="#356d77" stroke-width="5" stroke-linecap="round" opacity="0.72"/>
    `,
    goldenEgg: `
      <ellipse cx="70" cy="72" rx="36" ry="48" fill="#f2a900" stroke="#fff0a6" stroke-width="8"/>
      <ellipse cx="58" cy="52" rx="13" ry="18" fill="#fff6c7" opacity="0.7"/>
      <path d="M38 105c17 12 44 14 65 1" fill="none" stroke="#b77400" stroke-width="7" stroke-linecap="round"/>
      <path d="M47 34c10-12 26-16 43-8" fill="none" stroke="#fff7d7" stroke-width="5" stroke-linecap="round" opacity="0.75"/>
      <text x="68" y="126" text-anchor="middle" font-size="17" font-weight="900" fill="#a85d00" font-family="Arial Rounded MT Bold, Arial">金雞蛋</text>
    `,
    dollarBill: `
      <rect x="22" y="40" width="92" height="58" rx="10" fill="#dff1cf" stroke="${accent}" stroke-width="6"/>
      <circle cx="68" cy="69" r="18" fill="#fff7d7" stroke="${accent}" stroke-width="5"/>
      <text x="68" y="80" text-anchor="middle" font-size="31" font-weight="900" fill="${accent}" font-family="Arial Rounded MT Bold, Arial">$</text>
      <circle cx="40" cy="69" r="7" fill="${accent}" opacity="0.8"/>
      <circle cx="96" cy="69" r="7" fill="${accent}" opacity="0.8"/>
      <text x="68" y="121" text-anchor="middle" font-size="18" font-weight="900" fill="${accent}" font-family="Arial Rounded MT Bold, Arial">美金</text>
    `,
    triangleZongzi: `
      <path d="M68 17 116 108H20L68 17z" fill="#2f7a46" stroke="#fff6c7" stroke-width="6" stroke-linejoin="round"/>
      <path d="M68 29 98 96H38L68 29z" fill="#b8d66a"/>
      <path d="M34 103 68 18 102 103" fill="none" stroke="#5c9b4a" stroke-width="5" opacity="0.7"/>
      <path d="M30 104c22-24 47-43 79-60" fill="none" stroke="#fff2cf" stroke-width="7" stroke-linecap="round"/>
      <text x="68" y="121" text-anchor="middle" font-size="16" font-weight="900" fill="#ffffff" font-family="Arial Rounded MT Bold, Arial">三角粽</text>
    `,
    dragonHead: `
      <path d="M31 78c3-27 22-45 49-43 17 1 30 10 39 26-13-5-23-4-31 2 14 7 22 18 23 34-18-7-32-6-44 3-17 12-34 6-36-22z" fill="#c83f2f"/>
      <path d="M47 53c-4-12-1-23 10-32 0 14 6 22 18 26" fill="#f2a900"/>
      <path d="M83 49c9-14 22-18 38-13-12 8-17 17-16 29" fill="#f2a900"/>
      <circle cx="84" cy="67" r="8" fill="#fff7d7"/>
      <circle cx="86" cy="67" r="3.5" fill="#253326"/>
      <path d="M48 83c17 8 35 8 53 0" fill="none" stroke="#fff7d7" stroke-width="7" stroke-linecap="round"/>
      <path d="M40 100c16 11 36 13 58 5" fill="none" stroke="#2f7a55" stroke-width="6" stroke-linecap="round"/>
    `,
    ingot: `
      <path d="M26 83c8-24 20-35 42-35 21 0 35 11 43 35-8 18-24 27-43 27-20 0-34-9-42-27z" fill="#f2a900"/>
      <path d="M43 76c13 8 36 8 50 0 0 16-9 25-25 25-16 0-25-9-25-25z" fill="#fff0a6"/>
      <text x="68" y="74" text-anchor="middle" font-size="26" font-weight="900" fill="#9b5300" font-family="Arial Rounded MT Bold, Arial">金</text>
    `,
    chart: `
      <rect x="29" y="36" width="78" height="72" rx="12" fill="#fff7d7"/>
      <path d="M39 92 56 75l14 10 28-34" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M86 51h14v14" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>
    `,
    bank: `
      <path d="M68 28 111 54H25L68 28z" fill="${accent}"/>
      <rect x="32" y="59" width="72" height="42" rx="5" fill="#fff4cf"/>
      <path d="M39 65v30M58 65v30M78 65v30M97 65v30" stroke="${accent}" stroke-width="6"/>
      <text x="68" y="121" text-anchor="middle" font-size="17" font-weight="900" fill="${accent}" font-family="Arial Rounded MT Bold, Arial">BANK</text>
    `,
    policy: `
      <rect x="34" y="28" width="68" height="88" rx="10" fill="#fff7d7" stroke="${accent}" stroke-width="6"/>
      <path d="M48 52h40M48 68h40M48 84h26" stroke="${accent}" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
      <circle cx="91" cy="94" r="15" fill="#f2a900"/>
      <path d="M84 94l5 5 10-12" fill="none" stroke="#fff7d7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="68" y="122" text-anchor="middle" font-size="16" font-weight="900" fill="${accent}" font-family="Arial Rounded MT Bold, Arial">POLICY</text>
    `,
    hongKong: `
      <circle cx="68" cy="68" r="43" fill="#c74631"/>
      <path d="M68 33c8 16 3 27-12 34 18-1 27 8 25 27 9-15 22-18 38-8-9-14-8-27 5-39-17 4-28-2-34-18-5 16-16 21-22 4z" fill="#fff2cf" opacity="0.95"/>
      <circle cx="68" cy="68" r="12" fill="#f2a900"/>
      <text x="68" y="124" text-anchor="middle" font-size="18" font-weight="900" fill="#c74631" font-family="Arial Rounded MT Bold, Arial">HK</text>
    `,
    globe: `
      <circle cx="68" cy="68" r="42" fill="#d8f6ee" stroke="${accent}" stroke-width="7"/>
      <path d="M28 68h80M68 26c14 14 21 28 21 42s-7 28-21 42M68 26c-14 14-21 28-21 42s7 28 21 42" fill="none" stroke="${accent}" stroke-width="5" opacity="0.75"/>
    `,
    exchange: `
      <path d="M33 53h59" stroke="${accent}" stroke-width="9" stroke-linecap="round"/>
      <path d="M79 39 96 53 79 67" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M103 84H44" stroke="#f2a900" stroke-width="9" stroke-linecap="round"/>
      <path d="M57 70 40 84l17 14" fill="none" stroke="#f2a900" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="68" y="124" text-anchor="middle" font-size="20" font-weight="900" fill="${accent}" font-family="Arial Rounded MT Bold, Arial">FX</text>
    `,
    safe: `
      <rect x="30" y="36" width="76" height="74" rx="14" fill="#7b673a"/>
      <rect x="39" y="45" width="58" height="56" rx="9" fill="#d8c28a"/>
      <circle cx="68" cy="73" r="17" fill="#fff4cf" stroke="#7b673a" stroke-width="6"/>
      <path d="M68 55v36M50 73h36" stroke="#7b673a" stroke-width="5"/>
    `,
    card: `
      <rect x="27" y="45" width="82" height="54" rx="10" fill="${accent}"/>
      <rect x="27" y="58" width="82" height="12" fill="#f2a900"/>
      <rect x="39" y="80" width="24" height="7" rx="3" fill="#fff6cf"/>
      <rect x="71" y="80" width="23" height="7" rx="3" fill="#fff6cf"/>
    `,
    gem: `
      <path d="M42 35h52l21 31-47 52-47-52 21-31z" fill="#eafaff" stroke="${accent}" stroke-width="6" stroke-linejoin="round"/>
      <path d="M42 35 68 118 94 35M21 66h94" fill="none" stroke="${accent}" stroke-width="4" opacity="0.55"/>
    `,
    coinStack: `
      <ellipse cx="68" cy="48" rx="37" ry="14" fill="#fff2a8"/>
      <path d="M31 48v48c0 8 17 15 37 15s37-7 37-15V48" fill="#f2a900"/>
      <ellipse cx="68" cy="96" rx="37" ry="15" fill="#ffc543"/>
      <text x="68" y="84" text-anchor="middle" font-size="38" font-weight="900" fill="#9b5300" font-family="Arial Rounded MT Bold, Arial">$</text>
    `,
    pouch: `
      <path d="M51 41c7 7 27 7 34 0l-8 22H59L51 41z" fill="#8b5b2c"/>
      <path d="M37 68c7-12 15-17 31-17s25 5 31 17c10 31-7 49-31 49S27 99 37 68z" fill="#d38a37"/>
      <text x="68" y="92" text-anchor="middle" font-size="35" font-weight="900" fill="#fff3c4" font-family="Arial Rounded MT Bold, Arial">$</text>
    `,
    lantern: `
      <rect x="45" y="33" width="46" height="70" rx="22" fill="${accent}"/>
      <path d="M68 30v78M45 49h46M45 87h46" stroke="#ffd56f" stroke-width="5"/>
      <path d="M68 104v16" stroke="#ffd56f" stroke-width="5" stroke-linecap="round"/>
    `,
    bamboo: `
      <path d="M39 100c10-39 30-62 60-74-3 38-20 65-60 74z" fill="#5b9a45"/>
      <path d="M42 99c18-21 36-42 55-70" stroke="#dff0a0" stroke-width="5" stroke-linecap="round"/>
      <path d="M57 76c-4-12-2-24 7-36M74 60c9 4 17 9 25 17" stroke="#356f36" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
    `,
    fortune: `
      <rect x="36" y="36" width="64" height="64" rx="10" fill="${accent}" transform="rotate(45 68 68)"/>
      <text x="68" y="82" text-anchor="middle" font-size="48" font-weight="900" fill="#ffe49d" font-family="Arial Rounded MT Bold, Arial">福</text>
    `,
    medal: `
      <path d="M49 29h38l-9 33H58L49 29z" fill="#2f72b8"/>
      <circle cx="68" cy="82" r="35" fill="#f2a900" stroke="#fff2a8" stroke-width="8"/>
      <text x="68" y="96" text-anchor="middle" font-size="42" font-weight="900" fill="#fff8d6" font-family="Arial Rounded MT Bold, Arial">★</text>
    `
  };

  return `
    <svg viewBox="0 0 136 136" aria-hidden="true">
      <rect x="10" y="10" width="116" height="116" rx="28" fill="${item.bg}" opacity="0.72"/>
      ${art[item.kind] || art.currency}
    </svg>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const levelArtKinds = [
  "dragonBoatScene",
  "zongziScene",
  "goldenEggScene",
  "dollarScene",
  "dragonHeadScene",
  "audScene",
  "policyScene",
  "hongKongScene"
];

function levelArtSvg(kind) {
  const art = {
    dragonBoatScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <defs>
          <linearGradient id="boatBody" x1="0" x2="1"><stop stop-color="#b73a2a"/><stop offset="1" stop-color="#e19a38"/></linearGradient>
          <linearGradient id="water" x1="0" x2="1"><stop stop-color="#1e6f74"/><stop offset="1" stop-color="#7fd0b7"/></linearGradient>
        </defs>
        <ellipse cx="78" cy="100" rx="62" ry="12" fill="url(#water)" opacity=".78"/>
        <path d="M18 73c31 23 87 23 116 0-5 21-25 33-58 35-34 2-54-11-58-35z" fill="url(#boatBody)" stroke="#fff0bd" stroke-width="4"/>
        <path d="M105 42c16-14 27-14 36-2-11 1-19 8-23 22" fill="none" stroke="#c83f2f" stroke-width="9" stroke-linecap="round"/>
        <circle cx="112" cy="47" r="7" fill="#fff5d0"/>
        <path d="M35 70h61" stroke="#fff7d7" stroke-width="8" stroke-linecap="round"/>
      </svg>
    `,
    zongziScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <defs><linearGradient id="leafGrad" x1="0" x2="1"><stop stop-color="#2f7a46"/><stop offset="1" stop-color="#b8d66a"/></linearGradient></defs>
        <ellipse cx="76" cy="102" rx="50" ry="11" fill="#123d31" opacity=".35"/>
        <path d="M75 15 128 103H22L75 15z" fill="url(#leafGrad)" stroke="#fff1c6" stroke-width="6" stroke-linejoin="round"/>
        <path d="M32 101c27-32 57-55 91-71" stroke="#fff6cf" stroke-width="8" stroke-linecap="round"/>
        <path d="M56 88c9-20 20-38 34-55" stroke="#2f6f3c" stroke-width="5" stroke-linecap="round" opacity=".62"/>
      </svg>
    `,
    goldenEggScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <defs><radialGradient id="eggGrad" cx=".35" cy=".25"><stop stop-color="#fff7bf"/><stop offset=".55" stop-color="#f2b92f"/><stop offset="1" stop-color="#b77400"/></radialGradient></defs>
        <ellipse cx="78" cy="101" rx="44" ry="10" fill="#6b3b11" opacity=".3"/>
        <ellipse cx="78" cy="62" rx="34" ry="48" fill="url(#eggGrad)" stroke="#fff0a6" stroke-width="7"/>
        <ellipse cx="65" cy="42" rx="12" ry="17" fill="#fff7d7" opacity=".72"/>
        <path d="M37 91c23 18 57 19 83 1" stroke="#8f5506" stroke-width="6" stroke-linecap="round" fill="none" opacity=".55"/>
      </svg>
    `,
    dollarScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <rect x="24" y="34" width="102" height="60" rx="11" fill="#dff1cf" stroke="#fff3c9" stroke-width="6"/>
        <circle cx="75" cy="64" r="21" fill="#fff7d7" stroke="#2f7a55" stroke-width="5"/>
        <text x="75" y="79" text-anchor="middle" font-size="38" font-weight="900" fill="#2f7a55" font-family="Arial Rounded MT Bold, Arial">$</text>
        <circle cx="44" cy="64" r="8" fill="#2f7a55" opacity=".76"/>
        <circle cx="106" cy="64" r="8" fill="#2f7a55" opacity=".76"/>
      </svg>
    `,
    dragonHeadScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <path d="M28 75c3-31 26-53 61-51 20 1 36 13 47 32-15-7-28-5-38 3 17 8 27 21 28 39-22-9-39-7-53 4-21 15-42 8-45-27z" fill="#c83f2f" stroke="#fff0bd" stroke-width="4"/>
        <path d="M48 46c-5-14-1-27 13-38 0 18 8 28 23 33" fill="#f2a900"/>
        <path d="M91 42c11-16 27-21 47-15-15 10-21 21-19 36" fill="#f2a900"/>
        <circle cx="92" cy="61" r="8" fill="#fff7d7"/>
        <circle cx="95" cy="61" r="3.5" fill="#253326"/>
        <path d="M47 82c22 10 45 10 68 0" stroke="#fff7d7" stroke-width="7" stroke-linecap="round"/>
      </svg>
    `,
    audScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <circle cx="75" cy="65" r="43" fill="#f2b934" stroke="#fff0a6" stroke-width="7"/>
        <circle cx="75" cy="65" r="30" fill="none" stroke="#2f7a70" stroke-width="5" opacity=".55"/>
        <text x="75" y="80" text-anchor="middle" font-size="36" font-weight="900" fill="#2f7a70" font-family="Arial Rounded MT Bold, Arial">A$</text>
        <path d="M39 102c24 11 51 11 73 0" stroke="#8a550b" stroke-width="6" stroke-linecap="round" opacity=".45"/>
      </svg>
    `,
    policyScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <rect x="41" y="18" width="70" height="88" rx="10" fill="#fff7d7" stroke="#2f8f60" stroke-width="6"/>
        <path d="M55 45h42M55 61h42M55 77h28" stroke="#2f8f60" stroke-width="6" stroke-linecap="round"/>
        <circle cx="101" cy="89" r="15" fill="#f2a900"/>
        <path d="M94 89l5 5 10-12" fill="none" stroke="#fff7d7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    hongKongScene: `
      <svg viewBox="0 0 150 120" aria-hidden="true">
        <circle cx="75" cy="63" r="44" fill="#c74631" stroke="#fff0bd" stroke-width="6"/>
        <path d="M75 27c9 17 4 29-12 36 19-1 29 9 27 29 10-17 24-20 41-9-10-15-9-29 5-42-18 5-30-2-37-19-5 17-17 23-24 5z" fill="#fff2cf"/>
        <circle cx="75" cy="63" r="12" fill="#f2a900"/>
      </svg>
    `
  };

  return art[kind] || art.dragonBoatScene;
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return;

    const levelIndex = Number(saved.levelIndex);
    const score = Number(saved.score);
    const completedLevels = Array.isArray(saved.completedLevels) ? saved.completedLevels : [];

    if (Number.isInteger(levelIndex)) {
      state.levelIndex = Math.min(Math.max(levelIndex, 0), levels.length - 1);
    }

    if (Number.isFinite(score) && score >= 0) {
      state.score = score;
    }

    state.completedLevels = new Set(
      completedLevels
        .map((index) => Number(index))
        .filter((index) => Number.isInteger(index) && index >= 0 && index < levels.length)
    );
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveProgress(levelIndex = state.levelIndex) {
  const nextLevelIndex = Math.min(Math.max(levelIndex, 0), levels.length - 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    levelIndex: nextLevelIndex,
    score: state.score,
    completedLevels: [...state.completedLevels]
  }));
}

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function getPairCount(level) {
  const requestedPairs = Math.floor((level.rows * level.cols) / 2);
  return Math.min(requestedPairs, symbols.length);
}

function buildDeck(level) {
  const pairCount = getPairCount(level);
  const chosen = shuffle(symbols).slice(0, pairCount);
  return shuffle(chosen.flatMap((symbol) => [
    { ...symbol, cardId: `${symbol.id}-a` },
    { ...symbol, cardId: `${symbol.id}-b` }
  ]));
}

function renderLevels() {
  els.levelGrid.innerHTML = "";
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "level-chip";
    button.textContent = `${index + 1}｜${level.rows}x${level.cols}`;
    if (index === state.levelIndex) button.classList.add("active");
    if (state.completedLevels.has(index)) button.classList.add("done");
    button.disabled = true;
    els.levelGrid.append(button);
  });
}

function renderDeck(deck) {
  const level = levels[state.levelIndex];
  const minCardWidth = level.cols >= 6 ? 108 : level.cols >= 4 ? 88 : 78;
  const maxCardWidth = level.cols >= 6 ? 126 : level.cols >= 4 ? 132 : 150;
  const mobileCols = deck.length >= 36 ? 6 : deck.length >= 30 ? 5 : Math.min(level.cols, 4);

  els.board.innerHTML = "";
  els.board.style.setProperty("--cols", level.cols);
  els.board.style.setProperty("--mobile-cols", mobileCols);
  els.board.style.setProperty("--board-min-width", `${Math.max(320, level.cols * minCardWidth + (level.cols - 1) * 10)}px`);
  els.board.style.setProperty("--board-max-width", `${Math.max(320, level.cols * maxCardWidth + (level.cols - 1) * 12)}px`);
  els.board.dataset.cardCount = String(deck.length);

  deck.forEach((card) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card-button flipped";
    button.dataset.symbolId = card.id;
    button.dataset.cardId = card.cardId;
    button.setAttribute("aria-label", `${card.name} 卡片`);
    button.innerHTML = `
      <span class="card-inner">
        <span class="card-face card-back"></span>
        <span class="card-face card-front">
          <span class="symbol-card" style="--symbol-bg: ${card.bg}; --symbol-accent: ${card.accent}">
            <span class="symbol-art">${symbolSvg(card)}</span>
            <span class="symbol-name">
              <strong>${escapeHtml(card.name)}</strong>
              <small>${escapeHtml(card.role)}</small>
            </span>
          </span>
        </span>
      </span>
    `;
    button.addEventListener("click", () => handleCardClick(button));
    els.board.append(button);
  });
}

function updateStats() {
  const level = levels[state.levelIndex];
  const pairCount = getPairCount(level);
  const playableCards = pairCount * 2;
  els.levelText.textContent = String(state.levelIndex + 1);
  els.scoreText.textContent = state.score.toLocaleString("en-US");
  els.timeText.textContent = String(state.seconds);
  els.matchedText.textContent = `${state.matchedPairs}/${pairCount}`;
  els.missText.textContent = String(state.misses);
  els.streakText.textContent = String(state.streak);
  els.roundText.textContent = `${level.rows} x ${level.cols} ｜ ${playableCards} 張 ｜ ${pairCount} 對 ｜ 失誤上限 ${level.maxMiss}`;
  els.levelBadge.textContent = `LEVEL ${state.levelIndex + 1}`;
  els.levelArt.innerHTML = levelArtSvg(levelArtKinds[state.levelIndex % levelArtKinds.length]);
  renderLevels();
}

function setMessage(text) {
  els.messageBar.textContent = text;
}

function startTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    if (state.locked || state.paused) return;
    state.seconds -= 1;
    updateStats();
    if (state.seconds <= 0) {
      endGame("TIME UP", "時間到", `總分 ${state.score.toLocaleString("en-US")}`);
    }
  }, 1000);
}

function startLevel(levelIndex = state.levelIndex) {
  clearInterval(state.timerId);
  const level = levels[levelIndex];
  state.levelIndex = levelIndex;
  saveProgress(levelIndex);
  state.misses = 0;
  state.streak = 0;
  state.matchedPairs = 0;
  state.firstCard = null;
  state.secondCard = null;
  state.locked = true;
  state.paused = false;
  state.seconds = level.time;
  els.pauseButton.textContent = "Ⅱ";
  els.modal.classList.add("hidden");
  els.board.classList.add("locked");
  renderDeck(buildDeck(level));
  updateStats();
  setMessage(`預覽 ${Math.round(level.preview / 1000)} 秒`);

  window.setTimeout(() => {
    document.querySelectorAll(".card-button").forEach((button) => button.classList.remove("flipped"));
    state.locked = false;
    els.board.classList.remove("locked");
    setMessage("翻開兩張相同圖案");
    startTimer();
  }, level.preview);
}

function handleCardClick(card) {
  if (state.locked || state.paused || card.classList.contains("flipped") || card.classList.contains("matched")) return;

  card.classList.add("flipped");

  if (!state.firstCard) {
    state.firstCard = card;
    return;
  }

  state.secondCard = card;
  state.locked = true;
  els.board.classList.add("locked");

  const isMatch = state.firstCard.dataset.symbolId === state.secondCard.dataset.symbolId;
  window.setTimeout(() => {
    if (isMatch) {
      completePair();
    } else {
      missPair();
    }
  }, 520);
}

function completePair() {
  state.firstCard.classList.add("matched");
  state.secondCard.classList.add("matched");
  state.matchedPairs += 1;
  state.streak += 1;
  const bonus = state.streak >= 3 ? 1000 : state.streak === 2 ? 500 : 0;
  state.score += 1000 + bonus;
  saveProgress(state.levelIndex);
  setMessage(bonus > 0 ? `連擊成功 +${1000 + bonus}` : "配對成功 +1000");
  clearSelection();
  updateStats();

  const level = levels[state.levelIndex];
  const pairCount = getPairCount(level);
  if (state.matchedPairs === pairCount) {
    state.completedLevels.add(state.levelIndex);
    const timeBonus = state.seconds * 20;
    state.score += timeBonus;
    saveProgress(Math.min(state.levelIndex + 1, levels.length - 1));
    updateStats();
    showLevelWin(timeBonus);
  }
}

function missPair() {
  state.firstCard.classList.remove("flipped");
  state.secondCard.classList.remove("flipped");
  state.misses += 1;
  state.streak = 0;
  state.score = Math.max(0, state.score - 100);
  saveProgress(state.levelIndex);
  const level = levels[state.levelIndex];
  setMessage(`翻錯 -100 ｜ 剩餘失誤 ${Math.max(0, level.maxMiss - state.misses)}`);
  clearSelection();
  updateStats();

  if (state.misses >= level.maxMiss) {
    endGame("GAME OVER", "失誤太多", `到達第 ${state.levelIndex + 1} 關，總分 ${state.score.toLocaleString("en-US")}`);
  }
}

function clearSelection() {
  state.firstCard = null;
  state.secondCard = null;
  if (!els.modal.classList.contains("hidden")) return;
  state.locked = false;
  els.board.classList.remove("locked");
}

function showLevelWin(timeBonus) {
  clearInterval(state.timerId);
  state.locked = true;
  els.board.classList.add("locked");
  els.modal.classList.add("level-briefing");
  els.modalKicker.textContent = "LEVEL WIN";
  const isLast = state.levelIndex === levels.length - 1;
  const nextLevelIndex = isLast ? state.levelIndex : state.levelIndex + 1;
  const nextLevel = levels[nextLevelIndex];
  const nextPairCount = getPairCount(nextLevel);
  const nextCardCount = nextPairCount * 2;
  els.modalTitle.textContent = isLast ? "FINAL LEVEL" : `LEVEL ${nextLevelIndex + 1}`;
  els.modalText.textContent = `目前分數 ${state.score.toLocaleString("en-US")} ｜ 時間獎勵 +${timeBonus.toLocaleString("en-US")}`;
  els.modalBrief.textContent = isLast
    ? `全部關卡完成 ｜ 最終分數 ${state.score.toLocaleString("en-US")}`
    : `下一關 ${nextLevel.rows} x ${nextLevel.cols} ｜ ${nextCardCount} 張 ｜ 限時 ${nextLevel.time} 秒`;
  els.continueButton.textContent = isLast ? "✓ 重新挑戰" : "✓ 下一關";
  els.modal.classList.remove("hidden");
}

function endGame(kicker, title, text) {
  clearInterval(state.timerId);
  state.locked = true;
  els.board.classList.add("locked");
  els.modal.classList.remove("level-briefing");
  saveProgress(state.levelIndex);
  els.modalKicker.textContent = kicker;
  els.modalTitle.textContent = title;
  els.modalText.textContent = text;
  els.modalBrief.textContent = `目前分數 ${state.score.toLocaleString("en-US")}`;
  els.continueButton.textContent = "✓ 重新開始";
  els.modal.classList.remove("hidden");
}

function resetGame() {
  clearProgress();
  state.score = 0;
  state.completedLevels.clear();
  startLevel(0);
}

els.continueButton.addEventListener("click", () => {
  const completedLast = state.levelIndex === levels.length - 1 && state.completedLevels.has(state.levelIndex);
  if (els.continueButton.textContent.includes("重新")) {
    startLevel(state.levelIndex);
    return;
  }
  if (completedLast) {
    resetGame();
    return;
  }
  startLevel(Math.min(state.levelIndex + 1, levels.length - 1));
});

els.quitButton.addEventListener("click", resetGame);
els.newGameButton.addEventListener("click", resetGame);

els.pauseButton.addEventListener("click", () => {
  if (state.locked && !state.paused) return;
  state.paused = !state.paused;
  els.pauseButton.textContent = state.paused ? "▶" : "Ⅱ";
  setMessage(state.paused ? "PAUSED" : "繼續翻牌");
});

loadProgress();
startLevel(state.levelIndex);
