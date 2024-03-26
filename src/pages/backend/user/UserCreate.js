import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";
const UserCreate = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    checkPassword: "",
    email: "",
    checkEmail: "",
    phone: "",
    name: "",
    gender: 1,
    address: "",
    img: "",
    status: "1",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      username: "",
      password: "",
      checkPassword: "",
      email: "",
      checkEmail: "",
      phone: "",
      name: "",
      gender: 1,
      address: "",
      img: "",
      status: "1",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="fs-4">Thêm thành viên</strong>
            </div>
            <div className="col-6 text-end">
              <Link to="/admin/user" className="btn btn-sm btn-info text-white me-2" ><FaArrowLeft className="me-1" />Về danh sách</Link>
              <button type="submit" className="btn btn-sm btn-success">
                <FaSave className="me-1" />
                Lưu
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="inputUserName" className="form-label">
                  <strong>Tên đăng nhập (*)</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUserName"
                  name="username"
                  value={data.username || ""}
                  onChange={handleChange}
                  placeholder="Tên đăng nhập"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  <strong>Mật khẩu (*)</strong>
                </label>
                <input
                  type="text"
                  id="inputPassword"
                  className="form-control"
                  name="password"
                  value={data.password || ""}
                  onChange={handleChange}
                  placeholder="Mật khẩu"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="checkPassword" className="form-label">
                  <strong>Xác nhận mật khẩu (*)</strong>
                </label>
                <input
                  type="text"
                  id="checkPassword"
                  className="form-control"
                  name="checkPassword"
                  value={data.checkPassword || ""}
                  onChange={handleChange}
                  placeholder="Xác nhận mật khẩu"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  <strong>Email (*)</strong>
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  name="email"
                  value={data.email || ""}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="checkEmail" className="form-label">
                  <strong>Xác nhận Email (*)</strong>
                </label>
                <input
                  type="email"
                  id="checkEmail"
                  className="form-control"
                  name="checkEmail"
                  value={data.checkEmail || ""}
                  onChange={handleChange}
                  placeholder="Xác nhận Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  <strong>Điện thoại (*)</strong>
                </label>
                <input
                  type="text"
                  id="inputPhone"
                  className="form-control"
                  name="phone"
                  value={data.phone || ""}
                  onChange={handleChange}
                  placeholder="Điện thoại"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  <strong>Họ tên (*)</strong>
                </label>
                <input
                  type="text"
                  id="inputName"
                  className="form-control"
                  name="name"
                  value={data.name || ""}
                  onChange={handleChange}
                  placeholder="Họ tên"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <strong>Giới tính</strong>
                </label>
                <select
                  className="form-select"
                  name="gender"
                  value={data.gender || 1}
                  onChange={handleChange}
                >
                  <option value="0">Chọn giới tính</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">
                  <strong>Địa chỉ (*)</strong>
                </label>
                <input
                  type="text"
                  name="address"
                  value={data.address || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Địa chỉ"
                  required
                  id="inputAddress"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="selectImg" className="form-label">
                  <strong>Hình ảnh đại diện (*)</strong>
                </label>
                <input
                  type="file"
                  name="img"
                  value={data.img || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="selectImg"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  <strong>Trạng thái</strong>
                </label>
                <select
                  className="form-select"
                  name="status"
                  value={data.status}
                  onChange={handleChange}
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserCreate;
