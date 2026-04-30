const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/data-hora', (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});