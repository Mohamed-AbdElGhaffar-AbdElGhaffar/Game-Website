import React, { useContext } from 'react'
import style from '../Product/Product.module.css'
import { useNavigate } from 'react-router-dom';
import { CounterContext } from '../../Contexts/CounterContext';


export default function Product({data}) {
  let {counter,setCounter} = useContext(CounterContext)
  let navigate = useNavigate();
  function getDetails(id) {
    setCounter(true);
    navigate(`/GameDetails/${id}`)
  }
  return <>
  
  <div className="col" onClick={()=>getDetails(data.id)}>
    <div data-id= {data.id} className="card h-100 bg-transparent" role="button" >
      <div  className="card-body">
        <figure className="position-relative">
          <img className="card-img-top object-fit-cover h-100" src={data.thumbnail} />
        
        </figure>

        <figcaption>

            <div className="hstack justify-content-between">
              <h3 className="h6 small">{data.title}</h3>
              <span className="badge text-bg-primary p-2">Free</span>
            </div>

            <p className="card-text small text-center opacity-50">
              {data.short_description.split(" ", 8)}
            </p>

        </figcaption>
      </div>

      <footer className="card-footer small hstack justify-content-between">

        <span className="badge badge-color">{data.genre}</span>
        <span className="badge badge-color">{data.platform}</span>

      </footer>
    </div>
  </div>

  </>
}
