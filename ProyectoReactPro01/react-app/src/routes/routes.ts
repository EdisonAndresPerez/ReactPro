import { lazy } from 'react';
import type { AppRoute } from './Navigation';

// ========================
// LAZY LOADING COMPONENTS
// ========================
const Lazy1 = lazy(() => 
  import(/* webpackChunkName: "LazyPage1" */ '../lazyload/pages/LazyPage1')
);

const Lazy2 = lazy(() => 
  import(/* webpackChunkName: "LazyPage2" */ '../lazyload/pages/LazyPage2')
);

const Lazy3 = lazy(() => 
  import(/* webpackChunkName: "LazyPage3" */ '../lazyload/pages/LazyPage3')
);

// ========================
// ROUTES CONFIGURATION
// ========================
export const routes: AppRoute[] = [
  { 
    to: '/lazy1', 
    path: '/lazy1', 
    component: Lazy1, 
    name: 'Inicio' 
  },
  { 
    to: '/lazy2', 
    path: '/lazy2', 
    component: Lazy2, 
    name: 'Proyectos' 
  },
  { 
    to: '/lazy3', 
    path: '/lazy3', 
    component: Lazy3, 
    name: 'Sobre Mi' 
  }
];

// Constante para la ruta por defecto
export const DEFAULT_ROUTE = '/lazy1';