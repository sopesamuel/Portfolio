"use client"

import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';
import Image from 'next/image';
import web from 'public/global-link.png'
const Portfolio = () => {

  const [Items,setItems] = useState(Menu)

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }
  return (
    <section className='work container section' id='work'>
     <div style={{ display: "flex", alignItems: "center"}}> <h2 className='section__title'>Recent Works </h2> <h5 style={{ marginBottom: 5, marginLeft: 5}}> - Click on the web icon to view project</h5> </div>

      {/* <div className='work__filters'>
        <span className='work__item' onClick={() => setItems(Menu)}>Everthing</span>
        <span className='work__item' onClick={() => filterItem ("Applications")}>Applications</span>
        <span className='work__item' onClick={() => filterItem ("Case Study")}>Case Study</span>
        <span className='work__item' onClick={() => filterItem ("Design")}>Design</span>
      </div> */}

      <div className='work__container grid'>

      {Items.map((elem) => {
        const{id,Image, title, category, demo} = elem;
        return (
          <div className='work__card' key={id}>
            <div className='work__thumbnail'>
              <img src={Image} alt="" className='work__img'/>
              <div className='work__mask'></div>
            </div>

            <span className='work__category'>{category}</span>
            <h3 className='work__title'>{title}</h3>
         <a href={demo} className='work__button'><img src="https://tinyurl.com/2armdr53" alt="" /> </a> 
             {/* <i className='icon-link work__button-icon'></i> */}
          </div>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio