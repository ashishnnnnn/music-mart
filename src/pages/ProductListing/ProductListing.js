import "./ProductListing.css";
import { useEffect, useState } from "react";
import { Filters_view, Product_card, Mobile_filter } from "../../Components";
import LoadingAnimation from "react-circle-loading-animation";
import { useDispatch, useSelector } from "react-redux";
import { fetch_product } from "../../Features/producList/productListSlice";

import { filteration } from "../../utils";
export const ProductListing = () => {
  const [isloading, setisloading] = useState(false);
  const dispatch = useDispatch();
  const product_list = useSelector((state) => state.product_list).product_list;
  const filters = useSelector((state) => state.filter);
  console.log(filters);
  useEffect(() => {
    (async () => {
      setisloading(true);
      try {
        const response = await dispatch(fetch_product());
        setisloading(false);
      } catch (e) {
        setisloading(false);
      }
    })();
  }, []);
  const list_to_view = filteration(product_list, filters);
  return (
    <div className="main-body">
      <Filters_view />
      <div className="column main-content pad-3">
        <div className="responsive-grid">
          {isloading && <LoadingAnimation isLoading={true} color={"#bb4430"} />}
          {!isloading &&
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
