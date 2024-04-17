

const ProductDetail = () => {
    (
        <div className="container-fluid">
            <div className="row">
         
                <div className='col-md-6'>
                    <img className='img-fluid' src="img/product/product-2.jpg" alt="Ảnh sản phẩm" />
                </div>
                <div className='col-md-6'>
                    <h2>Áo Polo Nam Premium Tay Ngắn Phối Viền Có Form Fitted</h2>
                    <p>Giá: <span id="product-price">638.000 đ</span></p>
                    <div>
                        <label htmlFor="color">Chọn màu sắc:</label>
                        <select id="color">
                            <option value="bright-white">BRIGHT WHITE</option>
                            <option value="navy">NAVY</option>
                            <option value="silver">SILVER</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="size">Chọn size:</label>
                        <div id="size-buttons">
                            <button className="size-button">S</button>
                            <button className="size-button">M</button>
                            <button className="size-button">L</button>
                            <button className="size-button">XL</button>
                            <button className="size-button">XXL</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="quantity">Chọn số lượng:</label>
                        <div id="quantity-control">
                            <button id="decrease-quantity">-</button>
                            <input type="number" id="quantity" value="1" min="1" />
                            <button id="increase-quantity">+</button>
                        </div>
                    </div>
                    <button id="add-to-cart">THÊM VÀO GIỎ HÀNG</button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;
