import Data from '../../../public/database.json';

const Product2 = () => {
const product = Data.products;
    return ( 
       
        <>
            <div className="container-fluid FlashSale">
               <h2 className="py-2 px-1" > Siêu Sale 9.9 </h2>
            </div>
            <div className="Product Container-fluid">
                <div className="row mx-1">
                    {product.map((item, index) => (
                        <div className="col-md" key={index}>
                            <div className="position-relative">
                                <img className="img-fluid" src={item.img} alt="Product" />
                                <img src="//bizweb.dktcdn.net/100/491/897/themes/915864/assets/title_image_1_tag.png?1706431926539" alt="Frame"
                                    style={{
                                        width: "35%",
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0
                                    }} />
                            </div>
                            <div className="title pt-2"><h4>{item.title}</h4></div>
                            <div className="des">
                                <div className="row">
                                    <div className="col-md">
                                        <p className="text-muted">Nam</p>
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
                        </div>
                    ))}
                </div>
            </div >
        </>
     );
}
 
export default Product2;