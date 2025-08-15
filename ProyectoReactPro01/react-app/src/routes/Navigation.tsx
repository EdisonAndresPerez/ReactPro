import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  NavLink,
  Route,
  Navigate
} from 'react-router-dom';
import logo from '../logo.svg';

// ========================
// TIPOS E INTERFACES
// ========================

export interface AppRoute {
  to: string;
  path: string;
  component: React.ComponentType;
  name: string;
}

interface LayoutRutasProps {
  routes: AppRoute[] | undefined;
}

interface LayoutIconProps {
  logo: string;
}

interface NavigationProps {
  routes: AppRoute[] | undefined;
}

// ========================
// COMPONENTES DE LAYOUT
// ========================
export const LayoutIcon: React.FC<LayoutIconProps> = ({ logo }) => {
  return (
    <img 
      className="react_logo" 
      src={logo} 
      alt="Logo" 
    />
  );
};

export const LayoutRutas: React.FC<LayoutRutasProps> = ({ routes }) => {
  // Validación para evitar errores si routes es undefined o vacío
  if (!routes || !Array.isArray(routes) || routes.length === 0) {
    console.warn('LayoutRutas: No hay rutas disponibles');
    return <ul className="layout_links"></ul>;
  }

  return (
    <ul className="layout_links">
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
  );
};

export const LoadingFallback: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <img
        className="react_logo react_logoCarga"
        src={logo}
        alt="Loading..."
        style={{ 
          width: '350px', 
          height: '350px' 
        }}
      />
    </div>
  );
};
// ========================
// COMPONENTE PRINCIPAL
// ========================
export const Navigation: React.FC<NavigationProps> = ({ routes }) => {
  // Validación principal de routes
  if (!routes || !Array.isArray(routes) || routes.length === 0) {
    console.error('Navigation: No se han proporcionado rutas válidas');
    return (
      <div className="main-layout">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Error: No hay rutas configuradas</p>
        </div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <LayoutIcon logo={logo} />
          <p className="layout_title">Especializado en React</p>
          <LayoutRutas routes={routes} />
        </nav>

        <section className="content">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route 
                path="/*" 
                element={<Navigate to="/lazy1" replace />} 
              />
            </Routes>
          </Suspense>
        </section>
      </div>
    </BrowserRouter>
  );
};
