import React, {useEffect, useState } from 'react';
import Card from './Card';
// import ARTICLE from "../assets/comp.svg";
// import ARTICLEIMG from "../assets/bitcoin.svg"; 
import API from '../services/API';

const Cards = ({items,setItems}) => {
  
  return (
    <div style={{display:"flex",
      flexWrap:"wrap",
      justifyContent:"space-evenly",
      padding:"30px",
    }}>
      {items.map((data,index) =>{
        return <Card data={data} key={index} setItems={setItems} items={items}/>
       
      })}
    </div>
  );
};

export default Cards