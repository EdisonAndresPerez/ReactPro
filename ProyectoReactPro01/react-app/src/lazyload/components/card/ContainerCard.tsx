import andres from '../../../img/andres.jpeg'

interface Props {
  card: PropsCard
}

interface PropsCard {
  title: string
  img: string
  description: string
  tools: string
}

export default function ContainerCard({ card }: Props) {
  return (
    <div className='project-card'>
      <div className='project-card-title'>Mi Proyecto Destacado</div>
      <div>
        <img className='lazypage1-img' src={andres} alt='...' />
      </div>
      <div className='project-card-desc'>
        Esta es una breve descripción de mi proyecto, donde explico el objetivo
        principal y las tecnologías utilizadas.
      </div>
      <div className='project-card-company'>Empresa Ejemplo S.A.</div>
      <div className='project-card-company'>Empresa Ejemplo S.A.</div>
      <div className='project-card-company'>Empresa Ejemplo S.A.</div>
      <div className='project-card-company'>Empresa Ejemplo S.A.</div>
      <div className='project-card-company'>Empresa Ejemplo S.A.</div>
      <div className='project-card-company'>Empresa Ejemplo S.A.</div>
    </div>
  )
}
