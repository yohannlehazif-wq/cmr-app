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
      <h3 style="color:red;">🔴 PRODUIT CMR</h3>
      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions :</b> ${selectedH.join(", ")}</p>

      <h4>Prévention :</h4>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation locale + aspiration</li>
        <li>Gants nitrile</li>
        <li>Masque A2P3</li>
        <li>Lunettes enveloppantes</li>
      </ul>
    `;
  } else {
    html += `
      <h3 style="color:green;">🟢 PRODUIT NON CMR</h3>
      <p><b>Produit :</b> ${produit}</p>

      <h4>Bonnes pratiques :</h4>
      <ul>
        <li>Gants adaptés</li>
        <li>Aération du poste</li>
        <li>Lunettes si projections</li>
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
``
