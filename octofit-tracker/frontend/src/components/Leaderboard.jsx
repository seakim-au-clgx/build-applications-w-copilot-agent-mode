import DataView from './DataView.jsx'

export default function Leaderboard() {
  return <DataView endpoint="leaderboard" title="Leaderboard" description="A little friendly pressure goes a long way." columns={[{ key: 'rank', label: 'Rank' }, { key: 'team', label: 'Team' }, { key: 'points', label: 'Points' }]} renderItem={(item, value) => <><td className="rank">#{value(item.rank || '—')}</td><td><strong>{value(item.team)}</strong></td><td><span className="points">{value(item.points)} pts</span></td></>} />
}
