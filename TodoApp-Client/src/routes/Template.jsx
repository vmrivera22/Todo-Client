import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Template = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Template;
