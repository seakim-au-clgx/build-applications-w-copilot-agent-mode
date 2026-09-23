import { Router } from 'express';
import { User } from '../models/User.js';

const router = Router();

router.get('/', async (_request, response) => {
  const users = await User.find().populate('team', 'name');
  response.json(users);
});

router.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id).populate('team', 'name');

  if (!user) {
    response.status(404).json({ error: 'User not found' });
    return;
  }

  response.json(user);
});

router.post('/', async (request, response) => {
  const { name, email, team } = request.body;
  const user = await User.create({ name, email, team });
  response.status(201).json(user);
});

export default router;
