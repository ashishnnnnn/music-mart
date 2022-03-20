import { createContext, useContext, useState } from "react";

const ProductListContext = createContext(null);

const useProductList = () => useContext(ProductListContext);

const ProductListProvider = ({ children }) => {
  const [product_list, setProductList] = useState([]);
  return (
    <ProductListContext.Provider value={{ product_list, setProductList }}>
      {children}
    </ProductListContext.Provider>
  );
};

export { useProductList, ProductListProvider };
