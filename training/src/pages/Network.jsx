import React from 'react';
import styles from "../components/Network.module.css";
import WIFI from "../assets/wifi.jpeg";

const Network = () => {
  return (
    <div className={styles.container}>
    <div className={styles.div}>

    <img src={WIFI} alt="" style={{width:"60%",height:"80%",borderRadius:"50%"}}/>
    <span style={{fontSize:"60px",marginLeft:"40px",display:"flex"}}>! POOR NETWORK CONNECTION</span>
    </div>
</div>
  )
}

export default Network