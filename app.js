let selectedH = [];

function toggleH(code) {
  const index = selectedH.indexOf(code);
  const btn = event.target;

  if (index >= 0) {
    selectedH.splice(index, 1);
    btn.classList.remove("selected");
  } else {
    selectedH.push(code);
    btn.classList.add("selected");
  }
}

function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";

  const CMR = ["H340", "H350", "H350i", "H360", "H360F", "H360D"];
  const isCMR = selectedH.some(h => CMR.includes(h));

  let html = `<div class='result-section'>`;

  if (isCMR) {
    html += `
      <div class="light" style="background:red;"></div>
      <h3>🔴 Produit CMR détecté</h3>
      <p><b>${produit}</b></p>
      <p>Mentions détectées : ${selectedH.join(", ")}</p>
      <ul>
        <li>Substitution si possible</li>
        <li>Ventilation ou travail en vase clos</li>
        <li>Port d’EPI adaptés</li>
        <li>Fiche d’exposition obligatoire</li>
      </ul>
    `;
  } else {
    html += `
      <div class="light" style="background:green;"></div>
      <h3>🟢 Aucun indicateur CMR détecté</h3>
      <p><b>${produit}</b></p>
      <ul>
        <li>Vérifier autres dangers (irritants, corrosifs)</li>
        <li>Utiliser protections standard</li>
      </ul>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

function resetAnalyse() {
  selectedH = [];

  const boutons = document.querySelectorAll(".h-btn");
  boutons.forEach(btn => btn.classList.remove("selected"));

  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
}
