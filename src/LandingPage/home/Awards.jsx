import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 p-1 mr-5 mb-5'>
            <div className='row'>
                <div className='col-6 mr-5 mb-5'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src="\media\largestBroker.svg" className='mr-5' style={{width:"80%"}} alt="" />
                </div>
                    
                <div className='col-6 ml-4 mb-5'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Largest stock broker in India</h2>
                    <p className='mb-5'>2+ million Stocker clients contribute to over 15% of all retailer order volumes in india daily by trading and investing in :</p>
                    <ul>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'>
                                    <li className='m-3'>Futures and Options</li>
                                    <li className='m-3'>Commodity derivatives</li>
                                    <li className='m-3'>Currency derivatives</li>
                                </div>

                                <div className='col-6'>
                                    <li className='m-3'>Stocks ans IPOs</li>
                                    <li className='m-3'>Mutual Funds</li>
                                    <li className='m-3'>Bonds and Gov</li>
                                </div>
                            </div>
                        </div>

                    </ul>
                    <div>
                        <img src="\media\pressLogos.png" className='img-fluid mt-4' alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards