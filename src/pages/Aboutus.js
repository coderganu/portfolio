import React, { useState } from "react";

const Aboutus = () => {
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                <h1 className="main-heading text-center">About Us</h1>
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./assets/img/1.jpg" alt="aboutusIMg" />
                        </div>

                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list my-auto">


                            <h3 className="mini-title">
                            Hello I"m Daivesh Vijay Suryawanshi  </h3>

                            <div className="row our-services-info">

                                <div className="col-12 our-services-data">
                                    <p className="our-services-para">
                                    I'm a IT Professional. we offers a wide range of IT services ranging from App Development, Website Development, in India. And Also Providing the Content Writing Services. for like blogging , Video Script writing. And I also Known about some computer Programming. like for C, C++, Java , Javascript, html , Css. I also know a little bit about hacking.                                    </p>
                                </div>
                            </div>


                            <br />
                            {/* <button className="btn-style btn-style-border">learn more</button> */}
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Aboutus;
