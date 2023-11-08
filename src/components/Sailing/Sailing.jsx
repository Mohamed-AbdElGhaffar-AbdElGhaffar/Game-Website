import React, { useState } from 'react'
import style from '../Sailing/Sailing.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import Product from '../Product/Product';
import ReactPaginate from 'react-paginate';

export default function Sailing() {
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
    
  let {isLoading,isFetching,data} = useQuery('getData', ()=>getData("sailing"));

  // Pagination
  
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data?.data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.data?.length;
    setItemOffset(newOffset);
  };

  
  return <>
  {isLoading?
    <div className="loading">
          <span className="loader"></span>
    </div>
    :
    <main className="container my-5 home">
      <section className="position-relative">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4" id="gameData">
            {currentItems?.map((data)=>(
               
              <Product key={data.id} data={data}/>
            
            ))}
            <>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<<"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageClassName='page-num'
                previousClassName='page-num'
                nextClassName='page-num'
                activeLinkClassName='active'
              />
            </>
          </div>
      </section>
    </main>


  }
  

  </>
}
