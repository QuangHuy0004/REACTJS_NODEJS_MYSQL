import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import CircularProgress from "@mui/material/CircularProgress";


const BackendLayout = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true); // Khi đổi đường dẫn, bắt đầu hiệu ứng loading

        const delay = setTimeout(() => {
            setLoading(false); // Kết thúc hiệu ứng loading khi dữ liệu đã được tải xong
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

export default BackendLayout;