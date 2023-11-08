import React, { useContext } from 'react'
import style from '../Details/Details.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CounterContext } from '../../Contexts/CounterContext';


export default function Details() {
  let {counter,setCounter} = useContext(CounterContext)
  // let navigate = useNavigate();
  let {cat,id} = useParams()
  console.log(id);
  console.log("cat",cat);
  async function gameDetails(Gameid) {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: {id: Gameid},
      headers: {
        'X-RapidAPI-Key': '874a103998msh793def2f13e2407p19bf0fjsnc32bc1829228',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    return await axios.request(options).catch((err)=>err);
  }
    
  let {isLoading,isFetching,data} = useQuery('gameDetails', ()=>gameDetails(id));

  console.log("game",data);

  return <>
  {isLoading?
    <div className="loading">
      <span className="loader"></span>
    </div>
    :
    <section className="details">
      <div className="container">
        <header className="hstack justify-content-between">
            <h1 className="text-center h3 py-4">Details Game</h1>
            <Link className="btn-close btn-close-white" id="btnClose" onClick={()=>setCounter(false)} to={`/${cat=='mmorpg'?'':cat}`}></Link>
        </header>
        <div className="row g-4" id="detailsContent">
          <div className="col-md-4">
            <img src={data.data.thumbnail} className="w-100" alt="image details" />
          </div>
          <div className="col-md-8">
              <h3>Title: {data.data.title}</h3>
              <p>Category: <span className="badge text-bg-info"> {data.data.genre}</span> </p>
              <p>Platform: <span className="badge text-bg-info"> {data.data.platform}</span> </p>
              <p>Status: <span className="badge text-bg-info"> {data.data.status}</span> </p>
              <p className="small">{data.data.description}</p>
              <a className="btn btn-outline-warning mb-3" target="_blank" href={data.data.game_url}>Show Game</a>
          </div>
        </div>
      </div>
    </section>
  }
  </>
}
