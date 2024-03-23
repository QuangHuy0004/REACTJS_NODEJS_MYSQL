import { PiWarningCircleBold } from "react-icons/pi";
import Data from '../../../public/database.json';

const Voucher = () => {
    const backgroundImageUrl = 'url(//bizweb.dktcdn.net/100/491/897/themes/915864/assets/subtract.png?1705550672798)';
    const voucher = Data.vouchers;

    return (
        <div className="row mx-3 my-3 ">
            {voucher.map((item, index) => (
                <div key={index} className="col-md d-flex mx-2" style={{
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: backgroundImageUrl,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    marginBottom: 0
                }}>
                    <div className="p-0 ">
                        <div className="my-3 mx-auto">
                            <img className="mx-1 img-fluid" 
                            style={{ borderRight: '2px dashed blue', paddingRight: '10px' }} 
                            src={item.img} alt="" />
                        </div>
                    </div>
                    <div className=" ps-2 pe-0 m-2 mx-2">
                        <div className="d-flex flex-column justify-content-between">
                            <div className="mb-2">
                                <div className="row">
                                    <h6 className="col-md ">{item.title1}</h6>
                                    <div className="col-md-auto"> <PiWarningCircleBold /> </div>
                                </div>
                                <small className="">{item.title2}</small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="text-primary">
                                    Nhập mã <br />
                                    <b>{item.code}</b>
                                </span>
                                <div className="bg-primary text-white rounded-3 px-3 py-2">
                                    Sao chép
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Voucher;
