import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function displayValue(value) {
  if (value && typeof value === 'object') return value.name || value.email || value._id || '—'
  if (typeof value === 'string' && value.includes('T')) return new Date(value).toLocaleDateString()
  return value ?? '—'
}

export default function DataView({ endpoint, title, description, columns, renderItem }) {
  const [items, setItems] = useState([])
  const [state, setState] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(endpoint)
      .then((data) => { if (active) { setItems(data); setState('ready') } })
      .catch((reason) => { if (active) { setError(reason.message); setState('error') } })
    return () => { active = false }
  }, [endpoint])

  return (
    <section className="data-view">
      <div className="data-intro"><div><span className="eyebrow">Live from your API</span><h2>{title}</h2><p>{description}</p></div><span className="record-count">{state === 'ready' ? `${items.length} records` : '...'}</span></div>
      {state === 'loading' && <div className="empty-state">Loading your {endpoint}...</div>}
      {state === 'error' && <div className="empty-state error-state">{error}. Check that the API is running on port 8000.</div>}
      {state === 'ready' && items.length === 0 && <div className="empty-state">No {endpoint} yet.</div>}
      {state === 'ready' && items.length > 0 && <div className="table-wrap"><table><thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead><tbody>{items.map((item, index) => <tr key={item._id || index}>{renderItem(item, displayValue)}</tr>)}</tbody></table></div>}
    </section>
  )
}
