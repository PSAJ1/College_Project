import Typewriter from "typewriter-effect";

function App() {
  return (
    <>
      <nav className="navbar bg-dark opacity-75 nav29">
        <div className="container-fluid d-flex">
          <div className="d-flex al">
            <div className="">
              <a href="www.google.com">
                <img
                  src={require("./logo_e_auction.png")}
                  alt="Logo"
                  height="45px"
                  width="45px"
                />
              </a>
            </div>
            <a className="text-info pad" href="www.google.com">
              <h3>
                r<span className="text-warning">OO</span>vy
              </h3>
            </a>
            <span className="text-info pad ms-2 h1">
              |<span className="h5"> Show Your Glory With Us </span>
            </span>
          </div>
          <div className="">
            <a
              className="h5 me-5 text-decoration-none text-info"
              href="www.google.com"
            >
              Home
            </a>
            <a
              className="h5 me-5 text-decoration-none text-warning"
              href="www.google.com"
            >
              About Us
            </a>
            <a
              className="h5 me-5 text-decoration-none text-warning"
              href="www.google.com"
            >
              Team
            </a>
            <a
              className="h5 me-5 text-decoration-none text-info"
              href="www.google.com"
            >
              Contact Us!
            </a>
            <button type="button" className="btn btn-info text-dark fs-6">
              Login / Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className=" d-flex t1 justify-content-center align-items-end">
        <h1 className="font-size"><Typewriter 
        options={{
          strings: ['Live Auctions With Best Deal', 'Hurry Up! Grab Your Deal'],
          loop: true,
          autoStart:true,
          pauseFor:1
        }}
        />
        </h1>
      </div>
      <div className="d-flex text-info justify-content-center">
          <h1>Watches | Painting | Coins</h1>
      </div>
      <div className="d-flex justify-content-center p-5">
            <svg className="svg-inline--fa fa-angle-double-down fa-w-10 arrow-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path class="" fill="currentColor" d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>
      </div>
    </>
  );
}

export default App;
