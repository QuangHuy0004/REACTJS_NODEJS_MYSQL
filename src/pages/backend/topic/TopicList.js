import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import TopicServices from '../../../services/TopicServices';

const TopicList = () => {
    const [topic, setTopic] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const result = await TopicServices.get_list();
                setTopic(result.topic);
            } catch (error) {
                console.error('Error fetching topics:', error);
                // Handle error state if needed
            }
        })();
    }, []);

    return (
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-6'>
                        <strong>Tất cả sản phẩm</strong>
                    </div>
                    <div className='col-6 text-end'>
                        <Link to="/admin/topic/create" className='btn btn-sm btn-success'><IoIosAdd className='fs-3' />Thêm sản phẩm</Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th>Slug</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topic && topic.length > 0 ? (
                            topic.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.slug}</td>
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

export default TopicList
