let selectedH = [];

/* Sélection / désélection */
function toggleH(code) {
  const btn = event.target;
  btn.classList.toggle("selected");

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
  } else {
    selectedH.push(code);
  }
}

/* ANALYSE */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";
  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];

  const isCMR = selectedH.some(h => CMR.includes(h));

  let html = `<div class="result-section ${isCMR ? 'result-cmr' : 'result-ok'}">`;

  if (isCMR) {
    html += `
      <h3 style="color:red;">🔴 Produit CMR détecté</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions H CMR :</b> ${selectedH.join(", ")}</p>

      <h4>Prévention :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation renforcée</li>
        <li>Gants nitrile</li>
        <li>Masque A2P3</li>
        <li>Protection yeux</li>
      </ul>
    `;
  } else {
    html += `
      <h3 style="color:green;">🟢 Produit NON CMR</h3>
      <p><b>${produit}</b></p>

      <h4>Bonnes pratiques :</h4>
      <ul>
        <li>Port de gants si besoin</li>
        <li>Aération du poste de travail</li>
        <li>Lunettes si projections possibles</li>
      </ul>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

/* RESET */
function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
}
