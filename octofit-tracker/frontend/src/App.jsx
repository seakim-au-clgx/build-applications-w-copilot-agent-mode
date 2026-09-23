import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { label: 'Overview', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'Users', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
]

function PageHeading() {
  const location = useLocation()
  const current = navigation.find((item) => item.path === location.pathname)

  return (
    <header className="page-heading">
      <div>
        <span className="eyebrow">OctoFit / {current?.label ?? 'Overview'}</span>
        <h1>{current?.label === 'Overview' ? 'Move with purpose.' : current?.label}</h1>
        <p>Make every session count, together.</p>
      </div>
      <div className="status-pill"><span /> API online</div>
    </header>
  )
}

function Overview() {
  return (
    <div className="overview-grid">
      <section className="feature-panel">
        <span className="eyebrow">Today&apos;s intention</span>
        <h2>Small actions.<br /><em>Strong momentum.</em></h2>
        <p>Track the work, celebrate the wins, and keep your team moving forward.</p>
        <NavLink className="button button-dark" to="/activities">Log activity <span>→</span></NavLink>
      </section>
      <section className="metric-panel">
        <div className="metric-panel__top"><span className="eyebrow">Quick access</span><span className="sun-mark">✦</span></div>
        <div className="metric-list">
          <NavLink to="/leaderboard"><strong>01</strong><span>Team leaderboard</span><b>↗</b></NavLink>
          <NavLink to="/workouts"><strong>02</strong><span>Find a workout</span><b>↗</b></NavLink>
          <NavLink to="/teams"><strong>03</strong><span>Meet your teams</span><b>↗</b></NavLink>
        </div>
      </section>
      <section className="quote-panel">
        <span className="quote-mark">“</span>
        <p>Consistency is a skill you can practice.</p>
        <span className="quote-author">OCTOFIT FIELD NOTE / 001</span>
      </section>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink className="brand" to="/"><span className="brand-glyph">O</span><span>octofit<span className="brand-dot">.</span></span></NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <span className="nav-label">Workspace</span>
          {navigation.map((item) => <NavLink key={item.path} to={item.path} end={item.path === '/'}>{item.label}<span>↗</span></NavLink>)}
        </nav>
        <div className="sidebar-foot"><span className="avatar">OF</span><div><strong>OctoFit team</strong><small>Training together</small></div></div>
      </aside>
      <main className="content">
        <PageHeading />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}


export default App
