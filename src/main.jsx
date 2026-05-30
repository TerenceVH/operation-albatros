import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, Plane, Users, Map, Hotel, Waves, Menu, X, Sun, KeyRound, ChevronRight, Sparkles, CalendarDays, Car, Tent, Camera, BadgeAlert } from 'lucide-react';
import './styles.css';
import RouteSection from "./components/routesection";



const PASSWORD = 'Albatros2026!';

const travelers = [
{
name:'Joel',
letter:'J',
alias:'Papa Prime',
role:'Hoofdkwartier • Operationeel Commandant',
level:'YELLOW — MEDIUM',

quote:'Heeft een veel knapper jonger broertje.',

tip:'Voedsel erin en gaan. Gaat het beste met oververmoeidheid om door het volledig te negeren.',

strengths:[
'Reukvermogen, mits gedoucht',
'Onbetwiste BBQ meester',
'Serieus blijven terwijl iedereen vakantie viert',
'Kan overal een planning voor maken'
],

quirks:[
'Zijn kinderen zijn zijn grootste trots én dagelijkse conditietraining',
'Kan intens gelukkig worden van goed schrijfmateriaal',
'Heeft meestal 14 gedachten tegelijk maar oogt verrassend rustig'
],

stats:{
'Nederlands':10,
'Braziliaans':9,
'Vadermodus':10,
'Relaxstand':8,
'Hittebestendig':7.5
}
},

{
name:'Danvia',
letter:'D',
alias:'De Zonnekoningin',
role:'Chief Vibes Officer • Braziliaanse Energievoorziening',
level:'GREEN — LOW',

quote:'Lievelingskleur is geel met krul.',

tip:'Een biertje in de avond met een spelletje doet wonderen.',

strengths:[
'Altijd in een goede mood',
'Brengt overal sfeer mee',
'Ziet er zelfs goed uit tijdens 38 graden'
],

quirks:[
'“Ik ben zo klaar” heeft geen officiële tijdsaanduiding',
'Kleur in haar leven is een eerste levensbehoefte',
'Krijgt automatisch vakantieenergie zodra ze zon ziet'
],

stats:{
'Braziliaans':10,
'Nederlands':9,
'Goedlachs':9,
'Outfits':10,
'Temperament':15
}
},

{
name:'Dounia',
letter:'D',
alias:'De Puber Incognito',
role:'Snapchatqueen',
level:'GREEN — LOW',

quote:'Weet alles wat een puber moet weten en is de trend meestal al voor.',

tip:'Shop till you drop.',

strengths:[
'Heel goed met de telefoon',
'Heeft het enorm makkelijk met twee rustige broertjes',
'Weet precies wat er speelt',
'Brengt sfeer zonder moeite'
],

quirks:[
'Wordt door sommige mensen weleens “stinky” genoemd',
'Als ze zegt “ik kom zo” kan dat alles betekenen tussen nu en morgen',
'Noemt haar oom Flerrens',
'Dansmoves zijn twijfelachtig tot anders bewezen',
'Totale angst voor het wegvallen van internet'
],

stats:{
'Telefoonskills':10,
'Puberkennis':9,
'Dansmoves':6,
'Sfeer':9
}
},

{
name:'Djoro',
letter:'D',
alias:'De Waterraket',
role:'Aquatisch Specialist • Glijbaan CEO',
level:'ORANGE — HIGH',

quote:'Kan meer eten dan een volwassen man.',

tip:'Kan inmiddels zeer goed zwemmen dus iedereen kan veilig zonder bandjes zwemmen.',

strengths:[
'In het bezit van een A diploma',
'Zeer sterke judokampioen in spé',
'Kan uren doorgaan zonder moe te lijken',
'Vakantiegeluk op pootjes'
],

quirks:[
'Rust is voor mietjes',
'Van glijbanen glijden is volgens hem ook sport',
'Creëert zelfs tijdens het eten alweer honger'
],

stats:{
'Energielevel':10,
'Waterliefhebber':10,
'Eetlust':11,
'Volume':8,
'Vakantiepret':10
}
},

{
name:'Eros',
letter:'E',
alias:'De Filosoof',
role:'Deep Thoughts Dept. • Gelato Connoisseur',
level:'GREEN — LOW',

quote:'Heeft meer energie dan de gemiddelde camping aankan.',

tip:'Geef hem een ijsje, een goed uitzicht en iemand die wil luisteren.',

strengths:[
'Interessante gesprekken',
'Rustig onder alle omstandigheden is een fabel',
'Heeft stijl zonder moeite',
'Kan overal een gezellige sfeer van maken'
],

quirks:[
'Verdwijnt soms volledig in eigen gedachten',
'Doet alsof hij relaxt is maar observeert ondertussen alles',
'Heeft een speciaal talent voor net iets te laat reageren'
],

stats:{
'Diepgang':10,
'Gelato kennis':8,
'Rustfactor':3,
'Filosofie':10,
'Zomerenergie':8
}
},

{
name:'Brigitte',
letter:'B',
alias:'La Directrice',
role:'Senior Management • Operationele Moeder',
level:'GREEN — LOW',

quote:'Altijd een koffer mee om mensenlevens te redden. Niet nodig als het er is, wél nodig als het mist.',

tip:'Laat haar ook even zitten. Anders gaat ze vanzelf weer iets doen voor iemand anders.',

strengths:[
'Medisch onderlegt',
'Weet altijd waar alles ligt',
'Onbeperkte geduldsreserve',
'Zorgt dat iedereen het naar zijn zin heeft'
],

quirks:[
'Pakt standaard drie dingen extra “voor het geval dat”',
'Heeft waarschijnlijk al paracetamol voordat jij hoofdpijn voelt',
'Zegt “komt goed” met medische overtuiging',
'Kan moeilijk ontspannen als iemand iets zoekt'
],

stats:{
'Geduld':10,
'Zorgmodus':10,
'Organisatie':9,
'Stressbestendig':9,
'Moederkracht':11
}
},

{
name:'Ricardo',
letter:'R',
alias:'Il Capitano',
role:'Navigation Officer • BBQ Commander',
level:'YELLOW — MEDIUM',

quote:'Luisterd altijd naar Google Maps.',

tip:'Eén ding tegelijkertijd vragen.',

strengths:[
'Maakt van een doppert een maaltijd',
'Kan bijna alles',
'Weet meestal waar we zijn',
'BBQ skills van hoog niveau'
],

quirks:[
'Doet alsof hij alle chaos compleet onder controle heeft',
'Blijft opvallend rustig terwijl iedereen door elkaar praat',
'Heeft vertrouwen in routes die niemand anders begrijpt'
],

stats:{
'Routevertrouwen':10,
'BBQ skills':9,
'Kalmte':9,
'Richtinggevoel':7,
'Papa aura':9
}
},

{
name:'Terence',
letter:'T',
alias:'De Vakantieversneller',
role:'Special Operations • Entertainment Afdeling',
level:'ORANGE — HIGH',

quote:'Kan er ook niks aan doen dat hij zo knap is.',

tip:'Gewoon laten praten. Meestal wordt het vanzelf een verhaal.',

strengths:[
'Heeft waarschijnlijk zijn eigen humor uitgevonden',
'Draagt charisma alsof het een handtas is',
'Kan overal sfeer maken zonder moeite',
'Ziet elk klein moment als potentiële documentaire',
'Gewoon heel knap'
],

quirks:[
'Heeft hij niet. Hij is gewoon heel knap.'
],

stats:{
'Charisma':15,
'Improvisatie':10,
'Knapheid':27,
'Sfeerboost':10,
'Realiteitsgehalte verhalen':6
}
},

{
name:'Verouska',
letter:'V',
alias:'Senior Budget Elimination Specialist',
role:'Chief Glamour Officer • Poolside Executive',
level:'YELLOW — MEDIUM',

quote:'Problemen verdwijnen. Budgetten ook.',

tip:'Minimaal 3 outfits per dag. Je weet het nooit.',

strengths:[
'Geen euro blijft achter.',
'Heeft stijl zonder daar moeite voor te lijken doen',
'Kan zelfs door zonnebrand worden geïnfluenced'
],

quirks:[
'Een “snelle outfitwissel” duurt gemiddeld één aflevering',
'Heeft meer spullen mee dan logisch verklaarbaar is',
'Je kan nooit genoeg spiegels hebben',
'Pakt voor 19 dagen alsof emigratie een optie is'
],

stats:{
'Glamour':15,
'Outfits':12,
'Poolside aura':10,
'Inlaadtijd':4,
'Consumptieve Groei':20
}
},

{
name:'Louen',
letter:'L',
alias:'Kleine Kracht',
role:'Stealth Operations • Silent Observer',
level:'GREEN — LOW',

quote:'Zegt gemiddeld 14 klanken per dag. Allemaal loepzuiver.',

tip:'Moet eten. In slaap zitten zit in haar aard.',

strengths:[
'Observeert letterlijk alles',
'Onverwacht grappig op perfecte momenten',
'Tijdens hevige discussies vindt zij rust',
'Kan volledig in haar eigen wereld zitten zonder probleem'
],

quirks:[
'Is soms zo stil dat mensen vergeten dat ze er nog zit',
'Kijkt alsof ze meer weet dan de rest',
'Begrijpt niet waarom mensen zoveel praten',
'Kan volledig opgaan in haar eigen wereld'
],

stats:{
'Stealth':10,
'Rust':10,
'Observatie':10,
'Praatniveau':2,
'Zangtalent met 1 noot':10
}
},

{
name:'Brian',
letter:'B',
alias:'De Entertainer',
role:'Head of Morale • Joke Department Director',
level:'YELLOW — MEDIUM',

quote:'Kan ook zeer goed vliegen met een drone.',

tip:'Ondanks dat het niet zo lijkt is slaap een zeer belangrijke en nodige factor in zijn leven.',

strengths:[
'Nooit een saaie seconde',
'Laat letterlijk iedereen lachen',
'Kan van iets kleins een complete voorstelling maken',
'Praat makkelijker met vreemden dan de meeste mensen met familie'
],

quirks:[
'Heeft altijd nóg een verhaal',
'Begint soms opnieuw terwijl hij nog bezig was',
'Een van de uitvinders van ADHD'
],

stats:{
'Praatniveau':11,
'Lachgehalte':10,
'Verhaalduur':12,
'Sfeerboost':10,
'Slaapkans omgeving':4
}
},

{
name:'Yael',
letter:'Y',
alias:'De Strategist',
role:'Planning Division • Schedule Enforcer',
level:'GREEN — LOW',

quote:'Heeft waarschijnlijk al een planning voor de planning.',

tip:'Brengt koffie op bed.',

strengths:[
'Organisatorisch genie',
'Weet precies wat er nog moet gebeuren',
'Kan chaos verrassend goed structureren',
'Laat zich zeer zelden verrassen'
],

quirks:[
'Enorm goed gezelschap',
'Kan genieten van haar prachtige dochter',
'Brengt koffie op bed',
'Kan tijdens lachbuien op de grond belanden'
],

stats:{
'Planning':8,
'Goedlachs':10,
'Overzicht':10,
'Groepsrust':9
}
},

{
name:'Noree',
letter:'N',
alias:'De Glimlachbewaker',
role:'Activities Director • Enthusiasm Officer',
level:'ORANGE — HIGH',

quote:'Met haar mee weten we zeker dat het een prachtige vakantie wordt.',

tip:'Wordt waarschijnlijk een zeer grote liefhebber van ijsjes.',

strengths:[
'Altijd enthousiast',
'Brengt overal energie mee',
'Krijgt mensen zonder moeite mee',
'Maakt van kleine dingen iets leuks'
],

quirks:[
'Heeft energie waar ze eigenlijk slaap moet hebben',
'Kan enthousiast worden van letterlijk alles',
'Maak haar niet om 4 uur s nachts wakker',
'Rust voelt voor haar als tijdverspilling'
],

stats:{
'Energie':10,
'Enthousiasme':10,
'Sfeer':9,
'Activiteitendrang':10,
'Ruststand s nachts':3
}
},

{
name:'Ton',
letter:'T',
alias:'De Veteraan',
role:'Senior Advisor • Wisdom Department',
level:'GREEN — LOW',

quote:'Is voor de beste club van Nederland.',

tip:'Heb je buiten de deur trek, Ton is altijd in voor een snack.',

strengths:[
'Heeft alles al een keer meegemaakt',
'Blijft rustig onder druk',
'Kan overal een verhaal over vertellen',
'Heeft vaderlijke rust over zich heen hangen'
],

quirks:[
'“Vroeger…” komt gemiddeld meerdere keren per dag voorbij',
'Kan een kort verhaal onverwacht lang maken',
'Kijkt soms alsof hij dit allemaal al voorspeld had',
'Wordt langzaam één met zijn stoel na het eten'
],

stats:{
'Wijsheid':10,
'Nostalgie':10,
'Rust':9,
'Discussievoering':9,
'Vakantie-ervaring':10
}
},

{
name:'Rita',
letter:'R',
alias:'De Surinaamse Van Dalen',
role:'Logistics Command • Route Master',
level:'GREEN — LOW',

quote:'Maakt haar eigenwijze woordenboek.',

tip:'Kookt als geen ander heerlijke roti.',

strengths:[
'Weet altijd waar we heen moeten met Maps',
'Lost problemen op onderweg',
'Kan heerlijk eten maken',
'Blijft opvallend rustig tijdens stress'
],

quirks:[
'Opwinderig'
],

stats:{
'Routegevoel':10,
'Praktisch inzicht':10,
'Rust':8,
'Verdwaalkans':12,
'Voorbereiding':10
}
},

{
name:'Shavonda',
letter:'S',
alias:'De Paardenfluisteraar',
role:'Heart of the Group • Vibe Protector',
level:'GREEN — LOW',

quote:'Houdt ontzettend van paarden.',

tip:'Wilt ondanks een dreigement wel mee op wintersport.',

strengths:[
'Doorzettingsvermogen',
'Kickboksster',
'Hart groter dan de camping zelf',
'Brengt iedereen samen'
],

quirks:[
'Heeft een zwak voor paarden en waarschijnlijk weten de paarden dat ook',
'Slecht met bedrijfseconomie',
'Gaat met de scooter naar het strand en daarna sporten'
],

stats:{
'Warmte':10,
'Groepsgevoel':10,
'Paardenliefde':11,
'Skiskills':4,
'Vibe bescherming':10
}
}
];

const timeline = [
  ['17 juli','D-Day Minus 2','Eerste overnachting onderweg','🚗'],
  ['18 juli','D-Day Minus 1','Tweede overnachting onderweg','🛏️'],
  ['19 juli','Aankomst','Park Albatros Village opent officieel','🏖️'],
  ['19 juli - 7 aug','The Main Operation','19 dagen vakantiepres, waterpark en herinneringen','☀️'],
  ['7 aug','Evacuatie fase 1','Vertrek van het terrein, zand in alles','🚙'],
  ['8 aug','Evacuatie fase 2','Laatste nacht onderweg','🏨'],
  ['9 aug','Mission Complete','Thuis. Eindelijk. Waarschijnlijk voor pampus','🏠']
];

const accommodations = [
  {image:'/images/accomodatie 1.png', title:'Senior Command Center', residents:['Ton','Rita','Brigitte','Ricardo'], blurb:'Wijsheid komt met de jaren… ook al moet je daar bij sommigen misschien nog even op wachten.'},
  {image:'/images/accomodatie 2.png', title:'The Family Division', residents:['Joel','Danvia','Djoro','Eros','Dounia','Shavonda'], blurb:'Hier gebeuren gemiddeld 14 dingen tegelijk en niemand weet precies wie officieel de leiding heeft.'},
  {image:'/images/accomodatie 3.png', title:'Special Operations Unit', residents:['Terence','Verouska','Louen','Brian','Yael','Noree'], blurb:'Slaap is hier meer een suggestie dan een planning.', extra:'De kans dat hier na 00:00 nog gepraat wordt is statistisch gezien zorgwekkend hoog.'}
];

const hotelVisuals = {
  one:['/images/hotel 1 plaatje 1.jpg','/images/hotel 1 plaatje 2.jpg','/images/hotel 1 plaatje 3.jpg','/images/hotel 1 plaatje 4.jpg','/images/hotel 1 plaatje 5.jpg'],
  two:['/images/hotel 2 plaatje 1.jpg','/images/hotel 2 plaatje 2.webp','/images/hotel 2 plaatje 3.jpg','/images/hotel 2 plaatje 4.webp','/images/hotel 2 plaatje 5.jpg'],
  three:['/images/hotel 3 plaatje 1.jpeg','/images/hotel 3 plaatje 2.jpg','/images/hotel 3 plaatje 3.jpg','/images/hotel 3 plaatje 4.jpg','/images/hotel 3 plaatje 5.jpg']
};

const survivalCards = [
  {name:'Brigitte', percent:97, emoji:'🧭', note:'Niet uit te roeien, hooguit tijdelijk offline'},
  {name:'Rita', percent:95, emoji:'🌤️', note:'Beschouwt schaduw als basisbehoefte'},
  {name:'Verouska', percent:92, emoji:'🎧', note:'Schrikt iedereen af met de mogelijkheid van het maken van oorverdovend harde hurricane geluiden'},
  {name:'Yael', percent:91, emoji:'☕', note:'Geeft koffie op bed'},
  {name:'Shavonda', percent:89, emoji:'🐎', note:'Gek op paarden'},
  {name:'Louen', percent:85, emoji:'🤫', note:'Zegt niets, overleeft alles'},
  {name:'Danvia', percent:81, emoji:'🌴', note:'Italië gaat haar niet verrassen na Brazilië'},
  {name:'Eros', percent:78, emoji:'🧠', note:'Als naamdrager direct geaccepteerd als verloren neef'},
  {name:'Dounia', percent:75, emoji:'🔎', note:'Detecteert problemen vroeg, doet er niks mee'},
  {name:'Terence', percent:62, emoji:'🎢', note:'Improviseert zich erdoor'},
  {name:'Djoro', percent:58, emoji:'🍝', note:'Bouwt mentale stabiliteit op via eten'},
  {name:'Ricardo', percent:51, emoji:'🎙️', note:'Begint verhalen meestal bij hoofdstuk 7. Zolang hij praat, durft zelfs het noodlot niet te onderbreken'}
  {name:'Brian', percent:41, emoji:'🗣️', note:'Slaapt niet, praat te veel'},
  {name:'Joel', percent:35, emoji:'🔋', note:'Draait al 4 jaar op energiebesparingsmodus'}
];

function StatBar({label, value}){ return <div className="stat"><div className="statTop"><span>{label}</span><b>{value}/10</b></div><div className="bar"><motion.i initial={{width:0}} whileInView={{width:`${value*10}%`}} viewport={{once:true}} transition={{duration:.8}} /></div></div> }

function App(){
 const [authed,setAuthed]=useState(sessionStorage.getItem('albatros-auth')==='true');
  const [pass,setPass]=useState('');
  const [active,setActive]=useState('dashboard');
  const [menu,setMenu]=useState(false);
  const [selected,setSelected]=useState(travelers[0]);
  const daysLeft = useMemo(()=>{const d=new Date('2026-07-17T08:00:00'); const n=new Date(); return Math.max(0, Math.ceil((d-n)/(1000*60*60*24)));},[]);
  function login(e){e.preventDefault(); if(pass===PASSWORD){sessionStorage.setItem('albatros-auth','true'); setAuthed(true)} else document.body.classList.add('shake'), setTimeout(()=>document.body.classList.remove('shake'),400)}
  if(!authed) return <Login pass={pass} setPass={setPass} login={login}/>;
  return <div className="app">
    <Nav active={active} setActive={setActive} menu={menu} setMenu={setMenu}/>
    <main>
      {active==='dashboard' && <Dashboard daysLeft={daysLeft} setActive={setActive}/>} 
      {active==='reizigers' && <Travelers selected={selected} setSelected={setSelected}/>} 
      {active==='missie' && <Mission/>}
      {active==='route' && <Route/>}
      {active==='indeling' && <Indeling/>}
      {active==='overleving' && <SurvivalAnalysis/>}
    </main>
   
  </div>
}

function Login({pass,setPass,login}){return <section className="login page"><motion.div className="loginCard" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}><div className="classified">CONFIDENTIAL • FAMILY ACCESS ONLY</div><ShieldCheck size={54}/><h1>Operation Albatros 2026</h1><p>Welkom bij het officiële vakantieportaal. De vakantiepres begint hier.</p><form onSubmit={login}><label>Toegangscode</label><div className="inputWrap"><KeyRound size={18}/><input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Voer wachtwoord in" autoFocus/></div><button>Access Portal <ChevronRight size={18}/></button></form><small>Hint voor bevoegde reizigers: Waar gaan we naartoe?</small></motion.div></section>}

function Nav({active,setActive,menu,setMenu}){const items=[['dashboard','Dashboard',Plane],['reizigers','Reizigers',Users],['missie','De Missie',ShieldCheck],['route','Route & Hotels',Map],['indeling','Indeling',Users],['overleving','Overlevingskansen',ShieldCheck]]; return <><header><div className="brand"><span>OA</span><div><b>Operation Albatros</b><small>Luxury Tuscany Vacation Intelligence</small></div></div><button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><nav className={menu?'open':''}>{items.map(([id,label,Icon])=><button className={active===id?'active':''} onClick={()=>{setActive(id);setMenu(false)}} key={id}><Icon size={16}/>{label}</button>)}</nav></header></>}

function Dashboard({daysLeft,setActive}) {
  return (
    <section className="hero page heroCinema">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="heroInner heroPanel"
      >
        <div className="eyebrow">
          <Sparkles size={16} /> TUSCANY AFTERGLOW • LUXURY RESORT INTELLIGENCE
        </div>

        <h1>OPERATION ALBATROS 2026</h1>

        <p className="lead">
          16 reizigers. 24 dagen. 1 camping. Geen garanties.
        </p>

        <div className="heroStory">
          <p>Daar zijn we weer mensen.</p>
          <p>Nog even, en dan is het zover.</p>
          <p>De werkdagen worden langzaam minder, de groepsapps worden langzaam drukker en de gesprekken gaan steeds vaker over koffers, zwemspullen, tussenstops en de vraag of iemand toevallig weet waar de oplader van die ene camera gebleven is.</p>
          <p>Wat ooit begon als een vaag idee, ergens tussen een paar losse gesprekken, een hoop enthousiasme en waarschijnlijk een iets te optimistische blik op onze agenda's, is inmiddels uitgegroeid tot een echte missie.</p>
          <p>Over een paar weken vertrekken we namelijk naar Toscane.</p>
          <p>En hoewel sommige mensen dit misschien gewoon een vakantie noemen, weten wij inmiddels beter.</p>
          <p>Dit is geen vakantie. Dit is een hoofdstuk.</p>
          <p>Op deze website verzamelen we alle informatie rondom onze missie naar Toscane. Niet omdat het noodzakelijk is, maar omdat het veel leuker is om te doen alsof we een internationale expeditie organiseren.</p>
          <p>Op 17 juli 2026 begint Operatie Albatros officieel.</p>
          <p>Toscane wacht op ons. En wij zijn er klaar voor.</p>
        </div>

        <div className="cta">
          <button onClick={() => setActive('reizigers')}>
            Reizigers
          </button>

          <button className="ghost" onClick={() => setActive('route')}>
            Bekijk route & hotels
          </button>
        </div>
      </motion.div>

      <div className="storyGrid">
        <article className="storyCard">
          <h3>Mission briefing</h3>
          <p>Een cinematic opening met Toscaanse zonsondergang, luxe resort sfeer en het gevoel dat de vakantie officieel begint.</p>
        </article>

        <article className="storyCard">
          <h3>Camping experience</h3>
          <p>Zwembad, strand, Aperol-achtige zomerlichtjes en een premium vakantiegevoel dat elke dag uitnodigt.</p>
        </article>

        <article className="storyCard">
          <h3>Golden hour route</h3>
          <p>Van Duitsland naar Italië, van snelweg naar strand, met genoeg luxe spacing om alles te laten ademen.</p>
        </article>
      </div>

      <div className="dashGrid">
        <Info icon={<CalendarDays />} label="Dagen tot vertrek" value={daysLeft} />
        <Info icon={<Users />} label="Reizigers" value="16" />
        <Info icon={<Tent />} label="Campingdagen" value="19" />
        <Info icon={<Sun />} label="Fun index" value="12/10" />
      </div>

      <div className="feed">
        <h2>Live Intelligence Feed</h2>

        {[
          'Vakantiepres gedetecteerd bij meerdere reizigers',
          'Kofferbakruimte alvast als onvoldoende beoordeeld',
          'Zonnebrandprotocol staat op scherp',
          'Gelato-radar warmt langzaam op',
          'Groepsappactiviteit verwacht: extreem'
        ].map((x, i) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * .12 }}
            className="feedItem"
            key={x}
          >
            <BadgeAlert size={16} />
            {x}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
function Info({icon,label,value}){return <div className="info">{icon}<small>{label}</small><b>{value}</b></div>}

function Travelers({selected,setSelected}){return <section className="page twoCol"><aside className="roster">{travelers.map(t=><button key={t.name} onClick={()=>setSelected(t)} className={selected.name===t.name?'sel':''}><span>{t.letter}</span><div><b>{t.name}</b><small>“{t.alias}”</small></div></button>)}</aside><AnimatePresence mode="wait"><motion.article key={selected.name} className="profile" initial={{opacity:0,scale:.98}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.98}}><div className="profileTop"><div className="avatar">{selected.letter}</div><div><div className="classified">PERSONAL DOSSIER</div><h1>{selected.name}</h1><h2>“{selected.alias}”</h2><p>{selected.role}</p></div></div><div className="danger">DANGER LEVEL <b>{selected.level}</b><span>{selected.quote}</span></div><div className="cards"><Panel title="Survival tip">{selected.tip}</Panel><Panel title="Sterke punten"><ul>{selected.strengths.map(s=><li>{s}</li>)}</ul></Panel><Panel title="Gebruiksaanwijzing"><ul>{selected.quirks.map(s=><li>{s}</li>)}</ul></Panel></div><div className="stats"><h3>Stat analyse</h3>{Object.entries(selected.stats).map(([k,v])=><StatBar key={k} label={k} value={v}/>)}</div></motion.article></AnimatePresence></section>}
function Panel({title,children}){return <div className="panel"><h3>{title}</h3><div>{children}</div></div>}

function Mission(){
  const missionDays = [
    {fase:"FASE 1 — DE HEENREIS", date:"17 - 18 JULI", day:"DAG 1", emoji:"🚗", title:"Reisdag 1: De grote uittocht", risk:"8/10", briefing:"Het is hierbij de bedoeling dat wij Nederland verlaten zonder iemand, oplader of emotionele stabiliteit achter te laten.", report:"De eerste missie is simpel: ons kostelijk vermaken en proberen geen te platte kont op te lopen tijdens de heenreis."},
    {fase:"FASE 1 — DE HEENREIS", date:"18 - 19 JULI", day:"DAG 2", emoji:"🏨", title:"Reisdag 2: De laatste loodjes", risk:"7/10", briefing:"Vandaag draait alles om doen alsof iedereen nog fris is.", report:"De finish nadert. Iedereen ruikt Toscane al, al kan dat ook gewoon de airco zijn die twijfelachtig functioneert."},

    {fase:"FASE 2 — OPERATIE TOSCANE", date:"19 - 20 JULI", day:"DAG 3", emoji:"🏖️", title:"Aankomstdag: Albatros landt", risk:"9/10", briefing:"Doel bereikt. Toscane is officieel ingenomen.", report:"Zwembaden worden getest, accommodaties geïnspecteerd en de eerste vakantiefoto’s verschijnen binnen drie minuten op WhatsApp."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"20 JULI", day:"DAG 4", emoji:"🌴", title:"De eerste officiële vakantiedag", risk:"6/10", briefing:"Vandaag start de echte operatie: ontspannen zonder direct een afdruk van een ligbed in je rug te krijgen.", report:"Iedereen zoekt zijn plek. Sommige mensen vinden rust. Anderen vinden vooral dat er gegeten moet worden."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"21 JULI", day:"DAG 5", emoji:"☀️", title:"Zwemmen alsof het werk is", risk:"6/10", briefing:"De camping wordt professioneel beoordeeld op zwembadkwaliteit, glijbaanpotentie en stoelbeschikbaarheid.", report:"Vakantiepres stijgt naar gevaarlijk enthousiaste hoogtes."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"22 JULI", day:"DAG 6", emoji:"🛒", title:"De eerste boodschappenoperatie", risk:"9/10", briefing:"Vandaag kopen we boodschappen voor twee dagen.", report:"Waarschijnlijke uitkomst: proviand voor een middelgrote provincie."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"23 JULI", day:"DAG 7", emoji:"🍦", title:"Gelato-analyse", risk:"7/10", briefing:"De missie lijkt simpel: ijs halen.", report:"De uitvoering is complex. Er zijn te veel smaken, te veel meningen en te weinig besluitvaardigheid."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"24 JULI", day:"DAG 8", emoji:"🏛️", title:"Culturele intenties", risk:"6/10", briefing:"Vandaag doen we alsof we heel cultureel zijn.", report:"We bekijken een dorpje, maken foto’s van straatjes, eten iets met tomaat en zeggen minimaal vijf keer dat Italië toch wel echt mooi is."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"25 JULI", day:"DAG 9", emoji:"🪞", title:"Outfit- en spiegelcoördinatie", risk:"8/10", briefing:"Vandaag wordt vastgesteld hoeveel outfits een mens op één vakantiedag redelijkerwijs kan dragen.", report:"Conclusie wordt later bekendgemaakt, maar vermoedelijk ligt het aantal hoger dan vooraf begroot."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"26 JULI", day:"DAG 10", emoji:"🔥", title:"BBQ-diplomatie", risk:"7/10", briefing:"Er wordt vuur besproken alsof het een staatszaak is.", report:"Iemand zegt dat het vlees bijna klaar is. Het vlees is niet bijna klaar. Iedereen doet alsof wachten onderdeel is van de ervaring."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"27 JULI", day:"DAG 11", emoji:"🔋", title:"Halverwege de chaos", risk:"6/10", briefing:"Niemand weet nog precies welke dag het is.", report:"Iedereen heeft een andere definitie van rustig aan doen en dat is precies waarom dit werkt."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"28 JULI", day:"DAG 12", emoji:"🏖️", title:"Strandexpeditie", risk:"8/10", briefing:"Vandaag gaan we naar het strand met alsof-dat-simpel-is-energie.", report:"Er worden tassen gepakt alsof we drie weken gaan kamperen."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"29 JULI", day:"DAG 13", emoji:"📸", title:"De groepsfoto", risk:"9/10", briefing:"Een groepsfoto maken met 16 mensen klinkt eenvoudig voor mensen die nog nooit een groepsfoto met 16 mensen hebben gemaakt.", report:"Minimaal één persoon kijkt weg, één kind is verdwenen en iemand roept dat we er nog één moeten maken."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"30 JULI", day:"DAG 14", emoji:"🗺️", title:"Navigatiecrisis", risk:"7/10", briefing:"Google Maps krijgt vandaag een hoofdrol.", report:"De route is zogenaamd logisch. Niemand weet waarom, maar iedereen doet mee."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"31 JULI", day:"DAG 15", emoji:"🤫", title:"Stilte voor de storm", risk:"4/10", briefing:"Iedereen zegt dat we vandaag rustig aan doen.", report:"Dat betekent meestal dat er alsnog boodschappen, zwemmen, lopen, foto’s maken en drie kleine discussies op de planning staan."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"1 AUGUSTUS", day:"DAG 16", emoji:"🍕", title:"De snackfase", risk:"6/10", briefing:"Het moment waarop niemand echt honger heeft maar iedereen toch iets eet.", report:"Dit wordt niet besproken als zwakte, maar als cultureel onderzoek."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"2 AUGUSTUS", day:"DAG 17", emoji:"🌊", title:"Waterpark-diplomatie", risk:"8/10", briefing:"De glijbanen worden opnieuw getest, want blijkbaar kan water per dag anders aanvoelen.", report:"De volwassenen noemen het toezicht, maar eigenlijk wil iedereen gewoon zelf ook."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"3 AUGUSTUS", day:"DAG 18", emoji:"🍛", title:"De thuis-eten-herinnering", risk:"5/10", briefing:"Op dit punt begint iemand waarschijnlijk te praten over eten thuis.", report:"De Italiaanse keuken voelt zich persoonlijk aangevallen, maar blijft professioneel."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"4 AUGUSTUS", day:"DAG 19", emoji:"😎", title:"Maximaal niksdoen", risk:"5/10", briefing:"Vandaag wordt gekeken hoe weinig we kunnen doen zonder schuldgevoel te krijgen.", report:"Het antwoord is: verrassend weinig, maar we proberen het toch."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"5 AUGUSTUS", day:"DAG 20", emoji:"🛍️", title:"Souvenirgevaar", risk:"7/10", briefing:"Iedereen begint mentaal alvast souvenirs mee naar huis te nemen.", report:"Fysiek gebeurt dat binnenkort ook. De koffers zijn nog niet geïnformeerd."},
    {fase:"FASE 2 — OPERATIE TOSCANE", date:"6 AUGUSTUS", day:"DAG 21", emoji:"🌅", title:"Laatste volle vakantiedag", risk:"9/10", briefing:"Iedereen probeert te genieten zonder te zeggen dat het bijna voorbij is.", report:"Dat lukt ongeveer acht minuten. Daarna begint iemand over koffers."},

    {fase:"FASE 3 — EVACUATIE", date:"7 - 8 AUGUSTUS", day:"DAG 22", emoji:"🧳", title:"Evacuatie start", risk:"10/10", briefing:"De camping wordt verlaten met zand in alles en herinneringen in overgewicht.", report:"Iedereen zegt dat het snel is gegaan. Dat klopt, maar ook weer niet."},
    {fase:"FASE 3 — EVACUATIE", date:"8 - 9 AUGUSTUS", day:"DAG 23", emoji:"🚙", title:"Laatste stretch naar huis", risk:"7/10", briefing:"Vandaag rijden we richting Nederland terwijl iedereen doet alsof dat emotioneel acceptabel is.", report:"Gesprekken worden korter, snacks belangrijker en de behoefte aan het eigen bed stijgt naar kritisch niveau."},
    {fase:"FASE 3 — EVACUATIE", date:"9 AUGUSTUS", day:"DAG 24", emoji:"🦅", title:"Mission complete", risk:"2/10", briefing:"Operatie Albatros wordt officieel afgesloten.", report:"Resultaat: duizenden foto’s, honderden inside jokes en minstens één persoon die nu al roept: volgend jaar weer?"}
  ];

  let currentFase = "";

  return (
    <section className="page missionPage">
      <div className="sectionHead">
        <h1>De Missie</h1>
        <p>24 dagen vakantie-intelligence, lichte chaos en volledig overdreven operatieplanning.</p>
      </div>

      <div className="missionList">
        {missionDays.map((item, i) => {
          const showFase = item.fase !== currentFase;
          currentFase = item.fase;

          return (
            <React.Fragment key={item.day}>
              {showFase && <h2 className="missionPhase">{item.fase}</h2>}

              <motion.article
                className="missionCard"
                initial={{opacity:0, y:18}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:i*.03}}
              >
                <div className="missionHeader">
                  <div>
                    <span className="missionDay">{item.day}</span>
                    <small className="missionDate">{item.date}</small>
                    <h3>{item.emoji} {item.title}</h3>
                  </div>
                  <div className="missionRisk">{item.risk}</div>
                </div>

                <div className="missionBody">
                  <div>
                    <small>MISSIEDOEL</small>
                    <p>{item.briefing}</p>
                  </div>

                  <div>
                    <small>SITUATIERAPPORT</small>
                    <p>{item.report}</p>
                  </div>
                </div>
              </motion.article>
            </React.Fragment>
          )
        })}
      </div>
    </section>
  )
}
function Route(){
  return (
    <section className="page routePage">

      <RouteSection
  dossier="DOSSIER 01"
  title='NACHT 1: OPERATIE "OVERLEEF DE HEENREIS"'
  subtitle="17 op 18 Juli • Hotel Onderweg • D-Day Minus 2"
  leftCards={[
    {label:"DATUM", title:"17 JULI", text:"→ 18 Juli"},
    {label:"VERTREKTIJD", title:"03:00", text:"Als iedereen tenminste op tijd klaarstaat"},
    {label:"KM OP DE TELLER", title:"±658 km", text:"Vanuit Nederland"},
    {label:"HOTEL TYPE", title:"Snelweg Chique", text:"Snel in, snel uit"},
    {label:"SLAAPKWALITEIT", title:"7 / 10", text:"Als de kinderen offline zijn"}
  ]}
  rightCards={[
    {label:"OCHTEND MISSIE", title:"Niemand vergeten", text:"Geen tijd voor spa"},
    {label:"CHECK-OUT", title:"09:00", text:"Ontbijten en gaan met die aardbei"},
    {label:"CHECK-IN", title:"15:00", text:"Ik weet het zeker, denk ik"}
  ]}
  images={[
    '/images/hotel 1 plaatje 1.jpg',
    '/images/hotel 1 plaatje 2.jpg',
    '/images/hotel 1 plaatje 3.jpg',
    '/images/hotel 1 plaatje 4.jpg',
    '/images/hotel 1 plaatje 5.jpg'
  ]}
  ticker="🚗 DE POLAREXPRES IS VERTROKKEN • 📸 FOTO’S & VIDEO’S DELEN = VERPLICHT"
/>

      <RouteSection
        dossier="DOSSIER 02"
        title="NACHT 2: DRIE PLASSTOPS VERWIJDERS"
        subtitle="18 op 19 Juli • Hotel Onderweg • D-Day Minus 1"
        leftCards={[
          {label:"DATUM", title:"18 JULI", text:"→ 19 Juli — AANKOMST"},
          {label:"NOG TE RIJDEN", title:"±492 km", text:"De finish nadert"},
          {label:"HOTEL TYPE", title:"Tolweg Luxe", text:"Bijna op camping"},
          {label:"SLAAPKWALITEIT", title:"8 / 10", text:"Airco’s denk ik"}
        ]}
        rightCards={[
          {label:"VAKANTIE PLAYLIST", title:"La Dolce Vita", text:"Nee Verouska dit is geen ijs"},
          {label:"KINDEREN STATUS", title:"Volledig opgeladen", text:"In tegenstelling tot Joel"},
          {label:"MORGEN OM 13:00", title:"ALBATROS", text:"De grote dag is aangebroken"},
          {label:"CHECK-OUT", title:"10:00", text:"Op naar Turin outlet village"},
          {label:"CHECK-IN", title:"15:00", text:"Ik weet het zeker, denk ik"}
        ]}
        images={[
          '/images/hotel 2 plaatje 1.jpg',
          '/images/hotel 2 plaatje 2.webp',
          '/images/hotel 2 plaatje 3.jpg',
          '/images/hotel 2 plaatje 4.webp',
          '/images/hotel 2 plaatje 5.jpg'
        ]}
        ticker="🚗 POLARSTEPS IS IN VOLLE GANG • 🐴 SHAVONDA HOUDT VAN PAARDEN"
      />

      <RouteSection
        dossier="MAIN OPERATION"
        title="HU PARK ALBATROS VILLAGE"
        subtitle="19 JULI — 7 AUGUSTUS 2026"
        leftCards={[
          {label:"DUUR", title:"19 DAGEN", text:"16 reizigers • 1 camping"},
          {label:"ZWEMBADEN", title:"4", text:"Waterpark inbegrepen"},
          {label:"STRAND", title:"1", text:"Eigen strand"},
          {label:"VAKANTIEDAGEN", title:"19", text:"Officieel vakantiegebied"}
        ]}
        rightCards={[
          {label:"PARK HIGHLIGHTS", title:"Waterpark", text:"Zwembaden, strand, glijbanen en pizzeria"},
          {label:"QUOTE", title:"Ons thuis", text:"Voor 19 dagen, 16 mensen en ontelbare herinneringen"}
        ]}
        images={[
          '/images/hotel 3 plaatje 1.jpeg',
          '/images/hotel 3 plaatje 2.jpg',
          '/images/hotel 3 plaatje 3.jpg',
          '/images/hotel 3 plaatje 4.jpg',
          '/images/hotel 3 plaatje 5.jpg'
        ]}
        ticker="★ THE MAIN OPERATION ★"
      />

<RouteSection
  dossier="EVACUATIE FASE 1"
  title="TO BE CONTINUED..."
  subtitle="7 op 8 Augustus • Hotel nog onbekend • Nieuwe briefing volgt"
  leftCards={[
    {label:"STATUS", title:"CLASSIFIED", text:"Dossier nog niet vrijgegeven"},
    {label:"HOTEL", title:"IN ONDERZOEK", text:"Albatros HQ vergelijkt opties"},
    {label:"LOCATIE", title:"ONBEKEND", text:"Nog niet gedeclassificeerd"},
    {label:"MISSIE", title:"LOPENDE", text:"Nieuwe informatie volgt spoedig"}
  ]}
  rightCards={[
    {label:"INLICHTINGEN", title:"VERWACHT", text:"Commandocentrum verzamelt data"},
    {label:"PLANNING", title:"NOG OPEN", text:"Definitieve route volgt later"},
    {label:"DOSSIER", title:"GEHEIM", text:"Toegang momenteel geweigerd"}
  ]}
  images={[
    '/images/tbc1.jpg',
    '/images/tbc2.jpg',
    '/images/tbc3.jpg',
    '/images/tbc4.jpg',
    '/images/tbc5.avif'
  ]}
  ticker="📂 DOSSIER NOG NIET GEDECLASSIFICEERD • 🏨 HOTELKEUZE IN BEHANDELING • 🎬 TO BE CONTINUED..."
/>

<RouteSection
  dossier="EVACUATIE FASE 2"
  title="TO BE CONTINUED..."
  subtitle="8 op 9 Augustus • Laatste overnachting nog onbekend • Meer informatie volgt"
  leftCards={[
    {label:"STATUS", title:"CLASSIFIED", text:"Dossier nog gesloten"},
    {label:"HOTEL", title:"NOG TE KIEZEN", text:"Onderhandeling gaande"},
    {label:"LOCATIE", title:"ONBEKEND", text:"Wordt later bekendgemaakt"},
    {label:"ROUTE", title:"IN ONTWIKKELING", text:"Laatste details ontbreken"}
  ]}
  rightCards={[
    {label:"UPDATE", title:"VOLGT", text:"Nieuwe briefing onderweg"},
    {label:"INTELLIGENCE", title:"VERZAMELD", text:"Analyse nog niet afgerond"},
    {label:"TOEGANG", title:"GEWEIGERD", text:"Classified information"}
  ]}
  images={[
    '/images/tbc6.webp',
    '/images/tbc7.webp',
    '/images/tbc8.webp',
    '/images/tbc11.jpeg',
    '/images/tbc10.avif'
  ]}
  ticker="🦅 ALBATROS HQ WERKT AAN NIEUWE INLICHTINGEN • 📡 DOSSIER WORDT BINNENKORT GEOPEND • 🎬 TO BE CONTINUED..."
/>
    </section>
  )
}
function Indeling(){
  return (
    <section className="page layoutPage">
      <div className="sectionHead">
        <h1>Indeling</h1>
        <p>De officiële slaapverdeling. Wetenschappelijk onverantwoord, maar administratief prachtig.</p>
      </div>

      <div className="accomGrid">
        {accommodations.map((item,index)=>(
          <article className="accomCard" key={item.title}>
            <img className="accomImage" src={item.image} alt={item.title}/>
            <div className="accomCardInner">
              <div className="accomLabel">Accommodatie {index + 1}</div>
              <h3>{item.title}</h3>
              <p className="accomBlurb">{item.blurb}</p>
              <p className="accomResidents"><strong>Bewoners:</strong> {item.residents.join(' • ')}</p>
              {item.extra && <p className="accomExtra">{item.extra}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function SurvivalAnalysis(){
  return (
    <section className="page analysisPage">
      <div className="analysisIntro">
        <div className="eyebrow"><Sparkles size={16}/> ALBATROS INTELLIGENCE BUREAU</div>
        <h1>OVERLEVINGSKANSEN ANALYSE</h1>
        <p>Wie overleeft 19 dagen het meest intact? • Voorspelling 2026</p>
      </div>

      <div className="analysisGrid">
        {survivalCards.map((item,i)=>(
          <motion.article
            key={item.name}
            className={"survivalCard " + (item.percent>=95?'good':item.percent>=80?'warm':item.percent>=60?'mid':'low')}
            initial={{opacity:0,y:18}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{delay:i*.04}}
          >
            <div className="survivalTop">
              <div>
                <span className="survivalEmoji">{item.emoji}</span>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
              <b className="survivalPercent">{item.percent}%</b>
            </div>

            <div className="barTrack">
              <motion.span
                className="barFill"
                initial={{width:0}}
                whileInView={{width:`${item.percent}%`}}
                viewport={{once:true}}
                transition={{duration:.8, delay:i*.03}}
              />
            </div>
          </motion.article>
        ))}
      </div>

      <p className="analysisFootnote">Groepsoverleving overall: ACCEPTABELE RISICO’S — Operatie gaat door.</p>
    </section>
  )
}
createRoot(document.getElementById('root')).render(<App/>);
