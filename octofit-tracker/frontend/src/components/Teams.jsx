import DataView from './DataView.jsx'

export default function Teams() {
  return <DataView endpoint="teams" title="Your teams" description="The best pace is the one you can share." columns={[{ key: 'name', label: 'Team' }, { key: 'description', label: 'Focus' }, { key: 'members', label: 'Members' }]} renderItem={(item, value) => <><td><strong>{value(item.name)}</strong></td><td>{value(item.description)}</td><td>{Array.isArray(item.members) ? `${item.members.length} athletes` : '—'}</td></>} />
}
