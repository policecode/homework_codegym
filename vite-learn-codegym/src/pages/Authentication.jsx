import { Component } from "react";
export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isValid: false,
      isLoggedIn: false,
    };
  }
  componentWillUnmount
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isValid != prevState.isValid ) {
        this.handleSubmit();
    }
  }

  checkValidForm = () => {
    const { email, password } = this.state;
    const value = email && password;
    this.setState({ ...this.state, isValid: value });
  };

  handleSubmit = () => {
    if (this.state.isValid) {
      this.setState({ ...this.state, isLoggedIn: true });
    }
  };

  handleLogOut = () => {
    this.setState({ ...this.state, isLoggedIn: false });
  };
  render() {
    return (
      <>
        {!this.state.isLoggedIn && (
          <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
              <form onSubmit={this.checkValidForm}>
                <img
                  className="mb-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                  alt=""
                  width="72"
                  height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                  <input
                    className="form-control email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    onInput={(e) =>
                      this.setState({ ...this.state, email: e.target.value })
                    }
                  />
                  <label>Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onInput={(e) =>
                      this.setState({ ...this.state, password: e.target.value })
                    }
                  />
                  <label>Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input
                      type="checkbox"
                      // value={form.isRemember}
                      // onChange={this.handleChangeCheckbox}
                    />{" "}
                    Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
                <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
              </form>
            </div>
          </div>
        )}
        {this.state.isLoggedIn && (
          <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
              <h1 className="h3 mb-3 fw-normal">Welcome</h1>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="button"
                onClick={this.handleLogOut}
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
