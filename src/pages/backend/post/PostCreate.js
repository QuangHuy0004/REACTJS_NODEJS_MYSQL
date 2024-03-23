import React from 'react'
import { FaSave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const PostCreate = () => {
    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <h3 className='py-3'>Thêm bài viết</h3>
            <div className='text-end pe-4'>
                <Link to="/admin/post" className='btn btn-primary'><FaArrowLeft className='fs-5 me-2 pb-1' />Về danh sách</Link>
            </div>
            <div className='row py-3'>
                <div className='col-md-9'>
                    <div className="mb-3">
                        <p ><b>Tiêu đề bài viết (*)</b></p>
                        <input type="text" className="form-control" placeholder="Nhập tiêu đề" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Chi tiết (*)</b></p>
                        <textarea rows={7} type="text" className="form-control" placeholder="Nhập chi tiết" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Mô tả (*)</b></p>
                        <textarea rows={4} type="text" className="form-control" placeholder="Mô tả" />
                    </div>

                </div>
                <div className='col-md-3 pe-5'>
                    <div className='row bg-white'>
                        <p className='py-1 m-0' style={{ borderBottom: "2px solid #f2f2f2" }}><b>Đăng</b></p>
                        <div className='py-2' style={{ borderBottom: "2px solid #f2f2f2" }}>
                            <p className='py-2 m-0'>Chọn trạng thái đăng</p>
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>Xuất bản</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='text-end py-2'><button className='btn btn-success'><FaSave className='fs-5 me-2 pb-1' />Đăng</button></div>
                    </div>
                    <div className='row bg-white mt-3'>
                        <p className='py-1 m-0' style={{ borderBottom: "2px solid #f2f2f2" }}><b>Chủ đề (*)</b></p>
                        <div className='py-2' style={{ borderBottom: "2px solid #f2f2f2" }}>
                            <select class="form-select" aria-label="Default select example" >
                                <option selected>None</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='row bg-white mt-3'>
                        <p className='py-1 m-0' style={{ borderBottom: "1px solid #f2f2f2" }}><b>Hình đại diện</b></p>
                        <div className='py-2'>
                            <input type="file" class="form-control" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostCreate