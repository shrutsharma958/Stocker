import React from 'react';


function Education() {
    return ( 
        
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 p-5' >
                    <img style={{width:"80%"}} src="\media\education.svg" alt="" />
                </div>
                <div className='col-6 p-5 mt-4'>
                    <h3>Free and open market education</h3>
                    <br />
                    <p>Varsity , the largest online stock market education book in the word covering everything from the basics to advanced trading.</p>
                    <a href="">Versity  <i class="fa-solid fa-arrow-right"></i></a>
                    <br />
                    <br />
                    <br />
                    <p>Trading Q&A, the most active trading and investement community in India for all your market related query.</p>
                    <br />
                    <a href="">TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;