import './App.css';

function App() {
  return (
      <>
          <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="card" style={{ width: '30rem', border: '2px solid red' }}>
                  <div className="card-body">
                      <input type="text" className="form-control" id="user" placeholder="Enter your name" />
                      <div className="row mt-5">
                          <button className="btn btn-dark">Login</button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )

}

export default App;
