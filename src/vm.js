import logo4 from './malefemale.png'
import logo5 from './awal.png'
import { AiFillCheckCircle } from "react-icons/ai";
import './vimi.css'


const Visi = () => {
    return ( 
        <div className='wrap'>
        <div className="cn7">
        <div className="foto1">
        <img src={logo4} />
        </div>
        <div className="kata7">
            <h1>Visi</h1>
            <p><AiFillCheckCircle fontSize="1rem"/>Menjadi perusahaan yang energi nasional di kelas internasional</p>
            <p><AiFillCheckCircle fontSize="1rem"/>Menjadi perusahaan produksi minyak dan gas bumi kelas dunia</p>
            <p><AiFillCheckCircle fontSize="1rem"/>To become Indonesia's green energy toward achieving  zero in 2060</p>
        </div>
    </div>
    <div className="cn1">
                    <div className="foto8">
                    <img src={logo4} />
                    </div>
                    <div className="kata8">
                        <h1>Misi</h1>
                        <p><AiFillCheckCircle fontSize="1rem"/>"Menjalankan usaha minyak,gas,serta energi baru dan terbarukan secara terintegrasi, berdasarkan prinsip-prinsip komersial yg kuat."</p>
                        <p><AiFillCheckCircle fontSize="1rem"/>“Melaksanakan pengusahaan sektor hulu minyak dan gas dengan penekanan pada aspek komersial dan operasi yang baik, serta tumbuh dan berkembang bersama lingkungan hidup.”</p>
                        <p><AiFillCheckCircle fontSize="1rem"/>menjalankan usaha retail minyak, gas, non-fuel, energy baru dan terbarukan. Kami menyediakan produk dan layanan berkualitas berbasis teknologi modern melalui jaringan yang luas dan terintegrasi hingga ke pelosok negeri.</p>
                        </div>
                </div>
                <div className='judul2'>
                 <h1>Sejarah</h1>
                </div>
                <div className="cn13">
                    <div className="foto13">
                    <img src={logo5} />
                    </div>
                    <div className="kata13">
                        <h3>1957</h3>
                        <p>Pada 10 Desember 1957, perusahaan tersebut berubah nama menjadi PT Perusahaan Minyak Nasional, disingkat PERMINA. Tanggal ini diperingati sebagai lahirnya Pertamina hingga saat ini. Pada 1960, PT Permina berubah status menjadi Perusahaan Negara (PN) Permina. Kemudian, PN Permina bergabung dengan PN Pertamin menjadi PN Pertambangan Minyak dan Gas Bumi Negara (Pertamina) pada 20 Agustus 1968.</p>
                        <button className="glowing-btn"><span className="glowing-txt">R<span className="faulty-letter">E</span>AD MORE</span></button>
                        </div>
                </div>
    </div>
     );
}
 
export default Visi;