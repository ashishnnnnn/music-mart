import { useUserData } from "../context/UserDataContext";
import { useEffect } from "react";

export const useGetLocalData = () => {
  const { setUser_Data } = useUserData();
  useEffect(() => {
    setUser_Data({ type: "GET_WISHLIST_LOCALLY" });
  }, []);
};
