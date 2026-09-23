import mongoose from 'mongoose';
import { Activity } from '../models/Activity.js';
import { Leaderboard } from '../models/Leaderboard.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const [alex, jordan, sam, taylor] = await User.create([
      { name: 'Alex Morgan', email: 'alex.morgan@example.com' },
      { name: 'Jordan Lee', email: 'jordan.lee@example.com' },
      { name: 'Sam Rivera', email: 'sam.rivera@example.com' },
      { name: 'Taylor Kim', email: 'taylor.kim@example.com' }
    ]);

    const [teamA, teamB] = await Team.create([
      {
        name: 'Summit Striders',
        description: 'A team focused on steady progress and outdoor endurance.',
        members: [alex._id, jordan._id]
      },
      {
        name: 'Pulse Collective',
        description: 'A balanced team combining strength, mobility, and cardio.',
        members: [sam._id, taylor._id]
      }
    ]);

    await Activity.create([
      { user: alex._id, type: 'Running', durationMinutes: 35, points: 120, performedAt: new Date('2026-09-20') },
      { user: jordan._id, type: 'Cycling', durationMinutes: 50, points: 150, performedAt: new Date('2026-09-21') },
      { user: sam._id, type: 'Strength training', durationMinutes: 40, points: 130, performedAt: new Date('2026-09-21') },
      { user: taylor._id, type: 'Yoga', durationMinutes: 30, points: 90, performedAt: new Date('2026-09-22') }
    ]);

    await Leaderboard.create([
      { team: teamA._id, points: 270 },
      { team: teamB._id, points: 220 }
    ]);

    await Workout.create([
      {
        name: 'Morning Momentum',
        description: 'A light full-body routine to start the day with energy.',
        difficulty: 'beginner',
        durationMinutes: 20
      },
      {
        name: 'Strength Builder',
        description: 'A progressive routine for building functional strength.',
        difficulty: 'intermediate',
        durationMinutes: 40
      },
      {
        name: 'Peak Conditioning',
        description: 'A challenging interval workout for experienced athletes.',
        difficulty: 'advanced',
        durationMinutes: 50
      }
    ]);

    console.log('Seeded users, teams, activities, leaderboard entries, and workouts');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
