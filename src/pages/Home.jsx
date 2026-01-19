import BannerH from "../components/BannerHome";
import "../Styles/Home.scss";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <main className="home">
      <BannerH />
      <Gallery />
    </main>
  );
}
export default Home;
