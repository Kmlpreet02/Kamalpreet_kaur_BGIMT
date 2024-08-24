import React from 'react';
import styles from "../components/Page.module.css";
import PAGE from "../assets/pages.jpeg";

const Page = () => {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.div}>

        <img src={PAGE} alt="" style={{width:"500px%",height:"500px",borderRadius:"50%"}}/>
        <span style={{fontSize:"100px",marginLeft:"40px",display:"flex"}}>PAGE NOT FOUND</span>
        
              
        </div>
    </div>
    </>
  )
}

export default Page