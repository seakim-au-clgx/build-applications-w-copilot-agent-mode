import DataView from './DataView.jsx'

// API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities
export default function Activities() {
  return <DataView endpoint="activities" title="Activity log" description="Every session is a signal. Keep yours moving." columns={[{ key: 'type', label: 'Activity' }, { key: 'user', label: 'Athlete' }, { key: 'duration', label: 'Duration' }, { key: 'points', label: 'Points' }, { key: 'date', label: 'Date' }]} renderItem={(item, value) => <><td><strong>{value(item.type)}</strong></td><td>{value(item.user)}</td><td>{value(item.durationMinutes)} min</td><td><span className="points">+{value(item.points)}</span></td><td>{value(item.performedAt)}</td></>} />
}
