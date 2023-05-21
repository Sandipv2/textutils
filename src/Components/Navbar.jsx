import {Link} from "react-router-dom"

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-dark`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="instagram.com">TextUtils.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link fw-bold" id="homeLink" to="/">Home</Link>
        <Link className="nav-link fw-bold" id="aboutLink" to="/about">About</Link>
      </div>
    </div>
        <form className="form-check form-switch">
          <input type="checkbox" onClick={props.handlemode} className="form-check-input"/>
          <label className="text-white">{props.currentMode}</label>
        </form>
  </div>
</nav>
  );
};
export default Navbar;
