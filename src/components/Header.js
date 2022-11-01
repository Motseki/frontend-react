import PropTypes from 'prop-types'
import image from '../imgs/MOTSEKI.jpg'


const Header = ({title}) => {
   

  return (
    <header className='header'> 
      <img src={image} alt="" className='image' />
      <p>{title}</p>     
    </header>
    
  )
}

Header.defaultProps = {
    title: 'Lebohang Bernard Motseki',
}

// eslint-disable-next-line react/no-typos
Header.PropTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
