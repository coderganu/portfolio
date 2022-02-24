import React, { useState } from "react";
import Portfolioapi from "../api/Portfoliolist";


const Portfolio = () => {
    const [Portfoliodata, setPortfoliodata] = useState(Portfolioapi);

    const filterItem = (cateItem) => {
        const UpdateItem = Portfolioapi.filter((curElem) =>{
            return curElem.categories === cateItem;
        });

        setPortfoliodata(UpdateItem);
    }

    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        Our Work
                    </h1>
                    <div className="row">

                        {/*  */}

                        <div className="cate-btn d-flex justify-content-md-center">

                            <button className="btn-style btn-style-border" onClick={()=> setPortfoliodata(Portfolioapi)}
                            >All</button>

                            <button className="btn-style btn-style-border" onClick={ ()=>  filterItem('web')} > Web  </button>

                            <button className="btn-style btn-style-border" onClick={()=> filterItem('app')} > App  </button>

                            <button className="btn-style btn-style-border" onClick={()=> filterItem('ui')} > UI   </button>

                        </div>

                        {Portfoliodata.map((curElem) => {
                            const { id, logo, title, info } = curElem;
                            return (
                                <>
                                    <div
                                        className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                                        key={id}>
                                        <img src={logo} alt="logo" className="work-img  pt-4" />
                                        <h2 className="sub-heading">{title}</h2>
                                        {/* <p className="service-para">{info}</p> */}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
