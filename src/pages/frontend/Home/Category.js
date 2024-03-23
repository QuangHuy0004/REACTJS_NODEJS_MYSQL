import { Link } from "react-router-dom";
const Category = () => {
    const listCategory =
        [
            {
                bg_image: "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhmuc_1.jpg?1706431926539",
                title1: "Sản Phẩm",
                title2: "Áo thời trang",
                link: "/ao-thun",
                image: "//bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhmuc_1.jpg?1706431926539"
            },
            {
                bg_image: "//bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhmuc_2.jpg?1706431926539",
                title1: "Sản Phẩm",
                title2: "Quần thời trang",
                link: "/quan",
                image: "//bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhmuc_2.jpg?1706431926539"
            },
            {
                bg_image: "//bizweb.dktcdn.net/100/491/897/themes/915864/assets/background_danhmuc_3.jpg?1706431926539",
                title1: "Sản Phẩm",
                title2: "Giày và Phụ Kiện",
                link: "/phu-kien",
                image: "//bizweb.dktcdn.net/100/491/897/themes/915864/assets/danhmuc_3.jpg?1706431926539"
            }
        ]
    return (
        <>
            <div className="categorylist py-5 mb-5">
                <div className="mx-4">
                    <div className="row">
                        {listCategory.map((list, index) => (

                            <div className="col-md-4" >
                                <div className="position-relative border rounded-3 px-3 py-5" style={{ backgroundImage: `url(${list.bg_image})` }} >
                                    <h6>{list.title1}</h6>
                                    <h4>{list.title2}</h4>
                                    <Link className="btn btn-primary rounded-pill" to={list.link}>Xem thêm</Link>
                                    <img src={list.image} alt={list.image} className="img-fluid position-absolute top-0 end-0" 
                                    style={{
                                        width: '511',
                                        height:'253'
                                    }}/>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>);
}

export default Category;