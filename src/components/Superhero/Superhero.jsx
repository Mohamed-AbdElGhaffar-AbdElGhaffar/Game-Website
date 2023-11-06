import React from 'react'
import style from '../Superhero/Superhero.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import Product from '../Product/Product';

export default function Superhero() {
  async function getData(cat) {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {
        category: cat
      },
      headers: {
        'X-RapidAPI-Key': '874a103998msh793def2f13e2407p19bf0fjsnc32bc1829228',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    return await axios.request(options).catch((err)=>err);
  }
    
  let {isLoading,isFetching,data} = useQuery('getData', ()=>getData("superhero"));
  
  return <>
  {isLoading?
    <div className="loading">
          <span className="loader"></span>
    </div>
    :
    <main className="container my-5 home">
      <section className="position-relative">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" id="gameData">
            {data?.data?.map((data)=>(
               
              <Product key={data.id} data={data}/>
            
            ))}
          </div>
      </section>
    </main>


  }
  

  </>
}
