import React from 'react';


function Universe() {
    return ( 

        <div style={{textAlign:"center"}}> 
            <h2>
            The Stocker Universe
            </h2>
            <br />
            <p className='fs-5'> 
                Extend your trading and investment experience even further with our partner platforms
            </p>
            <br />
            <br />
            <div className='container '>
                <div className='row'> 
                    <div className='col-4 p-4'> 
                        <img src="\media\zerodhaFundhouse.png" alt="" style={{width:"70%"}} />
                        <br />
                        <br />
                        <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img src="\media\sensibullLogo.svg" alt="" style={{width:"80%"}} />
                        <br />
                        <br />
                        
                        <p className='mt-3'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                    </div>
                    <div className='col-4 ps-4 mt-3'>
                        <img src="\media\tijori.svg" alt="" style={{width:"50%"}} />
                        <br />
                        <br />
                        <p>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='container '>
                <div className='row'> 
                    <div className='col-4 p-4'> 
                        <img src="\media\streakLogo.png" alt="" style={{width:"70%"}} />
                        <br />
                        <br />
                        <p>Systematic trading platform
that allows you to create and backtest
strategies without coding.
</p>
                    </div>
                    <div className='col-4 p-4'>
                        <img src="\media\smallcaseLogo.png" alt="" style={{width:"80%"}} />
                        <br />
                        <br />
                        
                        <p className='mt-3'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>
                    </div>
                    <div className='col-4 ps-4 mt-3'>
                        <img src="\media\dittoLogo.png" alt="" style={{width:"50%"}} />
                        <br />
                        <br />
                        <br />
                        <p>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free</p>
                    </div>
                </div>
            </div>


<br />
            <button className=' btn btn-primary mt-3 fs-5' style={{width:"15%"}}>Sign up for free</button>
<br />
<br />
        </div>
     );
}

export default Universe;