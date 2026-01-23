import BannerA from "../components/BannerA/BannerAbout";
import Collapse from "../components/Collapse/Collapse";
import { aboutList } from "../data/aboutList";
import "../Styles/About.scss";

function About() {
  return (
    <main className="about">
      <BannerA />

      <section className="about__list">
        {aboutList.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </section>
    </main>
  );
}

export default About;
