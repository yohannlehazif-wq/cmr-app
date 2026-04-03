let selectedH = [];

function toggleH(code) {
  const btn = event.target;

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
    btn.classList.remove("selected");
  } else {
    selectedH.push(code);
    btn.classList.add("selected");
  }
}

function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";
  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
  const isCMR = selectedH.some(h => CMR.includes(h));

  let html = `<div class='result-section'>`;

  if (isCMR) {
    html += `
      <div class="light" style="background:red;"></div>
      <h3 style="color:red">Produit CMR détecté</h3>
      <p><b>${produit}</b></p>
      <p>Mentions détectées : ${selectedH.join(", ")}</p>
    `;
  } else {
    html += `
      <div class="light" style="background:green;"></div>
      <h3 style="color:green">Produit NON CMR</h3>
      <p><b>${produit}</b></p>
    `;
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}

function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll(".h-btn").forEach(btn => btn.classList.remove("selected"));
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
}
