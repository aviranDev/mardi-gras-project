import PageHeader from "../common/pageHeader";
import Border from "../common/border";
const About = () => {
  return (
    <div className="container min-vh-100 mt-5">
      <Border />
      <PageHeader title="About us" />
      <div className="row">
        <div className="col-8">
          <p>
            We are provides the best and most attractive merchandise of new
            orleans mardi-gras items prododucts. We are belive that the happines
            and joy can not be depends of money and possession. Once a year we
            are celebriting our festival in town, we are looking for you to come
            in town and enjoy with us in mardi gras new orleans festival.
          </p>
        </div>

        <div className="col-4 text-center">
          <img className="img-thumbnail" src="./img/supervisor.png" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-3">
          <p>
            The festival season varies from city to city, as some traditions,
            such as the one in New Orleans, Louisiana, consider Mardi Gras to
            stretch the entire period from Twelfth Night to Ash Wednesday.
            Others treat the final three-day period before Ash Wednesday as the
            Mardi Gras. In Mobile, Alabama, Mardi Gras-associated social events
            begin in November, followed by mystic society balls on Thanksgiving,
            then New Year's Eve, followed by parades and balls in January and
            February, celebrating up to midnight before Ash Wednesday. In
            earlier times, parades were held on New Year's Day. Carnival is an
            important celebration in Anglican and Catholic European nations.
          </p>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-4">
          <img
            className="img-fluid text-center"
            style={{ width: "100%" }}
            src="./img/2022.png"
            alt="2022"
          />
        </div>

        <div className="col-lg-6 ms-4">
          <p>
            While not observed nationally throughout the United States, a number
            of traditionally ethnic French cities and regions in the country
            have notable celebrations. Mardi Gras arrived in North America as a
            French Catholic tradition with the Le Moyne brothers,[14] Pierre Le
            Moyne d'Iberville and Jean-Baptiste Le Moyne de Bienville, in the
            late 17th century, when King Louis XIV sent the pair to defend
            France's claim on the territory of Louisiane, which included what
            are now the U.S. states of Alabama, Mississippi, Louisiana and part
            of eastern Texas.
          </p>
        </div>

        <div className="col-4">
          <img
            style={{ width: "100%" }}
            src="./img/mardi-gras-photo.jpg"
            alt="2022"
          />
        </div>

        <div className="col-lg-6 ms-4 mb-5">
          <p>
            While not observed nationally throughout the United States, a number
            of traditionally ethnic French cities and regions in the country
            have notable celebrations. Mardi Gras arrived in North America as a
            French Catholic tradition with the Le Moyne brothers,[14] Pierre Le
            Moyne d'Iberville and Jean-Baptiste Le Moyne de Bienville, in the
            late 17th century, when King Louis XIV sent the pair to defend
            France's claim on the territory of Louisiane, which included what
            are now the U.S. states of Alabama, Mississippi, Louisiana and part
            of eastern Texas.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center mb-5">
          <img className="logo-signup" src="img/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
