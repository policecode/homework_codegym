import "../assets/css/all.min.css";
import "../assets/css/sb-admin-2.min.css";
import "../assets/css/customStyle.css";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-gradient-primary d-flex align-items-center" style={{height: '100vh'}}>
      <ToastContainer />
      <div className="container">
        {children}
      </div>
    </div>
  );
}
