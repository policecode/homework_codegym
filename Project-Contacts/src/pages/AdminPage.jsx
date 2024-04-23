import { Outlet } from "react-router-dom";
import "../assets/css/all.min.css";
import "../assets/css/custom-font.css";
import "../assets/css/sb-admin-2.min.css";
import SideBar from "../components/SideBar";
import Topbar from "../components/Topbar";
export default function AdminPage() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          {/* <Outlet /> */}
        </div>
      </div>
    </div>
  );
}
