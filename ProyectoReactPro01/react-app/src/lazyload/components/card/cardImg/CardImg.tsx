import andres from '../../../../img/andres.jpeg'

interface Props {
  img?: string
  customClassName? : string
}

export const  CardImg = ({ img, customClassName = '' }: Props) => {

  const imgClasses = `lazypage1-img ${customClassName}`.trim()
  
  // Usar la imagen que se pasa como prop, o la imagen por defecto si no se proporciona
  const imageSrc = img || andres
  
  return (
    <div className='img-container'>
      <img className={imgClasses} src={imageSrc} alt='Imagen del proyecto' />
    </div>
  )
}
