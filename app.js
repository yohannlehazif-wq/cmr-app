let selectedH = [];

// gérer la sélection des mentions H
function toggleH(code) {
    const index = selectedH.indexOf(code);
    const btn = document.querySelector(`button[data-code="${code}"]`);

    if (index >= 0) {
        selectedH.splice(index, 1);
        btn.classList.remove("selected");
    } else {
        selectedH.push(code);
        btn.classList.add("selected");
    }
}

// analyser
function analyze() {
    const produit = document.getElementById("produit").value || "Produit non renseigné";

    const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
    const isCMR = selectedH.some(h => CMR.includes(h));

    let html = "";

    if (isCMR) {
        html = `
        <div class="result-cmr">
            <h3>🔴 Produit CMR détecté</h3>
            <p><strong>${produit}</strong></p>
            <p>Mentions détectées : <strong>${selectedH.join(", ")}</strong></p>

            <ul>
                <li>✅ Substitution recommandée</li>
                <li>✅ Ventilation ou captation à la source</li>
                <li>✅ EPI adaptés (gants, lunettes, APR)</li>
                <li>✅ Fiche d’exposition obligatoire</li>
                <li>✅ Réduction du temps d’exposition</li>
            </ul>
        </div>`;
    } else {
        html = `
        <div class="result-ok">
            <h3>🟢 Aucun indicateur CMR détecté</h3>
            <p><strong>${produit}</strong></p>

            <ul>
                <li>✅ Vérifier la FDS</li>
                <li>✅ Ventilation minimale recommandée</li>
                <li>✅ Port d’EPI standard</li>
            </ul>
        </div>`;
    }

    document.getElementById("result").innerHTML = html;
}
