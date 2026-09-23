import { Router } from 'express';
import { Leaderboard } from '../models/Leaderboard.js';

const router = Router();

router.get('/', async (_request, response) => {
  const entries = await Leaderboard.find().populate('team', 'name').sort({ points: -1 });
  response.json(entries);
});

router.get('/:id', async (request, response) => {
  const entry = await Leaderboard.findById(request.params.id).populate('team', 'name');

  if (!entry) {
    response.status(404).json({ error: 'Leaderboard entry not found' });
    return;
  }

  response.json(entry);
});

router.post('/', async (request, response) => {
  const { team, points } = request.body;
  const entry = await Leaderboard.create({ team, points });
  response.status(201).json(entry);
});

export default router;
