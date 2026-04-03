body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #eef2f7;
}

header {
  text-align: center;
  padding: 20px;
  background: white;
  border-bottom: 3px solid #007bff;
}

.logo {
  height: 70px;
  margin-bottom: 10px;
}

h1 {
  margin: 5px 0;
  font-size: 26px;
  color: #003c78;
}

.subtitle {
  color: #666;
}

.card {
  max-width: 600px;
  margin: 40px auto;
  padding: 25px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0,0,0,0.2);
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.h-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 10px;
}

.h-btn {
  padding: 10px;
  border: 1px solid #007bff;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.h-btn.selected {
  background: #007bff;
  color: white;
}

.analyse-btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
}

.result-section {
  margin-top: 25px;
  padding: 20px;
  border-radius: 10px;
  background: #f9fafb;
}

.light {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 15px auto;
}

footer {
  text-align: center;
  padding: 20px;
  color: #777;
}

/* --- Mode smartphone --- */
@media (max-width: 600px) {

  .card {
    margin: 15px;
    padding: 15px;
  }

  h1 {
    font-size: 22px;
  }

  input {
    font-size: 16px;
    padding: 8px;
  }

  .h-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .h-btn {
    padding: 10px;
    font-size: 14px;
  }

  .analyse-btn {
    padding: 12px;
    font-size: 16px;
  }

  .light {
    width: 45px;
    height: 45px;
  }
}
