import aa from '../../img/aa.jpg'
import DropInText from '../components/DropInText'

export const LazyPage1 = () => {
  return (
    <div className='lazypage1-content'>
      <DropInText
        text='Edison Andres Perez Martinez'
        className='lazypage1-title'
        staggerMs={60}
      />
      <div className='lazypage1-img-container'>
        <img className='lazypage1-img' src={aa} alt='Logo' />
      <div className='lazypage1-buttons'>
        <button>
          Link GitHub
        </button>
        <button>
          descargar CV
        </button>
      </div>
      </div>
    </div>
  )
}

export default LazyPage1;
