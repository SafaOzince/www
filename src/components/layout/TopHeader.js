
import React from 'react';

const TopHeader = () => {
    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4">
                            <ul className='top-header-nav text-white'>
                            {/* <i class="fas fa-comment-dots text-white"></i> */}
                                <a href='/iletisim' className='top-header-nav-item'>Bize Ulaşmak istermisiniz?</a>
                                
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <ul className='top-header-nav text-white'>
                            <i className="bi bi-telephone"></i>
                                <a href="tel:(+90) 5322014662" className='top-header-nav-item'>(+90) 532 201 46 62</a>
                                
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <ul className='top-header-nav text-white text-end'>
                                <i className="bi bi-envelope-fill"></i>
                                <a href="mailto:info@gokbeyteknoloji.com" className='top-header-nav-item'>info@gokbeyteknoloji.com</a>    
                                
                            </ul>
                        </div>

                        {/* <div className="col-lg-5 col-md-6">
                            <ul className="top-header-right-nav text-white">
                                <div className='row'>
                                    <div className='col-6'><i className="bi bi-telephone"></i>
                                <a href="tel:(+123) 456-7898" className='top-header-right-nav-item'>(+90) 532 201 46 62</a></div>
                                    <div className='col-6'><i className="bi bi-envelope-fill"></i>
                                <a href="mailto:info.gokbeyteknoloji@gmail.com" className='top-header-right-nav-item'>info.gokbeyteknoloji@gmail.com</a></div>
                                </div>
                                
                                
                                
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );

}


export default TopHeader;