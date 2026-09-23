import express from 'express'
import type { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import './config/database.js'
import { apiBaseUrl, port } from './config/env.js'
import activityRoutes from './routes/activities.js'
import leaderboardRoutes from './routes/leaderboard.js'
import teamRoutes from './routes/teams.js'
import userRoutes from './routes/users.js'
import workoutRoutes from './routes/workouts.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.get('/api/', (_request, response) => {
  response.json({
    users: `${apiBaseUrl}/api/users/`,
    teams: `${apiBaseUrl}/api/teams/`,
    activities: `${apiBaseUrl}/api/activities/`,
    leaderboard: `${apiBaseUrl}/api/leaderboard/`,
    workouts: `${apiBaseUrl}/api/workouts/`
  })
})

app.use('/api/users', userRoutes)
app.use('/api/teams', teamRoutes)
app.use('/api/activities', activityRoutes)
app.use('/api/leaderboard', leaderboardRoutes)
app.use('/api/workouts', workoutRoutes)

app.use((_request: Request, response: Response) => {
  response.status(404).json({ error: 'Not found' })
})

app.use((error: unknown, _request: Request, response: Response, _next: NextFunction) => {
  if (error instanceof mongoose.Error.ValidationError || error instanceof mongoose.Error.CastError) {
    response.status(400).json({ error: error.message })
    return
  }

  console.error(error)
  response.status(500).json({ error: 'Internal server error' })
})

app.listen(port, () => {
  console.log(`OctoFit API listening on ${apiBaseUrl}`)
})