import React, { Suspense, JSX } from 'react';
import {
  BrowserRouter,
  Routes,
  NavLink,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import logo from '../logo.svg';
import type { AppRoute } from './routes';
import { DEFAULT_ROUTE } from './routes';


// --------------------
// UI de layoutIconLogo
// --------------------
const LayoutIcon: React.FC<{ logo: string }> = ({ logo }) => (
  <img className="react_logo" src={logo} alt="Logo" />
);


// -----------------------------------
// UI: Lista de enlaces de navegación
// -----------------------------------
const LayoutRutas: React.FC<{ routes: AppRoute[] }> = ({ routes }) => {
  if (routes.length === 0) return <ul className="layout_links"></ul>;
  return (
    <ul className="layout_links">
      {routes.map(route => (
        <li className="layout_link" key={route.name}>
          <NavLink
            to={route.path}
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
            end
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};


// -----------------------------------
// UI: Pantalla de carga (mientras carga un Lazy Component)
// -----------------------------------
const LoadingFallback: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <img className="react_logo react_logoCarga" src={logo} alt="Loading..." style={{ width: 350, height: 350 }} />
  </div>
);



// -----------------------------------
// Layout raíz de la aplicación
// -----------------------------------
const RootLayout: React.FC<{ routes: AppRoute[] }> = ({ routes }) => (
  <div className="main-layout">
    <nav>
      <LayoutIcon logo={logo} />
      <p className="layout_title">Especializado en React</p>
      <LayoutRutas routes={routes} />
    </nav>
    <section className="content">
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    </section>
  </div>
);

// --------------------
// Navigation principal
// --------------------
export const Navigation: React.FC<{ routes: AppRoute[] }> = ({ routes }) => {
  if (!routes || routes.length === 0) {
    console.error('Navigation: No se han proporcionado rutas válidas');
    return (
      <div className="main-layout">
        <div style={{ padding: 20, textAlign: 'center' }}>
          <p>Error: No hay rutas configuradas</p>
        </div>
      </div>
    );
  }

  const firstPath = routes[0]?.path ?? DEFAULT_ROUTE;

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route element={<RootLayout routes={routes} />}>
          {/* / -> primera ruta */}
          <Route index element={<Navigate to={firstPath} replace />} />

          {/* Rutas mapeadas */}
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              element={route.element}
            />
          ))}

          {/* Wildcard -> DEFAULT_ROUTE */}
          <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
