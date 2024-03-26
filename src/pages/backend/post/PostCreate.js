import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";
const PostCreate = () => {
  const [data, setData] = useState({
    title: "",
    detail: "",
    description: "",
    topic_id: 1,
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
      title: "",
      detail: "",
      description: "",
      topic_id: 1,
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
              <strong className="fs-4">Thêm bài viết</strong>
            </div>
            <div className="col-6 text-end">
              <Link
                to="/admin/post"
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
                <label htmlFor="inputTitle" className="form-label">
                  <strong>Tiêu đề bài viết (*)</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  name="title"
                  value={data.title || ""}
                  onChange={handleChange}
                  placeholder="Nhập tiêu đề"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputDetail" className="form-label">
                  <strong>Chi tiết (*)</strong>
                </label>
                <textarea
                  rows={6}
                  id="inputDetail"
                  className="form-control"
                  name="detail"
                  value={data.detail || ""}
                  onChange={handleChange}
                  placeholder="Nhập chi tiết sản phẩm"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="inputDes" className="form-label">
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  rows={3}
                  id="inputDes"
                  name="description"
                  value={data.description || ""}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nhập mô tả"
                  required
                  ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label">
                  <strong>Chủ đề (*)</strong>
                </label>
                <select
                  className="form-select"
                  name="topic_id"
                  value={data.topic_id || 1}
                  onChange={handleChange}
                >
                  <option value="0">None</option>
                </select>
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

export default PostCreate;
