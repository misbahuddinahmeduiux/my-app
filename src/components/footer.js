import React from 'react';


export default function footer(){
  return(
    <div className="bg-danger-subtle">
  <footer className="py-5 pb-0 container">
    <div className="justify-content-between row">
      <div className="col-3">
        <a href='/' className='text-black text-decoration-none'>
          <img src='/rs-logo.png' className='img-fluid w-75 mb-3' />
        </a>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="col-2">
        <h5>Quick Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">About</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Services</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Contact</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Usefull Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Packages</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Features</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Pricing</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">FAQs</a></li>
        </ul>
      </div>

      <div className="col-4">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-center py-4 border-top">
      <p class="mb-0">© 2025 Right Solution, Inc. All rights reserved.</p>
      
    </div>
  </footer>
</div>
  ) 
}