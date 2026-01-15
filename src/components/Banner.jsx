import Img from "../assets/Image_source_1.png";
import "../Styles/Banner.css";

function Banner() {
  return (
    <div className="lmj-home">
      <img src={Img} alt="Image paysage" className="lmj-img" />
    </div>
  );
}

export default Banner;
