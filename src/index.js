// Combating AI-Generated Content & Misinformation — Entry point
// TODO: Build the core product logic

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ product: 'Combating AI-Generated Content & Misinformation', status: 'pre-mvp' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Combating AI-Generated Content & Misinformation running on port ${PORT}`);
});
