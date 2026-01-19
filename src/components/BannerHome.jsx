import Img from "../assets/Image_source_1.png";
import "./BannerHome.scss";

function Banner() {
  return (
    <section className="banner-home" style={{ backgroundImage: `url(${Img})` }}>
      <h1 className="banner-home__title">Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Banner;
