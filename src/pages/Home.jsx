import BannerH from "../components/BannerH/BannerHome";
import "../Styles/Home.scss";
import Gallery from "../components/Gallery/Gallery";

function Home() {
  return (
    <main className="home">
      <BannerH />
      <Gallery />
    </main>
  );
}
export default Home;
