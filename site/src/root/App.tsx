import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import '../styles/App.css'
import Home from '../views/Home'
import LOI from '../views/LOI'
import Budget from '../views/Budget'
import Organization from '../views/Organization'
import Timeline from '../views/Timeline'

function App() {
  return (
    <Router basename="/neophil-emof-2025">
      <div className="app">
        <aside className="sidebar">
          <h2>NEO EMOF 2025</h2>
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/loi" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Letter of Intent
            </NavLink>
            <NavLink to="/budget" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Budget
            </NavLink>
            <NavLink to="/organization" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Organization
            </NavLink>
            <NavLink to="/timeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Timeline
            </NavLink>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loi" element={<LOI />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
