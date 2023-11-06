import React from 'react'
import style from '../NotFound/NotFound.module.css'
import error from '../../Assets/error.svg'

export default function NotFound() {
  return <>
  
  <main className="container my-5 home">
    <section className="position-relative d-flex justify-content-center">
      <img src={error} alt="Not Found" className={style.NotFound}/>
    </section>
  </main>
  </>
}
