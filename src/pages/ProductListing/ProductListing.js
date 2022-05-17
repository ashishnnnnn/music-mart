import "./ProductListing.css";
import { useEffect } from "react";
import { Filters_view, Product_card, Mobile_filter } from "../../Components";
import LoadingAnimation from "react-circle-loading-animation";
import { useDispatch, useSelector } from "react-redux";
import { fetch_product } from "../../Features/producList/productListSlice";

import { filteration } from "../../utils";
export const ProductListing = () => {
  const dispatch = useDispatch();
  const product_list = useSelector((state) => state.product_list).product_list;
  const filters = useSelector((state) => state.filter);
  const { status } = useSelector((state) => state.auth);
  useEffect(() => {
    (async () => {
      try {
        await dispatch(fetch_product());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  const list_to_view = filteration(product_list, filters);
  return (
    <div className="main-body">
      <Filters_view />
      <div className="column main-content pad-3">
        <div className="responsive-grid">
          {status === "loading" && (
            <LoadingAnimation isLoading={true} color={"#bb4430"} />
          )}
          {!(status === "loading") &&
            list_to_view.map((item) => (
              <div key={item.id}>
                <Product_card item={item} />
              </div>
            ))}
        </div>
        <Mobile_filter />
      </div>
    </div>
  );
};
