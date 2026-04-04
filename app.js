let selectedH = [];

/* ✅ Sélection / désélection des mentions H */
function toggleH(code) {
  const btn = event.target;
  btn.classList.toggle("selected");

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
  } else {
    selectedH.push(code);
  }
}

/* ✅ Analyse CMR + Prévention */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";

  // Mentions CMR
  const CMR = ["H340", "H350", "H350i", "H360", "H360F", "H360D"];
  const isCMR = selectedH.some(h => CMR.includes(h));

  let html = `<div class="result-section ${isCMR ? 'result-cmr' : 'result-ok'}">`;

  if (isCMR) {

    html += `
      <h3 style="color:red;">🔴 PRODUIT CMR</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions détectées :</b> ${selectedH.join(", ")}</p>

      <h4>⚠️ Dangers identifiés :</h4>
      <ul>
        <li>Risque de cancer (H350)</li>
        <li>Mutations génétiques possibles (H340)</li>
        <li>Risque pour la fertilité ou le fœtus (H360)</li>
        <li>Effets possibles même à faible dose</li>
      </ul>

      <h4>🛡️ Prévention obligatoire :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation renforcée + aspiration à la source</li>
        <li>Limiter l’exposition des salariés</li>
        <li>Utiliser des contenants fermés</li>
      </ul>

      <h4>👷‍♂️ Équipements de Protection :</h4>
      <ul>
        <li>Gants nitrile résistants</li>
        <li>Lunettes enveloppantes</li>
        <li>Masque A2P3 (ou appareil ventilé)</li>
        <li>Blouse ou combinaison de protection</li>
      </ul>

      <h4>📋 Obligations réglementaires :</h4>
      <ul>
        <li>Fiche d’exposition CMR obligatoire</li>
        <li>Suivi médical renforcé</li>
        <li>Traçabilité 50 ans</li>
      </ul>
    `;

  } else {

    html += `
      <h3 style="color:green;">🟢 PRODUIT NON CMR</h3>
      <p><b>${produit}</b></p>

      <h4>ℹ️ Risques possibles :</h4>
      <ul>
        <li>Irritation peau / yeux</li>
        <li>Inflammabilité possible</li>
        <li>Toxicité modérée en cas d’inhalation</li>
      </ul>

      <h4>🛡️ Bonnes pratiques :</h4>
      <ul>
        <li>Port de gants adaptés</li>
        <li>Ventilation ou travail en zone aérée</li>
        <li>Lunettes si projections possibles</li>
        <li>Ne pas manger / fumer sur le poste</li>
      </ul>

      <h4>🚿 En cas d’exposition :</h4>
      <ul>
        <li>Rincer abondamment la peau ou les yeux</li>
        <li>Changer les vêtements souillés</li>
        <li>Consulter un médecin si irritation persistante</li>
      </ul>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

/* ✅ Réinitialisation complète */
function resetAnalyse() {
  selectedH = [];

  document.querySelectorAll("button.selected").forEach(btn =>
    btn.classList.remove("selected")
  );

  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
}
