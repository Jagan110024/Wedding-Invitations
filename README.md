# South Indian Wedding Website — Pro Edition

A responsive, traditional wedding invitation site with a cinematic temple-inspired backdrop, warm gold lighting, decorative mandala motifs, diya accents, floating golden particles, couple names, live countdown, cultural tradition cards, ceremony/reception cards, venue/map link, and RSVP form.

## Open it
1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, Firefox, Safari, or a mobile browser.
3. It adapts to phones, tablets, laptops and desktop screens. For the best view, keep internet enabled for Google Fonts and the remote background photographs.

## Edit names, dates, family, venue and reception
1. Open `script.js` in VS Code or Notepad.
2. Edit the values inside `const wedding = { ... }`.
3. Save and refresh `index.html`.

Wedding date/time format: `YYYY-MM-DDTHH:MM:SS+05:30` (India Standard Time).
Example: `2027-02-14T06:15:00+05:30`.

Update `dateText`, `timeText`, venue fields and reception fields to match your event. Parent details can be left as placeholders until confirmed.

## Change the look
Edit `style.css`.
- Colours are set in `:root` at the beginning.
- Hero background photo: search for `.hero{` and replace the URL in its `background`.
- Couple photo: search for `.photo-frame` and replace its URL.
- The page uses responsive CSS breakpoints for smaller screens.

You can use your own photos: place an image file in this folder (for example `couple.jpg`) and set the CSS background URL to `url("couple.jpg")`.

## RSVP
The RSVP demo opens an email draft. Change `rsvpEmail` in `script.js`. A form backend or service is needed to collect and store responses online.

## Music
1. Add a royalty-free MP3 named `music.mp3` in this folder.
2. In `index.html`, find `<audio id="weddingMusic" loop>` and uncomment/add:
   `<source src="music.mp3" type="audio/mpeg">`
3. Save. Visitors can tap the Music button; autoplay is intentionally not forced.

## Publish online
Upload the extracted folder to a static host such as Netlify or GitHub Pages. No build tools or installation are required.

## Notes
- The names/date are editable sample values.
- The temple backdrop and decorative mandala are bundled locally in the assets folder. Google Fonts load from the internet; system fonts are used if offline.
- This is a static website; it does not store RSVP data in a database by itself.

## Included artwork
- `assets/temple-mandap.svg`: original illustrated South Indian mandap backdrop with carved pillars, mango-leaf toran, marigold strings, banana plants, brass lamps and kolam.
- `assets/wedding-mandala.svg`: original decorative mandala art used for the photo/story panel.

Keep the `assets` folder beside `index.html` when moving or uploading the website. Main temple artwork works offline.


## New client-demo features
- A ritual journey gallery with original inline SVG illustrations coded directly into `index.html`: temple and banana trees, Gowri Pooja, Kanyadhanam, Mangalyadharana, Talambralu, Sapta Adgulu/Saptapadi, Arundhati Nakshatram, and Akshintalu/blessings.
- The RSVP / “Will you join us?” section has been removed and replaced by the quote: “Your blessings are the greatest gift we could ever receive.”
- The live remaining-time counter uses the demo wedding date in `script.js`. Change `dateTime` and the matching `dateText`/`timeText` values to demonstrate a different event.
- The venue/map demo is controlled by `venueName`, `venueAddress`, and `mapQuery` in `script.js`.
- The ritual artwork is written into the HTML, so there are no separate ritual image files to manage.
