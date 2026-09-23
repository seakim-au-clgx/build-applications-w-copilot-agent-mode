import DataView from './DataView.jsx'

// API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams
export default function Teams() {
  return <DataView endpoint="teams" title="Your teams" description="The best pace is the one you can share." columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'Focus' }, { key: 'members', label: 'Members' }]} renderItem={(item, value) => <><td><strong>{value(item.name)}</strong></td><td>{value(item.description)}</td><td>{Array.isArray(item.members) ? `${item.members.length} athletes` : '—'}</td></>} />
}
