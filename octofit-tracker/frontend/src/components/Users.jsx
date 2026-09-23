import DataView from './DataView.jsx'

// API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users
export default function Users() {
  return <DataView endpoint="users" title="Athletes" description="The people turning intention into routine." columns={[{ key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'team', label: 'Team' }]} renderItem={(item, value) => <><td><strong>{value(item.name)}</strong></td><td>{value(item.email)}</td><td>{value(item.team)}</td></>} />
}
