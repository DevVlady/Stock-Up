import React from 'react'

function Footer() {
    return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className= "col-md-3 col-sm-6" >
                            <h4>Lorem ipsum</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className= "col-md-3 col-sm-6" >
                            <h4>Lorem ipsum</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className= "col-md-3 col-sm-6" >
                            <h4>Lorem ipsum</h4>
                            <ul className='list-unstyled'>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Stock-Up App - All Rights Reserved
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;
