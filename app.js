import { useState } from "react";

export default function App() {
  const [job, setJob] = useState(null);
  const [risk, setRisk] = useState(null);

  const jobs = {
    "Technicien maintenance": ["Chute de hauteur", "CMR", "Électrique", "TMS"],
    "Commercial itinérant": ["Risque routier", "Stress"],
    "Boucher": ["Coupures", "Manutention", "CMR nettoyants"],
    "Coiffeur / Coiffeuse": ["Produits chimiques", "Postures prolongées"],
    "Production industrielle": ["Machines", "Bruit", "CMR"]
  };

  const descriptions = {
    CMR: "Produits Cancérogènes, Mutagènes et Reprotoxiques. Priorité à la substitution, EPI et suivi médical.",
    "Chute de hauteur": "Utilisation de protections collectives et harnais.",
    "Risque routier": "Fatigue, vitesse, téléphone. Prévoir plan de prévention.",
    "Électrique": "Consignation, habilitation, EPI adaptés.",
    "TMS": "Adaptation du poste, ergonomie, pauses."
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        🛡️ Prévention Mobile
      </header>

      {!job && (
        <div style={styles.card}>
          <h2>Métier</h2>
          {Object.keys(jobs).map(j => (
            <button style={styles.button} key={j} onClick={() => setJob(j)}>
              👷 {j}
            </button>
          ))}
        </div>
      )}

      {job && !risk && (
        <div style={styles.card}>
          <button style={styles.back} onClick={() => setJob(null)}>← Retour</button>
          <h2>Risques – {job}</h2>

          {jobs[job].map(r => (
            <button style={styles.buttonRisk} key={r} onClick={() => setRisk(r)}>
              ⚠️ {r}
            </button>
          ))}
        </div>
      )}

      {risk && (
        <div style={{ ...styles.card, background: "#fff8e1" }}>
          <button style={styles.back} onClick={() => setRisk(null)}>← Retour</button>
          <h2>{risk}</h2>
          <p>{descriptions[risk] || "Fiche prévention à compléter."}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    maxWidth: 420,
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    padding: 10
  },
  header: {
    background: "#1d4ed8",
    color: "white",
    padding: 16,
    borderRadius: 12,
    textAlign: "center",
    fontSize: 22,
    marginBottom: 20
  },
  card: {
    background: "white",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  },
  button: {
    width: "100%",
    padding: 14,
    marginTop: 10,
    borderRadius: 10,
    border: "none",
    background: "#e5e7eb",
    fontSize: 16,
    cursor: "pointer"
  },
  buttonRisk: {
    width: "100%",
    padding: 14,
    marginTop: 10,
    borderRadius: 10,
    border: "none",
    background: "#fee2e2",
    fontSize: 16,
    cursor: "pointer"
  },
  back: {
    marginBottom: 10,
    background: "transparent",
    border: "none",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: 14
  }
};
