import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function Navbar({

  // const [Mode, setMode] = useState('Light Mode On');

mode,toggleMode,
  logo = <img src='/rs-logo.png' className='img-fluid w-50'/>
}) {
  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle">
      <div className="container">
        <a className="navbar-brand" href="/">{logo}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse gap-5 justify-content-end navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.js">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>
          </ul>
          <div className="form-check form-switch">
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label"  htmlFor="switchCheckDefault">Enable {mode === 'dark' ? 'Light' : 'Dark'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
