import React, { useState } from "react";
import howToUseApp from "../api/howToUse";
const Aboutme = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services overflow-hidden">
        <div className="container mb-5 overflow-hidden">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./assets/img/1.jpg" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list ">
             
              <h1 className="main-heading mb-5">What Do We Offer</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2 className="fw-bold">{title}</h2>
                        <p className="aboutme-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              
            </div>
          </div>
        </div>
      </section>


      
    </>
  );
};

export default Aboutme;
