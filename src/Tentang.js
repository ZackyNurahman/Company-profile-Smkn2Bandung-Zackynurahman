import Layout from "./layout";
import Bawah from "./bawah";
import Footer from "./footer";
import About from "./about";
import Tim from "./tim";
import Visi from "./vm";

const Tentang = () => {
    return (
        <div>
            <Layout />
            <About />
            <Tim />
            <Visi />
            <Bawah />
            <Footer />
        </div>
    )
}

export default Tentang;