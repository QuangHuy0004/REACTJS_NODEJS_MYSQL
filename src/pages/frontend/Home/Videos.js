import React from 'react'
import { Link } from 'react-router-dom'
const Video = () => {
    return (
        <>
            <div className='col-md-5 p-0 position-relative' style={{ backgroundColor: "#edf7ff" }}>
                <div className='position-absolute row p-2 rounded top-50 ms-1' style={{ width: "650px", backgroundColor: "#edf7ff", transform: "translateY(-50%)" }}>
                    <div className='col-md-7 p-0 d-flex flex-column justify-content-center'>
                        <h4 class="text-center">LIMITED EDITION</h4>
                        <p class="text-center fs-4">Áo Thun Make Your Own Trail</p>
                        <p className='text-center' style={{ color: "#FF4B00" }}>Sắp mở bán....</p>
                        <Link className="btn btn-primary rounded-pill d-block mx-auto" style={{ width: "fit-content" }} to="/">Đặt hàng trước</Link>

                    </div>
                    <div className='col-md-5 p-0'>
                        <img className='img-fluid ' src='https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/video_image.png?1706431926539' alt='...' />
                    </div>
                </div>
            </div>
            <div className='col-md-7 p-0'>
                <video className='w-100' autoPlay loop muted>
                    <source src="https://www.dropbox.com/s/f07m4ijlnw2c2l1/_import_60c05a3e556e17.85022164_FPpreview.mp4?raw=1" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Video