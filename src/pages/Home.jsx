import Banner from "../components/Banner/Banner";
import ImgHome from "../assets/Image_source_1.png";
import "../Styles/Home.scss";
import Gallery from "../components/Gallery/Gallery";

function Home() {
  return (
    <main className="home">
      <Banner image={ImgHome} title="Chez vous, partout et ailleurs" />
      <Gallery />
    </main>
  );
}
export default Home;
