import { Schema, model } from 'mongoose';

export const workoutDifficulties = ['beginner', 'intermediate', 'advanced'] as const;

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    difficulty: { type: String, enum: workoutDifficulties, required: true },
    durationMinutes: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export const Workout = model('Workout', workoutSchema);
