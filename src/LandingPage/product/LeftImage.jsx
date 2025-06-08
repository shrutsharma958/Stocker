import React from 'react';

function LeftImage() {
    return (
        <div className='container'> 
            <div className='row'>
                <div className='col-8'>
                    <img src="\media\kite.png" alt="" />
                </div>
                <div className='col-4'>
                    <h2 className='text-muted'>Kite</h2>
                    <br />
                    <p className='fs-5 text-muted'>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 p-0'>
                                <a href="" className='p-0'>Try demo →</a>
                                <br />
                                <br />
                                
                                 <img src="\media\googlePlayBadge.svg" alt="" />
                            </div>
                            <div className='col-6'>
                                <a href="" >Learn More →</a>
                                <br />
                                <br />
                               <img src="\media\appstoreBadge.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default LeftImage;