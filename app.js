let selectedH = [];

/* Sélection mention H */
function toggleH(code) {
  const btn = event.target;
  btn.classList.toggle("selected");

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
  } else {
    selectedH.push(code);
  }
}

/* Analyse CMR + Affichage SGH */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";

  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
  const INFLAM = ["H224","H225","H226"];
  const IRRITANT = ["H315","H319","H335"];
  const TOX = ["H300","H301","H310","H311","H330","H331"];
  const CORR = ["H314"];
  const EXPLO = ["H200","H201","H202","H203"];
  const ENV = ["H400","H410","H411"];

  /* RESET SGH */
  document.querySelectorAll(".picto").forEach(p => p.classList.add("hidden"));
  document.getElementById("pictos").classList.remove("hidden");

  /* Affichage des pictos */
  selectedH.forEach(h => {
    if (INFLAM.includes(h)) document.getElementById("sg-flamme").classList.remove("hidden");
    if (IRRITANT.includes(h)) document.getElementById("sg-exclam").classList.remove("hidden");
    if (TOX.includes(h)) document.getElementById("sg-skull").classList.remove("hidden");
    if (CORR.includes(h)) document.getElementById("sg-corrosif").classList.remove("hidden");
    if (CMR.includes(h)) document.getElementById("sg-sante").classList.remove("hidden");
    if (EXPLO.includes(h)) document.getElementById("sg-explos").classList.remove("hidden");
    if (ENV.includes(h)) document.getElementById("sg-env").classList.remove("hidden");
  });

  /* Analyse CMR */
  let html = `<div class='result-section'>`;

  if (selectedH.some(h => CMR.includes(h))) {
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

  html += "</div>";
  document.getElementById("result").innerHTML = html;
}

/* Reset */
function resetAnalyse() {
  selectedH = [];
  document.getElementById("produit").value = "";
  document.getElementById("result").innerHTML = "";
  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  document.querySelectorAll(".picto").forEach(p => p.classList.add("hidden"));
}
