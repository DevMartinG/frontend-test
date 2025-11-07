import "./styles.css";
import "./styles.css";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [message, setMessage] = useState("");

  const sanitize = (value) => {
    if (value === "") return "";
    const isNeg = value[0] === "-";
    const digits = value.replace(/[^0-9]/g, "");

    if (isNeg && digits === "") return "-";
    return isNeg ? "-" + digits : digits;
  };

  const handleChangeA = (e) => setNumA(sanitize(e.target.value));
  const handleChangeB = (e) => setNumB(sanitize(e.target.value));
  const isValidInteger = (v) => /^-?\d+$/.test(v);

  const handleSum = () => {
    if (
      numA === "" ||
      numB === "" ||
      !isValidInteger(numA) ||
      !isValidInteger(numB)
    ) {
      setMessage("Ingrese ambos números");
      return;
    }

    const a = parseInt(numA, 10);
    const b = parseInt(numB, 10);
    const sum = a + b;
    setMessage(`Resultado es: ${sum}`);
  };

  return (
    <main
      className="App"
      style={{ maxWidth: 480, margin: "2rem auto", padding: "1rem" }}
    >
      <p style={{ fontSize: 14, color: "#333" }}>Dennis Martin — Ejercicio 1</p>

      <div style={{ marginBottom: 8 }}>
        <label htmlFor="numA">Número 1</label>
        <input
          id="numA"
          name="numA"
          type="text"
          inputMode="numeric"
          pattern="-?[0-9]*"
          value={numA}
          onChange={handleChangeA}
          placeholder="Ingrese un número entero"
          aria-label="Primer número"
          style={{ display: "block", marginTop: 6, padding: 6, width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label htmlFor="numB">Número 2</label>
        <input
          id="numB"
          name="numB"
          type="text"
          inputMode="numeric"
          pattern="-?[0-9]*"
          value={numB}
          onChange={handleChangeB}
          placeholder="Ingrese un número entero"
          aria-label="Segundo número"
          style={{ display: "block", marginTop: 6, padding: 6, width: "100%" }}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <button type="button" onClick={handleSum}>
          suma los números
        </button>
      </div>

      <div role="status" aria-live="polite" style={{ marginTop: 12 }}>
        {message && <strong>{message}</strong>}
      </div>
    </main>
  );
}
