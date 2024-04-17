import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import ProductServices from '../../../services/ProductServices';
import axios from '../../../httpAxios';

const ProductList = () => {
    const path = "../../";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ProductServices.get_list();
            setProducts(result.products);
        })();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`/products/delete/${productId}`);
            setProducts(products.filter(product => product.id !== productId)); 
            alert("xóa sản phẩm thành công")
        } catch (error) {
            console.error('Error deleting product:', error);
           alert("Xóa sản phẩm thất bại");
        }
    };

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
                            <th>#</th>
                            <th>Hình</th>
                            <th>Tên</th>
                            <th>Danh mục</th>
                            <th>Thương hiệu</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.length > 0 ? (
                            products.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><img width={100} src={path + item.image} alt={item.image} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.brand_id}</td>
                                    <td>
                                        <BiEdit className='fs-3 me-2' style={{ color: "orange", cursor: "pointer" }} />
                                        <FaTrashAlt
                                            className='fs-4'
                                            style={{ color: "red", cursor: "pointer" }}
                                            onClick={() => handleDelete(item.id)} 
                                        />
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
    );
};

export default ProductList;
