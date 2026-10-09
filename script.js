/*
  QUICK CUSTOMISATION
  Change the values in this object. Save and refresh index.html.
*/
const wedding = {
  bride: "Rama",
  groom: "Sita",
  brideParents: "Daughter of [Bride's parents]",
  groomParents: "Son of [Groom's parents]",
  dateTime: "2026-12-20T07:15:00+05:30", // India time: YYYY-MM-DDTHH:MM:SS+05:30
  dateText: "Sunday, 20 December 2026",
  timeText: "Muhurtham · 7:15 AM",
  venueName: "Wedding Venue",
  venueAddress: "Hyderabad, Telangana, India",
  mapQuery: "Hyderabad, Telangana, India",
  receptionTitle: "Reception",
  receptionDate: "21 December 2026",
  receptionTime: "7:00 PM",
  receptionVenue: "Add reception venue",
  rsvpEmail: "your-email@example.com"
};

const $ = id => document.getElementById(id);
const setText = (id, value) => { const el = $(id); if (el) el.textContent = value; };

function applyDetails() {
  setText("brideHero", wedding.bride); setText("groomHero", wedding.groom);
  setText("brideName", wedding.bride); setText("groomName", wedding.groom);
  setText("brideParents", wedding.brideParents); setText("groomParents", wedding.groomParents);
  setText("navNames", `${wedding.bride} & ${wedding.groom}`);
  const date = new Date(wedding.dateTime);
  setText("heroDate", `${date.toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"})} · ${wedding.timeText.replace("Muhurtham · ","")}`);
  setText("eventDate", wedding.dateText); setText("eventTime", wedding.timeText);
  setText("eventVenue", wedding.venueAddress); setText("eventTitle", "Wedding Muhurtham");
  setText("venueName", wedding.venueName); setText("venueAddress", wedding.venueAddress);
  setText("receptionTitle", wedding.receptionTitle); setText("receptionDate", wedding.receptionDate);
  setText("receptionTime", wedding.receptionTime); setText("receptionVenue", wedding.receptionVenue);
  setText("signatureNames", `${wedding.bride} & ${wedding.groom}`);
  setText("footerNames", `${wedding.bride} & ${wedding.groom}`); setText("quoteNames", `${wedding.bride} & ${wedding.groom}`);
  setText("footerDate", wedding.dateText);
  $("mapLink").href = `https://maps.google.com/?q=${encodeURIComponent(wedding.mapQuery)}`;
  document.title = `${wedding.bride} & ${wedding.groom} | Wedding Invitation`;
}

function updateCountdown() {
  const target = new Date(wedding.dateTime).getTime();

  if (Number.isNaN(target)) {
    console.error("Invalid wedding date:", wedding.dateTime);
    return;
  }

  const ms = Math.max(0, target - Date.now());

  const values = {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60
  };

  Object.entries(values).forEach(([key, value]) => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = String(value).padStart(2, "0");
    }
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

applyDetails(); updateCountdown(); setInterval(updateCountdown,1000);

// Decorative floating golden dust.
const particleLayer = $("particles");
for (let i = 0; i < 32; i++) {
  const dot = document.createElement("span");
  dot.className = "particle";
  dot.style.left = `${Math.random()*100}%`;
  dot.style.bottom = `${Math.random()*-100}%`;
  dot.style.setProperty("--duration", `${12 + Math.random()*20}s`);
  dot.style.setProperty("--delay", `${Math.random()*-25}s`);
  particleLayer.appendChild(dot);
}

// Responsive navigation.
const menuToggle = $("menuToggle"), navMenu = $("navMenu");
menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false");
}));

// Optional background music: add music.mp3 to this folder and uncomment the source in index.html.
const audio = $("weddingMusic"), musicButton = $("musicButton"), musicLabel = $("musicLabel");
musicButton.addEventListener("click", async () => {
  const source = audio.querySelector("source");
  if (!source) {
    alert("To enable music, add a royalty-free file named music.mp3 to this folder and uncomment the audio source line in index.html.");
    return;
  }
  try {
    if (audio.paused) { await audio.play(); musicLabel.textContent = "Pause"; }
    else { audio.pause(); musicLabel.textContent = "Music"; }
  } catch { alert("Music could not be played. Check that music.mp3 exists."); }
});
