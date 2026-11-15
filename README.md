# Tre percorsi — Pinacoteca Ambrosiana

Guida web (PWA) per una visita alla Pinacoteca Ambrosiana di Milano: tre percorsi tematici, con domanda, breve testo e storia di ogni opera, piano e sala dal catalogo del museo.

## File
- `index.html`, `styles.css`, `app.js`: interfaccia (elenco percorsi, pagina del percorso, avanzamento, ingrandimento immagini, installazione e uso offline, aggiornamento automatico)
- `routes.js`: opere e percorsi (testi, collocazioni, fonti)
- `images/`: immagini delle opere, una per opera, con il nome indicato in `images/LEGGIMI.txt`
- `manifest.webmanifest`, `sw.js`, `icons/`: app installabile e uso offline
- `AGGIORNA_IL_GIORNO_PRIMA.txt`: comando da rilanciare prima della visita
- `VERIFICA_VISITA.txt`: esito dell'ultimo controllo

## Pubblicazione su GitHub Pages
Carica tutto il contenuto della cartella in un repository (o in una cartella diversa da quella della guida Carrara) e attiva Pages. Le due guide possono stare sullo stesso dominio github.io: usano nomi di cache e di memoria locale diversi e non si disturbano.

## Immagini
Le immagini si aggiungono a mano nella cartella `images/` con i nomi di `images/LEGGIMI.txt`. Se un file manca, la guida mostra un segnaposto con il nome atteso. Il museo vieta la riproduzione delle sue immagini senza autorizzazione: per un sito pubblico serve la sua autorizzazione, oppure si usano foto libere da Wikimedia Commons.

## Aggiornamento sui telefoni
Basta pubblicare i file: la pagina si accorge da sola dei cambiamenti e si ricarica. Cambia `SW_REVISION` in `sw.js` solo se modifichi `sw.js`.
