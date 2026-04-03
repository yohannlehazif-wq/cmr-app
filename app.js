let selectedH = [];

/* Sélection des mentions H */
function toggleH(code) {
  const btn = event.target;

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
    btn.classList.remove("selected");
  } else {
    selectedH.push(code);
    btn.classList.add("selected");
  }
}

/* Analyse principale */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";

  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
  const INFLAM = ["H224","H225","H226"];
  const IRRITANT = ["H315","H319","H335"];
  const TOXIQUE = ["H300","H301","H310","H311","H330","H331"];
  const CORROSIF = ["H314"];
  const EXPLOSIF = ["H200","H201","H202","H203"];
  const ENV = ["H400","H410","H411"];

  const isCMR = selectedH.some(h => CMR.includes(h));

  // Masquer pictos SGH
  document.querySelectorAll(".picto").forEach(p => p.classList.add("hidden"));
  document.getElementById("pictos").classList.remove("hidden");

  // Affichage dynamique SGH
  selectedH.forEach(h => {
    if (INFLAM.includes(h)) document.getElementById("sg-flamme").classList.remove("hidden");
    if (IRRITANT.includes(h)) document.getElementById("sg-exclam").classList.remove("hidden");
    if (TOXIQUE.includes(h)) document.getElementById("sg-skull").classList.remove("hidden");
    if (CORROSIF.includes(h)) document.getElementById("sg-corrosif").classList.remove("hidden");
    if (CMR.includes(h)) document.getElementById("sg-sante").classList.remove("hidden");
    if (EXPLOSIF.includes(h)) document.getElementById("sg-explos").classList.remove("hidden");
    if (ENV.includes(h)) document.getElementById("sg-env").classList.remove("hidden");
  });

  // Icônes animées
  document.getElementById("icon-danger").classList.add("hidden");
  document.getElementById("icon-ok").classList.add("hidden");

  let html = `<div class='result-section fade-in'>`;

  if (isCMR) {
    html += `
      <div class="light" style="background:red;"></div>
      <h3 style="color:red; font-size:22px;">🔴 Produit CMR</h3>

      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions détectées :</b> ${selectedH.join(", ")}</p>

      <h4>Risques identifiés :</h4>
      <ul>
        <li>Cancérogène, Mutagène ou Reprotoxique</li>
        <li>Risque irréversible</li>
        <li>Peut agir à faible dose</li>
      </ul>

      <h4>Mesures de prévention :</h4>
      <ul>
        <li>Substitution</li>
        <li>Ventilation renforcée</li>
        <li>Gants nitrile / Lunettes / Masque A2P3</li>
        <li>Fiche d'exposition + Suivi médical</li>
      </ul>
    `;
    document.getElementById("icon-danger").classList.remove("hidden");
  } else {
    html += `
      <div class="light" style="background:green;"></div>
      <h3 style="color:green; font-size:22px;">🟢 Produit NON CMR</h3>

      <p><b>${produit}</b></p>

      <h4>Recommandations :</h4>
      <ul>
        <li>Gants adaptés</li>
        <li>Aération recommandée</li>
        <li>Protection oculaire si besoin</li>
      </ul>
    `;
    document.getElementById("icon-ok").classList.remove("hidden");
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

/* Reset complet */
function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll(".h-btn").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("icon-danger").classList.add("hidden");
  document.getElementById("icon-ok").classList.add("hidden");
  document.querySelectorAll(".picto").forEach(p => p.classList.add("hidden"));
}
