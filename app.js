let selectedH = [];let selectedH =.classList.remove("selected");
    } else {
        selectedH.push(code);
        btn.classList.add("selected");
    }
}

function analyze() {

    const produit = document.getElementById("produit").value || "Non renseigné";

    const CMR = ["H340", "H350", "H350i", "H360", "H360F", "H360D"];
    const isCMR = selectedH.some(h => CMR.includes(h));

    let html = "";

    if (isCMR) {

        html += `<div class="result-cmr">
            <h3>🔴 Produit CMR détecté</h3>

            <p><strong>${produit}</strong></p>
            <p>Mentions détectées : <strong>${selectedH.join(", ")}</strong></p>

            <ul>
                <li>✅ Substitution recommandée</li>
                <li>✅ Ventilation ou confinement du poste</li>
                <li>✅ EPI obligatoires (gants, lunettes, masque adapté)</li>
                <li>✅ Fiche d’exposition obligatoire</li>
                <li>✅ Formation renforcée du salarié</li>
                <li>✅ Réduction du temps d’exposition</li>
            </ul>
        </div>`;

    } else {

        html += `<div class="result-ok">
            <h3>🟢 Aucun indicateur CMR détecté</h3>

            <p><strong>${produit}</strong></p>

            <ul>
                <li>✅ Vérifier autres dangers chimiques éventuels</li>
                <li>✅ Assurer ventilation minimale</li>
                <li>✅ Port des EPI basiques selon FDS</li>
                <li>✅ Stockage approprié</li>
            </ul>
        </div>`;
    }

    document.getElementById("result").innerHTML = html;
}

function toggleH(code) {
    const index = selectedH.indexOf(code);
    const btn = document.querySelector(`button[data-code='${code}']`);

    if (index >= 0) {
        selectedH.splice(index, 1);
