import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
const BannerList = () => {
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-6'>
                        <strong>Tất cả banner</strong>
                    </div>
                    <div className='col-6 text-end'>
                        <Link to="/admin/banner/create" className='btn btn-sm btn-success'><IoIosAdd className='fs-3' />Thêm banner</Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hình</th>
                            <th>Tên</th>
                            <th>Danh mục</th>
                            <th>Thương hiệu</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ttt</td>
                            <td>ttt</td>
                            <td>ttt</td>
                            <td>ttt</td>
                            <td>

                                <Link to="/admin/category/create"><BiEdit className='fs-3 me-2' style={{ color: "orange", cursor: "pointer" }} /></Link>
                                <FaTrashAlt className='fs-4' style={{ color: "red", cursor: "pointer" }} />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><img width={100} src='https://bizweb.dktcdn.net/thumb/large/100/491/897/products/ao-so-mi-nam-10s23shl003-arctic-2.png?v=1692882926430' alt='...' /></td>
                            <td>ttt</td>
                            <td>ttt</td>
                            <td>ttt</td>
                            <td>

                                <BiEdit className='fs-3 me-2' style={{ color: "orange", cursor: "pointer" }} />
                                <FaTrashAlt className='fs-4' style={{ color: "red", cursor: "pointer" }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BannerList