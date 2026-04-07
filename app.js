let selectedH = [];let adaptés (gants, lunettes, APR)</li>
                <li>✅ Fiche d’exposition obligatoire</li>
                <li>✅ Réduction du temps d’exposition</li>
            </ul>
        </div>`;
    } 
    else {
        html += `
        <div class="result-ok">
            <h3>🟢 Aucun indicateur CMR détecté</h3>
            <p><strong>${produit}</strong></p>

            <ul>
                <li>✅ Vérifier les autres dangers de la FDS</li>
                <li>✅ Ventilation minimale du poste</li>
                <li>✅ Port d’EPI de base</li>
            </ul>
        </div>`;
    }

    document.getElementById("result").innerHTML = html;
}
``

// Sélection / désélection des mentions H
function toggleH(code) {
    const index = selectedH.indexOf(code);
    const btn = document.querySelector(`button[data-code='${code}']`);

    if (index >= 0) {
        selectedH.splice(index, 1);
        btn.classList.remove("selected");
    } else {
        selectedH.push(code);
        btn.classList.add("selected");
    }
}

// Analyse
function analyze() {

    const produit = document.getElementById("produit").value || "Non renseigné";

    const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
    const isCMR = selectedH.some(h => CMR.includes(h));

    let html = "";

    if (isCMR) {
        html += `
        <div class="result-cmr">
            <h3>🔴 Produit CMR détecté</h3>
            <p><strong>${produit}</strong></p>
            <p>Mentions détectées : <strong>${selectedH.join(", ")}</strong></p>

            <ul>
                <li>✅ Substitution recommandée</li>
                <li>✅ Ventilation ou captation des vapeurs</li>
