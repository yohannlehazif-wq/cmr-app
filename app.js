let selectedH = [];

/* Sélection / désélection de la mention H */
function toggleH(code) {
  const btn = event.target;
  btn.classList.toggle("selected");

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
  } else {
    selectedH.push(code);
  }
}

/* ANALYSE CMR + RECOMMANDATIONS + SGH */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";
  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
  const isCMR = selectedH.some(h => CMR.includes(h));

  // Masquer le SGH au début
  document.getElementById("sgh-cmr").classList.add("hidden");

  let html = `<div class="result-section ${isCMR ? 'result-cmr' : 'result-ok'}">`;

  if (isCMR) {

    /* ✅ Partie CMR */
    html += `
      <h3 style="color:red;">🔴 PRODUIT CMR</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions détectées :</b> ${selectedH.join(", ")}</p>

      <h4>⚠️ Pourquoi c’est dangereux :</h4>
      <ul>
        <li>Peut provoquer un cancer (H350)</li>
        <li>Peut altérer l’ADN (H340)</li>
        <li>Peut nuire à la fertilité ou au fœtus (H360)</li>
        <li>Effets possibles même à faible dose, à long terme</li>
      </ul>

      <h4>🛡️ Mesures de prévention obligatoires :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation renforcée + aspiration à la source</li>
        <li>Limiter les expositions et le nombre de personnes exposées</li>
        <li>Procédure stricte d’utilisation</li>
      </ul>

      <h4>👷‍♂️ Équipements de protection individuelle :</h4>
      <ul>
        <li>Gants nitrile (résistants chimie)</li>
        <li>Lunettes enveloppantes</li>
        <li>Masque A2P3 ou appareil ventilé</li>
        <li>Blouse ou combinaison anti‑projection</li>
      </ul>

      <h4>📋 Obligations réglementaires :</h4>
      <ul>
        <li>Fiche d’exposition CMR obligatoire</li>
        <li>Suivi médical renforcé</li>
        <li>Traçabilité 50 ans</li>
      </ul>
    `;

    /* ✅ Affiche le pictogramme SGH */
    document.getElementById("sgh-cmr").classList.remove("hidden");


  } else {

    /* ✅ Partie NON CMR */
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
        <li>Gants adaptés</li>
        <li>Aération du poste</li>
        <li>Lunettes si projections possibles</li>
        <li>Ne pas manger / boire sur le poste</li>
      </ul>

      <h4>🚿 En cas d’exposition :</h4>
      <ul>
        <li>Rincer abondamment la peau ou les yeux</li>
        <li>Retirer les vêtements souillés</li>
        <li>Consulter un médecin si irritation persistante</li>
      </ul>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

/* RESET COMPLET */
function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("sgh-cmr").classList.add("hidden");
}
