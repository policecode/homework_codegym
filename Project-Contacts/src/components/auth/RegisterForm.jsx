import { useEffect } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  useEffect(() => {
    document.title = "Register Account";
  }, []);
  return (
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form className="user">
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      placeholder="Repeat Password"
                    />
                  </div>
                </div>
                <a
                  href="login.html"
                  className="btn btn-primary btn-user btn-block"
                >
                  Register Account
                </a>
                <hr />
                <button className="btn btn-google btn-user btn-block d-flex align-items-center justify-content-center">
                  <FaGoogle className="me-2" /> Register with Google
                </button>
                <button className="btn btn-facebook btn-user btn-block d-flex align-items-center justify-content-center" >
                  <FaFacebookF className="me-2" />
                  Register with Facebook
                </button>
              </form>
              <hr />
              <div className="text-center">
                <Link to={"/auth/forgot-password"} className="small" >
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center">
                <Link to={"/auth/login"} className="small">
                  Already have an account? Login!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
