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

  // ✅ masque SGH au début
  document.getElementById("sgh-cmr").classList.add("hidden");

  let html = `<div class="result-section ${isCMR ? 'result-cmr' : 'result-ok'}">`;

  if (isCMR) {
    html += `
      <h3 style="color:red;">🔴 PRODUIT CMR</h3>
      <p><b>${produit}</b></p>
      <p><b>Mentions :</b> ${selectedH.join(", ")}</p>

      <h4>Dangers :</h4>
      <ul>
        <li>Risque de cancer (H350)</li>
        <li>Altération génétique possible (H340)</li>
        <li>Risque pour la fertilité / fœtus (H360)</li>
      </ul>

      <h4>Prévention :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation renforcée</li>
        <li>Port du masque A2P3</li>
        <li>Gants nitrile</li>
        <li>Lunettes enveloppantes</li>
      </ul>
    `;

    // ✅ afficher SGH
    document.getElementById("sgh-cmr").classList.remove("hidden");

  } else {
    html += `
      <h3 style="color:green;">🟢 PRODUIT NON CMR</h3>
      <p><b>${produit}</b></p>

      <h4>Bonnes pratiques :</h4>
      <ul>
        <li>Gants adaptés</li>
        <li>Aération</li>
        <li>Lunettes si projections</li>
      </ul>
    `;
  }

  html += `</div>`;

  document.getElementById("result").innerHTML = html;
}

function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("sgh-cmr").classList.add("hidden");
}
