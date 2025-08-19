import React, { lazy, JSX } from "react";

// ========================
// LAZY LOADING COMPONENTS
// ========================
const Lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../lazyload/pages/LazyPage3")
);

export type Wrapper = React.FC<{ children: React.ReactNode }>;

//Definimos la interfaz para las rutas de la aplicación
export interface AppRoute {
  path: string; //path la URL asociada a la ruta
  name: string; //El nombre legible que se muestra en el menu
  element: JSX.Element; // El componente que se debe renderizar en esa ruta
}

// Constante para la ruta por defecto
export const DEFAULT_ROUTE = "/lazy1";

// ========================
// ROUTES CONFIGURATION
// ========================
export const routes: AppRoute[] = [
  { path: "/lazy1", name: "Inicio", element: <Lazy1 /> },
  { path: "/lazy2", name: "Proyectos", element: <Lazy2 /> },
  { path: "/lazy3", name: "Sobre Mi", element: <Lazy3 /> },
];
