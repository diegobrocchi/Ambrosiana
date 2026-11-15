/* Tre percorsi — Pinacoteca Ambrosiana
   Collocazioni dal catalogo online del museo (consultato il 15 novembre 2026).
   Storie dalle schede "Capolavori" del sito del museo, riscritte; nessun testo copiato.
   Immagini: file locali in images/<key>.jpg (da aggiungere). */
const CAT = id => `https://www.ambrosiana.it/en/pinacoteca-collections/#/dettaglio/${id}`;
const HL = slug => `https://www.ambrosiana.it/en/discover/masterpieces/${slug}/`;
const SRC = "Pinacoteca Ambrosiana, scheda del capolavoro";
const CHECKED = "15 novembre 2026";
const FLOOR = { 1: "Primo piano", 2: "Secondo piano", 0: "Piano terra" };
const ORDER = { 1: 1, 2: 2, 0: 3 }; // ordine di visita: primo piano, secondo piano, piano terra

const W = {
  tiziano: {
    title: "Adorazione dei Magi", artist: "Tiziano Vecellio", date: "1560 circa", inv: 202,
    floor: 1, room: "Sala 1", museumPage: CAT("60eae7cb-6919-4658-aa4b-884c1d7a4bb9"), historySourceUrl: HL("adoration-of-the-magi-titian"),
    question: "Un regalo per un re che non arriva mai a destinazione: di chi è, davvero, un dono non consegnato?",
    text: "Prima del quadro, guarda la cornice: negli angoli c’è un monogramma, una H e una D, e tutt’intorno lune crescenti, archi e frecce. È l’indirizzo di un regalo che non è mai partito.",
    history: "Il cardinale Ippolito II d’Este commissionò questa grande tela come dono per il re di Francia Enrico II e per la sua favorita, Diana di Poitiers: da qui le iniziali H e D nella cornice originale e i simboli della dea Diana. Per varie circostanze il quadro non arrivò mai in Francia. Lo comprò san Carlo Borromeo, che lo lasciò in eredità all’Ospedale Maggiore di Milano; nel 1588 lo acquistò il cardinale Federico Borromeo."
  },
  canestra: {
    title: "Canestra di frutta", artist: "Caravaggio", date: "1594 – 1598 circa", inv: 151,
    floor: 1, room: "Sala 1", museumPage: CAT("ca292b41-046f-4299-80b8-70dda32235f2"), historySourceUrl: HL("basket-of-fruit"),
    question: "Niente santi, niente re: solo frutta e foglie. Perché un cardinale avrebbe dovuto considerarla un tesoro?",
    text: "Una cesta di vimini colma di frutta e foglie, resa con un realismo quasi ossessivo, contro un fondo chiaro e neutro. Guarda il bordo: la cesta sporge appena dal piano su cui poggia, verso di te.",
    history: "È probabilmente il dipinto più famoso della collezione del cardinale Federico Borromeo, il nucleo da cui è nata la Pinacoteca: è tra le opere che il cardinale donò all’Ambrosiana nel 1618. È considerata una specie di prototipo di quello che sarebbe diventato un genere a sé, la natura morta."
  },
  cartone: {
    title: "Cartone preparatorio per la Scuola di Atene", artist: "Raffaello Sanzio", date: "1505 circa – prima del 1510", inv: 126,
    floor: 1, room: "Sala 5", museumPage: CAT("f9777616-6d25-4e36-9825-129361eca73f"), historySourceUrl: HL("school-of-athens"),
    question: "Un disegno nato come attrezzo di lavoro: in che momento diventa un’opera da pagare a peso d’oro?",
    text: "Non è un dipinto ma un disegno a carboncino e biacca, largo più di otto metri: il progetto, a grandezza reale, dell’affresco che Raffaello dipinse in Vaticano. Avvicinati e cerca le linee di costruzione delle figure.",
    history: "È il più grande cartone rinascimentale arrivato fino a noi: Raffaello lo preparò per la Stanza della Segnatura in Vaticano, commissionata da papa Giulio II. Era in prestito all’Ambrosiana già dal 1610, ma il cardinale Federico Borromeo lo comprò solo nel 1626, dalla vedova di Fabio Borromeo Visconti, per la somma enorme di seicento lire imperiali. Il titolo più esatto sarebbe “Filosofia”, come suggerisce l’allegoria dipinta sulla volta sopra l’affresco."
  },
  barocci: {
    title: "Presepe", artist: "Federico Barocci", date: "1598", inv: 153,
    floor: 1, room: "Sala 6", museumPage: CAT("a17b35a2-6199-46ed-a253-05e779ca3ee9"), historySourceUrl: HL("nativity-federico-barocci"),
    question: "Il valore affettivo si può vedere? Che cosa può aver fatto di questo quadro “una delle cose più care” di un cardinale?",
    text: "Una Natività raccolta, quasi domestica. Prima di leggere oltre, cerca da dove arriva la luce.",
    history: "Federico Borromeo lo considerava “una delle cose più care che possiedo”, e si è ipotizzato che lo tenesse nel suo studio, nel palazzo arcivescovile. Sull’autore si è discusso a lungo; oggi si ritiene che la definizione più adatta sia quella di replica autografa, cioè una seconda versione dipinta dallo stesso Barocci."
  },
  vaso: {
    title: "Vaso di fiori con gioiello, monete e conchiglie", artist: "Jan Brueghel il Vecchio", date: "1606", inv: 66,
    floor: 1, room: "Sala 7", museumPage: CAT("23efadc6-079f-4ee1-b013-e514b8b83d58"), historySourceUrl: HL("vase-of-flowers-with-coins-jewel-and-shells"),
    question: "Se dovessi dare un prezzo a questo quadro, useresti i fiori, le monete o il diamante?",
    text: "Circa cento specie di fiori, dipinte una per una su una lastra di rame. Ai piedi del vaso: un gioiello, alcune monete, delle conchiglie.",
    history: "Brueghel lo dipinse per il cardinale Federico, ed è il più antico dipinto documentato di questo genere. Contiene un centinaio di specie di fiori, alcune molto rare: da una lettera sappiamo che il pittore ci lavorava nel 1606 e che quei fiori li aveva visti nel giardino degli arciduchi Alberto e Isabella a Bruxelles, deciso a ritrarli dal vero. Nel suo Musaeum Borromeo racconta che Brueghel dipinse un diamante nella parte bassa del vaso per dire che la sua opera valeva quanto il gioiello: e quello, scrive il cardinale, fu il prezzo pagato all’artista."
  },
  fuoco: {
    title: "Allegoria del Fuoco", artist: "Jan Brueghel il Vecchio", date: "1608", inv: 68,
    floor: 1, room: "Sala 7", museumPage: CAT("49b95c6a-dc2b-4fec-9091-055871a6ac96"), historySourceUrl: HL("allegory-of-fire-jan-brueghel-the-elder"),
    question: "Quanti oggetti riesci a contare? Il valore, qui, sta nelle cose dipinte o nel lavoro che le ha fatte?",
    text: "Sullo sfondo un incendio divora un edificio sulla montagna; in primo piano un’officina sterminata. Lo stesso fuoco che distrugge e che produce.",
    history: "Brueghel rappresenta il Fuoco prima di tutto nel grande incendio che, come una forza selvaggia, divora l’edificio sullo sfondo. Ma sviluppa il tema anche in un’enorme officina, dove gli operai – che il cardinale chiama, alla maniera del mito, Ciclopi – producono una quantità di oggetti: armature, vetri, brocche, utensili di casa e attrezzi di bottega. Su tutto domina un lampadario d’ottone con l’aquila bicipite. Qui il fuoco non distrugge più: è domato dall’uomo nella fornace a sinistra e messo al servizio del lavoro."
  },
  luini: {
    title: "Santa Famiglia con san Giovannino", artist: "Bernardino Luini", date: "1515 – 1520 circa", inv: 92,
    floor: 1, room: "Sala 1", museumPage: CAT("cc5b7aca-1b1f-418c-9b26-d7ae3abeeda2"), historySourceUrl: HL("the-holy-family-with-saints-anne-and-john-bernardino-luini"),
    question: "Ricalcare un maestro e aggiungere una figura: è ancora una copia o è già un’opera nuova?",
    text: "Volti dolci, sorrisi appena accennati, contorni morbidi: Luini guarda Leonardo da molto vicino. Cerca la figura che Leonardo non aveva previsto.",
    history: "Nel suo Musaeum il cardinale Federico Borromeo scrisse che il modello di questa tavola era il cartone di Leonardo oggi alla National Gallery di Londra, da cui Luini ricavò probabilmente un ricalco parziale. Alla composizione di Leonardo, Luini aggiunse la figura di san Giuseppe, a sinistra della Vergine."
  },
  dormitio: {
    title: "Dormitio Virginis", artist: "Maestro della Dormitio Virginis Massari", date: "1490 circa", inv: 1001,
    floor: 1, room: "Sala 2", museumPage: CAT("f85dc3ce-f849-4a6e-82b1-285bf1b3191f"), historySourceUrl: HL("dormition-of-the-virgin-massari"),
    question: "Ripetere uno schema antico, quasi un modello da riempire: è mancanza di fantasia o fedeltà a una tradizione?",
    text: "Un fondo d’oro che sembra venire da Bisanzio, dipinto invece a Ferrara alla fine del Quattrocento.",
    history: "La tavola è attribuita al cosiddetto Maestro della Dormitio Virginis Massari, attivo a Ferrara alla fine del Quattrocento. Mostra la Vergine che si addormenta nel sonno della morte – da qui il termine “dormizione” – e la sua Assunzione in gloria, come raccontano i Vangeli apocrifi e la tradizione delle Chiese d’Oriente. L’impaginazione riprende quella delle icone bizantine della Dormizione, a cominciare dal sontuoso fondo oro; È arrivata all’Ambrosiana nel 1982, con la donazione Croff."
  },
  bassano: {
    title: "Riposo durante la fuga in Egitto", artist: "Jacopo Bassano", date: "1547 circa", inv: 207,
    floor: 1, room: "Sala 6", museumPage: CAT("269728f4-5f17-4b32-a727-3f151bc85587"), historySourceUrl: HL("the-rest-on-the-flight-into-egypt-jacopo-bassano"),
    question: "Che cosa rende originale una storia che tutti conoscono già?",
    text: "Un tema dipinto infinite volte, raccontato come una sosta qualunque lungo la strada: cerca le fasce del Bambino in primo piano.",
    history: "Il cardinale Federico lo ammirava come una delle opere migliori di Jacopo Bassano. Dipinto probabilmente alla fine del 1547, riprende un tema molto amato dalla pittura religiosa – la Sacra Famiglia che si riposa durante la fuga in Egitto – e lo popola di dettagli presi dalla realtà quotidiana, come le fasce del Bambino in primo piano."
  },
  hayez: {
    title: "Il bacio", artist: "Francesco Hayez", date: "1859", inv: 708,
    floor: 2, room: "Sala 19", museumPage: CAT("acfaa751-114c-4b35-8b73-bddf70fc8b5e"), historySourceUrl: HL("the-kiss-francesco-hayez"),
    question: "Se è l’autore stesso a copiarsi, la copia vale quanto l’originale?",
    text: "Il bacio più famoso della pittura italiana, in formato tascabile: un ovale di circa ventisei centimetri, ad acquerello.",
    history: "È un piccolo acquerello ovale: una versione che Hayez ricavò dal suo celebre Bacio della Pinacoteca di Brera, un quadro a cui era particolarmente affezionato. L’acquerello è arrivato all’Ambrosiana nel 1962 con il legato Negroni Prati Morosini."
  },
  moroni: {
    title: "Ritratto di gentiluomo (Michel de l’Hospital?)", artist: "Giovan Battista Moroni", date: "1554", inv: 196,
    floor: 1, room: "Sala 12", museumPage: CAT("030930b9-f29d-429a-a73f-cb39882f1a52"), historySourceUrl: HL("portrait-of-a-gentleman-michel-de-lhospital-giovan-battista-moroni"),
    question: "Basta un motto per riconoscere una persona? Quale frase metteresti tu nel tuo ritratto?",
    text: "Un uomo in piedi, sicuro di sé, appoggiato a una colonna. Il suo nome non è scritto da nessuna parte: c’è solo una frase in latino.",
    history: "Su un frammento di pietra in basso a destra Moroni ha scritto in numeri romani la data in cui finì il ritratto: 1554. Il gentiluomo, a figura intera, si appoggia allo zoccolo di una colonna su cui si legge un verso di Orazio: “Impavidum ferient ruinae”, le rovine lo colpiranno senza spaventarlo. Proprio quel motto ha suggerito un nome: Michel de l’Hospital, ma l’identificazione resta un’ipotesi. Il quadro è all’Ambrosiana dal 1860, dono del marchese Vitaliano Crivelli."
  },
  canova: {
    title: "Autoritratto", artist: "Antonio Canova (forse Giovanni Battista Monti)", date: "inizio XIX secolo", inv: 181,
    floor: 2, room: "Sala 18", museumPage: CAT("49e51a0f-fed3-4ea2-87bb-f5dba0bc9ed7"), historySourceUrl: HL("self-portrait-antonio-canova"),
    question: "Un autoritratto scolpito da un altro è ancora un autoritratto?",
    text: "Un volto in marmo idealizzato come quello di un eroe antico. La domanda è: chi ha tenuto davvero lo scalpello?",
    history: "La tradizione lo considerava un autoritratto scolpito dal grande scultore neoclassico in persona; di recente è stato attribuito a Giovanni Battista Monti, uno dei suoi assistenti più dotati. Il busto, di proporzioni semicolossali (alto 57 centimetri), si ispira ai modelli eroici e idealizzati dell’antichità classica. È all’Ambrosiana dal 1827, dono di Giovanni Edoardo de Pecis."
  },
  salai: {
    title: "Testa di Cristo Redentore", artist: "Gian Giacomo Caprotti, detto Salaì", date: "1511", inv: 2686,
    floor: 0, room: "Aula Leonardi", museumPage: CAT("ceaaea57-693b-4141-a206-855c08ee11c2"), historySourceUrl: HL("head-of-christ-the-redeemer-salai"),
    question: "Allievo, modello, pittore: quante identità può avere una sola persona?",
    text: "Un Cristo frontale, dallo sguardo dolce. Guarda nell’angolo in basso a destra: lì c’è la firma che ha risolto il mistero.",
    history: "In basso a destra la tavola porta una data, 1511, e un’iscrizione in cui compare chiaramente il nome “Salai”: il soprannome che Leonardo diede a Gian Giacomo Caprotti, uno dei suoi allievi prediletti, spesso usato come modello nella bottega del maestro, come nel celebre San Giovanni Battista del Louvre. Il dipinto è arrivato all’Ambrosiana nel 2013, dono di Bernardo Caprotti, con un nome scherzoso: “il Caprotti di Caprotti”."
  },
  dama: {
    title: "Ritratto di dama", artist: "Pittore tra Lombardia ed Emilia", date: "fine XV secolo", inv: 100,
    floor: 0, room: "Aula Leonardi", museumPage: CAT("fc72bc43-b59a-4aa2-bf1a-07823763b241"), historySourceUrl: HL("portrait-of-a-lady-lombard-emilian-painter"),
    question: "Sei nomi per un solo volto: quale sceglieresti? E perché ci serve tanto dare un nome?",
    text: "Una giovane donna di profilo, elegantissima, che da quattro secoli aspetta un nome.",
    history: "La prima volta che il nome di Leonardo risuonò all’Ambrosiana fu per questo quadro: il cardinale Federico Borromeo lo attribuì al maestro di Vinci, descrivendolo come il ritratto di una duchessa di Milano, “di mano di Leonardo”. Da allora si è cercato di dare un nome alla donna: Beatrice d’Este, moglie di Ludovico il Moro – e proprio per questo il quadro fu accostato al Musico, in cui alcuni vedevano il duca –, ma anche Isabella d’Aragona, Bianca Giovanna Sforza, Cecilia Gallerani, Anna Maria Sforza. Oggi il museo lo assegna a un pittore anonimo attivo tra Lombardia ed Emilia alla fine del Quattrocento."
  },
  musico: {
    title: "Ritratto di Musico", artist: "Leonardo da Vinci", date: "1480 – 1485 circa", inv: 99,
    floor: 0, room: "Aula Leonardi", museumPage: CAT("1fc85ec3-965d-4922-b2c6-617f65c5b33f"), historySourceUrl: HL("portrait-of-a-musician"),
    question: "Un restauro ha cambiato l’identità di quest’uomo. Che cosa vedi, ora che sai cosa tiene in mano?",
    text: "Uno sguardo intenso, rivolto fuori dal quadro. In basso, quasi nascosta, una mano che stringe un foglio di musica.",
    history: "È l’unico dipinto su tavola di Leonardo rimasto a Milano. Arrivò probabilmente all’Ambrosiana nel 1637 con la donazione del conte Galeazzo Arconati, insieme al Codice Atlantico. Per secoli si pensò che ritraesse Ludovico il Moro, duca di Milano; poi, nel 1905, un restauro tolse le ridipinture e fece riemergere in basso la mano con un cartiglio musicale. Da allora lo si considera il ritratto di un musicista, identificato di volta in volta con Franchino Gaffurio, maestro di cappella del Duomo di Milano, o con il cantore e compositore fiammingo Josquin des Prez, entrambi attivi a Milano ai tempi di Leonardo e del Moro."
  }
};

function work(key) {
  const w = W[key];
  return Object.assign({ key }, w, {
    roomLabel: `${FLOOR[w.floor]} · ${w.room}`,
    availability: `${FLOOR[w.floor]}, ${w.room.charAt(0).toLowerCase() + w.room.slice(1)}.`,
    availabilityChecked: CHECKED,
    historySource: SRC
  });
}
function byVisit(keys) {
  return keys.map(work).sort((a, b) => ORDER[a.floor] - ORDER[b.floor] || (parseInt(a.room.replace(/\D/g, "")) || 99) - (parseInt(b.room.replace(/\D/g, "")) || 99));
}

const routes = [
  {
    id: "scambi", cover: "musico", title: "Scambi di persona", subtitle: "Nomi sbagliati, identità incerte, firme a sorpresa",
    intro: "Ritratti senza nome, nomi senza prove, autori che cambiano: cinque opere che per secoli hanno raccontato una storia sbagliata, o non l’hanno raccontata affatto.",
    works: byVisit(["moroni", "canova", "salai", "dama", "musico"])
  },
  {
    id: "valore", cover: "canestra", title: "Quanto vale?", subtitle: "Prezzi, regali mancati e affetti di un collezionista",
    intro: "Un diamante dipinto al posto della fattura, un dono per un re mai consegnato, seicento lire per un disegno: la Pinacoteca nasce dalle scelte del cardinale Federico Borromeo e da ciò che, per lui, valeva davvero.",
    works: byVisit(["tiziano", "canestra", "cartone", "barocci", "vaso", "fuoco"])
  },
  {
    id: "doppio", cover: "cartone", title: "L’originale e il suo doppio", subtitle: "Modelli, ricalchi e seconde versioni",
    intro: "Nessuna opera nasce dal nulla: c’è chi ricalca un maestro, chi ripete un’icona antica, chi rifà in piccolo il proprio capolavoro. Un percorso per chiedersi che cosa sia, davvero, un originale.",
    works: byVisit(["luini", "dormitio", "cartone", "bassano", "hayez"])
  }
];
