import { Sliders, Footer } from "../../Components";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
import "./Home.css";
const cateogry_details = [
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/guitar-c-762269_s.jpg?1427392910",
    title: "guitar",
  },
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/drums-782506_s.png?1427392910",
    title: "drum",
  },
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/spe-489661_s.jpg?1427392910",
    title: "studio-equipment",
  },
  {
    src: "https://www.johnsmusic.in/uploads/johns-music/categories/trad-544023_s.png?1427392910",
    title: "traditional-equipment",
  },
];
export const Home = () => {
  const navigate = useNavigate();
  const { setFilterState } = useFilter();
  return (
    <>
      <Sliders />
      <Link
        to="/product-list"
        className="btn btn-primary view-all-product fnt-1-2 flex-center-column text-center"
        onClick={() => {
          setFilterState({ type: "clear_filter" });
        }}
      >
        <p>All Products</p>
      </Link>
      <div className="featured-head fnt-3 flex-center-column text-center fnt-w-500 gap-2">
        <p>Featured Categories</p>
        <div className="thick-bar"></div>
      </div>
      <div className="container">
        <div className="responsive-grid">
          {cateogry_details.map((ele, index) => (
            <div
              className="card vertical-card"
              key={index}
              onClick={() => {
                setFilterState({ type: "CATEGORY", paylod: ele.title });
                navigate("/product-list");
              }}
            >
              <div className="text-img img-container">
                <img src={ele.src} alt={ele.title} />
                <div className="text-overlay text-center flex-center-column">
                  <div className="title">{ele.title.toUpperCase()}</div>
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
