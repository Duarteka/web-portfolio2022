/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Habilitar la compresión Gzip
app.use(compression());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'build')));

// Enviar la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
