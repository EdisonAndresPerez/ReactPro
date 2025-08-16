import ContainerCard from '../components/card/ContainerCard'
import DropInText from '../components/dropInText/DropInText'

const cardData = {
  title: 'Mi Proyecto Destacado',
  img: '../../../img/andres.jpeg',
  description:
    'Esta es una breve descripción de mi proyecto, donde explico el objetivo principal y las tecnologías utilizadas.',
  tools: 'React, TypeScript, CSS'
}

export const LazyPage2 = () => {
  return (
    <>
      <div>
        <DropInText
          text='Mis Proyectos'
          className='lazypage1-title'
          staggerMs={60}
        />
      </div>
      <div className='lazypage2-container'>
        <ContainerCard card={cardData} />
        <ContainerCard card={cardData} />
      </div>
    </>
  )
}

export default LazyPage2
