import React from 'react'
import { FaSave } from "react-icons/fa";

const TopicCreate = () => {
    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <h3 className='py-3'>Chủ đề bài viết</h3>
            <div className='row py-3'>
                <div className='col-md-4'>
                    <div className="mb-3">
                        <p ><b>Tên chủ đề (*)</b></p>
                        <input type="text" className="form-control" id="namecategory" placeholder="Nhập tên chủ đề" />
                    </div>
                    <div className="mb-3">
                        <p ><b>Mô tả</b></p>
                        <textarea rows={5} type="text" className="form-control" id="description" placeholder="mô tả" />
                    </div>
                    <div className='mb-3'>
                        <p ><b>Trạng thái</b></p>
                        <select id="statuscategory" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className='text-end'><button className='btn btn-success'><FaSave className='fs-5 me-2 pb-1' />Lưu[Cập nhật]</button></div>
                </div>
                <div className='col-md-8'>
                    <div className="mb-2">
                        <span className='px-2' style={{ borderRight: "1px solid black" }}>Tất cả (123)</span>
                        <span className='px-2' style={{ borderRight: "1px solid black" }}>Xuất bản (12)</span>
                        <span className='px-2' >Rác (12)</span>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className="col-md-4">

                                    <select class="form-select" aria-label="Default select example" style={{ width: "150px" }}>
                                        <option selected>Hành động</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-md-6'>
                                    <button>Áp dụng</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-6 text-end'>
                            <input type="text" width={400} />
                            <button>Tìm kiếm</button>
                        </div>
                    </div>
                    <div className='row p-3'>
                        <table class="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th ><input type='checkbox' /></th>

                                    <th >Tên chủ đề</th>
                                    <th >Tên slug</th>
                                    <th >id</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th ><input type='checkbox' /></th>

                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopicCreate