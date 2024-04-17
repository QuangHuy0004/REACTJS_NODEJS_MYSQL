import Database from "../../../database.json";
const Slide = () => {
  const slides = Database.slides;
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={slide.title}
            ></button>
          ))}
        </div>
        <div className="carousel-inner ">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className= {"carousel-item" + (index === 0 ? " active" : "")}>
              <img
                src={slide.image}
                className=" d-block w-100 m-0 p-0"
                alt={slide.title}/>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slide;
