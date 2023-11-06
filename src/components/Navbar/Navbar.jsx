import React, { useContext, useEffect } from 'react'
import style from '../Navbar/Navbar.module.css'
import wraper from '../../Assets/wraper.png'
import logo from '../../Assets/logo-sm.png'
import { Link, useLocation } from 'react-router-dom'
import { CounterContext } from '../../Contexts/CounterContext';


export default function Navbar() {
  let {counter,setCounter} = useContext(CounterContext)
  let location = useLocation();
  function LinkActive(elemnt) {
    let links = document.querySelectorAll(`.nav-link`)
    for (let i = 0; i < links.length; i++) {
      let attribute = links[i].getAttribute("id") ;
      document.getElementById(attribute).classList.remove("active");
    }
    document.getElementById(`${elemnt}`)?.classList.add("active")
  }
  let activeNameLocation = location.pathname

  useEffect(()=>{
    console.log("location", activeNameLocation.substring(1))
    if (activeNameLocation.substring(1) == '') {
      console.log("mmorpg");
      LinkActive("mmorpg");
    }else if(activeNameLocation.split('/')[1] == "GameDetails"){
      setCounter(true);
    }else{
      LinkActive(activeNameLocation.substring(1));
    }
  },[activeNameLocation])
  return <>
        {counter?'':<>
        <header>
          <img src={wraper} className="w-100" alt="game photo" />
        </header>

        <nav className="navbar navbar-expand-lg nav-bg position-sticky top-0 z-3 col-md-6 col-lg-9">
          <div className="container">
            <h5 className="navbar-brand mb-0 text-uppercase">
              <img src={logo} alt="logo photo" className={style.logoImg}/> Game Reviews
            </h5>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse small navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu small">
                  <li className="nav-item">
                    <Link role="button" className="nav-link text-uppercase text-center" aria-current="page" id="mmorpg" onClick={(e)=>LinkActive("mmorpg")} to=''>mmorpg</Link>
                  </li>
                  <li className="nav-item">
                    <Link role="button" className="nav-link text-uppercase text-center" id="shooter" onClick={(e)=>LinkActive("shooter")} to="shooter">shooter</Link>
                  </li>
                  <li className="nav-item">
                    <Link role="button" className="nav-link text-uppercase text-center" id="sailing" onClick={(e)=>LinkActive("sailing")} to='sailing'>sailing</Link>
                  </li>
                  <li className="nav-item">
                    <Link role="button" className="nav-link text-uppercase text-center" id="permadeath" onClick={(e)=>LinkActive("permadeath")} to='permadeath'>permadeath</Link>
                  </li>
                  <li className="nav-item">
                    <Link role="button" className="nav-link text-uppercase text-center" id="superhero" onClick={(e)=>LinkActive("superhero")} to='superhero'>superhero</Link>
                  </li>
                  <li className="nav-item">
                    <Link role="button" className="nav-link text-uppercase text-center" id="pixel" onClick={(e)=>LinkActive("pixel")} to='pixel'>pixel</Link>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
        </>}
  </>
}
