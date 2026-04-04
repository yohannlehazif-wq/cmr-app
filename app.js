let selectedH = [];

/* ✅ Sélection / désélection des mentions CMR */
function toggleH(code) {
  const btn = event.target;
  btn.classList.toggle("selected");

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
  } else {
    selectedH.push(code);
  }
}

/* ✅ Analyse CMR complète */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";

  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
  const isCMR = selectedH.some(h => CMR.includes(h));

  let html = `<div class="result-section ${isCMR ? 'result-cmr' : 'result-ok'}">`;

  if (isCMR) {
    html += `
      <h3 style="color:red;">🔴 PRODUIT CMR</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions :</b> ${selectedH.join(", ")}</p>

      <h4>⚠️ Dangers :</h4>
      <ul>
        <li>Risque de cancer (H350)</li>
        <li>Altérations génétiques (H340)</li>
        <li>Risque pour la fertilité / fœtus (H360)</li>
      </ul>

      <h4>🛡️ Prévention :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation renforcée + aspiration</li>
        <li>Gants nitrile</li>
        <li>Lunettes de sécurité</li>
        <li>Masque A2P3</li>
      </ul>
    `;
  } else {
    html += `
      <h3 style="color:green;">🟢 PRODUIT NON CMR</h3>
      <p><b>Produit :</b> ${produit}</p>

      <h4>Bonnes pratiques :</h4>
      <ul>
        <li>Port de gants adaptés</li>
        <li>Aération du poste</li>
        <li>Lunettes si projections</li>
      </ul>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

/* ✅ Réinitialisation */
function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll("button.selected").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
}
