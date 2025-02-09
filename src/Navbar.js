import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <Link to="/">Patient List</Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <div class="nav-link active">
                Add Dr. Note
                <span class="visually-hidden">(current)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
