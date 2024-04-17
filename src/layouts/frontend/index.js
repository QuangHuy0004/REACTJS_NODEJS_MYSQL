import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress";

const LayoutFrontend = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        const delay = setTimeout(() => {
            setLoading(false);
        }, 700);
        return () => clearTimeout(delay);

    }, []);

    return (
        <section className="maincontent" >
            <Header />
            <div className="container-fluid py-2 " >
                {
                    loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div> : <Outlet />
                }
            </div>
            <Footer />
        </section>
    );
}

export default LayoutFrontend;