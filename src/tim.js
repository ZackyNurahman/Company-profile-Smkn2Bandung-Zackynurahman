import './tm.css'
import Logo3 from './nic.jpg'
import Logo4 from './cor.jpeg'


const Tim = () => {
    return (  
<div className='all'>
    <div className='judul4'>
    <h1>Tim Kami</h1>
    </div>
        <div className="sponsor">
                <img src={Logo3} alt="" />
                <div className='kata6'>
                    <h1>Nicky Widyawati</h1>
                    <p>president director</p>
                </div>
                <img src={Logo3} alt="" />
                <div className='kata6'>
                    <h1>Nicky Widyawati</h1>
                    <p>president director</p>
                </div>
                <img src={Logo3} alt="" />
                <div className='kata6'>
                    <h1>Nicky Widyawati</h1>
                    <p>president director</p>
                </div>
            </div>
            <div className="sponsor">
            <img src={Logo4} alt="" />
            <div className='kata6'>
                    <h1>Brahmantya saty </h1>
                    <p>senior secretary</p>
                </div>
                <div className="sponsor">
            <img src={Logo4} alt="" />
            <div className='kata6'>
                    <h1>Brahmantya saty </h1>
                    <p>senior secretary</p>
                </div>
                <img src={Logo4} alt="" />
                <div className='kata6'>
                    <h1>Brahmantya saty </h1>
                    <p>senior secretary</p>
                </div>
                </div>
            </div>
            </div>
    );
}
 
export default Tim;