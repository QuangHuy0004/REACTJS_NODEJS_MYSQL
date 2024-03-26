import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import BannerServices from '../../../services/BannerServices';

const BannerList = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        (async() =>{
            const result = await BannerServices.get_list();
            setBanner(result.banner);
        })();
    },[]);

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-6'>
                        <strong>Tất cả sản phẩm</strong>
                    </div>
                    <div className='col-6 text-end'>
                        <Link to="/admin/product/create" className='btn btn-sm btn-success'><IoIosAdd className='fs-3' />Thêm sản phẩm</Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            {/* <th>#</th> */}
                            <th>Id</th>
                            <th>Tên</th>
                            <th>Link</th>
                            <th>Position</th>
                            <th>Image</th>
                            <th>Trang thai</th>
                            {/* <th>Chuc nang</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {banner && banner.length > 0 ? (
                            banner.map((item, index) => (
                                <tr key={index}>
                                    {/* <td>{index + 1}</td> */}
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.link}</td>
                                    <td>{item.position}</td>
                                    <td>    <img width={100} src={item.image} alt={item.name} />    </td>
                                    <td>{item.status}</td>
                                    <td>
                                        <BiEdit className='fs-3 me-2' style={{ color: "orange", cursor: "pointer" }} />
                                        <FaTrashAlt className='fs-4' style={{ color: "red", cursor: "pointer" }} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Không có sản phẩm nào</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BannerList
