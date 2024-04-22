import { Link, NavLink, Outlet } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'


export default function ContactPage() {

  return (
    <MainLayout>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'rgb(215 255 212)'}} >
        <div className="container">
          <Link to={'/'} className='navbar-brand'>Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/'} className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/list'} className="nav-link">List Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/create'} className="nav-link">Create Contact</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <Outlet />
      </div>
    </MainLayout>
  )
}

