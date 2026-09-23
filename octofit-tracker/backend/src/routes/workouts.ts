import { Router } from 'express';
import { Workout, workoutDifficulties } from '../models/Workout.js';

const router = Router();

router.get('/', async (request, response) => {
  const difficulty = workoutDifficulties.find((value) => value === request.query.difficulty);
  const workouts = await Workout.find(difficulty ? { difficulty } : {});
  response.json(workouts);
});

router.get('/:id', async (request, response) => {
  const workout = await Workout.findById(request.params.id);

  if (!workout) {
    response.status(404).json({ error: 'Workout not found' });
    return;
  }

  response.json(workout);
});

router.post('/', async (request, response) => {
  const { name, description, difficulty, durationMinutes } = request.body;
  const workout = await Workout.create({ name, description, difficulty, durationMinutes });
  response.status(201).json(workout);
});

export default router;
