// Chargement du fichier JSON
fetch("data/metiers.json")
    .then(response => response.json())
    .then(data => initApp(data));

function initApp(data) {
    const metierSelect = document.getElementById("metier");

    // Remplir la liste des métiers
    data.forEach(m => {
        let opt = document.createElement("option");
        opt.value = m.metier;
        opt.textContent = m.metier;
        metierSelect.appendChild(opt);
    });

    // Listener
    metierSelect.addEventListener("change", () => {
        const selected = data.find(m => m.metier === metierSelect.value);
        displayInfo(selected);
    });
}

function displayInfo(metier) {
    document.getElementById("title").textContent = metier.metier;

    // Risques
    const r = document.getElementById("risques");
    r.innerHTML = "";
    metier.risques.forEach(el => {
        let li = document.createElement("li");
        li.textContent = el;
        r.appendChild(li);
    });

    // Plan d'action
    const a = document.getElementById("actions");
    a.innerHTML = "";
    metier.actions.forEach(el => {
        let li = document.createElement("li");
        li.textContent = el;
        a.appendChild(li);
    });

    // Liens / commentaires
    const l = document.getElementById("liens");
    l.innerHTML = "";
    metier.liens.forEach(el => {
        let p = document.createElement("p");
        p.innerHTML = `<a href="${el.url}" target="_blank">${el.titre}</a>`;
        l.appendChild(p);
    });
}
