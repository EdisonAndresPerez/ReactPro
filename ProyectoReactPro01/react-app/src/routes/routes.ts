import { lazy } from 'react'
import { JSX } from 'react'



interface Route {
  to: string
  path: string
  component: () => JSX.Element
  name: string
}

const lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
const lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
  { to: '/lazy1', path: '/lazy1', component: () => <Lazy1 />, name: 'lazy-1' },
  { to: '/lazy2', path: '/lazy2', component: () => <Lazy2 />, name: 'lazy-2' },
  { to: '/lazy3', path: '/lazy3', component: () => <Lazy3 />, name: 'lazy-3' },
];