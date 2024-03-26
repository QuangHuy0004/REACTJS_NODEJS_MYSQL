import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import CategoryServices from '../../../services/CategoryList';

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        (async() =>{
            const result = await CategoryServices.get_list();
            setCategory(result.category);
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
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Trang thai</th>
                        </tr>
                    </thead>
                    <tbody>
                    {category && category.length > 0 ? (
                            category.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.slug}</td>
                                    <td>    <img width={100} src={item.image} alt={item.name} />    </td>
                                    <td>{item.description}</td>
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

export default CategoryList
