import { ComponentType } from 'react'
import andres from '../../../img/andres.jpeg'

// Estructura de la card
export interface PropsCard {
  title: string
  img: string
  description: string
  tools: string[]
}

// HOC que envuelve componentes con datos de card
export function withCardData<ComponentProps extends object>(
  WrappedComponent: ComponentType<ComponentProps & { card: PropsCard; customClassName?: string }>
) {
  return function EnhancedComponent(props: ComponentProps & { customClassName?: string }) {
    // Datos por defecto que se pueden sobrescribir
    const defaultCardData: PropsCard = {
      title: 'Proyecto por defecto',
      img: andres,
      description: 'Descripción por defecto del proyecto',
      tools: ['React', 'TypeScript']
    }

    return <WrappedComponent {...props} card={defaultCardData} />
  }
}
