import { useUserData } from "../context/UserDataContext";
import { useEffect } from "react";

export const useGetLocalData = () => {
  const { setUser_Data } = useUserData();
  useEffect(() => {
    setUser_Data({ type: "get_wishlist_locally" });
  }, []);
};
