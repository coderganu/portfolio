import react from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-12 col-lg-6">
                                <img src="./assets/img/1.jpg" class="d-block hero-img img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>

                            <div class="col-lg-6 col-sm-12 col-12 mx-sm-auto">
                                <h1 className="main-heading">Daivesh Vijay Suryawanshi</h1>
                                <h3 className="hero-title" >I'm a 
                                    <span className="type-text">
                                        <Typewriter
                                            words={['Developer', 'Designer', 'Blogger', 'Freelancer' , 'Content Creator']}
                                            loop
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </span>
                                </h3>

                                <div className="social-icon gap-3">
                                    <a href="https://www.facebook.com/daiveshs">
                                        <i class="bi bi-facebook" ></i>
                                    </a>

                                    <a href="https://www.instagram.com/itengg_7875/">
                                        <i class="bi bi-instagram"></i>
                                    </a>

                                    <a href="https://twitter.com/daiveshsuryawa">
                                        <i class="bi bi-twitter"></i>
                                    </a>

                                    <a href="https://in.linkedin.com/in/daivesh-suryawanshi-105231139">
                                        <i class="bi bi-linkedin"></i>
                                    </a>

                                    <a href="https://github.com/daiveshvsuryawanshi">
                                        <i class="bi bi-github"></i>
                                    </a>
                                </div>

                                <div class="d-grid gap-2 d-flex justify-content-md-start justify-content-sm-start">
                                    <Link to="/contact">
                                    <button className="btn btn-style" >Hire Me</button>
                                    </Link>

                                    <Link to="/resume">
                                    <button className="btn-style btn-style-border">Resume</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Hero;