import { Router } from 'express';
import { Activity } from '../models/Activity.js';

const router = Router();

router.get('/', async (request, response) => {
  const user = typeof request.query.user === 'string' ? request.query.user : undefined;
  const activities = await Activity.find(user ? { user } : {})
    .populate('user', 'name email')
    .sort({ performedAt: -1 });
  response.json(activities);
});

router.get('/:id', async (request, response) => {
  const activity = await Activity.findById(request.params.id).populate('user', 'name email');

  if (!activity) {
    response.status(404).json({ error: 'Activity not found' });
    return;
  }

  response.json(activity);
});

router.post('/', async (request, response) => {
  const { user, type, durationMinutes, points, performedAt } = request.body;
  const activity = await Activity.create({ user, type, durationMinutes, points, performedAt });
  response.status(201).json(activity);
});

export default router;
