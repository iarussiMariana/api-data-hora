const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

// rota principal (pra não dar "Cannot GET /")
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API de Data e Hora funcionando 🚀',
    rota: '/data-hora'
  });
});

// rota da atividade
app.get('/data-hora', (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR')
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});