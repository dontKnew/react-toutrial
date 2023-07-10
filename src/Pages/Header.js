import { Link } from 'react-router-dom';

function Header({activeClass}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link  className={`nav-link ${activeClass==='home' ? 'active bg-light text-dark p-2' : ''}`} aria-current="page"  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeClass==='api' ? 'active bg-light text-dark p-2' : ''}`}  to="/api">API</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeClass==='about' ? 'active bg-light text-dark p-2' : ''}`}  to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${activeClass==='contact' ? 'active bg-light text-dark p-2' : ''}`}  to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="d-flex" role="search">
          <button className="btn btn-warning mx-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
          <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Header;
