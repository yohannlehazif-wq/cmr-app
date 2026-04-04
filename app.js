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
      <p><b>${produit}</b></p>
      <p><b>Mentions :</b> ${selectedH.join(", ")}</p>

      <h4>Pourquoi c’est dangereux :</h4>
      <ul>
        <li>Peut provoquer un cancer (H350)</li>
        <li>Peut altérer l’ADN (H340)</li>
        <li>Peut nuire à la fertilité / fœtus (H360)</li>
      </ul>

      <h4>Prévention :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation renforcée + aspiration</li>
        <li>Masque A2P3 obligatoire</li>
        <li>Gants nitrile</li>
        <li>Lunettes enveloppantes</li>
      </ul>
    `;
  } else {
    html += `
      <h3 style="color:green;">🟢 Produit NON CMR</h3>
      <p><b>${produit}</b></p>

      <h4>Bonnes pratiques :</h4>
      <ul>
        <li>Port de gants adaptés</li>
        <li>Aération suffisante</li>
        <li>Lunettes si projections possibles</li>
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
}
``
