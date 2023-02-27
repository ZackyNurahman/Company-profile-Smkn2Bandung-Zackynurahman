import logo from './perta1.png';
import './bwh.css'
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import {BsFillTelephoneOutboundFill } from "react-icons/bs";

const Bawah = () => {
    return ( 
        <div className="ft">
            <div className="foto2">
         <img src={logo} />
         <div className="cn4">
         <h4>follow us </h4>
         <div>
         <AiFillInstagram id='icon'/>
         <BsTwitter id='icon'/>
         <BsFillTelephoneOutboundFill id='icon' />
         </div>
         </div>
         </div>
         <div className="text1">
            <h1>Lorem.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio, sed aliquid ratione ducimus repudiandae! Aspernatur et, maxime ratione id corrupti labore laboriosam maiores magni deserunt! Ratione aperiam numquam quas cumque tempore nobis amet vel maxime! Iste autem dignissimos tempora labore laudantium numquam eligendi atque, delectus sapiente expedita voluptates dolores molestias sint ipsum ipsam explicabo, praesentium vero sunt, debitis optio!</p>
            <div className="btn2">
                <button className="custom-btn2 btn-3">Click</button>
            </div>
         </div>
        </div>
     );
}
 
export default Bawah;
