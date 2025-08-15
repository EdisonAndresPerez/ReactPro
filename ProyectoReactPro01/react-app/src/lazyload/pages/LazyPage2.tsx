import ContainerCard from '../components/card/ContainerCard'

const cardData = {
  title: "Mi Proyecto Destacado",
  img: "../../../img/andres.jpeg",
  description: "Esta es una breve descripción de mi proyecto, donde explico el objetivo principal y las tecnologías utilizadas.",
  tools: "React, TypeScript, CSS"
}


export const LazyPage2 = () => {
  return (
    <>
    
      <div className='lazypage2-container'>
        <h1>Proyectos de Empresas</h1>
        <ContainerCard card={cardData} />
         <ContainerCard card={cardData} />
          <ContainerCard card={cardData} />
           <ContainerCard card={cardData} />
            <ContainerCard card={cardData} />
             <ContainerCard card={cardData} />

      </div>
    </>
  )
}

export default LazyPage2