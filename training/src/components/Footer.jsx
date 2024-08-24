import React from 'react';
import styles from "./Footer.module.css";
import { BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.flexcontainer}>
            <div className={styles.flexitem}>

                    <h3>Training <span style={{color:"red"}}>Blog</span></h3>
                    <p>Welcome to our technical blog, Where we delve into the world of 
                        cutting-edge technologies and explore their practical applications</p>
              
            </div>
            <div className={styles.flexitem}>
            <h3 style={{marginLeft:"50px"}}>Category</h3>
                <ul>
                    
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>VS CODE</li>
                </ul>
            </div>
            <div className={styles.flexitem}>
                <ul>
                    <li><h3>Get In Touch</h3></li>
                    <li>+91XXXXXXXX</li>
                    <li>www.demo@gmail.com</li>
                </ul>
            </div>
            <div className={styles.flexitem}>
             <div className={styles.icons}>
             <h3>Follow us on</h3>
                <ul>
              <li>  {<BsTwitterX />}</li>
        <li>{<IoLogoInstagram />}</li>
      <li> {<FiLinkedin />}</li>
               </ul>
                </div>
            </div>
        </div>
      </div>
<hr />
<div style={{display:"flex",justifyContent:"space-between",width:"80%",margin:"auto",alignItems:"center"}}>
    <div>© 2024 tRAININGbLOG</div>
    <div>Made With ❤️ Mohali, india</div>
</div>
 </>
  )
}

export default Footer