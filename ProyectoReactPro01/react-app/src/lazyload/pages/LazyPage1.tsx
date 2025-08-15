import andres from '../../img/andres.jpeg'
import DropInText from '../components/dropInText/DropInText'

export const LazyPage1 = () => {
  return (
    
    <div className='lazypage1-content'>
      <DropInText
        text='Edison Andres Perez Martinez'
        className='lazypage1-title'
        staggerMs={60}
      />

      <div className='lazypage1-img-container'>
        <img className='lazypage1-img' src={andres} alt='Foto de Edison Andres Perez Martinez' />
      </div>

      <div className='lazypage1-buttons'>
        <button className='btn btn--ghost'>Link GitHub</button>
        <button className='btn btn--primary'>descargar CV</button>
      </div>
    </div>
  )
}

export default LazyPage1
