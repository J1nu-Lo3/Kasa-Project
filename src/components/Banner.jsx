import Img from "../assets/Image_source_1.png";
import "../components/Banner.scss";

function Banner() {
  return (
    <div className="lmj-home">
      <img src={Img} alt="Image paysage" className="lmj-img" />
    </div>
  );
}

export default Banner;
