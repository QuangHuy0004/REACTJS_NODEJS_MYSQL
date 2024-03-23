import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCartDash } from "react-icons/bs";
import { FiUser   } from "react-icons/fi";
import { GoBell , GoHeart } from "react-icons/go";
import { IoSearchOutline   } from "react-icons/io5";

function BasicExample() {
  return (
    <Navbar  style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif'}} >
      <Nav>
        <Nav.Item className='mx-2' >
          <Nav.Link  href="/">Trang chủ</Nav.Link>
        </Nav.Item>
        <Nav.Item className='mx-2' >
          <Nav.Link href="san-pham">Sản phẩm</Nav.Link>
        </Nav.Item>
        <Nav.Item className='mx-2' >
          <Nav.Link href="ve-chung-toi">Về chúng tôi</Nav.Link>
        </Nav.Item>
        <Nav.Item className='mx-2' >
          <Nav.Link href="sale">Sale</Nav.Link>
        </Nav.Item>
        <Nav.Item className='mx-2' >
          <Nav.Link href="tin-tuc">Tin tức</Nav.Link>
        </Nav.Item>
        <Nav.Item className='mx-2' >
          <Nav.Link href="cskh">Chăm sóc khách hàng</Nav.Link>
        </Nav.Item>
        <Nav.Item className='mx-2' >
          <Nav.Link href="lien-he">Liên hệ</Nav.Link>
        </Nav.Item>
        <Nav.Item className='mx-2' >
          <Nav.Link href="he-thong-khach-hang">Hệ thống khách hàng</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

const Header = () => {
  return (
    <div fluid="md">
      <div className="row ">
        <div className="col-md ">
          <img
            className="py-4 mx-5"
            src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/logo.png?1706431926539"
            alt="Logo"
          />
        </div>
        <div className="col-md-8 py-3 container">
          <BasicExample />
        </div>
        <div className="col-md py-4 mr-2" >
          <IoSearchOutline  size={26}  />
          <FiUser  size={26} className="mx-1"/>
          <GoHeart size={26}className="mx-1"/>
          <BsCartDash size={26}className="mx-1"/>
          <GoBell size={26}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
