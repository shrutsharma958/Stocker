import React from 'react';


function RightImage() {
    return (  <div className='container'> 
            <div className='row'>
               
                <div className='col-4'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className='text-muted'>Console</h2>
                    <br />
                    <p className='fs-5 text-muted'>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>

                    <a href="">Learn more →</a>
                    <div className='container'>
                       
                    </div>
                </div>
                 <div className='col-8 p-5' style={{textAlign:"center"}}>
                    
                    <img src="\media\console.png" className='ps-5' alt="" />
                </div>
            </div>
        </div>);
}

export default RightImage;