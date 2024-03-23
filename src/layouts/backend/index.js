import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Header';
import Footer from './Footer';

const BackendLayout = () => {
    return (
        <section className="maincontent" >
            <Header />
                <div className="container-fluid py-2 " >
                    <Outlet />
                </div>
            <Footer />
        </section>
    );
}

export default BackendLayout;