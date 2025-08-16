import andres from '../../../img/andres.jpeg'
import CardDescription from './cardDescription/CardDescription'
import { CardImg } from './cardImg/CardImg'
import { CardTitle } from './cardTitle/CardTitle'
import { CardTools } from './cardTools/CardTools'

//propiedades del componente
//recibe un objeto card
interface Props {
  card: PropsCard
}

//Estructura de la card
interface PropsCard {
  title: string
  img?: string
  description: string
  tools: string
}

export function withCardData<ComponentProps extends object>(
  WrappedComponent: React.ComponentType<ComponentProps & { card: PropsCard }>
) {
  return function EnhancedComponent(props: ComponentProps) {
    const cardData: PropsCard = {
      title: 'primer proyecto',
      img: andres,
      description:
        'Esta es una breve descripción de mi proyecto, donde explico el objetivo principal y las tecnologías utilizadas.',
      tools: 'React, TypeScript'
    }

    return <WrappedComponent {...props} card={cardData} />
  }
}

export default function ContainerCard({ card }: Props) {
  return (
    <div className='project-card'>
      {/* CardTitle  */}
      <CardTitle title={card.title} />
      {/* CardImg  */}
      <CardImg img={card.img} />
      {/* CardDescripcion  */}
      <CardDescription description={card.description} />
      {/* CardTools  */}
      <CardTools tool={card.tools} />
    </div>
  )
}
