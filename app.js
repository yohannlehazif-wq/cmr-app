let selectedH = [];

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

function analyze() {

    // ✅ Une seule déclaration, propre, moderne
    const produit = document.getElementById("produit")?.value || "Produit non renseigné";

    const CMR = ["H340","H350","H350i","H360","H360F","H360D"];
    const isCMR = selectedH.some(h => CMR.includes(h));

    let html = "";

    if (isCMR) {
        html = `
            <div class="result-cmr">
                <h3>🔴 Produit CMR détecté</h3>
                <p><strong>${produit}</strong></p>
                <p>Mentions détectées : <strong>${selectedH.join(", ")}</strong></p>
            </div>`;
    } else {
        html = `
            <div class="result-ok">
                <h3>🟢 Aucun indicateur CMR détecté</h3>
                <p><strong>${produit}</strong></p>
            </div>`;
    }

    document.getElementById("result").innerHTML = html;
}
            </div>`;
    }

    document.getElementById("result").innerHTML = html;
}

function addProduct() {
    const name = document.getElementById("prodName").value;
    const h = document.getElementById("prodH").value;
    const list = document.getElementById("product-list");

    if (!name) return;

    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> — ${h}`;
    list.appendChild(li);
}
