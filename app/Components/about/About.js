import React from 'react';
import "./About.css"
import AboutBox from './AboutBox';
import Image from 'next/image'
import avatar from '/public/ReadyPlayerMe-Avatar.png';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>
        About Me
      </h2>

    <div className='about__container grid'>
    <Image src= {avatar} alt='' className='about__img'/>

    <div className='about__data grid'>
      <div className='about__info'>
        <p className='about__description'>
        Hello! I&apos;m Mosope, and I&apos;m based in Lagos, Nigeria. I studied at Ajayi Crowther University, where I completed my Bachelors degree in Computer Science.
        Fastforward to today, and I can honestly say it&apos;s been a beautiful journey and I hope to grow even further as a Software Engineer. My current focus these days is on expanding my portfolio by building and designing more projects that I can add on here. </p>
        <a href='https://drive.google.com/file/d/12dPlS98LIKk53tiWsLZ-aMKAksYX3e_-/view?usp=sharing' className='btn' download={"Sope's Resume"}>Download Resume</a>
      </div>

   

    </div>
    </div>
    </section>
  )
}

export default About