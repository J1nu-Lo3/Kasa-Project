import Img from "../assets/Image_source_2.png";
import "./BannerAbout.scss";

function Banner() {
  return (
    <div className="banner-about">
      <img src={Img} alt="Image paysage" className="banner-about__img" />
    </div>
  );
}

export default Banner;
