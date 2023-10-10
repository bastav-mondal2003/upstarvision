import React,{useState} from "react";
import styles from "@/styles/Foot.module.css";
import {BsInstagram,BsLinkedin} from 'react-icons/bs'
import {MdWhatsapp} from "react-icons/md"




function Hero() {
  
  return (
    <>
    
    <div className={styles.content}>
    <div className="box1">
      <p>Copyright © 2023 UPSTAR VISION - All Rights Reserved.</p>
    </div>
    <div className="box2"><a href="https://instagram.com/upstar.vision?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" style={{padding:"0.5 rem"}}><button><BsInstagram/></button></a>
        <a href="https://www.linkedin.com/company/upstarvision/" target="_blank" style={{border:"5px solid white"}}><BsLinkedin/></a>
        <a  href="https://wa.me/message/7OJLULYELLZXM1" target="_blank"><MdWhatsapp/></a>
        </div></div>
      

       
      
    </>
  );
}

export default Hero;
