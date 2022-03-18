import { Sliders, Footer } from "../../Components";
import "./Home.css";
const cateogry_details = [
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/guitar-c-762269_s.jpg?1427392910",
    title: "Guitars",
  },
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/drums-782506_s.png?1427392910",
    title: "Drums",
  },
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/spe-489661_s.jpg?1427392910",
    title: "Studio - Live Equipments",
  },
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/trad-544023_s.png?1427392910",
    title: "Traditional - Instruments",
  },
];
export const Home = () => {
  return (
    <>
      <Sliders />
      <div className="featured-head fnt-3 flex-center-column text-center fnt-w-500 gap-2">
        <p>Featured Categories</p>
        <div className="thick-bar"></div>
      </div>
      <div className="container">
        <div className="responsive-grid">
          {cateogry_details.map((ele, index) => (
            <div className="card vertical-card" key={index}>
              <div className="text-img img-container">
                <img src={ele.src} alt={ele.title} />
                <div className="text-overlay text-center flex-center-column">
                  <div className="title">{ele.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
