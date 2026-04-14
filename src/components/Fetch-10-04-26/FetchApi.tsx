import { useEffect, useState } from "react";
import './FetchApi.css'
import { useNavigate } from "react-router-dom";

function FetchApi() {
  const [data, setData] = useState([]);
  const [userLogged, setUserLogged] = useState("");
  const [user, setUser] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    const user = sessionStorage.getItem("userLogged");
    if (!user) {
      navigate("/");
    } else {
      setUser(user);
    }
  }, [navigate])

  const Logoutfunc = () => {
    const logout = sessionStorage.removeItem('userLogged')
    navigate('/')
    alert("Logout Scuu")
  }

  return (

    <div className="card-products">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <a className="navbar-brand times-font" href="#">Hello, {user}!</a>

          {/* Toggle button (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <button className="btn btn-danger fw-bold " onClick={Logoutfunc}>Logout</button>
            </ul>
          </div>

        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {data.map((item: any) => (
            <div className="col-12 col-md-3 " key={item.id}>
              <div className="card h-100">
                <div className="card-header">
                  <img src={item.image} alt="" className="card-img-top" height='200px' />
                </div>
                <div className="card-body">
                  <h6 className="fw-bold">{item.title}</h6>
                  <p>{item.description.substring(0, 80)}</p>
                  <p className="badge bg-warning text-dark">rating: {item.rating['rate']}</p>
                  <br></br>
                  <label htmlFor="" className="badge bg-success">${item.price}</label>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FetchApi;