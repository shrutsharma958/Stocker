import React from 'react';

function Pricing() {
    return ( 
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-5 mt-5'>
            <h2>Unbeatable pricing</h2>
            <br />
            <p>We pioneered the concept of discount broking and price trasparency in India . Flat fees and no hidden charges .</p>
            <a href="">See pricing <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className='col-1 mt-5'>

          </div>
          <div className='col-6 mt-5'>
            <div className='container' style={{textAlign:"center"}}>
              <div className='row'> 
                <div className='col-6 border p-4'>
                  <h2>$0</h2>
                  <br />
                  <p>Free equity delivery and direct mutual funds</p>
                </div> 
                <div className='col-6 border p-4'>
                  <h2>
                  $20
                  </h2>
                  <br />
                  <p>Intraday and F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Pricing;