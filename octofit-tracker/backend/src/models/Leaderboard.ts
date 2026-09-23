import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true, unique: true },
    points: { type: Number, required: true, min: 0, default: 0 }
  },
  { timestamps: true }
);

export const Leaderboard = model('Leaderboard', leaderboardSchema);
