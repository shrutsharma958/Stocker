import React from 'react';

function Hero() {
    return (
        <div style={{ textAlign: "center" }}>
            <br />
            <br />
            <br />
            <br />
            <h1 className='text-muted'>Charges</h1>
            <p className='fs-4 text-muted'>List of all charges and taxes</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-4 p-5'>
                        <img src="\media\pricingMF.svg" alt="" />
                        <br />

                        <h2 className='mb-4 text-muted '>Free equity delivery</h2>
                        <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                    </div>
                    <div className='col-4 p-5'>
                        <img src="\media\intradayTrades.svg" alt="" />
                        <br />

                        <h2 className='mb-4 text-muted'>Intraday and F&O trades</h2>
                        <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4 p-5'>
                        <img src="\media\pricingMF.svg" alt="" />
                        <br />

                        <h2 className='mb-4 text-muted'>Free direct MF</h2>
                        <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            <br />
        </div>
    );
}

export default Hero;