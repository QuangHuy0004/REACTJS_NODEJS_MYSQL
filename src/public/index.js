import { Outlet } from "react-router-dom";
import Header from "../layouts/frontend/Header";
import Footer from "../layouts/frontend/Footer";

const LayoutFrontend = () => {
    return ( <>
        <Header/>
        <Outlet/>
        <Footer/>
    </> );
}
 
export default LayoutFrontend;