import { PropsCard } from './withCardData'
import CardDescription from './cardDescription/CardDescription'
import { CardImg } from './cardImg/CardImg'
import { CardTitle } from './cardTitle/CardTitle'
import { CardTools } from './cardTools/CardTools'

// Propiedades del componente
interface Props {
  card: PropsCard
  customClassName?: string 
}

export default function ContainerCard({ card, customClassName = '' }: Props) {
  // Combinar clases CSS: base + personalizada
  const cardClasses = `project-card ${customClassName}`.trim()
  
  return (
    <div className={cardClasses}>
      {/* CardTitle  */}
      <CardTitle title={card.title} customClassName={`${customClassName}-title`} />
      {/* CardImg  */}
      <CardImg img={card.img} customClassName={`${customClassName}-img`} />
      {/* CardDescripcion  */}
      <CardDescription description={card.description} customClassName={`${customClassName}-desc`} />
      {/* CardTools  */}
      <CardTools tools={card.tools} customClassName={`${customClassName}-tools`} />
    </div>
  )
}
