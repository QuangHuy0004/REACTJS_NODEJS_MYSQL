import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import UserServices from '../../../services/UserServices';

const UserList = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        (async() =>{
            const result = await UserServices.get_list();
            setUser(result.user);
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
                        <Link to="/admin/user/create" className='btn btn-sm btn-success'><IoIosAdd className='fs-3' />Thêm sản phẩm</Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>Ten tai khoan</th>
                            <th>Mat khau</th>
                            <th>email</th>
                            <th>Phone </th>
                            <th>Image </th>
                            <th>gioi tinh </th>
                            <th>Dia chi </th>
                        </tr>
                    </thead>
                    <tbody>
                    {user && user.length > 0 ? (
                            user.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>    <img width={100} src={item.image} alt={item.name} />    </td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
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

export default UserList
