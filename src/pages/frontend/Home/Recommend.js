import { Link } from 'react-router-dom';

const Recommend = () => {
   
    return (<>
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-5">
                    <h2 className="mx-4" > MẶC GÌ HÔM NAY? </h2>
                    <input className="mx-4 my-2 bg-muted border border-dark mb-2"
                        style={{
                            width: '500px',
                            fontSize: '16px',
                            borderRadius: '70px',
                            height: '70px',
                            border: '0',
                            padding: '0 80px 0 30px'
                        }}
                        placeholder="Nhập tên sản phẩm..."
                    />
                </div>
                <div className="col-md-7">
                    <h4 className="">Từ khóa nổi bật hôm nay? </h4>
                    <ul className="list-unstyled d-flex flex-wrap">
              <li className="py-2 px-3 text-center rounded-pill border border border-black me-2 mb-2">
                <Link className=" text-decoration-none text-black" to="#">
                  Áo Thun
                </Link>
              </li>

              <li className="py-2 px-3 text-center rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className="text-decoration-none text-black" to="#">
                  Quần short
                </Link>
              </li>

              <li className=" px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className="text-decoration-none text-black" to="#">
                  Quần Kaki & Chino
                </Link>
              </li>

              <li className="px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className="text-decoration-none text-black" to="#">
                  Mắt Kính
                </Link>
              </li>

              <li className="px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className="text-decoration-none text-black" to="#">
                  Áo Nỉ Và Len
                </Link>
              </li>

              <li className="px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className="text-decoration-none text-black" to="#">
                  Áo Khoác
                </Link>
              </li>

              <li className="px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className="text-decoration-none text-black" to="#">
                  Áo Sơ mi
                </Link>
              </li>

              <li className="px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className="text-decoration-none text-black" to="#">
                  Áo Polo
                </Link>
              </li>

              <li className="px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className=" text-decoration-none text-black" to="#">
                  Hoodie
                </Link>
              </li>

              <li className=" px-3 rounded-pill border border border-black me-2 mb-2 py-2 text-center">
                <Link className=" text-decoration-none text-black" to="#">
                  Tank Top - Áo Ba Lỗ
                </Link>
              </li>

              <li className="px-3 py-2 rounded-pill border border border-black me-2 mb-2 text-center">
                <Link className=" text-decoration-none text-black" to="#">
                  Quần Jogger
                </Link>
              </li>
            </ul>
                </div>

            </div>
        </div >
    </>);
}

export default Recommend;