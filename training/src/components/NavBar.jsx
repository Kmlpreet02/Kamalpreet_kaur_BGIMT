import React ,{useState,useEffect}  from 'react';

import FRAME from "../assets/Frame.svg";
import {Link} from  "react-router-dom";
import { FaRegDotCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import KAMAL from "../assets/kamal.png";
import UseOnline from './UseOnline';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const NavBar = ({setUser,setPost,user,setSearch,search}) => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const handleSearch=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
    
  }
  const {isOnline} = UseOnline();
  const handleLogout =() => {
    if(isLogin){
      localStorage.clear();
  navigate("/");
    }
  
  };
  return (
   <>

<nav>

<section>
  <div className="w-full justify-center items-center flex align-middle mt-4">
   <div className="w-4/5 h-8 justify-between items-center flex align-middle ">
   <ul className="justify-center items-center flex list-none">
    
    <li>

      <span className='ml-5 text-3xl'>Chatterly</span>
    </li>
    <li>
     <img src={FRAME} alt="" className='w-8 h-8'/>
    </li>
    <li className='ml-2'> {isOnline ? (
        <FaRegDotCircle fill="green" />
      ):(
        <FaRegDotCircle fill='red'/>
      )
      }</li>
  </ul>
     
    
  <div>
    <ul className='flex align-middle items-center justify-center gap-2 text-xl list-none'>
     <li> <img
        src={KAMAL}
        alt=""
      className='w-12 h-12 rounded-full'
      /></li>
      <li><span>Kamalpreet</span></li>
      <Button variant="danger" className='ml-5'> <li onClick={handleLogout}>Logout</li></Button>

    </ul>
   </div>
    </div>
  </div>
  <hr />
  <div className="w-full h-10 justify-center items-center flex align-middle ">
    <div className='w-4/5 justify-between  flex '>
      <div className='flex justify-between items-center text-xl'>
      <span className='ml-10'>Filter</span>
      <div className="border border-black h-12 ml-3"/>
      <ul className='text-xl list-none ml-0'>
        <li>
        
          <label htmlFor="create" className='text-base mt-2'>
            Created By
          </label> 
        </li>
        <li>
          <select name="create" className="text-xs border border-black rounded-xl">
            <option value="all">All</option>
            <option value="Just me">Just me</option>
            <option value="with friends">with friends</option>
          </select>
        </li>
      </ul>
      <ul className='list-none'>
        <li>

          <label htmlFor="date" className='text-base mt-2'>
            Published Date
          </label>
        </li>
        <li>
          <input type="date" name="date" className="text-xs  p-1 border border-black rounded-xl"/>
        </li>
      </ul>
      </div>
    
    <div className='mr-5'>
      <ul className='list-none '>
        <li>
          <label htmlFor="search" className='text-base mt-2'>
            search
          </label>
        </li>
      
        <div className="flex  mr-5">
          <div className="relative flex">
            <input type="text" placeholder="search here" className='relative h-6 p-1 w-5/5 outline-none  border border-black rounded-lg'
           value={search}
           onChange={handleSearch}/>
            <div className='absolute ml-40 mt-1'>
               <FaSearch  className='mr-2'/>
            </div> 
          </div>
        </div>
      </ul>
    </div>
  </div></div>
<hr></hr>
  </section>

</nav>
   </>
  )
}

export default NavBar;