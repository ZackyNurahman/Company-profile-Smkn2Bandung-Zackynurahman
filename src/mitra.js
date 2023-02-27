import './mt.css'
import Logo from './pertamina.png'
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Mitra = () => {
    return (
        <div className="mitra">
            <h1>Mitra kami</h1>
            <div className="sponsor">
            <MdOutlineArrowBackIosNew className='arrow'/>
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
            </div>
            <div className="sponsor">
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <img src={Logo} alt="" />
                <MdArrowForwardIos className='icon'/>
                
            </div>
        </div>
      );
}
 

export default Mitra;