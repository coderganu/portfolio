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
                                        I am a dedicated full stack developer and app developer with a passion for creating dynamic and engaging digital experiences. With a strong foundation in HTML, CSS, JavaScript, and frameworks like Bootstrap, React.js, Next.js, and Electron.js, I build responsive and user-friendly interfaces. On the backend, I specialize in Node.js, Express.js, MongoDB, MySQL, and Firebase, ensuring robust and scalable server-side solutions. My expertise extends to mobile app development with React Native and efficient content management using Strapi Headless CMS.
                                            <br/>
                                        In addition to my technical skills, I am proficient in manual testing, ensuring the highest quality of applications. My experience with Flask and Linux adds versatility to my development toolkit. Beyond coding, I am a skilled content writer and social media marketer, capable of creating compelling content that drives engagement. With a strong command of C and C++, I bring a comprehensive approach to every project.
                                    </p>
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
