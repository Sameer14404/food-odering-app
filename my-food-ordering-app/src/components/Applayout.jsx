import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import appStore from "../../Redux-store/appStore";


const Applayout = () => {
  return (
    <div className="Applayout">
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
    </div>
  );
};

export default Applayout;
