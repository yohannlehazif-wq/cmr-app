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

/* ANALYSE */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";

  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];

  // Reset SGH
  document.querySelectorAll(".picto").forEach(p => p.classList.add("hidden"));
  document.getElementById("pictos").classList.remove("hidden");

  // SGH affichage
  selectedH.forEach(h => {
    if (["H224","H225","H226"].includes(h)) document.getElementById("sg-flamme").classList.remove("hidden");
    if (["H315","H319","H335"].includes(h)) document.getElementById("sg-exclam").classList.remove("hidden");
    if (["H300","H301","H310","H311","H330","H331"].includes(h)) document.getElementById("sg-skull").classList.remove("hidden");
    if (["H314"].includes(h)) document.getElementById("sg-corrosif").classList.remove("hidden");
    if (CMR.includes(h)) document.getElementById("sg-sante").classList.remove("hidden");
    if (["H200","H201","H202","H203"].includes(h)) document.getElementById("sg-explos").classList.remove("hidden");
    if (["H400","H410","H411"].includes(h)) document.getElementById("sg-env").classList.remove("hidden");
  });

  let html = `<div class='result-section'>`;

  if (selectedH.some(h => CMR.includes(h))) {
    html += `
      <div class="light" style="background:red;"></div>
      <h3 style="color:red;">🔴 Produit CMR détecté</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions CMR :</b> ${selectedH.join(", ")}</p>

      <h4>Pourquoi c’est dangereux :</h4>
      <ul>
        <li>Risque de cancer (H350)</li>
        <li>Mutation génétique possible (H340)</li>
        <li>Atteinte à la fertilité / fœtus (H360)</li>
      </ul>

      <h4>Mesures de prévention :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation + aspiration à la source</li>
        <li>Gants nitrile / Lunettes / Masque A2P3</li>
        <li>Fiche d’exposition + suivi médical</li>
      </ul>
    `;
  } else {
    html += `
      <div class="light" style="background:green;"></div>
      <h3 style="color:green;">🟢 Produit NON CMR</h3>
      <p><b>${produit}</b></p>

      <h4>Conseils :</h4>
      <ul>
        <li>Gants adaptés</li>
        <li>Aération suffisante</li>
        <li>Lunettes si projections</li>
      </ul>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

function resetAnalyse() {
  selectedH = [];
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
  document.querySelectorAll(".h-btn").forEach(btn => btn.classList.remove("selected"));
  document.querySelectorAll(".picto").forEach(p => p.classList.add("hidden"));
}
