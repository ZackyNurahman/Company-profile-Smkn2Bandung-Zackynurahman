import './home.css'
import perta from './pertamina.png'
import {Link} from 'react-router-dom'

const Layout = () => {
    return ( 
        <header className="header">
            <div className="log">
         <img src={perta} />
        </div>
        <ul className="main-nav">
        <Link to={'/home'}>beranda</Link>
          <li><a href="#">visi</a></li>
          <li><a href="#">misi</a></li>
          <Link to={'/tentang'}>tentang</Link>
          <Link to={'/contact'}>contact</Link>
          <li><a href="/login" id='kotak'>Login</a></li>
        </ul>
      </header>
     );
}
 
export default Layout;