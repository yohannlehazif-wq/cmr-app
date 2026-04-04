let selectedH = [];

/* Sélection */
function toggleH(code) {
  const btn = event.target;
  btn.classList.toggle("selected");

  if (selectedH.includes(code)) {
    selectedH = selectedH.filter(h => h !== code);
  } else {
    selectedH.push(code);
  }
}

/* Analyse */
function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";

  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
  const INFLAM = ["H224","H225","H226"];
  const IRRITANT = ["H315","H319","H335"];
  const TOX = ["H300","H301","H310","H311","H330","H331"];
  const CORR = ["H314"];
  const EXPLO = ["H200","H201","H202","H203"];
  const ENV = ["H400","H410","H411"];

  const isCMR = selectedH.some(h => CMR.includes(h));

  // reset SGH
  document.querySelectorAll(".sgh").forEach(i => i.classList.add("hidden"));
  document.getElementById("sgh-zone").classList.remove("hidden");

  // reset recos
  document.getElementById("reco-list").innerHTML = "";
  document.getElementById("reco").classList.remove("hidden");

  let recos = [];

  selectedH.forEach(h => {

    if (CMR.includes(h)) {
      document.getElementById("sgh-sante").classList.remove("hidden");
      recos.push("Masque A2P3 obligatoire");
      recos.push("Gants nitrile résistants");
      recos.push("Ventilation renforcée");
      recos.push("Limiter l’exposition des salariés");
    }

    if (INFLAM.includes(h)) {
      document.getElementById("sgh-flamme").classList.remove("hidden");
      recos.push("Éloigner toute flamme ou étincelle");
      recos.push("Ventilation indispensable");
    }

    if (IRRITANT.includes(h)) {
      document.getElementById("sgh-exclam").classList.remove("hidden");
      recos.push("Port de gants");
      recos.push("Port de lunettes de sécurité");
    }

    if (TOX.includes(h)) {
      document.getElementById("sgh-skull").classList.remove("hidden");
      recos.push("Manipulation sous hotte si possible");
      recos.push("Masque A2P3 indispensable");
    }

    if (CORR.includes(h)) {
      document.getElementById("sgh-corrosif").classList.remove("hidden");
      recos.push("Port d’un écran facial");
      recos.push("Gants chimie longue manche");
    }

    if (EXPLO.includes(h)) {
      document.getElementById("sgh-explos").classList.remove("hidden");
      recos.push("Éviter tout choc / frottement");
    }

    if (ENV.includes(h)) {
      document.getElementById("sgh-env").classList.remove("hidden");
      recos.push("Ne pas rejeter dans les égouts");
    }
  });

  recos.forEach(r => {
    document.getElementById("reco-list").innerHTML += `<li>${r}</li>`;
  });

  let html =
    `<div class="result-section ${isCMR ? 'result-cmr' : 'result-ok'}">`;

  if (isCMR) {
    html += `
      <h3 style="color:red;">🔴 PRODUIT CMR</h3>
      <p><b>${produit}</b></p>
      <p><b>Mentions :</b> ${selectedH.join(", ")}</p>
    `;
  } else {
    html += `
      <h3 style="color:green;">🟢 PRODUIT NON CMR</h3>
      <p><b>${produit}</b></p>
    `;
  }

  html += `</div>`;

  document.getElementById("result").innerHTML = html;
}

/* Reset */
function resetAnalyse() {
  selectedH = [];
  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  document.querySelectorAll(".sgh").forEach(i => i.classList.add("hidden"));
  document.getElementById("sgh-zone").classList.add("hidden");
  document.getElementById("reco").classList.add("hidden");
  document.getElementById("result").innerHTML = "";
  document.getElementById("produit").value = "";
}
