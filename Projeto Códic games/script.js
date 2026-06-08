// =========================================================
// CÓDIC GAMES — script.js  v3.4
// =========================================================

// ─── BANCOS DE DADOS ──────────────────────────────────────
const JOGOS_DB = [
  "Elden Ring","God of War","The Witcher 3","GTA V","Red Dead Redemption 2",
  "Cyberpunk 2077","Baldur's Gate 3","Minecraft","Fortnite","Valorant",
  "League of Legends","Dark Souls","Bloodborne","Sekiro","Hollow Knight",
  "Hades","NieR:Automata","Death Stranding","Disco Elysium","Resident Evil 4",
  "The Last of Us","Spider-Man 2","Horizon Zero Dawn","Detroit: Become Human",
  "Starfield","Monster Hunter World","Zelda: Breath of the Wild","Uncharted 4",
  "FIFA 24","Call of Duty","Dead Cells","Celeste","Stardew Valley",
  "Apex Legends","Overwatch 2","Diablo IV","Street Fighter 6","Final Fantasy XVI",
  "Hogwarts Legacy","Lies of P","Armored Core VI","Alan Wake 2"
];

const FILMES_DB = [
  "Vingadores: Ultimato","Duna: Parte 2","Matrix","Blade Runner 2049",
  "Interstellar","The Dark Knight","Senhor dos Anéis: O Retorno do Rei",
  "Star Wars: O Império Contra-Ataca","Avatar","Top Gun: Maverick",
  "Oppenheimer","Tenet","Inception","Arrival","Ex Machina",
  "Her","Moon","Mad Max: Fury Road","John Wick","Everything Everywhere All at Once",
  "Guardiões da Galáxia","Doctor Strange no Multiverso","Duna: Parte 1",
  "Prometheus","Alien: Covenant","Ghost in the Shell","Akira"
];

const SERIES_DB = [
  "The Boys","Arcane","Breaking Bad","Dark","House of the Dragon",
  "Game of Thrones","Westworld","Black Mirror","Stranger Things",
  "The Mandalorian","Andor","Fringe","Battlestar Galactica",
  "The Wire","Chernobyl","The Last of Us","Fallout","Shogun",
  "Rings of Power","Succession","Severance","The Bear","Peaky Blinders",
  "Better Call Saul","Attack on Titan","Death Note","Fullmetal Alchemist"
];

// ─── SHORTS DEMO ──────────────────────────────────────────
const SHORTS_DEMO = [
  { id:"sd_j1",cat:"jogos",uid:"codic",un:"CódicGames",ava:null,e:"⚔️",g1:"#9333ea",g2:"#1a0030",title:"Elden Ring Nightreign",desc:"FromSoftware confirma co-op de 3 jogadores e mapa procedural.",tags:"#EldenRing #FromSoftware",likes:1247,cmts:235,shares:58,demo:true,ts:Date.now()-3600000},
  { id:"sd_j2",cat:"jogos",uid:"codic",un:"CódicGames",ava:null,e:"🎲",g1:"#4f46e5",g2:"#1e1b4b",title:"Baldur's Gate 3 — Patch 7",desc:"Larian adiciona modo evil completo e novas cinemáticas.",tags:"#BG3 #Larian",likes:892,cmts:124,shares:47,demo:true,ts:Date.now()-7200000},
  { id:"sd_j3",cat:"jogos",uid:"codic",un:"CódicGames",ava:null,e:"🌆",g1:"#facc15",g2:"#7c2d12",title:"GTA VI — Rumor de Trailer 2",desc:"Rockstar deve liberar segundo trailer em breve.",tags:"#GTA6 #Rockstar",likes:3450,cmts:721,shares:184,demo:true,ts:Date.now()-10800000},
  { id:"sd_j4",cat:"jogos",uid:"codic",un:"CódicGames",ava:null,e:"🗡️",g1:"#0891b2",g2:"#0f172a",title:"Hollow Knight Silksong",desc:"Team Cherry mostra novos chefes em gameplay de 60s.",tags:"#HollowKnight #Silksong",likes:2103,cmts:412,shares:96,demo:true,ts:Date.now()-14400000},
  { id:"sd_f1",cat:"filmes",uid:"codic",un:"CódicGames",ava:null,e:"🪐",g1:"#ea580c",g2:"#7c2d12",title:"Duna: Parte 2 — Cena do Verme",desc:"Denis Villeneuve faz história. Cinema é arte.",tags:"#Duna #Villeneuve",likes:2156,cmts:418,shares:89,demo:true,ts:Date.now()-3600000},
  { id:"sd_f2",cat:"filmes",uid:"codic",un:"CódicGames",ava:null,e:"🦇",g1:"#1e293b",g2:"#020617",title:"The Batman 2 — Primeiras Imagens",desc:"Matt Reeves confirma Pattinson de volta.",tags:"#Batman #DC",likes:1789,cmts:312,shares:78,demo:true,ts:Date.now()-7200000},
  { id:"sd_f3",cat:"filmes",uid:"codic",un:"CódicGames",ava:null,e:"🌀",g1:"#7c3aed",g2:"#1e1b4b",title:"Inception — Análise da Cena Final",desc:"O pião realmente para? Nolan revela.",tags:"#Inception #Nolan",likes:912,cmts:267,shares:45,demo:true,ts:Date.now()-10800000},
  { id:"sd_f4",cat:"filmes",uid:"codic",un:"CódicGames",ava:null,e:"🚀",g1:"#0284c7",g2:"#0c4a6e",title:"Interstellar — Cena Mais Forte",desc:"Cooper desespera. Zimmer dilacera.",tags:"#Interstellar #Nolan",likes:2876,cmts:534,shares:142,demo:true,ts:Date.now()-14400000},
  { id:"sd_s1",cat:"series",uid:"codic",un:"CódicGames",ava:null,e:"🧬",g1:"#0891b2",g2:"#155e75",title:"Arcane S2 — A Despedida de Jinx",desc:"Fortiche entrega animação como arte pura.",tags:"#Arcane #Riot",likes:1834,cmts:534,shares:67,demo:true,ts:Date.now()-3600000},
  { id:"sd_s2",cat:"series",uid:"codic",un:"CódicGames",ava:null,e:"⚡",g1:"#dc2626",g2:"#7f1d1d",title:"The Boys S5 — Homelander Insano",desc:"A queda do Homelander está próxima.",tags:"#TheBoys #PrimeVideo",likes:1567,cmts:289,shares:73,demo:true,ts:Date.now()-7200000},
  { id:"sd_s3",cat:"series",uid:"codic",un:"CódicGames",ava:null,e:"🏰",g1:"#facc15",g2:"#713f12",title:"House of Dragon S3",desc:"Dragões duelando no céu. HBO acerta de novo.",tags:"#HOTD #GoT",likes:2134,cmts:412,shares:98,demo:true,ts:Date.now()-10800000},
  { id:"sd_s4",cat:"series",uid:"codic",un:"CódicGames",ava:null,e:"💊",g1:"#16a34a",g2:"#14532d",title:"Breaking Bad — I Am The One Who Knocks",desc:"Cranston eterniza Heisenberg para sempre.",tags:"#BreakingBad",likes:3210,cmts:618,shares:178,demo:true,ts:Date.now()-14400000},
];

// ─── POSTS DEMO ────────────────────────────────────────────
const POSTS_DEMO = [
  {id:"demo1",uid:"codic",un:"CódicGames",ava:null,cat:"jogos",txt:"🔥 BREAKING: Elden Ring Nightreign foi confirmado pela FromSoftware! Co-op para 3 jogadores, mapa procedural e chefes inéditos. Quem vai entrar no squad?",img:null,likes:[],cmts:[],views:3841,ts:Date.now()-1800000},
  {id:"demo2",uid:"codic",un:"CódicGames",ava:null,cat:"dica",txt:"💡 DICA — Elden Ring: Não pule a quest de Ranni a Bruxa. Ela entrega alguns dos melhores itens do jogo e o melhor final. Comece na Torre Ranni em Liurnia.",img:null,likes:[],cmts:[{uid:"u1",un:"GamerX",ava:null,txt:"Salvou minha corrida! 🙏",ts:Date.now()-900000},{uid:"u2",un:"VoidRunner",ava:null,txt:"A quest do Blaidd também é incrível!",ts:Date.now()-600000}],views:2190,ts:Date.now()-7200000},
  {id:"demo3",uid:"codic",un:"CódicGames",ava:null,cat:"filmes",txt:"🎬 Duna: Parte 2 continua sendo minha referência de cinema. A escala visual, a trilha do Zimmer, Zendaya e Chalamet... Villeneuve merecia o Oscar.",img:null,likes:[],cmts:[],views:1540,ts:Date.now()-14400000},
  {id:"demo4",uid:"codic",un:"CódicGames",ava:null,cat:"series",txt:"📺 Arcane Temporada 2 foi uma despedida emocionante. Fortiche entregou animação como arte pura.",img:null,likes:[],cmts:[],views:987,ts:Date.now()-86400000},
  {id:"demo5",uid:"codic",un:"CódicGames",ava:null,cat:"noticia",txt:"📰 PlayStation anuncia novo showcase para o próximo mês. Confirmados anúncios de novos exclusivos e atualizações de jogos em desenvolvimento.",img:null,likes:[],cmts:[],views:2305,ts:Date.now()-172800000},
];

// ─── ESTADO GLOBAL ────────────────────────────────────────
const LIMITE_CHARS = 560;
let CU            = null;
let CAT_POST      = "jogos";
let FILTRO        = "all";
let OB_STEP       = 0;
let IMG_DATA      = null;
let EXP_TAB       = "jogos";
let RTAB_PG       = "jogos";
let PROF_RANK_TAB = "jogos";
let RANKS         = { fav:[], sub:[], sup:[], mov:[], ser:[] };
let _shortObs     = null;
let _shortVidData = null;

// ★ Estado de "outro perfil"
let PERFIL_ATIVO = null; // objeto do usuário sendo visualizado
let PG_ANTERIOR  = "feed"; // página para voltar ao fechar outro perfil

// ─── STORAGE ──────────────────────────────────────────────
const ls  = k => { try{ return JSON.parse(localStorage.getItem(k)); }catch(e){ return null; } };
const lss = (k,v) => localStorage.setItem(k,JSON.stringify(v));
const ss  = k => { try{ return JSON.parse(sessionStorage.getItem(k)); }catch(e){ return null; } };
const sss = (k,v) => sessionStorage.setItem(k,JSON.stringify(v));

const getUsers  = ()     => ls("cg_users")  || [];
const getPosts  = ()     => ls("cg_posts")  || JSON.parse(JSON.stringify(POSTS_DEMO));
const getRanks  = id     => ls("cg_r_"+id)  || { fav:[], sub:[], sup:[], mov:[], ser:[] };
const getShorts = ()     => ls("cg_shorts") || [];
const saveUsers = u      => lss("cg_users", u);
const savePosts = p      => lss("cg_posts", p);
const saveRanks = (id,r) => lss("cg_r_"+id, r);
const saveShorts= a      => lss("cg_shorts", a);
const uid       = ()     => Math.random().toString(36).substr(2,9);

// ★ Helpers de follow
const getFollowers     = userId => getUsers().filter(u => (u.following||[]).includes(userId)).length;
const getFollowingCount= userId => { const u = getUsers().find(x=>x.id===userId); return (u?.following||[]).length; };
const isFollowing      = userId => CU && (CU.following||[]).includes(userId);

// ─── AUTH ─────────────────────────────────────────────────
function switchAuth(tab) {
  document.getElementById("tabLogin").classList.toggle("on", tab==="login");
  document.getElementById("tabReg").classList.toggle("on",   tab==="register");
  document.getElementById("fLogin").style.display = tab==="login"    ? "flex" : "none";
  document.getElementById("fReg").style.display   = tab==="register" ? "flex" : "none";
  document.getElementById("lErr").textContent = "";
  document.getElementById("rErr").textContent = "";
}

function doLogin() {
  const u = document.getElementById("lUser").value.trim();
  const p = document.getElementById("lPass").value;
  const err = document.getElementById("lErr");
  if(!u||!p){ err.textContent="Preencha todos os campos."; return; }
  const found = getUsers().find(x =>
    (x.un.toLowerCase()===u.toLowerCase() || x.email.toLowerCase()===u.toLowerCase()) && x.pw===p
  );
  if(!found){ err.textContent="Usuário ou senha incorretos."; return; }
  CU = found; lss("cg_sess",found); iniciarApp(false);
}

function doRegister() {
  const nick=document.getElementById("rNick").value.trim();
  const email=document.getElementById("rEmail").value.trim();
  const pw=document.getElementById("rPass").value;
  const conf=document.getElementById("rConf").value;
  const err=document.getElementById("rErr");
  if(!nick||!email||!pw||!conf){ err.textContent="Preencha todos os campos."; return; }
  if(nick.length<3){ err.textContent="Nick: mínimo 3 caracteres."; return; }
  if(!/\S+@\S+\.\S+/.test(email)){ err.textContent="E-mail inválido."; return; }
  if(pw.length<6){ err.textContent="Senha: mínimo 6 caracteres."; return; }
  if(pw!==conf){ err.textContent="As senhas não coincidem."; return; }
  const users=getUsers();
  if(users.find(x=>x.un.toLowerCase()===nick.toLowerCase())){ err.textContent="Nick já em uso."; return; }
  if(users.find(x=>x.email.toLowerCase()===email.toLowerCase())){ err.textContent="E-mail já cadastrado."; return; }
  // ★ following:[] adicionado
  const nu={ id:uid(), un:nick, email, pw, ava:null, banner:null, bio:"", following:[], ts:Date.now() };
  users.push(nu); saveUsers(users);
  CU=nu; lss("cg_sess",nu); iniciarApp(true);
}

function doLogout() {
  localStorage.removeItem("cg_sess"); CU=null;
  document.getElementById("app").style.display="none";
  document.getElementById("authScreen").style.display="flex";
  document.getElementById("lUser").value="";
  document.getElementById("lPass").value="";
  document.getElementById("lErr").textContent="";
}

// ─── INICIAR APP ──────────────────────────────────────────
function iniciarApp(novo) {
  document.getElementById("authScreen").style.display="none";
  RANKS=getRanks(CU.id);
  atualizarSidebar();
  renderTrending();
  renderSugeridos();
  renderShorts("jogos");
  renderRanks();
  renderFeed("all");
  if(novo){
    document.getElementById("obNickP").innerHTML=`Bem-vindo, <b>${esc(CU.un)}</b>! Sua conta está pronta. 🎮`;
    OB_STEP=0; atualizarOb();
    document.getElementById("onboarding").style.display="flex";
  } else {
    document.getElementById("app").style.display="flex";
    goPage("feed",null);
  }
}

function atualizarSidebar() {
  document.getElementById("sbNick").textContent=CU.un;
  document.getElementById("sbHandle").textContent="@"+CU.un.toLowerCase().replace(/\s/g,"_");
  renderAvaEl("sbAva",CU.ava,CU.un);
  renderAvaEl("compAva",CU.ava,CU.un);
}

// ─── ONBOARDING ───────────────────────────────────────────
function atualizarOb() {
  document.querySelectorAll(".ob-step").forEach((s,i)=>s.classList.toggle("on",i===OB_STEP));
  document.querySelectorAll(".ob-dot").forEach((d,i)=>d.classList.toggle("on",i===OB_STEP));
  document.getElementById("btnObNext").textContent=OB_STEP===3?"Começar →":"Próximo →";
}
function nextOb(){ OB_STEP<3 ? (OB_STEP++, atualizarOb()) : fecharOnboard(); }
function fecharOnboard(){
  document.getElementById("onboarding").style.display="none";
  document.getElementById("app").style.display="flex";
  goPage("feed",null);
  toast("Bem-vindo à Códic Games! ⚡");
}

// ─── NAVEGAÇÃO ────────────────────────────────────────────
function goPage(id,btn) {
  document.querySelectorAll(".pg").forEach(p=>p.classList.remove("on"));
  const el = document.getElementById("pg-"+id);
  if(el) el.classList.add("on");
  document.querySelectorAll(".sb-btn,.bn-btn").forEach(b=>b.classList.remove("on"));
  const sm=document.querySelector(`.sb-btn[data-p="${id}"]`);
  const bm=document.querySelector(`.bn-btn[data-p="${id}"]`);
  if(sm) sm.classList.add("on");
  if(bm) bm.classList.add("on");
  if(btn) btn.classList.add("on");
  // ★ Fechar pesquisa ao navegar
  fecharBusca();
  if(id==="perfil")   atualizarPerfil();
  if(id==="explorar") renderShorts(EXP_TAB);
  if(id!=="explorar"){
    document.querySelectorAll("#shortsFeed video").forEach(v=>v.pause());
  }
  document.getElementById("mainCol")?.scrollTo({top:0,behavior:"smooth"});
}

function focarCompositor(){
  goPage("feed",null);
  setTimeout(()=>document.getElementById("postTxt")?.focus(),100);
}

// ─── FEED ─────────────────────────────────────────────────
function doFiltro(btn,f){
  document.querySelectorAll(".ft").forEach(b=>b.classList.remove("on"));
  btn.classList.add("on"); FILTRO=f; renderFeed(f);
}

// ★ Novo: filtrar pelo trending (usa data-f nos botões)
function doFiltroBycat(cat){
  FILTRO=cat;
  document.querySelectorAll(".ft").forEach(b=>{
    b.classList.toggle("on", b.dataset && b.dataset.f === cat);
  });
  renderFeed(cat);
  goPage("feed",null);
}

function selCat(btn){
  document.querySelectorAll(".cc").forEach(b=>b.classList.remove("on"));
  btn.classList.add("on"); CAT_POST=btn.dataset.c;
}

function prevImg(inp){
  const f=inp.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=e=>{
    IMG_DATA=e.target.result;
    document.getElementById("imgPrevImg").src=IMG_DATA;
    document.getElementById("imgPrevWrap").style.display="block";
  };
  r.readAsDataURL(f);
}
function limparImg(){
  IMG_DATA=null;
  document.getElementById("postImg").value="";
  document.getElementById("imgPrevWrap").style.display="none";
}

function atualizarContador(){
  const ta=document.getElementById("postTxt");
  const ct=document.getElementById("charCount");
  const rem=LIMITE_CHARS-ta.value.length;
  ct.textContent=rem;
  ct.className="char-ct"+(rem<0?" over":rem<60?" warn":"");
}

function criarPost(){
  const txt=document.getElementById("postTxt").value.trim();
  if(!txt&&!IMG_DATA){ toast("Escreva algo ou adicione uma imagem!"); return; }
  if(txt.length>LIMITE_CHARS){ toast(`Post muito longo! Máx. ${LIMITE_CHARS} caracteres.`); return; }
  const posts=getPosts();
  posts.unshift({id:uid(),uid:CU.id,un:CU.un,ava:CU.ava,cat:CAT_POST,txt,img:IMG_DATA,likes:[],cmts:[],views:0,ts:Date.now()});
  savePosts(posts);
  document.getElementById("postTxt").value="";
  document.getElementById("charCount").textContent=LIMITE_CHARS;
  limparImg();
  renderFeed(FILTRO);
  atualizarPerfil();
  renderTrending(); // ★ Atualiza trending ao criar post
  toast("Post publicado! ✓");
}

function registrarView(postId,autorId){
  if(!CU || CU.id===autorId) return false;
  const vKey="viewed_"+postId;
  if(ss(vKey)) return false;
  sss(vKey,true);
  return true;
}

function renderFeed(f){
  FILTRO=f;
  let posts=getPosts();
  let alterado=false;
  posts=posts.map(p=>{
    if(registrarView(p.id,p.uid)){ p.views=(p.views||0)+1; alterado=true; }
    return p;
  });
  if(alterado) savePosts(posts);
  const lista=f==="all"?posts:posts.filter(p=>p.cat===f);
  document.getElementById("feedLista").innerHTML=
    lista.length ? lista.map(buildPost).join("") : emptyState("Nenhum post aqui ainda. Seja o primeiro!");
}

const CATS_LABEL={
  jogos:"🎮 Jogos",filmes:"🎬 Filmes",series:"📺 Séries",
  geek:"✨ Geek",noticia:"📰 Notícia",dica:"💡 Dica"
};

function buildPost(p){
  const myPost = CU && p.uid===CU.id;
  const liked  = CU && p.likes.includes(CU.id);
  const views  = formatNum(p.views||0);
  const isDemo = p.uid==="codic";
  // ★ Avatar e nick clicáveis (exceto posts demo)
  const avaClick  = isDemo ? "" : `onclick="abrirPerfil('${p.uid}')" style="cursor:pointer"`;
  const nickClass = isDemo ? "post-nick" : "post-nick clicavel";
  const nickClick = isDemo ? "" : `onclick="abrirPerfil('${p.uid}')"`;

  const cmtsHTML=p.cmts.map(c=>`
    <div class="cmt-item">
      <div class="cmt-ava">${avaInner(c.ava,c.un)}</div>
      <div class="cmt-bubble">
        <div class="cmt-nick">${esc(c.un)}</div>
        <div class="cmt-txt">${esc(c.txt)}</div>
      </div>
    </div>`).join("");

  return `
  <div class="post" id="p-${p.id}">
    <div class="post-ava" ${avaClick}>${avaInner(p.ava,p.un)}</div>
    <div class="post-body">
      <div class="post-hdr">
        <div class="post-meta">
          <span class="${nickClass}" ${nickClick}>${esc(p.un)}</span>
          <span class="post-time">${timeAgo(p.ts)}</span>
          <span class="badge b-${p.cat}">${CATS_LABEL[p.cat]||p.cat}</span>
        </div>
        ${myPost&&!isDemo?`<button class="btn-del-post" onclick="deletarPost('${p.id}')"><i class="fa-solid fa-trash-can"></i></button>`:""}
      </div>
      ${p.txt?`<div class="post-txt">${esc(p.txt)}</div>`:""}
      ${p.img?`<img class="post-img" src="${p.img}" onclick="abrirImagem('${p.id}')" alt="imagem">`:""}
      <div class="post-actions">
        <button class="pa like${liked?" liked":""}" onclick="curtir('${p.id}')">
          <i class="fa-${liked?"solid":"regular"} fa-heart"></i> ${p.likes.length}
        </button>
        <button class="pa cmt" onclick="toggleCmts('${p.id}')">
          <i class="fa-regular fa-comment"></i> ${p.cmts.length}
        </button>
        <button class="pa share" onclick="compartilhar()">
          <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
        <span class="pa views" style="margin-left:auto;min-width:0">
          <i class="fa-regular fa-eye" style="font-size:.85rem;opacity:.5"></i>
          <span style="color:var(--text3)">${views}</span>
        </span>
      </div>
      <div class="cmts-sec" id="cs-${p.id}">
        <div class="cmts-header">
          <span>${p.cmts.length} Comentário${p.cmts.length!==1?"s":""}</span>
          <button onclick="toggleCmts('${p.id}')"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="cmts-lista" id="cl-${p.id}">
          ${p.cmts.length ? cmtsHTML : '<div class="cmt-vazio">Nenhum comentário ainda. Seja o primeiro!</div>'}
        </div>
        <div class="cmt-compose">
          <div class="cmt-compose-ava">${avaInner(CU?.ava,CU?.un||"?")}</div>
          <input id="ci-${p.id}" placeholder="Escreva um comentário..."
            onkeydown="if(event.key==='Enter')comentar('${p.id}')">
          <button class="btn-send" onclick="comentar('${p.id}')">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>`;
}

// ─── AÇÕES DO POST ────────────────────────────────────────
function curtir(id){
  if(!CU) return;
  const posts=getPosts(); const p=posts.find(x=>x.id===id); if(!p) return;
  const i=p.likes.indexOf(CU.id);
  if(i>-1) p.likes.splice(i,1); else p.likes.push(CU.id);
  savePosts(posts); renderFeed(FILTRO); renderTrending();
}

function toggleCmts(id){
  const s=document.getElementById("cs-"+id); if(!s) return;
  const vis=s.style.display==="block";
  s.style.display=vis?"none":"block";
  if(!vis) document.getElementById("ci-"+id)?.focus();
}

function comentar(id){
  if(!CU) return;
  const inp=document.getElementById("ci-"+id);
  const txt=inp?.value.trim(); if(!txt) return;
  const posts=getPosts(); const p=posts.find(x=>x.id===id); if(!p) return;
  p.cmts.push({uid:CU.id,un:CU.un,ava:CU.ava,txt,ts:Date.now()});
  savePosts(posts); inp.value="";
  renderFeed(FILTRO);
  setTimeout(()=>{ document.getElementById("cs-"+id).style.display="block"; },30);
}

function deletarPost(id){
  savePosts(getPosts().filter(p=>p.id!==id));
  renderFeed(FILTRO); atualizarPerfil(); renderTrending();
  toast("Post removido.");
}

function compartilhar(){
  if(navigator.clipboard){ navigator.clipboard.writeText(window.location.href); toast("Link copiado!"); }
}

function abrirImagem(id){
  const p=getPosts().find(x=>x.id===id); if(!p||!p.img) return;
  document.getElementById("imgModalImg").src=p.img;
  document.getElementById("imgModal").classList.add("on");
}

// ─── EXPLORAR / SHORTS ────────────────────────────────────
function switchExpTab(btn,tab){
  document.querySelectorAll(".est").forEach(b=>b.classList.remove("on"));
  btn.classList.add("on"); EXP_TAB=tab; renderShorts(tab);
}
function renderExplorar(tab){ EXP_TAB=tab; renderShorts(tab); }

function renderShorts(cat){
  const el=document.getElementById("expContent"); if(!el) return;
  const userShorts=getShorts().filter(s=>s.cat===cat);
  const demoShorts=SHORTS_DEMO.filter(s=>s.cat===cat);
  const all=[...userShorts,...demoShorts].sort((a,b)=>(b.ts||0)-(a.ts||0));
  if(!all.length){
    el.innerHTML=`
      <div class="shorts-empty">
        <i class="fa-solid fa-clapperboard"></i>
        <p>Nenhum short nessa categoria ainda.</p>
        <button class="btn-novo-short" onclick="abrirNovoShort()">
          <i class="fa-solid fa-plus"></i> Postar o primeiro
        </button>
      </div>
      <button class="fab-short" onclick="abrirNovoShort()"><i class="fa-solid fa-plus"></i></button>`;
    return;
  }
  el.innerHTML=`
    <div class="shorts-feed" id="shortsFeed">
      ${all.map(buildShort).join("")}
    </div>
    <button class="fab-short" onclick="abrirNovoShort()"><i class="fa-solid fa-plus"></i></button>`;
  setupShortObserver();
}

function buildShort(s){
  const isDemo  = !!s.demo;
  const liked   = !isDemo && CU && Array.isArray(s.likes) && s.likes.includes(CU.id);
  const likeCt  = isDemo ? s.likes : (Array.isArray(s.likes)?s.likes.length:0);
  const cmtCt   = isDemo ? s.cmts  : (Array.isArray(s.cmts)?s.cmts.length:0);
  const shareCt = s.shares||0;
  const meu     = !isDemo && CU && s.uid===CU.id;
  const isDemo2 = s.uid==="codic";

  // ★ Avatar e autor clicáveis
  const avaClick    = isDemo2 ? "" : `onclick="abrirPerfil('${s.uid}')" style="cursor:pointer"`;
  const autorClass  = isDemo2 ? "short-author" : "short-author clicavel";
  const autorClick  = isDemo2 ? "" : `onclick="abrirPerfil('${s.uid}')"`;

  const media=isDemo
    ? `<div class="short-bg" style="background:linear-gradient(135deg,${s.g1},${s.g2})">
         <div class="short-emoji">${s.e}</div>
       </div>`
    : `<video src="${s.video}" muted loop playsinline preload="metadata"></video>`;

  return `
  <div class="short" data-id="${s.id}">
    <div class="short-media">
      ${media}
      <button class="short-tap" onclick="toggleShortPlay(this)" aria-label="Play/Pause"></button>
      <div class="short-play-icon"><i class="fa-solid fa-play"></i></div>
    </div>
    <div class="short-side">
      <div class="short-ava" ${avaClick}>${avaInner(s.ava,s.un)}</div>
      <button class="short-act ${liked?"on":""}" onclick="curtirShort('${s.id}')">
        <i class="fa-${liked?"solid":"regular"} fa-heart"></i>
        <span>${formatNum(likeCt)}</span>
      </button>
      <button class="short-act"><i class="fa-regular fa-comment"></i><span>${formatNum(cmtCt)}</span></button>
      <button class="short-act" onclick="compartilharShort('${s.id}')">
        <i class="fa-solid fa-arrow-up-from-bracket"></i><span>${formatNum(shareCt)}</span>
      </button>
      ${meu?`<button class="short-act del" onclick="deletarShort('${s.id}')"><i class="fa-solid fa-trash-can"></i></button>`:""}
    </div>
    <div class="short-foot">
      <div class="${autorClass}" ${autorClick}>@${esc(s.un)}</div>
      <div class="short-title">${esc(s.title)}</div>
      ${s.desc?`<div class="short-desc">${esc(s.desc)}</div>`:""}
      ${s.tags?`<div class="short-tags">${esc(s.tags)}</div>`:""}
    </div>
  </div>`;
}

function setupShortObserver(){
  if(_shortObs) _shortObs.disconnect();
  _shortObs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      const v=e.target.querySelector("video");
      const ic=e.target.querySelector(".short-play-icon");
      if(e.intersectionRatio>0.6){ if(v){v.play().catch(()=>{}); if(ic) ic.style.opacity=0;} }
      else{ if(v) v.pause(); }
    });
  },{threshold:[0,0.6,1]});
  document.querySelectorAll("#shortsFeed .short").forEach(el=>_shortObs.observe(el));
}

function toggleShortPlay(btn){
  const card=btn.closest(".short");
  const v=card?.querySelector("video");
  const ic=card?.querySelector(".short-play-icon");
  if(!v) return;
  if(v.paused){v.play().catch(()=>{}); if(ic) ic.style.opacity=0;}
  else{v.pause(); if(ic) ic.style.opacity=1;}
}

function curtirShort(id){
  if(!CU){toast("Faça login pra curtir!"); return;}
  const shorts=getShorts(); const s=shorts.find(x=>x.id===id);
  if(!s){toast("Curtidas dos vídeos demo são fixas. Poste o seu! 😉"); return;}
  if(!Array.isArray(s.likes)) s.likes=[];
  const i=s.likes.indexOf(CU.id);
  if(i>-1) s.likes.splice(i,1); else s.likes.push(CU.id);
  saveShorts(shorts); renderShorts(EXP_TAB);
}

function compartilharShort(id){
  if(navigator.clipboard){navigator.clipboard.writeText(window.location.href+"#short-"+id); toast("Link do short copiado!");}
}

function deletarShort(id){
  const shorts=getShorts(); const idx=shorts.findIndex(s=>s.id===id); if(idx===-1) return;
  if(!confirm("Apagar este short? Não pode ser desfeito.")) return;
  shorts.splice(idx,1); saveShorts(shorts);
  toast("Short removido."); renderShorts(EXP_TAB); atualizarPerfil();
}

// ─── MODAL NOVO SHORT ─────────────────────────────────────
function abrirNovoShort(){
  if(!CU){toast("Faça login pra postar!"); return;}
  document.getElementById("shortTitleInp").value="";
  document.getElementById("shortDescInp").value="";
  document.getElementById("shortTagsInp").value="";
  limparShortVideo();
  const cat=EXP_TAB||"jogos";
  document.querySelectorAll(".scc").forEach(b=>b.classList.toggle("on",b.dataset.cat===cat));
  document.getElementById("newShortModal").classList.add("on");
}
function fecharNovoShort(){ document.getElementById("newShortModal").classList.remove("on"); }
function selShortCat(btn){ document.querySelectorAll(".scc").forEach(b=>b.classList.remove("on")); btn.classList.add("on"); }

function prevShortVideo(inp){
  const f=inp.files[0]; if(!f) return;
  if(f.size>5*1024*1024){toast("Vídeo muito grande! Máx. 5MB."); inp.value=""; return;}
  const r=new FileReader();
  r.onload=e=>{
    _shortVidData=e.target.result;
    const vid=document.getElementById("shortPrevVid");
    vid.src=_shortVidData; vid.style.display="block";
    document.getElementById("shortDropEmpty").style.display="none";
    document.getElementById("shortRmBtn").style.display="flex";
  };
  r.readAsDataURL(f);
}

function limparShortVideo(){
  _shortVidData=null;
  const inp=document.getElementById("shortVideoInp"); if(inp) inp.value="";
  const vid=document.getElementById("shortPrevVid"); if(vid){vid.pause();vid.src="";vid.style.display="none";}
  const empty=document.getElementById("shortDropEmpty"); if(empty) empty.style.display="flex";
  const rm=document.getElementById("shortRmBtn"); if(rm) rm.style.display="none";
}

function criarShort(){
  if(!CU){toast("Faça login!"); return;}
  if(!_shortVidData){toast("Envie um vídeo primeiro!"); return;}
  const title=document.getElementById("shortTitleInp").value.trim();
  const desc=document.getElementById("shortDescInp").value.trim();
  const tags=document.getElementById("shortTagsInp").value.trim();
  const cat=document.querySelector(".scc.on")?.dataset.cat||"jogos";
  if(!title){toast("Adicione um título!"); return;}
  const novo={id:"s_"+uid(),cat,uid:CU.id,un:CU.un,ava:CU.ava,video:_shortVidData,title,desc,tags,likes:[],cmts:[],shares:0,ts:Date.now(),demo:false};
  const shorts=getShorts(); shorts.unshift(novo);
  try{ saveShorts(shorts); }catch(e){ toast("Armazenamento cheio — use um vídeo menor."); return; }
  fecharNovoShort(); toast("Short publicado! 🎬");
  EXP_TAB=cat;
  const idx=["jogos","filmes","series"].indexOf(cat);
  document.querySelectorAll(".est").forEach((b,i)=>b.classList.toggle("on",i===idx));
  renderShorts(cat); atualizarPerfil();
}

// ─── SHORTS DO PERFIL ─────────────────────────────────────
function renderMeusShorts(){
  const el=document.getElementById("meusShortsGrid"); if(!el||!CU) return;
  const mine=getShorts().filter(s=>s.uid===CU.id).sort((a,b)=>b.ts-a.ts);
  if(!mine.length){
    el.innerHTML=`<div class="ps-empty"><i class="fa-solid fa-clapperboard"></i><p>Você ainda não postou nenhum short.</p><button class="btn-novo-short" onclick="abrirNovoShort()"><i class="fa-solid fa-plus"></i> Postar agora</button></div>`;
    return;
  }
  el.innerHTML=mine.map(s=>`
    <div class="ps-item" onclick="abrirShortViewer('${s.id}')">
      <video src="${s.video}" muted playsinline preload="metadata"></video>
      <div class="ps-item-overlay"><i class="fa-solid fa-play"></i><span class="ps-item-title">${esc(s.title)}</span></div>
    </div>`).join("");
}

function abrirShortViewer(id){
  const s=getShorts().find(x=>x.id===id); if(!s) return;
  goPage("explorar",null);
  setTimeout(()=>{
    const idx=["jogos","filmes","series"].indexOf(s.cat);
    if(idx>=0){
      EXP_TAB=s.cat;
      document.querySelectorAll(".est").forEach((b,i)=>b.classList.toggle("on",i===idx));
      renderShorts(s.cat);
      setTimeout(()=>{ document.querySelector(`.short[data-id="${id}"]`)?.scrollIntoView({behavior:"smooth",block:"start"}); },120);
    }
  },100);
}

// ─── RANKINGS ─────────────────────────────────────────────
function switchRankTab(btn,tab){
  document.querySelectorAll(".rtab").forEach(b=>b.classList.remove("on"));
  btn.classList.add("on"); RTAB_PG=tab;
  document.querySelectorAll(".rank-page").forEach(p=>p.classList.remove("on"));
  document.getElementById("rp-"+tab)?.classList.add("on");
}

function rankSugg(inp,sid){
  const v=inp.value.toLowerCase().trim();
  const el=document.getElementById(sid);
  const db=inp.dataset.db;
  const source=db==="filmes"?FILMES_DB:db==="series"?SERIES_DB:JOGOS_DB;
  if(!v){el.style.display="none"; return;}
  const res=source.filter(g=>g.toLowerCase().includes(v)).slice(0,8);
  if(!res.length){el.style.display="none"; return;}
  el.innerHTML=res.map(g=>`<div onclick="pickSugg('${inp.id}','${sid}',\`${g.replace(/`/g,"")}\`)">${g}</div>`).join("");
  el.style.display="block";
}

function pickSugg(iid,sid,val){
  document.getElementById(iid).value=val;
  document.getElementById(sid).style.display="none";
}

function addRank(tipo,iid,sid){
  const inp=document.getElementById(iid);
  const val=inp.value.trim();
  const db=inp.dataset.db;
  const source=db==="filmes"?FILMES_DB:db==="series"?SERIES_DB:JOGOS_DB;
  if(!val){toast("Digite o nome para buscar!"); return;}
  const match=source.find(g=>g.toLowerCase()===val.toLowerCase());
  if(!match){toast("Não encontrado. Use a lista de sugestões!"); return;}
  if(!RANKS[tipo]) RANKS[tipo]=[];
  if(RANKS[tipo].includes(match)){toast("Já está neste ranking."); return;}
  if(RANKS[tipo].length>=10){toast("Ranking cheio! Máximo 10 itens."); return;}
  RANKS[tipo].push(match); saveRanks(CU.id,RANKS);
  inp.value=""; document.getElementById(sid).style.display="none";
  renderRanks(); toast(`"${match}" adicionado ao ranking!`);
}

function removerRank(tipo,idx){ RANKS[tipo].splice(idx,1); saveRanks(CU.id,RANKS); renderRanks(); }

function renderRanks(){
  [{id:"lFav",tipo:"fav"},{id:"lSub",tipo:"sub"},{id:"lSup",tipo:"sup"},{id:"lMov",tipo:"mov"},{id:"lSer",tipo:"ser"}].forEach(({id,tipo})=>{
    const el=document.getElementById(id); if(!el) return;
    const lista=RANKS[tipo]||[];
    el.innerHTML=lista.length
      ? lista.map((g,i)=>`<li class="rank-item"><span class="rank-num">#${i+1}</span><span class="rank-name">${g}</span><button class="btn-rank-rm" onclick="removerRank('${tipo}',${i})"><i class="fa-solid fa-xmark"></i></button></li>`).join("")
      : `<div class="rank-empty">Nenhum item adicionado.</div>`;
  });
  if(typeof renderProfRanks==="function" && document.getElementById("prc-jogos")) renderProfRanks();
}

// ─── PERFIL PRÓPRIO ───────────────────────────────────────
function atualizarPerfil(){
  if(!CU) return;
  document.getElementById("profNomeDisp").textContent=CU.un;
  document.getElementById("profHandleDisp").textContent="@"+CU.un.toLowerCase().replace(/\s/g,"_");
  document.getElementById("profBioDisp").textContent=CU.bio||"Sem bio ainda. Edite seu perfil!";
  document.getElementById("editNick").value=CU.un;
  document.getElementById("editBio").value=CU.bio||"";

  // Banner
  const bannerEl=document.getElementById("profBanner");
  if(bannerEl&&CU.banner){
    let img=bannerEl.querySelector("img.banner-img");
    if(!img){img=document.createElement("img");img.className="banner-img";bannerEl.insertBefore(img,bannerEl.firstChild);}
    img.src=CU.banner;
  }

  // Avatar
  renderAvaEl("profAvaInner",CU.ava,CU.un,true);

  // Stats ★ Seguidores e Seguindo
  const posts=getPosts().filter(p=>p.uid===CU.id);
  document.getElementById("stPosts").textContent=posts.length;
  document.getElementById("stSeg").textContent=getFollowers(CU.id);
  document.getElementById("stSeguindo").textContent=getFollowingCount(CU.id);
  document.getElementById("stLikes").textContent=posts.reduce((a,p)=>a+p.likes.length,0);
  document.getElementById("stCmts").textContent=posts.reduce((a,p)=>a+p.cmts.length,0);
  document.getElementById("stViews").textContent=formatNum(posts.reduce((a,p)=>a+(p.views||0),0));

  renderProfRanks();
  renderMeusShorts();
  document.getElementById("meusFeed").innerHTML=
    posts.length ? posts.map(buildPost).join("") : emptyState("Você ainda não publicou nada.");
}

// ★ switchProfRankTab agora é scoped (não afeta a aba de outro perfil)
function switchProfRankTab(btn,tab){
  const container=document.getElementById("profRanksPanel");
  if(container){
    container.querySelectorAll(".prt").forEach(b=>b.classList.remove("on"));
    container.querySelectorAll(".prof-rank-content").forEach(c=>c.classList.remove("on"));
  }
  btn.classList.add("on"); PROF_RANK_TAB=tab;
  document.getElementById("prc-"+tab)?.classList.add("on");
}

function toggleProfRanks(){
  const p=document.getElementById("profRanksPanel");
  const ch=document.getElementById("ranksChevron");
  if(!p) return;
  const abrir=(p.style.display==="none"||!p.style.display);
  p.style.display=abrir?"block":"none";
  if(ch) ch.style.transform=abrir?"rotate(180deg)":"rotate(0deg)";
  if(abrir && typeof renderProfRanks==="function") renderProfRanks();
}

function renderProfRanks(){
  const grupos={
    jogos:[{id:"prFav",tipo:"fav",label:"⭐ Favoritos",cls:"prl-fav"},{id:"prSub",tipo:"sub",label:"💎 Subestimados",cls:"prl-sub"},{id:"prSup",tipo:"sup",label:"🔥 Superestimados",cls:"prl-sup"}],
    filmes:[{id:"prMov",tipo:"mov",label:"❤️ Favoritos",cls:"prl-mov"}],
    series:[{id:"prSer",tipo:"ser",label:"❤️ Favoritos",cls:"prl-ser"}]
  };
  Object.entries(grupos).forEach(([tabId,lista])=>{
    const wrapper=document.getElementById("prc-"+tabId); if(!wrapper) return;
    wrapper.innerHTML=lista.map(g=>{
      const items=(RANKS[g.tipo]||[]);
      return `<div class="prof-rank-group">
        <div class="prof-rank-label ${g.cls}">${g.label}</div>
        <div class="prof-rank-list">
          ${items.length?items.map((n,i)=>`<div class="prl-item"><span class="prl-num">#${i+1}</span><span class="prl-name">${n}</span></div>`).join(""):'<div class="prl-empty">Nenhum item no ranking ainda.</div>'}
        </div>
      </div>`;
    }).join("");
  });
}

function toggleEditProf(){
  const disp=document.getElementById("profDisplay");
  const edit=document.getElementById("profEdit");
  const vis=disp.style.display!=="none";
  disp.style.display=vis?"none":"block";
  edit.style.display=vis?"flex":"none";
}

function salvarPerfil(){
  const nick=document.getElementById("editNick").value.trim();
  const bio=document.getElementById("editBio").value.trim();
  if(!nick){toast("O nick não pode ser vazio!"); return;}
  CU.un=nick; CU.bio=bio;
  const users=getUsers(); const i=users.findIndex(u=>u.id===CU.id);
  if(i>-1){users[i].un=nick;users[i].bio=bio;saveUsers(users);}
  lss("cg_sess",CU);
  atualizarSidebar(); atualizarPerfil(); toggleEditProf();
  toast("Perfil salvo! ✓");
}

function trocarAvatar(inp){
  const f=inp.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=e=>{
    CU.ava=e.target.result;
    const users=getUsers(); const i=users.findIndex(u=>u.id===CU.id);
    if(i>-1){users[i].ava=CU.ava;saveUsers(users);}
    lss("cg_sess",CU); atualizarSidebar(); atualizarPerfil();
    toast("Avatar atualizado!");
  };
  r.readAsDataURL(f);
}

function trocarBanner(inp){
  const f=inp.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=e=>{
    CU.banner=e.target.result;
    const users=getUsers(); const i=users.findIndex(u=>u.id===CU.id);
    if(i>-1){users[i].banner=CU.banner;saveUsers(users);}
    lss("cg_sess",CU); atualizarPerfil();
    toast("Banner atualizado!");
  };
  r.readAsDataURL(f);
}

// ═══════════════════════════════════════════════════════════
// ★★★ NOVIDADES v3.4 — FOLLOW, PERFIS, BUSCA, TRENDING
// ═══════════════════════════════════════════════════════════

// ─── PERFIL DE OUTRO USUÁRIO ──────────────────────────────
function abrirPerfil(userId){
  if(!userId || userId==="codic") return;   // ignora posts demo
  if(CU && userId===CU.id){ goPage("perfil",null); return; } // próprio perfil
  const users=getUsers();
  const u=users.find(x=>x.id===userId);
  if(!u){toast("Usuário não encontrado."); return;}
  PERFIL_ATIVO=u;
  PG_ANTERIOR=document.querySelector(".pg.on")?.id?.replace("pg-","")||"feed";
  renderOutroPerfil(u);
  goPage("outroPerfil",null);
}

function renderOutroPerfil(u){
  // Botão voltar
  document.getElementById("opBackBtn").onclick=()=>goPage(PG_ANTERIOR,null);
  document.getElementById("opPageNick").textContent=u.un;

  // Banner
  const banEl=document.getElementById("opBanner");
  let bImg=banEl.querySelector("img.banner-img");
  if(u.banner){
    if(!bImg){bImg=document.createElement("img");bImg.className="banner-img";banEl.insertBefore(bImg,banEl.firstChild);}
    bImg.src=u.banner; bImg.style.display="block";
  } else if(bImg){bImg.style.display="none";}

  // Avatar
  renderAvaEl("opAvaInner",u.ava,u.un,true);

  // Dados
  document.getElementById("opNomeDisp").textContent=u.un;
  document.getElementById("opHandleDisp").textContent="@"+u.un.toLowerCase().replace(/\s/g,"_");
  document.getElementById("opBioDisp").textContent=u.bio||"Sem bio ainda.";

  // Contadores
  const posts=getPosts().filter(p=>p.uid===u.id);
  document.getElementById("opPostsCt").textContent=posts.length;
  document.getElementById("opSegCt").textContent=getFollowers(u.id);
  document.getElementById("opSeguindoCt").textContent=getFollowingCount(u.id);

  // Botão seguir
  const btn=document.getElementById("btnSeguirOP");
  if(CU){
    const fol=isFollowing(u.id);
    btn.className=fol?"btn-seguir seguindo":"btn-seguir";
    btn.innerHTML=fol?'<i class="fa-solid fa-user-check"></i> Seguindo':'<i class="fa-solid fa-user-plus"></i> Seguir';
    btn.style.display="flex";
  } else { btn.style.display="none"; }

  // Label ranks
  document.getElementById("opRanksLabel").textContent=`Rankings de ${u.un}`;
  document.getElementById("opRanksPanel").style.display="none";
  const ch=document.getElementById("opRanksChevron");
  if(ch) ch.style.transform="rotate(0deg)";
  renderOPRanks(u.id);

  // Shorts
  const elG=document.getElementById("opShortsGrid");
  if(elG){
    const mine=getShorts().filter(s=>s.uid===u.id);
    if(!mine.length){
      elG.innerHTML='<div class="ps-empty"><i class="fa-solid fa-clapperboard"></i><p>Sem shorts publicados.</p></div>';
    } else {
      elG.innerHTML=mine.map(s=>`
        <div class="ps-item" onclick="abrirShortViewer('${s.id}')">
          <video src="${s.video}" muted playsinline preload="metadata"></video>
          <div class="ps-item-overlay"><i class="fa-solid fa-play"></i><span class="ps-item-title">${esc(s.title)}</span></div>
        </div>`).join("");
    }
  }

  // Posts
  document.getElementById("opFeed").innerHTML=
    posts.length ? posts.map(buildPost).join("") : emptyState(`${esc(u.un)} ainda não publicou nada.`);
}

function toggleFollowOP(){
  if(!CU||!PERFIL_ATIVO) return;
  const userId=PERFIL_ATIVO.id;
  const users=getUsers();
  const myIdx=users.findIndex(x=>x.id===CU.id); if(myIdx===-1) return;
  if(!users[myIdx].following) users[myIdx].following=[];
  const fol=users[myIdx].following.includes(userId);
  if(fol){
    users[myIdx].following=users[myIdx].following.filter(id=>id!==userId);
    toast(`Deixou de seguir ${PERFIL_ATIVO.un}.`);
  } else {
    users[myIdx].following.push(userId);
    toast(`Agora você está seguindo ${PERFIL_ATIVO.un}! 🎮`);
  }
  saveUsers(users); CU=users[myIdx]; lss("cg_sess",CU);
  PERFIL_ATIVO=users.find(x=>x.id===userId)||PERFIL_ATIVO;

  const nowFol=users[myIdx].following.includes(userId);
  const btn=document.getElementById("btnSeguirOP");
  btn.className=nowFol?"btn-seguir seguindo":"btn-seguir";
  btn.innerHTML=nowFol?'<i class="fa-solid fa-user-check"></i> Seguindo':'<i class="fa-solid fa-user-plus"></i> Seguir';
  document.getElementById("opSegCt").textContent=getFollowers(userId);

  atualizarSidebar(); renderSugeridos();
}

function toggleFollowWidget(userId,btn){
  if(!CU){toast("Faça login!"); return;}
  const users=getUsers();
  const myIdx=users.findIndex(x=>x.id===CU.id); if(myIdx===-1) return;
  if(!users[myIdx].following) users[myIdx].following=[];
  const fol=users[myIdx].following.includes(userId);
  if(fol){ users[myIdx].following=users[myIdx].following.filter(id=>id!==userId); }
  else { users[myIdx].following.push(userId); const u=users.find(x=>x.id===userId); if(u) toast(`Seguindo ${u.un}! 🎮`); }
  saveUsers(users); CU=users[myIdx]; lss("cg_sess",CU);
  const nowFol=users[myIdx].following.includes(userId);
  btn.className=`btn-seg-sm${nowFol?" on":""}`;
  btn.innerHTML=nowFol?'<i class="fa-solid fa-user-check"></i>':'<i class="fa-solid fa-user-plus"></i>';
}

function renderOPRanks(userId){
  const ranks=getRanks(userId);
  const grupos={
    jogos:[{tipo:"fav",label:"⭐ Favoritos",cls:"prl-fav"},{tipo:"sub",label:"💎 Subestimados",cls:"prl-sub"},{tipo:"sup",label:"🔥 Superestimados",cls:"prl-sup"}],
    filmes:[{tipo:"mov",label:"❤️ Favoritos",cls:"prl-mov"}],
    series:[{tipo:"ser",label:"❤️ Favoritos",cls:"prl-ser"}]
  };
  Object.entries(grupos).forEach(([tabId,lista])=>{
    const wrapper=document.getElementById("oprc-"+tabId); if(!wrapper) return;
    wrapper.innerHTML=lista.map(g=>{
      const items=ranks[g.tipo]||[];
      return `<div class="prof-rank-group">
        <div class="prof-rank-label ${g.cls}">${g.label}</div>
        <div class="prof-rank-list">
          ${items.length?items.map((n,i)=>`<div class="prl-item"><span class="prl-num">#${i+1}</span><span class="prl-name">${n}</span></div>`).join(""):'<div class="prl-empty">Nenhum item ainda.</div>'}
        </div>
      </div>`;
    }).join("");
  });
}

function toggleOPRanks(){
  const p=document.getElementById("opRanksPanel");
  const ch=document.getElementById("opRanksChevron");
  if(!p) return;
  const abrir=(p.style.display==="none"||!p.style.display);
  p.style.display=abrir?"block":"none";
  if(ch) ch.style.transform=abrir?"rotate(180deg)":"rotate(0deg)";
}

function switchOPRankTab(btn,tab){
  const container=document.getElementById("opRanksPanel");
  container.querySelectorAll(".prt").forEach(b=>b.classList.remove("on"));
  btn.classList.add("on");
  container.querySelectorAll(".prof-rank-content").forEach(c=>c.classList.remove("on"));
  document.getElementById("oprc-"+tab)?.classList.add("on");
}

// ─── PESQUISA DE USUÁRIOS ─────────────────────────────────
function buscarUsuario(q){
  const el=document.getElementById("searchResults"); if(!el) return;
  const query=(q||"").trim().toLowerCase();
  if(!query){fecharBusca(); return;}

  const users=getUsers().filter(u=>
    u.un.toLowerCase().includes(query)||u.email.toLowerCase().includes(query)
  ).slice(0,8);

  if(!users.length){
    el.innerHTML='<div class="sr-empty"><i class="fa-solid fa-user-slash"></i> Nenhum usuário encontrado.</div>';
    el.style.display="block"; return;
  }

  el.innerHTML=users.map(u=>{
    const fCount=getFollowers(u.id);
    const fol=isFollowing(u.id);
    const isMe=CU&&u.id===CU.id;
    return `
      <div class="sr-item" onclick="abrirPerfil('${u.id}')">
        <div class="sr-ava">${avaInner(u.ava,u.un)}</div>
        <div class="sr-info">
          <div class="sr-nick">${esc(u.un)}</div>
          <div class="sr-meta">${fCount} seguidores${fol&&!isMe?' · <span class="sr-following">Seguindo</span>':""}${isMe?' · <span class="sr-following">Você</span>':""}</div>
        </div>
        <i class="fa-solid fa-chevron-right sr-arr"></i>
      </div>`;
  }).join("");
  el.style.display="block";
}

function fecharBusca(){
  const el=document.getElementById("searchResults");
  if(el) el.style.display="none";
}

// ─── TRENDING REAL ────────────────────────────────────────
const CATS_INFO={
  jogos:  {label:"Jogos",  emoji:"🎮",color:"#a855f7"},
  filmes: {label:"Filmes", emoji:"🎬",color:"#f87171"},
  series: {label:"Séries", emoji:"📺",color:"#fbbf24"},
  noticia:{label:"Notícia",emoji:"📰",color:"#67e8f9"},
  dica:   {label:"Dica",   emoji:"💡",color:"#34d399"},
  geek:   {label:"Geek",   emoji:"✨",color:"#a78bfa"},
};

function calcularTrending(){
  const posts=getPosts();
  const limite=Date.now()-72*3600000; // últimas 72h
  const recentes=posts.filter(p=>p.ts>=limite||p.uid==="codic");
  const catMap={};
  recentes.forEach(p=>{
    if(!catMap[p.cat]) catMap[p.cat]={posts:[],score:0};
    catMap[p.cat].posts.push(p);
    catMap[p.cat].score+=1+p.likes.length*2+p.cmts.length*3+(p.views||0)*0.05;
  });
  return Object.entries(catMap)
    .sort((a,b)=>b[1].score-a[1].score)
    .map(([cat,data])=>{
      const info=CATS_INFO[cat]||{label:cat,emoji:"🎮",color:"#9333ea"};
      const top=[...data.posts].sort((a,b)=>(b.likes.length*2+b.cmts.length*3)-(a.likes.length*2+a.cmts.length*3))[0];
      const totalInteract=data.posts.reduce((acc,p)=>acc+p.likes.length+p.cmts.length,0);
      return {cat,info,top,totalPosts:data.posts.length,totalInteract};
    });
}

function truncar(s,max){
  if(!s) return "";
  const plain=s.replace(/<br>/g," ").replace(/&[a-z]+;/g,"").trim();
  return plain.length>max ? plain.substring(0,max)+"…" : plain;
}

function renderTrending(){
  const el=document.getElementById("trendLista"); if(!el) return;
  const trends=calcularTrending();
  if(!trends.length){
    el.innerHTML='<div class="trend-vazio">Nenhuma atividade ainda.<br>Seja o primeiro a postar! 🎮</div>';
    return;
  }
  el.innerHTML=trends.slice(0,6).map((t,idx)=>`
    <div class="trend-item-real" onclick="doFiltroBycat('${t.cat}')">
      <span class="trend-rank" style="color:${t.info.color}">#${idx+1}</span>
      <div class="trend-body">
        <div class="trend-cat-label" style="color:${t.info.color}">${t.info.emoji} ${t.info.label}</div>
        <div class="trend-name-real">${truncar(t.top?.txt||"Novos posts",46)}</div>
        <div class="trend-meta-row">
          <span>${t.totalPosts} post${t.totalPosts!==1?"s":""}</span>
          <span class="trend-dot">·</span>
          <span>${t.totalInteract} interações</span>
          ${idx<2?'<span class="trend-hot">🔥 Em alta</span>':""}
        </div>
      </div>
    </div>`).join("");
}

// ─── QUEM SEGUIR (dinâmico) ───────────────────────────────
function renderSugeridos(){
  const el=document.getElementById("sugeridosLista"); if(!el) return;
  const users=getUsers().filter(u=>u.id!==CU?.id);
  if(!users.length){
    el.innerHTML='<div style="color:var(--text3);font-size:.84rem;padding:8px 0">Nenhum usuário cadastrado ainda.</div>';
    return;
  }
  const sorted=users.map(u=>({
    ...u,
    fCount:getFollowers(u.id),
    fol:isFollowing(u.id)
  })).sort((a,b)=>b.fCount-a.fCount).slice(0,4);

  el.innerHTML=sorted.map(u=>`
    <div class="su-item">
      <div class="su-ava" onclick="abrirPerfil('${u.id}')" style="cursor:pointer">${avaInner(u.ava,u.un)}</div>
      <div class="su-info" onclick="abrirPerfil('${u.id}')" style="cursor:pointer">
        <div class="su-nick">${esc(u.un)}</div>
        <div class="su-tag">${u.fCount} seguidores</div>
      </div>
      <button class="btn-seg-sm${u.fol?" on":""}" onclick="event.stopPropagation();toggleFollowWidget('${u.id}',this)">
        ${u.fol?'<i class="fa-solid fa-user-check"></i>':'<i class="fa-solid fa-user-plus"></i>'}
      </button>
    </div>`).join("");
}

// ─── UTILIDADES ───────────────────────────────────────────
function avaInner(ava,un){
  if(ava) return `<img src="${ava}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
  return `<span style="font-weight:700">${(un||"?")[0].toUpperCase()}</span>`;
}

function renderAvaEl(elId,ava,un,grande=false){
  const el=document.getElementById(elId); if(!el) return;
  if(ava){
    el.innerHTML=`<img src="${ava}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
  } else {
    el.innerHTML=`<span style="font-size:${grande?"2.4rem":"1rem"};font-weight:700;color:var(--purple-h)">${(un||"?")[0].toUpperCase()}</span>`;
  }
}

function timeAgo(ts){
  const d=Date.now()-ts;
  if(d<60000) return "agora";
  if(d<3600000) return Math.floor(d/60000)+"m";
  if(d<86400000) return Math.floor(d/3600000)+"h";
  return Math.floor(d/86400000)+"d";
}

function formatNum(n){
  if(n>=1000000) return (n/1000000).toFixed(1)+"M";
  if(n>=1000) return (n/1000).toFixed(1)+"K";
  return (n||0).toString();
}

function esc(s){
  if(!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
          .replace(/"/g,"&quot;").replace(/\n/g,"<br>");
}

function emptyState(msg){
  return `<div class="empty"><i class="fa-regular fa-newspaper"></i><p>${msg}</p></div>`;
}

function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg; t.classList.add("on");
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove("on"),2600);
}

// ─── EVENTOS GLOBAIS ──────────────────────────────────────
document.addEventListener("click",e=>{
  if(!e.target.closest(".rank-search"))
    document.querySelectorAll(".rank-sugg").forEach(s=>s.style.display="none");
  // ★ Fechar resultados de busca ao clicar fora
  if(!e.target.closest(".search-wrap"))
    fecharBusca();
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    document.getElementById("imgModal")?.classList.remove("on");
    document.getElementById("newShortModal")?.classList.remove("on");
    fecharBusca();
  }
});

document.getElementById("postTxt")?.addEventListener("input",atualizarContador);

// ─── AUTO LOGIN ───────────────────────────────────────────
window.addEventListener("load",()=>{
  const sess=ls("cg_sess");
  if(sess){
    CU=sess;
    const fresh=getUsers().find(u=>u.id===CU.id);
    if(fresh) CU=fresh;
    iniciarApp(false);
  }
});
