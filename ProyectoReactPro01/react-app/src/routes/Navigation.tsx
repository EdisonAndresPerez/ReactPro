import { BrowserRouter } from 'react-router-dom'
import { Routes, NavLink, Route, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import {routes} from './routes'

//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        {/*Crear navLinks dinamicos */}
        <nav>
          <img className='react_logo' src={logo} alt='Logo' />
          <p>Especialidad en React</p>

          <ul>
            {routes.map(route => (
              <li key={route.name}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) => isActive ? 'nav-active' : ''}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          {routes.map(route => (
            <Route key={route.name} path={route.path} element={<route.component />} />
          ))}
          <Route path='/*' element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
