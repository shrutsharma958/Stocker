import React from 'react';


function Brokerage() {
    return (
        <div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <br />
        

        <div className='container'>
            <div className='row'>
                <div className='col-8' >
                    <a href=""  className='fs-4 ps-5' style={{textAlign:"end"}}>Brokerage calculator</a>
                    <ul className='mt-3 text-muted p-1'>
                        <li className='mb-2'> 
                            ₹100 per order for futures and options.
                        </li>
                        <li className='mb-2'>
                            For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li className='mb-2'>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li className='mb-2'>
                            ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                         <li className='mb-2'>
                            ₹100 per order for futures and options.
                        </li>
                        <li className='mb-2'>
                            For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).
                        </li>
                        <li className='mb-2'>
                            For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).
                        </li>
                        <li  className='mb-2'>
                            ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>
                </div>
                <div className='col-4'>
                     <a href="" className='fs-4'>List of charges</a>
                </div>

            </div>

        </div>
</div>
    );
}

export default Brokerage;