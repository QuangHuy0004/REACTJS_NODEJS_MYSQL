import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
// import Home from './../../pages/frontend/Home/index';

const FrontendLayout = () => {
    return ( 
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
     );
}
 
export default FrontendLayout;