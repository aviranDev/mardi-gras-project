import Clock from "./clock";
import PageHeader from "../common/pageHeader";
import Border from "../common/border";
import Carousel from "./carousel";
import AllProducts from "../product/allProducts";
import AllCards from "../card/allCards";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AllProducts />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <AllCards />
          </div>
        </div>

        <Border />
        <PageHeader title="Welcome To Mardi Gras New Orleans" />

        <div className="row">
          <div className="col-12">
            <Clock />
          </div>
        </div>

        <div className="row">
          <div className="col-6 mt-3">
            <p className="mardi-gras-p">
              <b>The festival</b> season varies from city to city, as some
              traditions, such as the one in New Orleans, Louisiana, consider
              Mardi Gras to stretch the entire period from Twelfth Night the
              last night of Christmas which begins Epiphany to Ash Wednesday.
              Others treat the final three-day period before Ash Wednesday as
              the Mardi Gras. In Mobile, Alabama, Mardi Gras-associated social
              events begin in November, followed by mystic society balls on
              Thanksgiving, then New Year's Eve, followed by parades and balls
              in January and February, celebrating up to midnight before Ash
              Wednesday. In earlier times, parades were held on New Year's Day.
              Carnival is an important celebration in Anglican and Catholic
              European nations
            </p>
          </div>

          <div className="col-6 mt-3 text-center mb-5">
            <img
              src="./img/mayor.png"
              className="mayor img-thumbnail"
              alt="New Orleans Mayor"
            />
          </div>
        </div>

        <Border />

        <div className="row">
          <div className="col-6 mt-5">
            <p>
              New Orleans Mardi Gras The first American Mardi Gras took place on
              March 3, 1699, when French explorers Pierre Le Moyne d'Iberville
              and Sieur de Bienville landed near present-day New Orleans,
              Louisiana. They held a small celebration and dubbed their landing
              spot Point du Mardi Gras.. In the decades that followed, New
              Orleans and other French settlements began marking the holiday
              with street parties, masked balls and lavish dinners. When the
              Spanish took control of New Orleans, however, they abolished these
              rowdy rituals, and the bans remained in force until Louisiana
              became a U.S. state in 1812. On Mardi Gras in 1827, a group of
              students donned colorful costumes and danced through the streets
              of New Orleans, emulating the revelry they'd observed while
              visiting Paris. Ten years later, the first recorded New Orleans
              Mardi Gras parade took place, a tradition that continues to this
              day. In 1857, a secret society of New Orleans businessmen called
              the Mistick Krewe of Comus organized a torch-lit Mardi Gras
              procession with marching bands and rolling floats, setting the
              tone for future public celebrations in the city.
            </p>
          </div>

          <div className="col-6 mt-5 text-center">
            <img
              src="./img/mardi-gras.jpg"
              className="mardi-gras-img-home"
              alt="mardi-gras"
            />
          </div>

          <div className="row">
            <div className="col-12 text-center mb-5">
              <img className="logo-signup" src="img/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
