const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta de salud
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Ruta de saludo
app.get("/api/saludo", (req, res) => {
  const nombre = req.query.nombre || "Mundo";
  res.json({ mensaje: `Hola ${nombre}` });
});

// Ruta echo
app.post("/api/echo", (req, res) => {
  res.status(201).json(req.body);
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});