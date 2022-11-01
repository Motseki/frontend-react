import image from '../imgs/slack.svg'
import image1 from '../imgs/social_icon.svg'

const Links = () => {
    return (

      <div>
        <div className={'link'}>
       
          <a href="https://twitter.com/lbmotseki" target="_blank" rel="noreferrer">
          <button id="btn_twitter">Twitter Link</button></a>

          <a href="https://training.zuri.team/" target="_blank" rel="noreferrer">
            <button id="btn_zuri">Zuri Team</button></a>

           <a href="http://books.zuri.team" target="_blank" rel="noreferrer">
            <button id="books">Zuri Books</button></a>

            <a href="https://books.zuri.team/python-for-beginners?ref_id=<Lebohang Bernard Motseki>" target="_blank" rel="noreferrer">
              <button id="book__python">Python Books</button></a>

           <a href="https://background.zuri.team" target="_blank" rel="noreferrer">
            <button id="pitch">Background Checks for Coders</button></a>

           <a href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer">
            <button id="book__design">Design Books</button></a>


          <div className="social">
            <img src={image} alt="" className='image' />
            <img src={image1} alt="" className='image' />
          </div>
        
        </div>
      </div>
    )
  }
  
  export default Links








