import React from 'react';
import Data from '../../../public/database.json';

const ListProduct = () => {
    const product = Data.item;

    return (
        <>
            <div className="container-fluid FlashSale">
                <h2 className="my-3"> Bạn Có Thể Thích?</h2>
            </div>
            <div className="Product Container-fluid">
                <div className="row mx-1">
                    {product.map((item, index) => (
                        <div className="col-md" key={index}>
                            <div className="position-relative">
                                <img className="img-fluid" src={item.img} alt="Product" />
                                <img src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_3_tag.png?1706431926539" alt="Frame"
                                    style={{
                                        width: "60%",
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0
                                    }} />
                            </div>
                            <div className="title"><h4>{item.title}</h4></div>
                            <div className="des">
                                <div className="row">
                                    <div className="col-md">
                                        <p className="text-muted">Name</p>
                                    </div>
                                    <div className="col-auto">
                                        <p className="text-muted">Size-S-Freesize</p>
                                    </div>
                                </div>
                            </div>
                            <div className="collor py-3 d-flex">
                                <div className="mx-1 border border-dark circle bg-white" style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}></div>
                                <div className="mx-1 border border-dark circle bg-black" style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}></div>
                                <div className="mx-1 border border-dark circle bg-success" style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}></div>
                                <h6>+1</h6>
                            </div>
                            <div className="row">
                                <h4 className="text-success col-md-5">{item.price}</h4>
                                <del class="text-muted col-md-4 pt-1">690.000₫</del>
                                <h6 class="text-muted col-md pt-1 border rounded bg-warning" >-39%</h6>
                            </div>
                            <div className="d-flex ">
                                <img className="img-fluid pb-2" src="//bizweb.dktcdn.net/100/491/897/themes/915864/assets/hot-sale_1.png?1706431926539"></img>
                                <h6 className="px-1 mt-2" > Đã bán {item.sale}</h6>
                            </div>
                            <div class="line mb-2">
                                <span style={{
                                    width: item.line,
                                    display: 'block',
                                    height: '9px',
                                    borderRadius: '5px',
                                    background: `linear-gradient(90deg, #0cc4d0 0%, #194fdb 100%)`
                                }}></span>
                            </div>
                        </div>
                    ))}
                </div>
             
            </div >
        </>
    );
}

export default ListProduct;
