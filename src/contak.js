import './ck.css'
import { FaWhatsapp, FaInstagram,FaYoutube,FaFacebookSquare} from "react-icons/fa";


const Contak = () => {
    return (
        <div className="all2">
            <h1>Hubungi Kami</h1>
         <div className="kontak">
             <div className="kontak-row">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cupiditate accusamus minus dignissimos iste nihil, suscipit quas voluptate dolorum laudantium.</p>
                <div className="sosmed-row">
                    <div className="sosmed">
                        <a href=""><FaWhatsapp fontSize="20px"/> 0892842847</a>
                        <a href=""><FaInstagram fontSize="20px"/> @Pertamina</a>
                    </div>
                    <div className="sosmed">
                        <a href=""><FaYoutube fontSize="20px"/> Pertamina ID</a>
                        <a href=""><FaFacebookSquare fontSize="20px"/> Pertamina ID</a>
                    </div>
                </div>
             </div>
         </div>
         <div className="pesan">
            <h1>Kirim Pesan Langsung</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur modi consequuntur facilis possimus totam, dolore ipsum laboriosam nobis obcaecati molestias accusantium rerum perferendis. Dicta, ducimus.</p>
            <div className="textarea">
                <textarea name="" id="" cols="200" rows="10"></textarea>
            </div>
            <div className="bton">
                <button className="custom-btn btn-2">Read More</button>
            </div>
         </div>
            
        </div>
      );
}
 
export default Contak;
