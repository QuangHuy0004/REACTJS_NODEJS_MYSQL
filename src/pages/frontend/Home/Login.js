import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    // Kiểm tra định dạng của các trường dữ liệu trước khi đăng ký
    if (!validateFirstName(firstName)) {
      // Focus vào ô nhập tên
      document.getElementById("inputFirstName").focus();
      return;
    }

    if (!validateLastName(lastName)) {
      // Focus vào ô nhập họ
      document.getElementById("inputLastName").focus();
      return;
    }

    // Tiếp tục kiểm tra các trường dữ liệu khác và thực hiện đăng ký
    // ...

    // Nếu mọi thứ hợp lệ, hiển thị thông báo thành công
    toast.success("Đăng ký thành công!");
  };

  const validateFirstName = (value) => {
    // Kiểm tra định dạng tên
    return /^[a-zA-Z]+$/.test(value);
  };

  const validateLastName = (value) => {
    // Kiểm tra định dạng họ
    return /^[a-zA-Z]+$/.test(value);
  };

  return (
    <>
      <Toaster />
      <div className="checkout">
        <div className="container">
          <div className="checkout__form">
            {/* Form đăng ký */}
            <div className="row">
              <div className="col-lg col-md">
                <h2 className="checkout___title text-success text-center">
                  Register Now
                </h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Fist Name<span>*</span>
                      </p>
                      <input
                        type="text"
                        id="inputFirstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Last Name<span>*</span>
                      </p>
                      <input
                        type="text"
                        id="inputLastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* Các trường dữ liệu khác */}
                <div className="checkout__input__checkbox text-center">
                  <p className="text-center">
                    Khi bạn đã ấn nút đăng ký đồng nghĩa với việc bạn đã chấp
                    hành theo các chính sách của chúng tôi!{" "}
                  </p>
                  <p className="text-center text-warning">
                    Vui lòng xem lại các thông tin trước khi đăng ký! <br />
                    Chào mừng bạn đến với FashionShop{" "}
                  </p>
                  <button
                    className="btn btn-success px-3 m-3"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <marquee>
          FashionShop là đơn vị mua bán thời trang uy tín, hợp tác với nhiều
          brand lớn, với sứ mệnh mong muốn đem đến cho người dùng những sản phảm
          tốt nhất!
        </marquee>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.768698203672!2d106.70098751402182!3d10.77410336229337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b13fb7d035b%3A0x751e62d176f8c650!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1648263706073!5m2!1sen!2sus"
          height={500}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </>
  );
};
export default Login;

