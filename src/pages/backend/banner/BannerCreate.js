import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";

const BannerCreate = () => {
  const [data, setData] = useState({
    name: "",
    link: "",
    description: "",
    position: 0,
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
      name: "",
      link: "",
      description: "",
      position: 0,
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
              <strong className="fs-4">Thêm banner</strong>
            </div>
            <div className="col-6 text-end">
              <Link
                to="/admin/banner"
                className="btn btn-sm btn-info text-white me-2"
              >
                <FaArrowLeft className="me-1" />
                Về danh sách
              </Link>

              <button type="submit" className="btn btn-sm btn-success">
                <FaSave className="me-1" />
                Lưu
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  <strong>Tên banner (*)</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  value={data.name || ""}
                  onChange={handleChange}
                  placeholder="Nhập tên banner"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputLink" className="form-label">
                  <strong>Liên kết</strong>
                </label>
                <input
                  type="text"
                  id="inputLink"
                  className="form-control"
                  name="link"
                  value={data.link || ""}
                  placeholder="Nhập liên kết"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputDes" className="form-label">
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  rows={6}
                  id="inputDes"
                  name="description"
                  value={data.description || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập tên mô tả"
                  required
                  ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label">
                  <strong>Vị trí (*)</strong>
                </label>
                <select
                  className="form-select"
                  name="position"
                  value={data.position || 1}
                  onChange={handleChange}
                >
                  <option value="0">Chọn vị trí</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="selectImg" className="form-label">
                  <strong>Hình ảnh (*)</strong>
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

export default BannerCreate;
