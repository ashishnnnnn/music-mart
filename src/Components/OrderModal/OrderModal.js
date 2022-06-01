import "./OrderModal.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const OrderModal = ({ setShowModal }) => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setShowModal((pre_state) => !pre_state);
      navigate("/");
    }, 1000);
  });
  return (
    <div className="pop_up">
      <div className="pop_up_background"></div>
      <div className="pop_up_show fnt-2 pad-1-5">
        Congratulation Your Order Is Placed
      </div>
    </div>
  );
};
