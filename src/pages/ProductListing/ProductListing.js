import axios from "axios";
import { useEffect, useState } from "react";
import { useProductList } from "../../context/ProductListContext";
import { Filters_view, Product_card, Mobile_filter } from "../../Components";
import { useFilter } from "../../context/FilterContext";
import "./ProductListing.css";
import LoadingAnimation from "react-circle-loading-animation";

import { filteration } from "../../utils";
export const ProductListing = () => {
  const { product_list, setProductList } = useProductList();
  const [isloading, setisloading] = useState(false);
  const { filter_state } = useFilter();
  useEffect(() => {
    (async () => {
      setisloading(true);
      await (async () => {
        return new Promise((resolve) => setTimeout(resolve, 2000));
      })();
      try {
        setisloading(false);
        const { data } = await axios.get("/api/products");
        setProductList(data.products);
      } catch (e) {
        setisloading(false);
        setProductList([]);
      }
    })();
  }, []);
  const list_to_view = filteration(product_list, filter_state);
  return (
    <div className="main-body">
      <Filters_view />
      <div className="column main-content pad-3">
        <div className="responsive-grid">
          {isloading && <LoadingAnimation isLoading={true} color={"#bb4430"} />}
          {!isloading &&
            list_to_view.map((item) => (
              <div key={item.id}>
                <Product_card item={item} is_wishlist={false} />
              </div>
            ))}
        </div>
        <Mobile_filter />
      </div>
    </div>
  );
};
