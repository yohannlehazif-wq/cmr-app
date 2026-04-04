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

  let html = `<div class='result-section'>`;

  if (isCMR) {
    html += `
      <h3 style='color:red;'>🔴 Produit CMR détecté</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions détectées :</b> ${selectedH.join(", ")}</p>

      <h4>⚠️ Pourquoi c’est dangereux :</h4>
      <ul>
        <li>Peut provoquer un cancer (H350)</li>
        <li>Peut induire des mutations génétiques (H340)</li>
        <li>Peut nuire à la fertilité ou au fœtus (H360)</li>
        <li>Effets possibles même à faible dose et à long terme</li>
      </ul>

      <h4>🛡️ Mesures de prévention OBLIGATOIRES :</h4>
      <ul>
        <li><b>Substitution</b> par un produit non CMR si possible</li>
        <li><b>Ventilation renforcée</b> + aspiration à la source</li>
        <li><b>Limiter le nombre de personnes exposées</b></li>
        <li>Éviter les ouvertures prolongées des contenants</li>
      </ul>

      <h4>👷‍♂️ Équipements de protection individuelle :</h4>
      <ul>
        <li><b>Gants nitrile</b> (résistants chimiques)</li>
        <li><b>Lunettes enveloppantes</b></li>
        <li><b>Masque A2P3</b> (ou appareil ventilé)</li>
        <li><b>Combinaison anti‑projection</b></li>
      </ul>

      <h4>📋 Obligations réglementaires :</h4>
      <ul>
        <li><b>Fiche d’exposition CMR</b> obligatoire</li>
        <li><b>Suivi médical renforcé</b></li>
        <li><b>Traçabilité 50 ans</b></li>
      </ul>
    `;
  } else {
    html += `
      <h3 style='color:green;'>🟢 Produit NON CMR</h3>
      <p><b>Produit :</b> ${produit}</p>

      <h4>ℹ️ Risques possibles (hors CMR) :</h4>
      <ul>
        <li>Irritation peau / yeux</li>
        <li>Inflammabilité possible</li>
        <li>Toxicité légère en cas d’ingestion ou inhalation</li>
      </ul>

      <h4>🛡️ Bonnes pratiques recommandées :</h4>
      <ul>
        <li>Port de <b>gants adaptés</b></li>
        <li>Aération suffisante du poste</li>
        <li>Lunettes si projections possibles</li>
        <li>Ne pas manger / boire sur le poste</li>
        <li>Stocker dans un endroit ventilé</li>
      </ul>
    `;
  }

  html += "</div>";

  document.getElementById("result").innerHTML = html;
}
    html += `
      <h3 style='color:green;'>🟢 Produit NON CMR</h3>
      <p><b>Produit :</b> ${produit}</p>

      <h4>ℹ️ Risques possibles (non CMR) :</h4>
      <ul>
        <li>Irritant (peau/yeux)</li>
        <li>Inflammable ou sensible à la chaleur</li>
        <li>Toxique en cas d’ingestion ou inhalation</li>
      </ul>

      <h4>🛡️ Bonnes pratiques recommandées :</h4>
      <ul>
        <li><b>Gants adaptés</b> selon le produit</li>
        <li><b>Lunettes</b> en cas de projection possible</li>
        <li>Aération de la zone de travail</li>
        <li>Ne pas manger / boire sur le poste</li>
        <li>Stocker dans un endroit ventilé</li>
      </ul>
    `;
  }

  html += "</div>";

  document.getElementById("result").innerHTML = html;
}

  let html = `<div class='result-section'>`;

  if (isCMR) {
    html += `
      <h3 style='color:red;'>🔴 Produit CMR détecté</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions CMR :</b> ${selectedH.join(", ")}</p>
    `;
  } else {
    html += `
      <h3 style='color:green;'>🟢 Produit NON CMR</h3>
      <p><b>Produit :</b> ${produit}</p>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll("button.selected").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
}
