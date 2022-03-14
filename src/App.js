
function App() {
  return (<nav className="navbar bg-dark opacity-75">
  <div className="container-fluid d-flex">
  <div className="d-flex al">
  <div className=''>
    <img src={require('./logo_e_auction.png')} alt='Logo' height='45px' width='45px'/>
  </div>
    <a className="text-info pad" href="#"><h3>r<span className="text-warning">OO</span>vy</h3></a>
    </div>
    <div>
      <span className='text-info'>Show Your Glory With Us</span>
    </div>
    <form className="d-flex">
    <button type="button" className="btn btn-info text-dark fs-6">Buy now</button>
    </form>
  </div>
</nav>
  );
}

export default App;
