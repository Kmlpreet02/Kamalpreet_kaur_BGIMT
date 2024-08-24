import React, { useState,useEffect } from 'react';
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import Footer from '../components/Footer';
import API from '../services/API';

import CreatePost from '../components/modals/CreatePost';
const Home = () => {
  const [show,setShow] = useState(false);
  const [items,setItems] =useState([]);
  
  const [search,setSearch]= useState("");
 
  const fetchData = async () =>{
    try {
     const  res =  await API.get("/posts");
console.log(res);
if ( res.status === 200){
  setItems(res.data);
 
}

    } catch (error) {
      console.log(error);
      
    }
  };

  useEffect(() => {
  fetchData();
  },[]);
  const fetchSearchData = async () => {
    try {
      const res = await API.get(`/searchData?searchText=${search}`);
    setItems(res.data);
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() =>{
if(search){
  
fetchSearchData();
}
else{
  
  fetchData();
}
  },[search])
  return (
<>


<NavBar  className='sticky mt-0' setSearch={setSearch} search={search}/>
<button className='button border bg-blue-300 p-3 rounded mt-2 text-cyan-50 '
onClick={() => setShow(true)}>Create Post{""}</button>
{show && <CreatePost show={show} handleClose={() => setShow(false)} setItems={setItems}/>}
<Cards items={items} setItems={setItems}/>
<Footer/>

  </>
  );
};

export default Home