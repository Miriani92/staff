import React, { useState, useEffect } from 'react';
import {  FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
    const [people,setPeople]= useState(data);
    const [index,setIndex]= useState(0);

    useEffect(()=>{
      let position=people.length-1
      if(index<0){
        setIndex(position)
      }
      if(index>position){
        setIndex(0)
      }

    },[index])

    useEffect(()=>{
      let slideChangeTime=setTimeout(()=>{
        setIndex(index+1)
      },2000)
      return ()=>clearTimeout(slideChangeTime);
    },[index])
   

  return (
   <section className='main-conteiner'>
       <h3>STAFF</h3>
    <div className='persons-container'>
      {data.map((person,personId)=>{
        const {id,title,image,quote}=person

        let slidePosition= 'nexstSlide';
        if(index===personId){
          slidePosition='activeSlide'
        }
        if(personId === index-1 || (
          index===0 && personId===people.length-1
        ))
        {slidePosition='lastSlide'}

        return(
          <article className={slidePosition} key={id}>
            <img  src={image}/>
            <p>{title}</p>
            <p>{quote}</p>
            <FaQuoteRight/>
          </article>
        )
      })}
      <button onClick={()=>setIndex(index-1)} className='left-button'><FaChevronLeft/></button>
      <button onClick={()=>setIndex(index+1)} className='right-button'><FaChevronRight/></button>
    </div>
   </section>
   
  );
}

export default App;
