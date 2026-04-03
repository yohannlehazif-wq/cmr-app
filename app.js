function analyze() {
  const produit = document.getElementById("produit").value || "Non renseigné";
  const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
  const isCMR = selectedH.some(h => CMR.includes(h));

  // Masquer les icônes animées au départ
  document.getElementById("icon-danger").classList.add("hidden");
  document.getElementById("icon-ok").classList.add("hidden");

  let html = `<div class='result-section fade-in'>`;

  if (isCMR) {
    /* ---------------------------------------------
       ✅ ANALYSE CMR (DANGEREUX)
       --------------------------------------------- */
    html += `
      <div class="light" style="background:red;"></div>
      <h3 style="color:red; font-size:22px;">🔴 Produit CMR détecté</h3>

      <p><b>Produit :</b> ${produit}</p>
      <p><b>Mentions détectées :</b> ${selectedH.join(", ")}</p>

      <h4 style="margin-top:20px;">❗ Pourquoi c’est dangereux ?</h4>
      <ul>
        <li>Ce produit peut provoquer des <b>effets graves et irréversibles</b>.</li>
        <li>Il peut agir même à faible dose et sur le long terme.</li>
        <li>Il peut être <b>cancérogène, mutagène ou reprotoxique (CMR)</b>.</li>
      </ul>

      <h4 style="margin-top:20px;">🧬 Risques principaux liés aux CMR :</h4>
      <ul>
        <li>Risque de <b>cancer</b> (poumon, peau, vessie…)</li>
        <li><b>Altération de l’ADN</b> (mutagène)</li>
        <li><b>Toxicité pour la fertilité</b> (H360F)</li>
        <li><b>Toxicité pour le fœtus</b> (H360D)</li>
      </ul>

      <h4 style="margin-top:20px;">🛡️ Mesures obligatoires de prévention :</h4>
      <ul>
        <li><b>Substitution</b> : rechercher un produit non CMR.</li>
        <li><b>Ventilation renforcée</b> + aspiration localisée.</li>
        <li><b>Procédure stricte</b> de manipulation.</li>
        <li><b>EPI obligatoires :</b>
            <br> • Gants nitrile/néoprène
            <br> • Lunettes enveloppantes
            <br> • Masque A2P3 (ou ARI si fort risque)
            <br> • Combinaison anti‑projections
        </li>
        <li>Stockage sécurisé dans un local ventilé.</li>
        <li><b>Fiche d’exposition</b> + <b>suivi médical renforcé</b>.</li>
      </ul>
    `;

    document.getElementById("icon-danger").classList.remove("hidden");

  } else {

    /* ---------------------------------------------
       ✅ ANALYSE NON CMR
       --------------------------------------------- */
    html += `
      <div class="light" style="background:green;"></div>
      <h3 style="color:green; font-size:22px;">🟢 Produit NON CMR</h3>

      <p><b>Produit :</b> ${produit}</p>

      <h4 style="margin-top:20px;">✔️ Informations :</h4>
      <ul>
        <li>Aucune mention CMR détectée (H340, H350, H360…)</li>
        <li>Le produit peut néanmoins rester <b>irritant, inflammable ou allergisant</b>.</li>
      </ul>

      <h4 style="margin-top:20px;">🛡️ Bonnes pratiques recommandées :</h4>
      <ul>
        <li>Port de <b>gants nitrile</b> si contact possible.</li>
        <li><b>Lunettes</b> si risques de projections.</li>
        <li><b>Aération suffisante</b> pendant l’utilisation.</li>
        <li>Nettoyage des mains après utilisation.</li>
        <li>Stockage dans un endroit frais et ventilé.</li>
      </ul>
    `;

    document.getElementById("icon-ok").classList.remove("hidden");
  }

  html += `</div>`;
  document.getElementById("result").innerHTML = html;
}
