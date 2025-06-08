import React from 'react';


function Hero() {
    return (


        <div className='container-fluid p-5 mb-5'>
            <br />
            <br />
            <br />
            <div className='row mb-5' style={{ textAlign: "center" }}>
                <div className='col'>
                    <img src="\media\homeHero.png" className="img-fluid" alt="" style={{ width: "70%" }} />
                </div>
            </div>



            <div className='row text-center mt-5'>
                <div className='col'>
                    <h1 className='mb-2'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds,and more</p>
                    <button className=' btn btn-primary mt-3 fs-5' style={{ width: "15%" }}>Signup now</button>
                </div>
            </div>





        </div>
    );
}

export default Hero;