"use client"
import React, { useState } from 'react';
import "./Sidebar.css";
import avatar from '/public/ReadyPlayerMe-Avatar.png';
import Image from 'next/image'


const Sidebar = () => {

  const [toggle, showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
    <a href='#home'>
    <Image src={avatar} alt='sideLogo' className='nav__logo'/>
    </a>
    <img src="https://res.cloudinary.com/dmo4e3lgg/image/upload/v1709417542/menu_jckslg.png" className= "menu"  onClick={() => showMenu(!toggle)}/> 

    <nav className='nav'>
      <div className='nav__menu'>
      <ul className='nav__list'>
        <li className='nav__item'>

          <a href='#home' className='nav__link'>
             <i className="icon-home"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#about' className='nav__link'>
          <i className="icon-user"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#resume' className='nav__link'>
          <i className="icon-graduation"></i>
          </a>
        </li>

        <li className='nav__item'>
          <a href='#work' className='nav__link'>
          <i className="icon-trophy"></i>
          </a>
        </li>

      </ul>

      </div>
    </nav>



   </aside>


   <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
    {/* <i className='icon-menu'></i> */}
    <Image src={avatar} alt='sideLogo' className='nav__logo'/>
   </div>
   </>
  );
}

export default Sidebar