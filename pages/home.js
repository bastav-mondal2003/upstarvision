import Hero from "@/components/Hero";
import Foot from "@/components/Foot"
import { Karla } from "next/font/google";
import {FcSms} from "react-icons/fc"
import React from "react";


const inter = Karla({ weight:["400","500"], subsets: ["latin"] });

function home() {
  return (
    <div className="body-dark-background">
      <Hero/>
      <div className={`box ${inter.className}`}>
        <div className="content">
          <img
            data-ux="Image"
            src="https://img1.wsimg.com/isteam/stock/uZVOblg0QBH33bQo1/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            data-aid="ABOUT_IMAGE_RENDERED0"
            data-field-id="cards.imageProperties"
            data-field-route="/card/0/image"
            class="x-el x-el-img c1-1 c1-2 c1-2j c1-26 c1-2u c1-2v c1-16 c1-18 c1-3q c1-8h c1-8i c1-l c1-b c1-27"
            data-field-path="data.cards.0.imageProperties"
          />
          <div className="writeup">
            <h3>Our Services</h3>
            <p>
              After 10 years in the industry, we decided to alter direction.
              Now, we share our passion by helping others. Our ramp-up process
              is designed to empower your team and outfit them with the tools
              they need to succeed. Talk to us today about how we can support
              your growth, limit your turnover, and put you on a solid track to
              success and profit.
            </p>
          </div>
        </div>
        <div className="content">
          <img
            data-ux="Image"
            src="https://img1.wsimg.com/isteam/stock/u99EJzyxx9hQRyVOJ/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            data-aid="ABOUT_IMAGE_RENDERED0"
            data-field-id="cards.imageProperties"
            data-field-route="/card/0/image"
            class="x-el x-el-img c1-1 c1-2 c1-2j c1-26 c1-2u c1-2v c1-16 c1-18 c1-3q c1-8h c1-8i c1-l c1-b c1-27"
            data-field-path="data.cards.0.imageProperties"
          />
          <div className="writeup">
            <h3>Our Approach</h3>
            <p>
            Our service includes a comprehensive consult to help identify gaps and opportunities, a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule. We also offer a suite of quality products that will help you get there quickly and smoothly. That's how we ensure your success
            </p>
          </div>
        </div>
        <div className="content">
          <img
            data-ux="Image"
            src="https://img1.wsimg.com/isteam/stock/jp1jQrY/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            data-aid="ABOUT_IMAGE_RENDERED0"
            data-field-id="cards.imageProperties"
            data-field-route="/card/0/image"
            class="x-el x-el-img c1-1 c1-2 c1-2j c1-26 c1-2u c1-2v c1-16 c1-18 c1-3q c1-8h c1-8i c1-l c1-b c1-27"
            data-field-path="data.cards.0.imageProperties"
          />
          <div className="writeup">
            <h3>Why Us?</h3>
            <p>
            Business mentors are key—that's why when it comes to client selection, we're choosy. We want to give each of you the time and guidance you deserve.  Whether you're seeking a strategic alliance with the right partner or a special skillset or tool, call us today. Together we'll create and refine your plan for success. We didn't get there alone. And neither will you.
            </p>
          </div>
        </div>
        <a style={{position:"fixed",zIndex:"100",justifyContent:"flex-end",display:"flex",border:"10px black",borderRadius:"20px",padding:"1.5rem"}} href="https://wa.me/message/7OJLULYELLZXM1" target="_blank"><button><FcSms style={{width:"30px",height:"30px"}}/></button></a>
      </div>
      
        <Foot/>
      
    </div>
  );
}

export default home;
