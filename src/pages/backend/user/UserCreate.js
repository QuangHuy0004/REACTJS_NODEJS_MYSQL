import React from 'react'
import { FaSave } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const UserCreate = () => {
    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <h3 className='py-3'>Thêm thành viên</h3>
            <div className='text-end'>
                <button className='btn btn-success me-2'><FaSave className='fs-5 me-2 pb-1' />Lưu[thêm]</button>
                <Link to="/admin/user" className='btn btn-primary'><FaArrowLeft className='fs-5 me-2 pb-1' />Về danh sách</Link>
            </div>

            <div className='row py-3'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <p ><b>Tên đăng nhập (*)</b></p>
                        <input type="text" className="form-control" placeholder="Tên đăng nhập" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Mật khẩu (*)</b></p>
                        <input type="text" className="form-control" placeholder="Mật khẩu" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Xác nhận mật khẩu (*)</b></p>
                        <input type="text" className="form-control" placeholder="Xác nhận mật khẩu" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Email (*)</b></p>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Xác nhận email (*)</b></p>
                        <input type="email" className="form-control" placeholder="Xác nhận email" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Điện thoại (*)</b></p>
                        <input type="text" className="form-control" placeholder="Điện thoại" />
                    </div>


                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <p ><b>Họ tên (*)</b></p>
                        <input type="text" className="form-control" placeholder="Họ tên" />
                    </div>
                    <div className='mb-3'>
                        <p ><b>Giới tính</b></p>
                        <select id="statuscategory" className="form-select">
                            <option selected>Chọn giới tính</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <p ><b>Địa chỉ</b></p>
                        <input type="text" className="form-control" placeholder="Địa chỉ" />
                    </div>

                    <div class=" mb-3">
                        <p ><b>Hình đại diện</b></p>
                        <input type="file" class="form-control" id="inputGroupFile02" />
                    </div>
                    <div className='mb-3'>
                        <p ><b>Trạng thái</b></p>
                        <select id="statuscategory" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserCreate