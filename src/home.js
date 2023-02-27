import Carousel from "./carousel";
import Layout from "./layout";
import Content from "./content1";
import Mitra from "./mitra";
import Bawah from "./bawah";
import Footer from "./footer";



const Home = () => {
    return (
        <div> 
        <Layout />
        <Carousel />
        <Content />
        <Mitra/>
        <Bawah />
        <Footer />
        </div>
     );
}
 
export default Home;