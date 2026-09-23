import { Router } from 'express';
import { Team } from '../models/Team.js';

const router = Router();

router.get('/', async (_request, response) => {
  const teams = await Team.find().populate('members', 'name email');
  response.json(teams);
});

router.get('/:id', async (request, response) => {
  const team = await Team.findById(request.params.id).populate('members', 'name email');

  if (!team) {
    response.status(404).json({ error: 'Team not found' });
    return;
  }

  response.json(team);
});

router.post('/', async (request, response) => {
  const { name, description, members } = request.body;
  const team = await Team.create({ name, description, members });
  response.status(201).json(team);
});

export default router;
