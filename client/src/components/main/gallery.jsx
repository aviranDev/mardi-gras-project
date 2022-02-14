import PageHeader from "../common/pageHeader";
import Border3 from "../common/border3";

const Gallery = () => {
  return (
    <div className="container min-vh-100 mt-5">
      <PageHeader title="Mardi gras gallery" />
      <Border3 />

      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="./img/gallery/1.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src="./img/gallery/2.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="./img/gallery/3.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src="./img/gallery/4.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="./img/gallery/5.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src="./img/gallery/6.jpg"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
