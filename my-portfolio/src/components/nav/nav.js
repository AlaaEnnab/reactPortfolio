function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top px-4">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="/">Alaa Ennab</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experince">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-1" href="#contact">
                <i className="fa-solid fa-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
