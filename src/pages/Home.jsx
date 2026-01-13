import Img from "../assets/Image_source_1.png";
import "../Styles/Home.css";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <main className="lmj-home">
      <div className="lmj-home">
        <img src={Img} alt="Image paysage" className="lmj-img" />
      </div>
      <Gallery />
    </main>
  );
}
export default Home;
