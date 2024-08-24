import React, { useState } from 'react';
// import IMAGE from "../assets/bitcoin.svg"
import styles from"./Card.module.css";
import { AiFillLike  } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import KAMAL from "../assets/kamal.png";
import API from '../services/API';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { IoAddCircle } from "react-icons/io5";
import Update from './modals/Update';
import { MdEdit } from "react-icons/md";
const Card = ({data,user,setItems,items}) => {
  const [like,setLike]=useState(data?.liked);
  const [showCommentInput,setShowCommentInput] =useState(false);
  const [comment,setComment] =useState("");
  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  const date = new Date(data?.createdAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  console.log(comment);
  
  
  const handleLikeClick = async() =>{
   try {
    const res= await API.patch(`posts/${data?._id}`,{liked:!like});
  console.log(res);
   
  } catch (error) {
    console.log(error);
    
   }
  };
  const handleComment =async() =>{
    if(!comment){
      toast.error("Please enter comment",{
        position:"top-center",
      });
      return;
    }
    try {
     const res= await API.post(`/posts/${data?._id}/comments`,{
      text:comment,
     });
     if(res.status === 201){
      toast.success("Comment added successfully",{
        position:"top-center",
      })
      setItems(
        items.map((item) => (item?._id === data?._id ? res.data:item))
      );
      setComment("");
      setShowCommentInput(false);
     }
   console.log(res);
    
   } catch (error) {
     console.log(error);
     
    }
   };
  const handleDelete = async() => {
    try {
      const res = await API.delete(`posts/${data?._id}`);
      console.log(res);
      if(res.status === 200){
        setItems(items.filter((item) => item?._id !==data._id))
    
      toast.success("Post deleted successfully",{
        position:"top-center"
      });
    }
    } catch (error) {
      console.log(error);
      
    }
  }
  const [show,setShow] = useState(false);
  
  return (
   
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className='justify-between flex px-4 pt-4'>
          <div>{formattedDate}</div>
          <div><MdDelete  size={25}
          onClick={handleDelete}/></div>
          <div><MdEdit onClick={() => setShow(true)}>Create Post{""}
          {show && <Update show={show} handleClose={() => setShow(false)} setItems={setItems}/>}</MdEdit>
         </div>
        </div>
      <img src={`${import.meta.env.VITE_BASE_URL}${data?.image}`} 
      alt=""
/>
      <div className={styles.contain}>
        <h4>{data?.title}</h4>
      <h4>{data.description}</h4>
      <hr></hr>
      
        <div>
        
        
 <div className='flex justify-between'> 
  <div><AiFillLike  className='cursor-pointer' size={20} fill={like ? "red":"black"}
    onClick = {() =>{
      setLike(!like);
      handleLikeClick();
    }}
  />
   </div>
      <div> <FaRegCommentDots className='cursor-pointer'
      onClick={() =>{
        setShowCommentInput(!showCommentInput);
      }}/>
      </div>
      </div>
      <p>
        {data?.comments.length > 0 ? `comment : ${data?.comments[data?.comments?.length -1]?.text}`:""}
        </p>
      { showCommentInput &&(
        <div className='relative'>
        <input type="text" placeholder='Add a Comment' 
        className='w-full h-10 p-2 my-3 ' 
        onChange={(e) => setComment(e.target.value)}/>
   <IoAddCircle className='absolute top-0 mt-4 mr-3 right-0 size-6 cursor-pointer '
   onClick={handleComment}
   /></div>
      )}
       </div>
        </div></div>
    </div>
    
   
  );
};

export default Card