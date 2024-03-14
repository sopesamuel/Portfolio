
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Image from 'next/image'
import avatar from '/public/ReadyPlayerMe-Avatar.png';


const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <Image src={avatar} height={145} width={160} alt='' className='home__img'/>
    <h1 className='home__name'>Mosope Fasusi</h1>
    <span className='home__education'>I&apos;m a Software Engineer</span>

    <HeaderSocials/>
    <ScrollDown/>
   </div>


   </section> 
  )
}

export default Home

