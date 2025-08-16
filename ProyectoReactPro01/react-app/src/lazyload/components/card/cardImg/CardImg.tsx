import andres from '../../../../img/andres.jpeg'

interface Props {
  img?: string
}

export const  CardImg = ({ img }: Props) => {
  return (
    <div>
      <img className='lazypage1-img' src={andres} alt='Imagen del proyecto' />
    </div>
  )
}
