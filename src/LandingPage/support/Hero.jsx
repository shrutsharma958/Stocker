import React from 'react';


function Hero() {
    return (

        <div style={{ backgroundColor: "rgb(56, 126, 209)" }} className='p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <h3 style={{ color: "white" }}>Support Portal</h3>
                        <br />
                        <br />
                        <h3 style={{ color: "white" }}>Search for an answer or browse help topics to create a ticket</h3>
                        <br />
                        <div class="input-group mb-3 rounded-0" style={{borderRadius:"0px"}}>

                            <input type="text" class="form-control rounded-0 p-3" style={{height:"60px"}} aria-label="Amount (to the nearest dollar)" placeholder='Eg: how do i activate F&O, whyis my order rejected ...'/>
                          

                            
                            
                        </div>
                        
                        <a href="" className='' style={{color:"white" ,borderBottom: '1px solid white',paddingBottom: '6px' }}> Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             
                        <a href="" className='' style={{color:"white" ,borderBottom: '1px solid white',paddingBottom: '6px' }}> Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                        <a href="" className='' style={{color:"white" ,borderBottom: '1px solid white',paddingBottom: '6px' }}>  Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <div className='mt-4'>
                        <a href="" className='mt-5' style={{color:"white" ,borderBottom: '1px solid white',paddingBottom: '6px' }}> Kite user manual</a>&nbsp;&nbsp;&nbsp;
                        </div>
                          
        
                    </div>
                    <div className='col-5'>
                     <h4><a  style={{color:"white" ,textDecoration:"underline"}}>Track tickets</a></h4>
                        <br />
                        <br />
                        <br />
                        <h4 style={{color:"white"}}>Featured</h4>
                        <ol>
                            <li style={{color:"white"}} className='p-1'>
                                <a href="" style={{color:"white" ,textDecoration
                                    :"underline"
                                }}>Surveillance measure on scrips - June 2025</a>
                            </li>
                            <br />
                            <li style={{color:"white"}} className='p-1'>
                                <a href="" style={{color:"white" ,textDecoration
                                    :"underline"
                                }}>Rights Entitlements listing in June 2025</a>
                            </li>
                        </ol>
                        <br /><br />
                        <br /><br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;