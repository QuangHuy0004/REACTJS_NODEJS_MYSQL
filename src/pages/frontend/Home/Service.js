import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../../public/database.json';

const Service = () => {
   const srv = Data.services;

    return (
        <>
            <div className="container-fluid mx-3">
                <div className="row">
                    {srv.map((items, index) => (
                        <div className="col-md-3 d-flex justify-content-center align-items-center my-3" key={index}>
                            <div className="rounded-circle border border-primary p-3">
                                <img className="img-fluid" src={items.img} alt="chinhsach1" />
                            </div>
                            <div className="row mt-3 mx-1">
                                <h6><Link class="text-decoration-none" to="/">{items.title}</Link></h6>
                                <p>{items.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Service;
