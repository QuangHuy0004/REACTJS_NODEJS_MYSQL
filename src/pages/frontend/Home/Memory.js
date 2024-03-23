import Data from '../../../public/database.json';

const Memory = () => {
  const item = Data.itemImages;
  return (
    <>
      <div className="row my-4 mx-2 my-2 ">
        <h2 className="d-flex justify-content-center" > Quang Huy
          <img className="ms-3 me-3" src="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/instagram_-2-_1.png?1706431926539" />
        </h2>
        {item.map((items, index) => (
          <div className="col-md-3 py-2" key={index}>
            <img
              className="img-fluid rounded-3"
              src={items.image}
              alt="ảnh"
            />
          </div>
        ))}

      </div>
    </>
  );
}

export default Memory;