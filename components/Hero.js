import React from "react";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import hero from '@/public/woman_pc.jpg'

function Hero() {
  return ( 
    <>
      <div className={styles.content}>
        <Image src={hero} alt="" placeholder="blur" style={{zIndex:"-1",position:"absolute",height:'100vh',width:'100vw'}} />
        <div className="heading"><h2 style={{ textAlign: "center",alignSelf:"flex-start" ,textDecorationColor:"Highlight",fontSize:"50px",color:"black"}}>Welcome To UpstarVision</h2></div>
        <div className="blank"></div>
        <h1>Experienced Personal Consulting</h1>
        <p>Helping you design sucess!</p>
        <a href="http://"><button className="btn">Book Now!</button></a>
      </div>
    </>
  );
}

export default Hero;
