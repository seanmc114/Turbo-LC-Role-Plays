/* script.js (no \p{L} / very compatible) */

var DATA = {
  "meta": { "source": "Sits for game.docx", "created": "2026-01-14" },
  "situations": [
    {"id":"s1","title":"SITUACIÓN 1: ALOJAMIENTO","turns":[
      {"speaker":"E","text":"Hola, dígame."},
      {"speaker":"YOU","text":"Voy a estar/ estaré en su universidad el año academico que viene de Erasmus."},
      {"speaker":"YOU","text":"Es qué, como no conozco a nadie en Caceres, me pregunto si usted me podría dar algun consejo sobre/acerca de Alojamiento."},
      {"speaker":"E","text":"¿En qué parte de la ciudad querrías vivir?"},
      {"speaker":"YOU","text":"Bueno, preferiría vivir (bastante) cerca de la universidad, porque el año pasado vivía en las afueras de Dublin, y no me gustaba mucho la verdad."},
      {"speaker":"E","text":"¿Por qué?"},
      {"speaker":"YOU","text":"Pues, pasé demasiado tiempo viajando porque estaba muy lejos de todo. En el quinto pimiento, como dicen. JAJA. Si podría utilizar este tiempo en mis estudios/ estudiando, creo que mis notas mejorarían."},
      {"speaker":"E","text":"Tienes razón. Pero sabes que Cáceres es una ciudad muy pequeña y se puede andar desde las afueras a la Plaza Mayor en media hora."},
      {"speaker":"YOU","text":"Pues eso no está lejos, la verdad, y cómo el clima es mejor que el de irlanda, consideraré toda la ciudad, aunque todavía/ aún preferiría vivir en el centro."}
    ]},
    {"id":"s2","title":"SITUACIÓN 2: PORTÁTIL ROTO — The examiner is a receptionist / assistant in an electronics shop. You are a customer. Your laptop is broken. Explain the problem. Ask if it can be repaired. Ask how long it will take. Ask about the price. Thank and say goodbye.","turns":[
      {"speaker":"E","text":"Buenos días. ¿En qué puedo ayudarle?"},
      {"speaker":"YOU","text":"Hola. Tengo un problema con mi portátil. No funciona."},
      {"speaker":"E","text":"¿Qué le pasa exactamente?"},
      {"speaker":"YOU","text":"Se apaga todo el tiempo y la pantalla se queda negra."},
      {"speaker":"E","text":"¿Lo ha dejado caer o se ha mojado?"},
      {"speaker":"YOU","text":"No, nunca se me ha caído y no se ha mojado."},
      {"speaker":"E","text":"Vale. Lo podemos reparar. ¿Cuánto tiempo hace que lo compró?"},
      {"speaker":"YOU","text":"Lo compré hace dos años."},
      {"speaker":"E","text":"Entiendo. ¿Quiere dejarlo aquí para que lo revisemos?"},
      {"speaker":"YOU","text":"Sí, por favor. ¿Cuánto tardará la reparación?"},
      {"speaker":"E","text":"Depende. Entre tres y cinco días."},
      {"speaker":"YOU","text":"De acuerdo. ¿Y cuánto costará?"},
      {"speaker":"E","text":"Aproximadamente cien euros."},
      {"speaker":"YOU","text":"Perfecto. Muchas gracias por su ayuda. ¡Hasta luego!"}
    ]},
    {"id":"s3","title":"SITUACIÓN 3: AUTOCARAVANA — The examiner is a receptionist in a campsite. You are staying there in a caravan. There is no electricity. Complain. Ask for help. Ask when it will be fixed. Ask for a discount. Thank and say goodbye.","turns":[
      {"speaker":"E","text":"Buenos días. ¿En qué puedo ayudarle?"},
      {"speaker":"YOU","text":"Hola. Tenemos un problema con la electricidad en nuestra autocaravana."},
      {"speaker":"E","text":"¿Qué problema tienen?"},
      {"speaker":"YOU","text":"No hay luz y no podemos cargar los móviles."},
      {"speaker":"E","text":"Lo siento mucho. Voy a mandar a un técnico ahora mismo."},
      {"speaker":"YOU","text":"Gracias. ¿Cuánto tiempo tardará en arreglarlo?"},
      {"speaker":"E","text":"Probablemente una hora."},
      {"speaker":"YOU","text":"De acuerdo. Esto es muy inconveniente. ¿Podemos tener un descuento, por favor?"},
      {"speaker":"E","text":"Sí, claro. Les haré un descuento del diez por ciento."},
      {"speaker":"YOU","text":"Muchas gracias. ¡Adiós!"}
    ]},
    {"id":"s4","title":"SITUACIÓN 4: MEDIOAMBIENTE — The examiner is a journalist. You are taking part in a school environmental project. Explain the project. Say why it is important. Mention what you personally do. Invite others to help. Thank and say goodbye.","turns":[
      {"speaker":"E","text":"Buenos días. Soy periodista. ¿Puedo hacerle unas preguntas sobre su proyecto?"},
      {"speaker":"YOU","text":"Sí, claro. Estoy encantado/a de hablar del proyecto."},
      {"speaker":"E","text":"¿En qué consiste el proyecto?"},
      {"speaker":"YOU","text":"Es un proyecto medioambiental en el colegio para reducir la contaminación y reciclar más."},
      {"speaker":"E","text":"¿Por qué es importante?"},
      {"speaker":"YOU","text":"Es importante porque el cambio climático es un problema muy serio y tenemos que actuar ahora."},
      {"speaker":"E","text":"¿Qué hace usted personalmente para ayudar?"},
      {"speaker":"YOU","text":"Yo reciclo en casa, uso menos plástico y voy al colegio en bici o en transporte público."},
      {"speaker":"E","text":"¿Cómo pueden ayudar otros estudiantes?"},
      {"speaker":"YOU","text":"Pueden participar en actividades, apagar las luces, reciclar y hablar con sus familias."},
      {"speaker":"E","text":"Muchas gracias por su tiempo."},
      {"speaker":"YOU","text":"Gracias a usted. ¡Hasta luego!"}
    ]},
    {"id":"s5","title":"SITUACIÓN 5: AVERÍA DE COCHE — The examiner is a mechanic. You have a problem with your car. Explain what happened. Ask for a repair. Ask how long it will take. Ask about the cost. Thank and say goodbye.","turns":[
      {"speaker":"E","text":"Buenos días. ¿Qué problema tiene con el coche?"},
      {"speaker":"YOU","text":"Hola. Mi coche hace un ruido raro y no arranca bien."},
      {"speaker":"E","text":"¿Desde cuándo pasa esto?"},
      {"speaker":"YOU","text":"Desde ayer. Empezó después de un viaje largo."},
      {"speaker":"E","text":"¿Se ha encendido alguna luz en el salpicadero?"},
      {"speaker":"YOU","text":"Sí, se encendió una luz roja y me preocupé mucho."},
      {"speaker":"E","text":"Vale. Podemos revisarlo ahora. ¿Quiere dejarlo aquí?"},
      {"speaker":"YOU","text":"Sí, por favor. ¿Cuánto tardará la reparación?"},
      {"speaker":"E","text":"Entre dos y tres días."},
      {"speaker":"YOU","text":"De acuerdo. ¿Y cuánto costará más o menos?"},
      {"speaker":"E","text":"Depende, pero aproximadamente doscientos euros."},
      {"speaker":"YOU","text":"Perfecto. Muchas gracias. ¡Adiós!"}
    ]}
  ]
};

function ready(fn){
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
}

ready(function(){

  // If JS is running, tag the body (helps debugging + CSS if needed)
  document.body.setAttribute("data-js", "on");

  function $(sel){ return document.querySelector(sel); }
  function $all(sel){ return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  // If anything throws, show a visible banner instead of "dead buttons"
  window.addEventListener("error", function(e){
    try{
      var m = document.createElement("div");
      m.style.position = "fixed";
      m.style.left = "12px";
      m.style.right = "12px";
      m.style.bottom = "12px";
      m.style.padding = "12px 14px";
      m.style.borderRadius = "14px";
      m.style.background = "rgba(214,31,44,0.95)";
      m.style.color = "white";
      m.style.fontWeight = "900";
      m.style.zIndex = "9999";
      m.textContent = "JavaScript error on this device. Please refresh. (Tell teacher: browser/device may be blocking a feature.)";
      document.body.appendChild(m);
    }catch(_){}
  }, { once:true });

  var screens = {
    home: $("#screenHome"),
    play: $("#screenPlay"),
    results: $("#screenResults")
  };

  function showScreen(name){
    screens.home.classList.remove("active");
    screens.play.classList.remove("active");
    screens.results.classList.remove("active");
    screens[name].classList.add("active");
  }

  var opts = {
    strictAccents: true,
    allowEnyeAsN: true,
    lenientPunct: true,
    showHints: true
  };

  function loadOptions(){
    opts.strictAccents = $("#optStrictAccents").checked;
    opts.allowEnyeAsN = $("#optAllowEnyeAsN").checked;
    opts.lenientPunct = $("#optLenientPunct").checked;
    opts.showHints = $("#optShowHints").checked;
  }

  $all("#optStrictAccents,#optAllowEnyeAsN,#optLenientPunct,#optShowHints").forEach(function(el){
    el.addEventListener("change", loadOptions);
  });

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(ch){
      return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[ch];
    });
  }

  var ACCENT_MAP = {
    "á":"a","é":"e","í":"i","ó":"o","ú":"u","ü":"u",
    "Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ü":"U"
  };

  function stripAccents(s){
    var out = "";
    for (var i=0;i<s.length;i++){
      var ch = s.charAt(i);
      out += (ACCENT_MAP[ch] || ch);
    }
    return out;
  }

  function normalize(s){
    var out = (s == null ? "" : String(s)).trim();

    if (opts.lenientPunct){
      out = out.replace(/[¿?¡!.,;:()\[\]{}"“”'’]/g, " ");
    }
    out = out.replace(/\s+/g, " ").trim().toLowerCase();

    if (opts.allowEnyeAsN){
      out = out.replace(/ñ/g, "n");
    }
    if (!opts.strictAccents){
      out = stripAccents(out);
    }
    return out;
  }

  function parseAlternatives(raw){
    var cleaned = String(raw || "").trim();
    var parts = cleaned.split("/").map(function(x){ return x.trim(); }).filter(Boolean);
    return parts.length <= 1 ? [cleaned] : parts;
  }

  function isMatch(user, expectedRaw){
    var u = normalize(user);
    var alts = parseAlternatives(expectedRaw).map(function(x){ return normalize(x); });
    for (var i=0;i<alts.length;i++){
      if (alts[i] === u) return true;
    }
    return false;
  }

  function tokenSimilarity(a,b){
    var A = normalize(a).split(" ").filter(Boolean);
    var B = normalize(b).split(" ").filter(Boolean);
    if (!A.length && !B.length) return 1;

    var setA = {};
    var setB = {};
    var i;

    for (i=0;i<A.length;i++) setA[A[i]] = true;
    for (i=0;i<B.length;i++) setB[B[i]] = true;

    var inter = 0, uni = 0;
    for (var k in setA){ if (setA.hasOwnProperty(k)){ uni++; if (setB[k]) inter++; } }
    for (var k2 in setB){ if (setB.hasOwnProperty(k2) && !setA[k2]) uni++; }

    return uni === 0 ? 0 : inter/uni;
  }

  var STOPWORDS = {
    "el":1,"la":1,"los":1,"las":1,"un":1,"una":1,"unos":1,"unas":1,"y":1,"o":1,"a":1,"de":1,"del":1,"al":1,
    "que":1,"en":1,"por":1,"para":1,"con":1,"sin":1,"es":1,"estoy":1,"estas":1,"esta":1,"está":1,"son":1,
    "soy":1,"eres":1,"se":1,"me":1,"te":1,"mi":1,"tu":1,"su":1,"sus":1,"lo":1,"le":1,"les":1,"ya":1,"muy":1,
    "más":1,"mas":1,"pero":1,"porque":1,"como":1,"cuando":1,"donde":1,"qué":1,"si":1,"no":1,"sí":1,"pues":1,"bueno":1
  };

  function mulberry32(a){
    return function(){
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Very compatible "word" check: Spanish letters only
  var SP_WORD = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/;

  function makeCloze(text, blanksWanted, seed){
    var rng = mulberry32(seed);
    var tokens = String(text).split(/(\s+)/); // keep spaces
    var candidates = [];

    for (var i=0;i<tokens.length;i++){
      var t = tokens[i];
      if (/^\s+$/.test(t)) continue;

      var w = t.replace(/[¿?¡!.,;:()\[\]{}"“”'’]/g, "").trim();
      if (!w) continue;
      if (!SP_WORD.test(w)) continue;

      var wn = normalize(w);
      if (wn.length <= 3) continue;
      if (STOPWORDS[wn]) continue;

      candidates.push({ idx:i, raw:w });
    }

    // shuffle
    for (var j=candidates.length-1;j>0;j--){
      var k = Math.floor(rng()*(j+1));
      var tmp = candidates[j]; candidates[j]=candidates[k]; candidates[k]=tmp;
    }

    var chosen = candidates.slice(0, Math.max(0, blanksWanted));
    var chosenIdx = {};
    for (var c=0;c<chosen.length;c++) chosenIdx[chosen[c].idx] = true;

    var out = "";
    for (var n=0;n<tokens.length;n++){
      if (!chosenIdx[n]) { out += tokens[n]; continue; }
      var ans = tokens[n].replace(/^\W+|\W+$/g,"").trim();
      out += "[[BLANK:" + ans.replace(/\]/g,"\\]") + "]]";
    }

    return { templ: out };
  }

  function splitTemplate(templ){
    var parts = [];
    var re = /\[\[BLANK:([^\]]+)\]\]/g;
    var last = 0, m;
    while ((m = re.exec(templ)) !== null){
      if (m.index > last) parts.push(templ.slice(last, m.index));
      parts.push({ blank: m[1] });
      last = re.lastIndex;
    }
    if (last < templ.length) parts.push(templ.slice(last));
    return parts;
  }

  var current = {
    situation: null,
    level: 1,
    seed: 12345,
    startMs: 0,
    timerId: null,
    blanks: [],
    hintsUsed: 0,
    lastResult: null
  };

  function formatTime(ms){
    var s = Math.max(0, Math.floor(ms/1000));
    var m = Math.floor(s/60);
    var r = s%60;
    return m + ":" + String(r).padStart(2,"0");
  }

  function startTimer(){
    current.startMs = performance.now();
    if (current.timerId) clearInterval(current.timerId);
    current.timerId = setInterval(function(){
      $("#time").textContent = formatTime(performance.now()-current.startMs);
    }, 250);
  }

  function stopTimer(){
    if (current.timerId) clearInterval(current.timerId);
    current.timerId = null;
  }

  function calcLiveScore(){
    var total = current.blanks.length;
    var correct = 0;
    for (var i=0;i<current.blanks.length;i++){
      var b = current.blanks[i];
      var val = (b.input && b.input.value) ? b.input.value : "";
      if (b.mode === "inline"){
        if (isMatch(val, b.expected)) correct++;
      } else {
        var sim = tokenSimilarity(val, b.expectedFull);
        if (sim >= b.simThreshold) correct++;
      }
    }
    var elapsed = (performance.now()-current.startMs)/1000;
    var accuracy = total ? correct/total : 0;
    var speedBonus = Math.max(0, Math.floor(220 - elapsed));
    var score = Math.round(correct*20 + accuracy*120 + speedBonus) - current.hintsUsed*6;
    return { score: Math.max(0, score), correct: correct, total: total, accuracy: accuracy };
  }

  function updateProgress(){
    var total = current.blanks.length;
    var filled = 0;
    for (var i=0;i<current.blanks.length;i++){
      var v = (current.blanks[i].input && current.blanks[i].input.value) ? current.blanks[i].input.value.trim() : "";
      if (v) filled++;
    }
    var pct = total ? (filled/total)*100 : 0;
    $("#progressFill").style.width = pct + "%";
    $("#progressText").textContent = filled + " / " + total;
    $("#liveScore").textContent = String(calcLiveScore().score);
  }

  // HOME: render situations with level buttons right there
  function buildHome(){
    var grid = $("#situationGrid");
    grid.innerHTML = "";

    DATA.situations.forEach(function(s){
      var youLines = s.turns.filter(function(t){ return t.speaker === "YOU"; }).length;

      var card = document.createElement("div");
      card.className = "sitCard";
      card.innerHTML =
        '<div class="sitTitle">' + escapeHtml(s.title) + '</div>' +
        '<div class="sitMeta">' + s.turns.length + ' lines · ' + youLines + ' YOU lines</div>' +
        '<div class="levelRow">' +
          [1,2,3,4,5].map(function(l){
            return '<button class="levelBtn" type="button" data-sit="'+s.id+'" data-lvl="'+l+'">Level ' + l + '</button>';
          }).join("") +
        '</div>';

      grid.appendChild(card);
    });

    // one listener for all level buttons
    grid.addEventListener("click", function(e){
      var btn = e.target.closest(".levelBtn");
      if (!btn) return;
      var sitId = btn.getAttribute("data-sit");
      var lvl = parseInt(btn.getAttribute("data-lvl"), 10);
      startGame(sitId, lvl);
    });
  }

  var activeBlankId = 0;
  function setActiveBlank(id){ activeBlankId = id; }

  function makeCues(text){
    var words = normalize(text).split(" ").filter(Boolean);
    var content = words.filter(function(w){ return w.length>3 && !STOPWORDS[w]; });
    var unique = [];
    for (var i=0;i<content.length;i++){
      if (unique.indexOf(content[i]) === -1) unique.push(content[i]);
    }
    unique = unique.slice(0,6);
    return unique.length ? unique.join(" · ") : "(no cues)";
  }

  function startGame(sitId, level){
    loadOptions();
    current.situation = DATA.situations.find(function(x){ return x.id === sitId; });
    current.level = level;
    current.seed = Date.now() % 1000000;
    current.blanks = [];
    current.hintsUsed = 0;
    current.lastResult = null;

    $("#playKicker").textContent = current.situation.title + " · Level " + level;
    $("#playTitle").textContent = current.situation.title;
    $("#playDesc").textContent = (level <= 3)
      ? "Fill in the missing parts of the green “YOU” lines."
      : "Write/say the full “YOU” lines. Level 4 gives keyword cues; Level 5 gives none.";

    buildChat();
    showScreen("play");
    startTimer();
    updateProgress();
  }

  function buildChat(){
    var chat = $("#chat");
    chat.innerHTML = "";
    var turns = current.situation.turns;
    var globalBlankIndex = 0;

    turns.forEach(function(t, idx){
      var bubble = document.createElement("div");
      bubble.className = "bubble " + (t.speaker === "E" ? "examiner" : "you");

      var top = document.createElement("div");
      top.className = "bubbleTop";
      top.innerHTML =
        '<span class="badge ' + (t.speaker === "E" ? "e" : "you") + '">' + (t.speaker === "E" ? "EXAMINER" : "YOU") + '</span>' +
        '<span class="mini">Line ' + (idx+1) + '</span>';
      bubble.appendChild(top);

      var line = document.createElement("div");
      line.className = "lineText";
      line.textContent = t.text;
      bubble.appendChild(line);

      if (t.speaker === "YOU"){
        if (current.level <= 3){
          var blanksWanted = (current.level===1) ? 2 : (current.level===2 ? 4 : 6);
          var templObj = makeCloze(t.text, blanksWanted, current.seed + idx*97);
          var parts = splitTemplate(templObj.templ);

          var wrap = document.createElement("div");
          wrap.className = "blanks";

          parts.forEach(function(p){
            if (typeof p === "string"){
              var span = document.createElement("span");
              span.textContent = p;
              wrap.appendChild(span);
            } else {
              var blankWrap = document.createElement("span");
              blankWrap.className = "blankWrap";

              var input = document.createElement("input");
              input.className = "blank";
              input.setAttribute("placeholder","…");
              input.autocomplete = "off";
              input.spellcheck = false;

              var expected = p.blank;

              var hintBtn = document.createElement("button");
              hintBtn.className = "btn hintBtn ghost";
              hintBtn.type = "button";
              hintBtn.textContent = "Hint";

              var hintText = document.createElement("span");
              hintText.className = "hintText";
              hintText.textContent = "";

              if (!opts.showHints) hintBtn.style.display = "none";

              hintBtn.addEventListener("click", function(){
                current.hintsUsed += 1;
                var alts = parseAlternatives(expected);
                var clean = alts[0].trim();
                var first = clean.slice(0, clean.length>6 ? 2 : 1);
                hintText.textContent = " " + first + "… (" + clean.length + ")";
                hintBtn.disabled = true;
                updateProgress();
              });

              input.addEventListener("input", updateProgress);
              input.addEventListener("focus", function(){ setActiveBlank(globalBlankIndex); });

              current.blanks.push({ id: globalBlankIndex, mode:"inline", expected: expected, input: input, lineIndex: idx });
              globalBlankIndex++;

              blankWrap.appendChild(input);
              blankWrap.appendChild(hintBtn);
              blankWrap.appendChild(hintText);
              wrap.appendChild(blankWrap);
            }
          });

          bubble.appendChild(wrap);

        } else {
          var ta = document.createElement("textarea");
          ta.className = "blank";
          ta.rows = 2;
          ta.style.width = "100%";
          ta.style.maxWidth = "900px";
          ta.style.minHeight = "54px";
          ta.placeholder = (current.level===4) ? "Type/say the full response (use the cues below)…" : "Type/say the full response…";
          ta.autocomplete = "off";
          ta.spellcheck = false;

          ta.addEventListener("input", updateProgress);
          ta.addEventListener("focus", function(){ setActiveBlank(globalBlankIndex); });

          bubble.appendChild(ta);

          if (current.level===4){
            var cue = document.createElement("div");
            cue.className = "cue";
            cue.textContent = "Cues: " + makeCues(t.text);
            bubble.appendChild(cue);
          }

          current.blanks.push({ id: globalBlankIndex, mode:"full", expectedFull: t.text, simThreshold: 0.86, input: ta, lineIndex: idx });
          globalBlankIndex++;
        }
      }

      chat.appendChild(bubble);
    });
  }

  function speak(text){
    if (!("speechSynthesis" in window)){
      alert("Text-to-speech is not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "es-ES";
    u.rate = 1.0;
    window.speechSynthesis.speak(u);
  }

  function readExaminerOnly(){
    var lines = current.situation.turns.filter(function(t){ return t.speaker==="E"; }).map(function(t){ return t.text; });
    speak(lines.join(" ... "));
  }
  function readAll(){
    var lines = current.situation.turns.map(function(t){
      return (t.speaker==="E" ? "Examinador: " : "Tú: ") + t.text;
    });
    speak(lines.join(" ... "));
  }

  function startVoiceFill(){
    var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec){
      alert("Voice input isn't supported in this browser. Try Chrome or Edge.");
      return;
    }
    var rec = new Rec();
    rec.lang = "es-ES";
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    var target = current.blanks.find(function(b){ return b.id === activeBlankId; }) || current.blanks[0];
    if (!target) return;

    rec.onresult = function(ev){
      var text = (ev.results && ev.results[0] && ev.results[0][0]) ? ev.results[0][0].transcript : "";
      if (target.input){
        target.input.value = String(text).trim();
        target.input.dispatchEvent(new Event("input"));
        target.input.focus();
      }
    };
    rec.onerror = function(){ alert("Voice input error. Check mic permissions and try again."); };
    rec.start();
  }

  function grade(){
    stopTimer();
    var elapsedMs = performance.now() - current.startMs;
    var total = current.blanks.length;
    var correct = 0;
    var results = [];

    current.blanks.forEach(function(b){
      var given = (b.input && b.input.value) ? b.input.value.trim() : "";
      if (b.mode === "inline"){
        var ok = isMatch(given, b.expected);
        if (ok) correct++;
        results.push({ mode:"inline", expected:b.expected, given: given, ok: ok, lineIndex: b.lineIndex });
      } else {
        var sim = tokenSimilarity(given, b.expectedFull);
        var ok2 = sim >= b.simThreshold;
        if (ok2) correct++;
        results.push({ mode:"full", expected:b.expectedFull, given: given, ok: ok2, sim: sim, lineIndex: b.lineIndex });
      }
    });

    var accuracy = total ? correct/total : 0;
    var score = Math.max(0, Math.round(calcLiveScore().score));
    return { score: score, elapsedMs: elapsedMs, accuracy: accuracy, results: results, correct: correct, total: total, hintsUsed: current.hintsUsed };
  }

  function renderCorrections(payload){
    var byLine = {};
    payload.results.forEach(function(r){
      if (!byLine[r.lineIndex]) byLine[r.lineIndex] = [];
      byLine[r.lineIndex].push(r);
    });

    var wrap = document.createElement("div");

    current.situation.turns.forEach(function(t, idx){
      if (t.speaker !== "YOU") return;

      var lineRs = byLine[idx] || [];
      var okAll = lineRs.length ? lineRs.every(function(x){ return x.ok; }) : false;

      var your = (current.level <= 3)
        ? lineRs.map(function(x){ return x.given; }).join(" ").trim()
        : (lineRs[0] ? lineRs[0].given : "");

      var block = document.createElement("div");
      block.className = "correction";
      block.innerHTML =
        '<div><span class="'+(okAll ? "good":"bad")+'">'+(okAll ? "✓":"✗")+'</span> <strong>YOU</strong> · Line '+(idx+1)+'</div>' +
        '<div class="mini" style="margin-top:6px">Model answer:</div>' +
        '<div style="margin-top:4px">'+escapeHtml(t.text)+'</div>' +
        '<div class="mini" style="margin-top:8px">Your answer:</div>' +
        '<div style="margin-top:4px">'+escapeHtml(your)+'</div>';

      if (current.level <= 3){
        var bads = lineRs.filter(function(x){ return !x.ok; });
        if (bads.length){
          var ul = document.createElement("ul");
          ul.className = "mini";
          ul.style.marginTop = "8px";
          ul.innerHTML = bads.map(function(b){
            return '<li><span class="bad">Missing:</span> <strong>'+escapeHtml(b.expected)+'</strong></li>';
          }).join("");
          block.appendChild(ul);
        }
      } else {
        if (lineRs[0]){
          var simPct = Math.round((lineRs[0].sim || 0)*100);
          var p = document.createElement("div");
          p.className = "mini";
          p.style.marginTop = "8px";
          p.innerHTML = 'Similarity: <strong>'+simPct+'%</strong> (needs ~86%+)';
          block.appendChild(p);
        }
      }

      wrap.appendChild(block);
    });

    $("#corrections").innerHTML = "";
    $("#corrections").appendChild(wrap);
  }

  function onSubmit(){
    var payload = grade();
    $("#finalScore").textContent = String(payload.score);
    $("#finalAcc").textContent = String(Math.round(payload.accuracy*100)) + "%";
    $("#finalTime").textContent = formatTime(payload.elapsedMs);
    $("#finalHints").textContent = String(payload.hintsUsed);

    renderCorrections(payload);
    current.lastResult = payload;
    showScreen("results");
  }

  function keyForScores(){
    return "rp_scores_v2::" + current.situation.id + "::L" + current.level;
  }

  function saveScore(){
    var name = ($("#playerName").value || "").trim().slice(0,18) || "Anonymous";
    var payload = current.lastResult;
    if (!payload) return;

    var item = { name:name, score:payload.score, timeMs:payload.elapsedMs, acc:payload.accuracy, when:Date.now() };
    var key = keyForScores();
    var existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push(item);
    existing.sort(function(a,b){
      return (b.score - a.score) || (a.timeMs - b.timeMs);
    });
    localStorage.setItem(key, JSON.stringify(existing.slice(0,10)));
    alert("Saved! Check High Scores.");
  }

  function showHighScores(){
    var rows = [];
    DATA.situations.forEach(function(s){
      for (var lvl=1; lvl<=5; lvl++){
        var key = "rp_scores_v2::" + s.id + "::L" + lvl;
        var list = JSON.parse(localStorage.getItem(key) || "[]");
        if (!list.length) continue;
        list.slice(0,5).forEach(function(r, idx){
          rows.push({
            sit: s.title, lvl: lvl, rank: idx+1, name: r.name,
            score: r.score, time: formatTime(r.timeMs), acc: Math.round(r.acc*100) + "%"
          });
        });
      }
    });

    rows.sort(function(a,b){ return b.score - a.score; });

    $("#modalTitle").textContent = "High Scores (this device)";
    $("#modalBody").innerHTML = rows.length ? (
      '<div class="mini muted" style="margin-bottom:10px">Scores saved on this device/browser only.</div>' +
      '<div style="overflow:auto">' +
      '<table style="width:100%; border-collapse:collapse; font-size:13px">' +
        '<thead><tr>' +
          '<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Situation</th>' +
          '<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Level</th>' +
          '<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Rank</th>' +
          '<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Name</th>' +
          '<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Score</th>' +
          '<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Time</th>' +
          '<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line)">Acc</th>' +
        '</tr></thead>' +
        '<tbody>' +
          rows.map(function(r){
            return '<tr>' +
              '<td style="padding:8px; border-bottom:1px solid var(--line)">' + escapeHtml(r.sit) + '</td>' +
              '<td style="padding:8px; border-bottom:1px solid var(--line)">' + r.lvl + '</td>' +
              '<td style="padding:8px; border-bottom:1px solid var(--line)">' + r.rank + '</td>' +
              '<td style="padding:8px; border-bottom:1px solid var(--line)">' + escapeHtml(r.name) + '</td>' +
              '<td style="padding:8px; border-bottom:1px solid var(--line)"><strong>' + r.score + '</strong></td>' +
              '<td style="padding:8px; border-bottom:1px solid var(--line)">' + r.time + '</td>' +
              '<td style="padding:8px; border-bottom:1px solid var(--line)">' + r.acc + '</td>' +
            '</tr>';
          }).join("") +
        '</tbody>' +
      '</table></div>'
    ) : '<div class="muted">No scores saved yet.</div>';

    $("#modal").classList.remove("hidden");
  }

  function showHow(){
    $("#modalTitle").textContent = "How to play";
    $("#modalBody").innerHTML =
      '<ol style="margin:0; padding-left:18px; line-height:1.7">' +
        '<li>Pick a situation on the Home screen.</li>' +
        '<li>Click Level 1–5 to start.</li>' +
        '<li>Fill blanks (Levels 1–3) or write the full line (Levels 4–5).</li>' +
        '<li>Press Submit to get score + corrections.</li>' +
        '<li>Save score if you want to appear on High Scores (this device).</li>' +
      '</ol>';
    $("#modal").classList.remove("hidden");
  }

  // Wire buttons
  $("#btnHome").addEventListener("click", function(){ stopTimer(); showScreen("home"); });
  $("#btnHome2").addEventListener("click", function(){ stopTimer(); showScreen("home"); });
  $("#btnHow").addEventListener("click", showHow);
  $("#btnScores").addEventListener("click", showHighScores);
  $("#btnCloseModal").addEventListener("click", function(){ $("#modal").classList.add("hidden"); });
  $("#modal").addEventListener("click", function(e){ if (e.target && e.target.id === "modal") $("#modal").classList.add("hidden"); });

  $("#btnSpeakExaminer").addEventListener("click", readExaminerOnly);
  $("#btnSpeakAll").addEventListener("click", readAll);
  $("#btnVoice").addEventListener("click", startVoiceFill);
  $("#btnSubmit").addEventListener("click", onSubmit);

  $("#btnRetry").addEventListener("click", function(){
    startGame(current.situation.id, current.level);
  });
  $("#btnSaveScore").addEventListener("click", saveScore);

  // init
  loadOptions();
  buildHome();
  showScreen("home");
});
