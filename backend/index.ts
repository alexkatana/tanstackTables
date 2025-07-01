import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
let entities = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Entity ${i + 1}`,
  description: `Description for entity ${i + 1}`,
  status: i % 3 === 0 ? 'active' : i % 3 === 1 ? 'pending' : 'inactive',
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
}));
app.get('/api/entities', (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  const start = (Number(page) - 1) * Number(pageSize);
  const end = start + Number(pageSize);
  
  res.json({
    data: entities.slice(start, end),
    total: entities.length,
  });
});

app.get('/api/entities/:id', (req, res) => {
  const entity = entities.find(e => e.id === Number(req.params.id));
  res.json(entity || { error: 'Not found' });
});

app.put('/api/entities/:id', (req, res) => {
  const index = entities.findIndex(e => e.id === Number(req.params.id));
  if (index !== -1) {
    entities[index] = { ...entities[index], ...req.body };
    res.json(entities[index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});