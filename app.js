let selectedH = [];

function toggleH(code) {
  const btn = event.target;
  btn.classList.toggle("selected");

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
  } else {
    selectedH.push(code);
  }
}

function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";
  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];

  const isCMR = selectedH.some(h => CMR.includes(h));

  let html = `<div class="result-section ${isCMR ? 'result-cmr' : 'result-ok'}">`;

  if (isCMR) {
    html += `
      <h3 style="color:red;">🔴 Produit CMR détecté</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions CMR :</b> ${selectedH.join(", ")}</p>

      <h4>⚠️ Pourquoi ce produit est dangereux :</h4>
      <ul>
        <li><b>Cancérogène (H350)</b> : risque augmenté de cancer.</li>
        <li><b>Mutagène (H340)</b> : altération possible de l’ADN.</li>
        <li><b>Reprotoxique (H360)</b> : effets sur la fertilité / fœtus.</li>
        <li>Peut agir même à faible dose.</li>
      </ul>

      <h4>🛡️ Mesures de prévention OBLIGATOIRES :</h4>
      <ul>
        <li>Substitution si possible.</li>
        <li>Ventilation + aspiration à la source.</li>
        <li>Limiter les personnes exposées.</li>
        <li>Procédure stricte et affichée.</li>
      </ul>

      <h4>👷‍♂️ Équipements de Protection Individuelle :</h4>
      <ul>
        <li>Gants nitrile.</li>
        <li>Lunettes enveloppantes.</li>
        <li>Masque A2P3.</li>
        <li>Combinaison anti‑projection.</li>
      </ul>

      <h4>📋 Obligations réglementaires :</h4>
      <ul>
        <li>Fiche d’exposition CMR obligatoire.</li>
        <li>Suivi médical renforcé.</li>
        <li>Traçabilité 50 ans.</li>
      </ul>
    `;
  } else {
    html += `
      <h3 style="color:green;">🟢 Produit NON CMR</h3>
      <p><b>${produit}</b></p>

      <h4>ℹ️ Risques possibles (hors CMR) :</h4>
      <ul>
        <li>Irritation peau / yeux.</li>
        <li>Inflammabilité possible.</li>
        <li>Toxicité légère en cas d’inhalation.</li>
      </ul>

      <h4>🛡️ Bonnes pratiques :</h4>
      <ul>
        <li>Gants adaptés.</li>
        <li>Aération du poste.</li>
        <li>Lunettes si projections possibles.</li>
        <li>Ne pas manger / fumer sur le poste.</li>
        <li>Stockage ventilé et étiqueté.</li>
      </ul>

      <h4>🚿 En cas d’exposition :</h4>
      <ul>
        <li>Rincer abondamment la zone touchée.</li>
        <li>Retirer les vêtements souillés.</li>
        <li>Consulter un médecin en cas de gêne persistante.</li>
      </ul>
    `;
  }

  html += "</div>";
  document.getElementById("result").innerHTML = html;
}

function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll("button.selected").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
}
