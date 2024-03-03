import React from 'react';
import "./Resume.css";
import Data from './Data';
import Card from './Card';
import Image from 'next/image';
import avatar1 from 'public/graduate.png';
import avatar2 from 'public/experience.png';


const Resume = () => {
  return (
    <section className='resume container section' id='resume'>
        <h2 className='section__title'>Education <Image src={avatar1} className='avatar1'/></h2>

      <div className='resume__container grid'>
        <div className='timeline grid'> 
        {Data.map((val, id) =>{
            if(val.category === "education") {
              return(
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/> 
              )
            }
        })}
        </div>

      <h2 className='section__title'> Experience <Image src={avatar2} className='avatar2'/></h2>
        <div className='timeline grid'> 
        {Data.map((val, index) =>{
            if(val.category === "experience") {
              return(
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/> 
              )
            }
        })}
        </div>


      </div>
    </section>
  )
}

export default Resume