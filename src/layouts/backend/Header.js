import { Link } from 'react-router-dom';
const Header = () => {
    return (<section className="Header">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary"  >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Admin</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/order">Đơn hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/customer">Khách hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/contact">Liên hệ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sản Phẩm
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm </Link></li>
                                    <li><Link className="dropdown-item" to="/admin/category/list">Danh mục sản phẩm</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/brand/list">Thương hiệu</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bài Viết
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/blogs">Tất cả bài viết</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/type-blogs">Loại bài viết</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/singe-blogs">Trang đơn</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Giao Diện
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/menu">Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/slide">Slide</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/member" aria-disabled="true">Thành viên</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </section>);
}

export default Header;