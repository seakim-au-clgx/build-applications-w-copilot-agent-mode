import DataView from './DataView.jsx'

// API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts
export default function Workouts() {
  return <DataView endpoint="workouts" title="Workout library" description="A good plan makes showing up feel easier." columns={[{ key: 'name', label: 'Workout' }, { key: 'difficulty', label: 'Level' }, { key: 'duration', label: 'Duration' }, { key: 'description', label: 'Details' }]} renderItem={(item, value) => <><td><strong>{value(item.name)}</strong></td><td><span className={`difficulty difficulty-${item.difficulty}`}>{value(item.difficulty)}</span></td><td>{value(item.durationMinutes)} min</td><td>{value(item.description)}</td></>} />
}
