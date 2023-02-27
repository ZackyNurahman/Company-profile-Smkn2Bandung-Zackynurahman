import logo1 from './malefemale.png'
import './cn.css'

const Content = () => {
    return ( 
        <>
            <div className="content-wrapper">
                <div className="cn1">
                    <div className="foto1">
                    <img src={logo1} />
                    </div>
                    <div className="kata1">
                        <h1>Lorem.</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam repudiandae delectus in quisquam neque nobis fuga exercitationem maxime natus, alias doloremque, placeat, inventore iusto dolorum eligendi ea mollitia sunt nam ex commodi facere corrupti quaerat minus! Ab soluta at totam laboriosam consequatur dolores voluptatum facilis excepturi omnis ad expedita saepe ipsa, quibusdam, optio, voluptates illo libero nihil? Vitae, omnis libero soluta eos sint dolores temporibus!</p>
                        <button className="glowing-btn"><span className="glowing-txt">C<span className="faulty-letter">L</span>ICK</span></button>
                        </div>
                </div>
                <div className="cn3">
                    <div className="foto1">
                    <img src={logo1} />
                    </div>
                    <div className="kata2">
                        <h1>Lorem.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus recusandae doloremque sequi laudantium rerum fugiat odit eum dolores veniam quam tempora at officiis sint molestiae magni, distinctio est totam harum, ea fugit adipisci eaque nesciunt non. Molestiae earum nihil explicabo quos veritatis unde, voluptas, laudantium inventore incidunt expedita consequatur itaque aspernatur autem vero nisi maiores quia atque adipisci exercitationem veniam, quis enim hic! Rem, quia.</p>
                        <button className="glowing-btn"><span className="glowing-txt">C<span className="faulty-letter">L</span>ICK</span></button>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Content;