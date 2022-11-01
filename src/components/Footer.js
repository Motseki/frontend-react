import image from '../imgs/internship_logo.svg'
import image1 from '../imgs/footer_text.svg'
import image2 from '../imgs/I4G.svg'


const Footer = () => {
  return (
    <footer>
      {/* <div className='container'> */}
        <img src={image} alt="" className='image' />
        <img src={image1} alt="" className='image' />
        <img src={image2} alt="" className='image' />   
      {/* </div> */}
    </footer>
  )
}

export default Footer
