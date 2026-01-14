/* script.js */
/* Role Play Cloze Trainer */

const DATA = {
  "meta": {
    "source": "Sits for game.docx",
    "created": "2026-01-14"
  },
  "situations": [
    {
      "id": "s1",
      "title": "SITUACIÓN 1: ALOJAMIENTO — The examiner is a receptionist / owner of a hotel. You are a tourist. You want to stay for 2 nights. There are no rooms. Ask for alternatives. Agree on a price. Ask about breakfast. Thank and say goodbye.",
      "turns": [
        {
          "speaker": "E",
          "text": "Buenos días. ¿Qué quiere?"
        },
        {
          "speaker": "YOU",
          "text": "Hola, me gustaría una habitación doble con baño para dos noches, por favor."
        },
        {
          "speaker": "E",
          "text": "Lo siento, pero no hay habitaciones disponibles."
        },
        {
          "speaker": "YOU",
          "text": "¿De verdad? ¿No hay ninguna habitación libre? ¿Quizás tiene una habitación individual?"
        },
        {
          "speaker": "E",
          "text": "No, lo siento, pero el hotel está completo."
        },
        {
          "speaker": "YOU",
          "text": "¡Qué pena! ¿Puede recomendarme otro hotel cerca de aquí, por favor?"
        },
        {
          "speaker": "E",
          "text": "Sí, claro. Hay un hotel al lado del banco. Se llama “El Sol”."
        },
        {
          "speaker": "YOU",
          "text": "Gracias. ¿Es caro?"
        },
        {
          "speaker": "E",
          "text": "No, no es muy caro. Son noventa euros por noche."
        },
        {
          "speaker": "YOU",
          "text": "Bueno, está bien. ¿Y el desayuno está incluido en el precio?"
        },
        {
          "speaker": "E",
          "text": "Sí, está incluido."
        },
        {
          "speaker": "YOU",
          "text": "Perfecto. Muchísimas gracias por su ayuda. ¡Adiós!"
        }
      ]
    },
    {
      "id": "s2",
      "title": "SITUACIÓN 2: PORTÁTIL ROTO — The examiner is a receptionist / assistant in an electronics shop. You are a customer. Your laptop is broken. Explain the problem. Ask if it can be repaired. Ask how long it will take. Ask about the price. Thank and say goodbye.",
      "turns": [
        {
          "speaker": "E",
          "text": "Buenos días. ¿En qué puedo ayudarle?"
        },
        {
          "speaker": "YOU",
          "text": "Hola. Tengo un problema con mi portátil. No funciona."
        },
        {
          "speaker": "E",
          "text": "¿Qué le pasa exactamente?"
        },
        {
          "speaker": "YOU",
          "text": "Se apaga todo el tiempo y la pantalla se queda negra."
        },
        {
          "speaker": "E",
          "text": "¿Lo ha dejado caer o se ha mojado?"
        },
        {
          "speaker": "YOU",
          "text": "No, nunca se me ha caído y no se ha mojado."
        },
        {
          "speaker": "E",
          "text": "Vale. Lo podemos reparar. ¿Cuánto tiempo hace que lo compró?"
        },
        {
          "speaker": "YOU",
          "text": "Lo compré hace dos años."
        },
        {
          "speaker": "E",
          "text": "Entiendo. ¿Quiere dejarlo aquí para que lo revisemos?"
        },
        {
          "speaker": "YOU",
          "text": "Sí, por favor. ¿Cuánto tardará la reparación?"
        },
        {
          "speaker": "E",
          "text": "Depende. Entre tres y cinco días."
        },
        {
          "speaker": "YOU",
          "text": "De acuerdo. ¿Y cuánto costará?"
        },
        {
          "speaker": "E",
          "text": "Aproximadamente cien euros."
        },
        {
          "speaker": "YOU",
          "text": "Perfecto. Muchas gracias por su ayuda. ¡Hasta luego!"
        }
      ]
    },
    {
      "id": "s3",
      "title": "SITUACIÓN 3: AUTOCARAVANA — The examiner is a receptionist in a campsite. You are staying there in a caravan. There is no electricity. Complain. Ask for help. Ask when it will be fixed. Ask for a discount. Thank and say goodbye.",
      "turns": [
        {
          "speaker": "E",
          "text": "Buenos días. ¿En qué puedo ayudarle?"
        },
        {
          "speaker": "YOU",
          "text": "Hola. Tenemos un problema con la electricidad en nuestra autocaravana."
        },
        {
          "speaker": "E",
          "text": "¿Qué problema tienen?"
        },
        {
          "speaker": "YOU",
          "text": "No hay luz y no podemos cargar los móviles."
        },
        {
          "speaker": "E",
          "text": "Lo siento mucho. Voy a mandar a un técnico ahora mismo."
        },
        {
          "speaker": "YOU",
          "text": "Gracias. ¿Cuánto tiempo tardará en arreglarlo?"
        },
        {
          "speaker": "E",
          "text": "Probablemente una hora."
        },
        {
          "speaker": "YOU",
          "text": "De acuerdo. Esto es muy inconveniente. ¿Podemos tener un descuento, por favor?"
        },
        {
          "speaker": "E",
          "text": "Sí, claro. Les haré un descuento del diez por ciento."
        },
        {
          "speaker": "YOU",
          "text": "Muchas gracias. ¡Adiós!"
        }
      ]
    },
    {
      "id": "s4",
      "title": "SITUACIÓN 4: MEDIOAMBIENTE — The examiner is a journalist. You are taking part in a school environmental project. Explain the project. Say why it is important. Mention what you personally do. Invite others to help. Thank and say goodbye.",
      "turns": [
        {
          "speaker": "E",
          "text": "Buenos días. Soy periodista. ¿Puedo hacerle unas preguntas sobre su proyecto?"
        },
        {
          "speaker": "YOU",
          "text": "Sí, claro. Estoy encantado/a de hablar del proyecto."
        },
        {
          "speaker": "E",
          "text": "¿En qué consiste el proyecto?"
        },
        {
          "speaker": "YOU",
          "text": "Es un proyecto medioambiental en el colegio para reducir la contaminación y reciclar más."
        },
        {
          "speaker": "E",
          "text": "¿Por qué es importante?"
        },
        {
          "speaker": "YOU",
          "text": "Es importante porque el cambio climático es un problema muy serio y tenemos que actuar ahora."
        },
        {
          "speaker": "E",
          "text": "¿Qué hace usted personalmente para ayudar?"
        },
        {
          "speaker": "YOU",
          "text": "Yo reciclo en casa, uso menos plástico y voy al colegio en bici o en transporte público."
        },
        {
          "speaker": "E",
          "text": "¿Cómo pueden ayudar otros estudiantes?"
        },
        {
          "speaker": "YOU",
          "text": "Pueden participar en actividades, apagar las luces, reciclar y hablar con sus familias."
        },
        {
          "speaker": "E",
          "text": "Muchas gracias por su tiempo."
        },
        {
          "speaker": "YOU",
          "text": "Gracias a usted. ¡Hasta luego!"
        }
      ]
    },
    {
      "id": "s5",
      "title": "SITUACIÓN 5: AVERÍA DE COCHE — The examiner is a mechanic. You have a problem with your car. Explain what happened. Ask for a repair. Ask how long it will take. Ask about the cost. Thank and say goodbye.",
      "turns": [
        {
          "speaker": "E",
          "text": "Buenos días. ¿Qué problema tiene con el coche?"
        },
        {
          "speaker": "YOU",
          "text": "Hola. Mi coche hace un ruido raro y no arranca bien."
        },
        {
          "speaker": "E",
          "text": "¿Desde cuándo pasa esto?"
        },
        {
          "speaker": "YOU",
          "text": "Desde ayer. Empezó después de un viaje largo."
        },
        {
          "speaker": "E",
          "text": "¿Se ha encendido alguna luz en el salpicadero?"
        },
        {
          "speaker": "YOU",
          "text": "Sí, se encendió una luz roja y me preocupé mucho."
        },
        {
          "speaker": "E",
          "text": "Vale. Podemos revisarlo ahora. ¿Quiere dejarlo aquí?"
        },
        {
          "speaker": "YOU",
          "text": "Sí, por favor. ¿Cuánto tardará la reparación?"
        },
        {
          "speaker": "E",
          "text": "Entre dos y tres días."
        },
        {
          "speaker": "YOU",
          "text": "De acuerdo. ¿Y cuánto costará más o menos?"
        },
        {
          "speaker": "E",
          "text": "Depende, pero aproximadamente doscientos euros."
        },
        {
          "speaker": "YOU",
          "text": "Perfecto. Muchas gracias. ¡Adiós!"
        }
      ]
    }
  ]
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const screens = {
  home: $("#screenHome"),
  play: $("#screenPlay"),
  results: $("#screenResults")
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

const opts = {
  strictAccents: true,
  allowEnyeAsN: true,
  lenientPunct: true,
  showHints: true,
};

function loadOptions() {
  opts.strictAccents = $("#optStrictAccents").checked;
  opts.allowEnyeAsN = $("#optAllowEnyeAsN").checked;
  opts.lenientPunct = $("#optLenientPunct").checked;
  opts.showHints = $("#optShowHints").checked;
}

["#optStrictAccents","#optAllowEnyeAsN","#optLenientPunct","#optShowHints"].forEach(id=>{
  $(id).addEventListener("change", loadOptions);
});

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[ch]);
}

// --- Normalization ---
const ACCENT_MAP = new Map([
  ["á","a"],["é","e"],["í","i"],["ó","o"],["ú","u"],["ü","u"],
  ["Á","A"],["É","E"],["Í","I"],["Ó","O"],["Ú","U"],["Ü","U"],
]);

function stripAccents(s) {
  return s.split("").map(ch => ACCENT_MAP.get(ch) ?? ch).join("");
}

function normalize(s, {strictAccents, allowEnyeAsN, lenientPunct}) {
  let out = (s ?? "").trim();

  if (lenientPunct) {
    out = out.replace(/[¿?¡!.,;:()\[\]{}"“”'’]/g, " ");
  }
  out = out.replace(/\s+/g, " ").trim().toLowerCase();

  if (allowEnyeAsN) out = out.replace(/ñ/g, "n");
  if (!strictAccents) out = stripAccents(out);
  return out;
}

function parseAlternatives(raw) {
  const cleaned = raw.trim();
  const parts = cleaned.split("/").map(s => s.trim()).filter(Boolean);
  return (parts.length <= 1) ? [cleaned] : parts;
}

function isMatch(user, expectedRaw) {
  const userN = normalize(user, opts);
  const alternatives = parseAlternatives(expectedRaw).map(x => normalize(x, opts));
  return alternatives.some(a => a === userN);
}

function tokenSimilarity(a, b) {
  const A = new Set(normalize(a, opts).split(" ").filter(Boolean));
  const B = new Set(normalize(b, opts).split(" ").filter(Boolean));
  if (A.size === 0 && B.size === 0) return 1;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const uni = A.size + B.size - inter;
  return uni === 0 ? 0 : inter / uni;
}

const STOPWORDS = new Set([
  "el","la","los","las","un","una","unos","unas","y","o","a","de","del","al","que","en","por","para","con","sin","es","estoy","estas","esta","está","son","soy","eres","se","me","te","mi","tu","su","sus","lo","le","les","ya","muy","más","mas","pero","porque","como","cuando","donde","qué","si","no","sí","pues","bueno"
]);

function mulberry32(a) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function escapeForTag(s) {
  return String(s).replace(/\]/g, "\\]");
}

function makeCloze(text, blanksWanted, seed) {
  const rng = mulberry32(seed);
  const tokens = text.split(/(\s+)/); // keep spaces
  const candidates = [];
  for (let i=0;i<tokens.length;i++) {
    const t = tokens[i];
    if (/^\s+$/.test(t)) continue;
    const w = t.replace(/[¿?¡!.,;:()\[\]{}"“”'’]/g,"").trim();
    if (!w) continue;
    if (!/^[\p{L}áéíóúüñÁÉÍÓÚÜÑ]+(?:[\p{L}áéíóúüñÁÉÍÓÚÜÑ]+)?$/u.test(w)) continue;
    const wn = normalize(w, {...opts, strictAccents:false});
    if (wn.length <= 3) continue;
    if (STOPWORDS.has(wn)) continue;
    candidates.push({idx:i, raw:w});
  }
  for (let i=candidates.length-1;i>0;i--) {
    const j = Math.floor(rng()*(i+1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  const chosen = candidates.slice(0, Math.max(0, blanksWanted));
  const chosenIdx = new Set(chosen.map(c=>c.idx));

  const out = tokens.map((t,i)=>{
    if (!chosenIdx.has(i)) return t;
    const ans = t.replace(/^\W+|\W+$/g,"").trim();
    return `[[BLANK:${escapeForTag(ans)}]]`;
  }).join("");

  return { templ: out };
}

function splitTemplate(templ) {
  const parts = [];
  const re = /\[\[BLANK:([^\]]+)\]\]/g;
  let last = 0;
  let m;
  while ((m = re.exec(templ)) !== null) {
    if (m.index > last) parts.push(templ.slice(last, m.index));
    parts.push({ blank: m[1] });
    last = re.lastIndex;
  }
  if (last < templ.length) parts.push(templ.slice(last));
  return parts;
}

// --- State ---
let current = {
  situation: null,
  level: 1,
  seed: 12345,
  startMs: 0,
  timerId: null,
  blanks: [],
  hintsUsed: 0,
  lastResult: null,
};

function formatTime(ms) {
  const s = Math.max(0, Math.floor(ms/1000));
  const m = Math.floor(s/60);
  const r = s%60;
  return `${m}:${String(r).padStart(2,"0")}`;
}

function startTimer() {
  current.startMs = performance.now();
  if (current.timerId) clearInterval(current.timerId);
  current.timerId = setInterval(()=>{
    $("#time").textContent = formatTime(performance.now()-current.startMs);
  }, 250);
}

function stopTimer() {
  if (current.timerId) clearInterval(current.timerId);
  current.timerId = null;
}

function calcLiveScore() {
  const total = current.blanks.length;
  let correct = 0;
  for (const b of current.blanks) {
    const val = b.input?.value ?? "";
    if (b.mode === "inline") {
      if (isMatch(val, b.expected)) correct++;
    } else {
      const sim = tokenSimilarity(val, b.expectedFull);
      if (sim >= b.simThreshold) correct++;
    }
  }
  const elapsed = (performance.now()-current.startMs)/1000;
  const accuracy = total ? correct/total : 0;
  const speedBonus = Math.max(0, Math.floor(220 - elapsed));
  let score = Math.round(correct*20 + accuracy*120 + speedBonus);
  score -= current.hintsUsed * 6;
  return {score: Math.max(0, score), correct, total, accuracy};
}

function updateProgress() {
  const total = current.blanks.length;
  let filled = 0;
  for (const b of current.blanks) {
    const v = (b.input?.value ?? "").trim();
    if (v) filled++;
  }
  const pct = total ? (filled/total)*100 : 0;
  $("#progressFill").style.width = `${pct}%`;
  $("#progressText").textContent = `${filled} / ${total}`;
  $("#liveScore").textContent = String(calcLiveScore().score);
}

// --- Home ---
function buildHome() {
  const grid = $("#situationGrid");
  grid.innerHTML = "";
  DATA.situations.forEach((s)=>{
    const turns = s.turns.length;
    const youLines = s.turns.filter(t=>t.speaker==="YOU").length;

    const btn = document.createElement("button");
    btn.className = "sitBtn";
    btn.innerHTML = `
      <div class="sitTitle">${escapeHtml(s.title)}</div>
      <div class="sitMeta">${turns} lines · ${youLines} YOU lines</div>
      <div class="row" style="margin-top:10px">
        ${[1,2,3,4,5].map(l=>`<span class="pill">Level ${l}</span>`).join("")}
      </div>
    `;
    btn.addEventListener("click", ()=> openLevelPicker(s.id));
    grid.appendChild(btn);
  });
}

function levelDescription(lvl) {
  if (lvl===1) return "Easy: a few missing words";
  if (lvl===2) return "Medium: more blanks per line";
  if (lvl===3) return "Hard: lots of blanks";
  if (lvl===4) return "Very hard: write the whole line (with keyword cues)";
  return "Boss: write the whole line (no cues)";
}

function openLevelPicker(sitId) {
  const s = DATA.situations.find(x=>x.id===sitId);
  $("#modalTitle").textContent = "Choose level";
  $("#modalBody").innerHTML = `
    <div class="muted" style="margin-bottom:10px">${escapeHtml(s.title)}</div>
    <div class="grid">
      ${[1,2,3,4,5].map(l=>`
        <button class="sitBtn" data-level="${l}">
          <div class="sitTitle">Level ${l}</div>
          <div class="sitMeta">${levelDescription(l)}</div>
        </button>
      `).join("")}
    </div>
  `;
  $("#modal").classList.remove("hidden");
  $$("#modalBody [data-level]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const lvl = Number(btn.getAttribute("data-level"));
      $("#modal").classList.add("hidden");
      startGame(sitId, lvl);
    });
  });
}

// --- Game build ---
let activeBlankId = 0;
function setActiveBlank(id) { activeBlankId = id; }

function makeCues(text) {
  const words = normalize(text, {...opts, strictAccents:false, lenientPunct:true}).split(" ").filter(Boolean);
  const content = words.filter(w => w.length>3 && !STOPWORDS.has(w));
  const cues = Array.from(new Set(content)).slice(0, 6);
  return cues.length ? cues.join(" · ") : "(no cues)";
}

function startGame(sitId, level) {
  loadOptions();
  current.situation = DATA.situations.find(x=>x.id===sitId);
  current.level = level;
  current.seed = Date.now() % 1000000;
  current.blanks = [];
  current.hintsUsed = 0;
  current.lastResult = null;

  $("#playKicker").textContent = `${current.situation.title} · Level ${level}`;
  $("#playTitle").textContent = current.situation.title;
  $("#playDesc").textContent = (level <= 3)
    ? "Fill in the missing parts of the green “YOU” lines."
    : "Write/say the full “YOU” lines. Level 4 gives keyword cues; Level 5 gives none.";

  buildChat();
  showScreen("play");
  startTimer();
  updateProgress();
}

function buildChat() {
  const chat = $("#chat");
  chat.innerHTML = "";
  const turns = current.situation.turns;

  let globalBlankIndex = 0;

  turns.forEach((t, idx)=>{
    const bubble = document.createElement("div");
    bubble.className = "bubble " + (t.speaker==="E" ? "examiner" : "you");

    const top = document.createElement("div");
    top.className = "bubbleTop";
    top.innerHTML = `
      <span class="badge ${t.speaker==="E" ? "e" : "you"}">${t.speaker==="E" ? "EXAMINER" : "YOU"}</span>
      <span class="mini">Line ${idx+1}</span>
    `;
    bubble.appendChild(top);

    const line = document.createElement("div");
    line.className = "lineText";
    line.textContent = t.text;
    bubble.appendChild(line);

    if (t.speaker === "YOU") {
      if (current.level <= 3) {
        const blanksWanted = (current.level===1) ? 2 : (current.level===2 ? 4 : 6);
        const {templ} = makeCloze(t.text, blanksWanted, current.seed + idx*97);
        const parts = splitTemplate(templ);

        const wrap = document.createElement("div");
        wrap.className = "blanks";

        parts.forEach((p)=>{
          if (typeof p === "string") {
            const span = document.createElement("span");
            span.textContent = p;
            wrap.appendChild(span);
          } else {
            const blankWrap = document.createElement("span");
            blankWrap.className = "blankWrap";

            const input = document.createElement("input");
            input.className = "blank";
            input.setAttribute("data-blank-idx", String(globalBlankIndex));
            input.setAttribute("placeholder", "…");
            input.autocomplete = "off";
            input.spellcheck = false;

            const expected = p.blank;

            const hintBtn = document.createElement("button");
            hintBtn.className = "btn hintBtn ghost";
            hintBtn.textContent = "Hint";
            const hintText = document.createElement("span");
            hintText.className = "hintText";
            hintText.textContent = "";

            if (!opts.showHints) hintBtn.style.display = "none";

            hintBtn.addEventListener("click", ()=>{
              current.hintsUsed += 1;
              const alts = parseAlternatives(expected);
              const primary = alts[0];
              const clean = primary.trim();
              const first = clean.slice(0, clean.length>6 ? 2 : 1);
              hintText.textContent = ` ${first}… (${clean.length})`;
              hintBtn.disabled = true;
              updateProgress();
            });

            input.addEventListener("input", updateProgress);
            input.addEventListener("focus", ()=> setActiveBlank(globalBlankIndex));

            current.blanks.push({
              id: globalBlankIndex,
              mode: "inline",
              expected,
              input,
              lineIndex: idx,
            });
            globalBlankIndex++;

            blankWrap.appendChild(input);
            blankWrap.appendChild(hintBtn);
            blankWrap.appendChild(hintText);
            wrap.appendChild(blankWrap);
          }
        });

        bubble.appendChild(wrap);
      } else {
        const input = document.createElement("textarea");
        input.className = "blank";
        input.rows = 2;
        input.style.width = "100%";
        input.style.maxWidth = "860px";
        input.style.minHeight = "54px";
        input.placeholder = (current.level===4)
          ? "Type/say the full response (use the cues below)…"
          : "Type/say the full response…";
        input.autocomplete = "off";
        input.spellcheck = false;

        input.addEventListener("input", updateProgress);
        input.addEventListener("focus", ()=> setActiveBlank(globalBlankIndex));

        bubble.appendChild(input);

        if (current.level===4) {
          const cue = document.createElement("div");
          cue.className = "cue";
          cue.textContent = "Cues: " + makeCues(t.text);
          bubble.appendChild(cue);
        }

        current.blanks.push({
          id: globalBlankIndex,
          mode: "full",
          expectedFull: t.text,
          simThreshold: 0.86,
          input,
          lineIndex: idx,
        });
        globalBlankIndex++;
      }
    }

    chat.appendChild(bubble);
  });
}

// --- Speech ---
function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("Text-to-speech is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "es-ES";
  u.rate = 1.0;
  window.speechSynthesis.speak(u);
}

function readExaminerOnly() {
  const lines = current.situation.turns.filter(t=>t.speaker==="E").map(t=>t.text);
  speak(lines.join(" ... "));
}
function readAll() {
  const lines = current.situation.turns.map(t => (t.speaker==="E" ? "Examinador: " : "Tú: ") + t.text);
  speak(lines.join(" ... "));
}

function startVoiceFill() {
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Rec) {
    alert("Voice input isn't supported in this browser. Try Chrome or Edge.");
    return;
  }
  const rec = new Rec();
  rec.lang = "es-ES";
  rec.interimResults = false;
  rec.maxAlternatives = 1;

  const target = current.blanks.find(b => b.id === activeBlankId) ?? current.blanks[0];
  if (!target) return;

  rec.onresult = (ev) => {
    const text = ev.results?.[0]?.[0]?.transcript ?? "";
    if (target.input) {
      target.input.value = text.trim();
      target.input.dispatchEvent(new Event("input"));
      target.input.focus();
    }
  };
  rec.onerror = () => alert("Voice input error. Check mic permissions and try again.");
  rec.start();
}

// --- Grading / Results ---
function grade() {
  stopTimer();
  const elapsedMs = performance.now() - current.startMs;
  const total = current.blanks.length;

  let correct = 0;
  const results = [];

  for (const b of current.blanks) {
    const given = (b.input?.value ?? "").trim();
    if (b.mode === "inline") {
      const ok = isMatch(given, b.expected);
      if (ok) correct++;
      results.push({mode:"inline", expected:b.expected, given, ok, lineIndex:b.lineIndex});
    } else {
      const sim = tokenSimilarity(given, b.expectedFull);
      const ok = sim >= b.simThreshold;
      if (ok) correct++;
      results.push({mode:"full", expected:b.expectedFull, given, ok, sim, lineIndex:b.lineIndex});
    }
  }

  const accuracy = total ? correct/total : 0;
  const score = Math.max(0, Math.round(calcLiveScore().score));

  return {score, elapsedMs, accuracy, results, correct, total, hintsUsed: current.hintsUsed};
}

function renderCorrections(payload) {
  const byLine = new Map();
  for (const r of payload.results) {
    const arr = byLine.get(r.lineIndex) ?? [];
    arr.push(r);
    byLine.set(r.lineIndex, arr);
  }

  const turns = current.situation.turns;
  const wrap = document.createElement("div");

  turns.forEach((t, idx)=>{
    if (t.speaker !== "YOU") return;
    const block = document.createElement("div");
    block.className = "correction";
    const lineRs = byLine.get(idx) ?? [];
    const okAll = lineRs.length ? lineRs.every(x=>x.ok) : false;

    const your = (current.level <= 3)
      ? (lineRs.map(x=>x.given).join(" ").trim())
      : (lineRs[0]?.given ?? "");

    block.innerHTML = `
      <div><span class="${okAll ? "good":"bad"}">${okAll ? "✓" : "✗"}</span>
        <strong>YOU</strong> · Line ${idx+1}
      </div>
      <div class="mini" style="margin-top:6px">Model answer:</div>
      <div style="margin-top:4px">${escapeHtml(t.text)}</div>
      <div class="mini" style="margin-top:8px">Your answer:</div>
      <div style="margin-top:4px">${escapeHtml(your)}</div>
    `;

    if (current.level <= 3) {
      const bads = lineRs.filter(x=>!x.ok);
      if (bads.length) {
        const ul = document.createElement("ul");
        ul.className = "mini";
        ul.style.marginTop = "8px";
        ul.innerHTML = bads.map(b=>`<li><span class="bad">Missing:</span> <strong>${escapeHtml(b.expected)}</strong></li>`).join("");
        block.appendChild(ul);
      }
    } else {
      const r0 = lineRs[0];
      if (r0) {
        const sim = Math.round((r0.sim ?? 0) * 100);
        const p = document.createElement("div");
        p.className = "mini";
        p.style.marginTop = "8px";
        p.innerHTML = `Similarity: <strong>${sim}%</strong> (needs ~86%+)`;
        block.appendChild(p);
      }
    }

    wrap.appendChild(block);
  });

  $("#corrections").innerHTML = "";
  $("#corrections").appendChild(wrap);
}

function onSubmit() {
  const payload = grade();
  $("#finalScore").textContent = String(payload.score);
  $("#finalAcc").textContent = `${Math.round(payload.accuracy*100)}%`;
  $("#finalTime").textContent = formatTime(payload.elapsedMs);
  $("#finalHints").textContent = String(payload.hintsUsed);

  renderCorrections(payload);
  current.lastResult = payload;

  showScreen("results");
}

function keyForScores() {
  return `rp_scores_v1::${current.situation.id}::L${current.level}`;
}

function saveScore() {
  const name = ($("#playerName").value || "").trim().slice(0,18) || "Anonymous";
  const payload = current.lastResult;
  if (!payload) return;

  const item = {
    name,
    score: payload.score,
    timeMs: payload.elapsedMs,
    acc: payload.accuracy,
    when: Date.now(),
  };

  const key = keyForScores();
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  existing.push(item);
  existing.sort((a,b)=> b.score - a.score || a.timeMs - b.timeMs);
  localStorage.setItem(key, JSON.stringify(existing.slice(0,10)));

  alert("Saved! Check High Scores.");
}

function showHighScores() {
  const rows = [];
  for (const s of DATA.situations) {
    for (let lvl=1; lvl<=5; lvl++) {
      const key = `rp_scores_v1::${s.id}::L${lvl}`;
      const list = JSON.parse(localStorage.getItem(key) || "[]");
      if (!list.length) continue;
      list.slice(0,5).forEach((r, idx)=>{
        rows.push({
          sit: s.title, lvl,
          rank: idx+1,
          name: r.name,
          score: r.score,
          time: formatTime(r.timeMs),
          acc: Math.round(r.acc*100) + "%"
        });
      });
    }
  }
  rows.sort((a,b)=> b.score - a.score);

  $("#modalTitle").textContent = "High Scores (local device)";
  $("#modalBody").innerHTML = rows.length ? `
    <div class="mini muted" style="margin-bottom:10px">Top results saved on this device/browser only.</div>
    <div style="overflow:auto">
      <table style="width:100%; border-collapse:collapse; font-size:13px">
        <thead>
          <tr>
            <th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Situation</th>
            <th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Level</th>
            <th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Rank</th>
            <th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Name</th>
            <th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Score</th>
            <th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Time</th>
            <th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Acc</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(r=>`
            <tr>
              <td style="padding:8px; border-bottom:1px solid var(--line)">${escapeHtml(r.sit)}</td>
              <td style="padding:8px; border-bottom:1px solid var(--line)">${r.lvl}</td>
              <td style="padding:8px; border-bottom:1px solid var(--line)">${r.rank}</td>
              <td style="padding:8px; border-bottom:1px solid var(--line)">${escapeHtml(r.name)}</td>
              <td style="padding:8px; border-bottom:1px solid var(--line)"><strong>${r.score}</strong></td>
              <td style="padding:8px; border-bottom:1px solid var(--line)">${r.time}</td>
              <td style="padding:8px; border-bottom:1px solid var(--line)">${r.acc}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  ` : `<div class="muted">No scores saved yet. Finish a run and save your score.</div>`;

  $("#modal").classList.remove("hidden");
}

function showHow() {
  $("#modalTitle").textContent = "How it works";
  $("#modalBody").innerHTML = `
    <div class="mini muted" style="margin-bottom:10px">Designed for Leaving Cert Spanish role play practice.</div>
    <ul style="margin:0; padding-left:18px; line-height:1.6">
      <li><strong>Pick a situation</strong> then choose <strong>Level 1–5</strong>.</li>
      <li>Green bubbles are <strong>YOU</strong> (what students practise).</li>
      <li>Levels 1–3: fill missing words. Levels 4–5: write/say the full line.</li>
      <li><strong>Hints</strong> reveal the first letter(s) but reduce score slightly.</li>
      <li><strong>Voice input</strong> fills the currently focused blank/box (best in Chrome/Edge).</li>
      <li><strong>High scores</strong> are stored on this device (localStorage).</li>
    </ul>
  `;
  $("#modal").classList.remove("hidden");
}

// --- Wire up ---
$("#btnHome").addEventListener("click", ()=>{ stopTimer(); showScreen("home"); });
$("#btnHome2").addEventListener("click", ()=>{ stopTimer(); showScreen("home"); });
$("#btnHow").addEventListener("click", showHow);
$("#btnScores").addEventListener("click", showHighScores);
$("#btnCloseModal").addEventListener("click", ()=> $("#modal").classList.add("hidden"));
$("#modal").addEventListener("click", (e)=>{ if (e.target.id==="modal") $("#modal").classList.add("hidden"); });

$("#btnSpeakExaminer").addEventListener("click", readExaminerOnly);
$("#btnSpeakAll").addEventListener("click", readAll);
$("#btnVoice").addEventListener("click", startVoiceFill);
$("#btnSubmit").addEventListener("click", onSubmit);

$("#btnRetry").addEventListener("click", ()=>{
  const sitId = current.situation.id;
  const lvl = current.level;
  startGame(sitId, lvl);
});
$("#btnSaveScore").addEventListener("click", saveScore);

window.addEventListener("beforeunload", ()=>{ try{ window.speechSynthesis?.cancel(); }catch{} });

// init
loadOptions();
buildHome();
showScreen("home");
