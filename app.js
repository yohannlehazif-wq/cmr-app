// Liste des mentions H sélectionnées
let selectedH = [];

// Sélection", "H360D"];// Sélection / désélection des boutons H
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
                    <li>✅ EPI adaptés (gants, lunettes, protection respiratoire)</li>
                    <li>✅ Fiche d’exposition obligatoire</li>
                    <li>✅ Suivi renforcé du salarié</li>
                </ul>
            </div>
        `;
    } else {
        html = `
            <div class="result-ok">
                <h3>🟢 Aucun indicateur CMR détecté</h3>
                <p><strong>${produit}</strong></p>

                <ul>
                    <li>✅ Vérifier la fiche de données de sécurité (FDS)</li>
                    <li>✅ Ventilation minimale recommandée</li>
                    <li>✅ Port des EPI de base (gants, lunettes)</li>
                </ul>
            </div>
        `;
    }

    document.getElementById("result").innerHTML = html;
}
function toggleH(code) {
    const index = selectedH.indexOf(code);
    const btn = document.querySelector(`button[data-code="${code}"]`);

    if (index >= 0) {
        // Si déjà sélectionné → on retire
        selectedH.splice(index, 1);
        btn.classList.remove("selected");
    } else {
        // Sinon → on ajoute
        selectedH.push(code);
        btn.classList.add("selected");
    }
}

// Fonction d’analyse
function analyze() {

    const produit = document.getElementById("produit").value || "Produit non renseigné";

    // Liste officielle des mentions CMR
