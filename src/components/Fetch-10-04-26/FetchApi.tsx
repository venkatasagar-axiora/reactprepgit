import { useEffect, useState } from "react";
import './FetchApi.css'


function FetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="card-products">
      <div className="container-fluid">
        <div className="row">
          {data.map((item: any) => (
            <div className="col-12 col-md-3 " key={item.id}>
              <div className="card h-100">
                <div className="card-header">
                  <img src={item.image} alt="" className="card-img-top" height='200px' />
                </div>
                <div className="card-body">
                  <h6>{item.title}</h6>
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