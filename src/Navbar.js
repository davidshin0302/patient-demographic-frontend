import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <Link to="/" class="nav-link active">
            Patient List
          </Link>
        </div>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link to="/patient-records" class="nav-link active">
                Patient Records
                <span class="visually-hidden">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
