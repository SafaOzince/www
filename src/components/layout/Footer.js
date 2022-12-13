import React, { useEffect, useState } from 'react'
import "../resources/style.css"
import Logo from "../images/logo-removebg-preview.png";
// import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import * as bootstrap from 'bootstrap';
// window.ScrollSpy = bootstrap.ScrollSpy;
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { ScrollSpy } from 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Footer() {


  return (
    
    <footer className="text-white text-start" id='footer-area'>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        
                            <div className='col-12 my-3'>
                                <div className='rounded-circle mycolor d-flex align-items-center justify-content-center'>
                                        <img src={Logo} width={270} height={134} className="img-fluid" alt="logo"/> 
                                </div>
                            </div>
                            <div className='col-12 mybrand text-muted'>
                                <p>Gökbey Teknoloji ARGE İnovasyon Danışmanlık Üretim Sanayi ve Ticaret Anonim Şirketi</p>
                            </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6">
                        
                            
                                <h3 className='text-uppercase fw-bold'>Hızlı Linkler</h3>

                                <ul className="footer-link justify-content-end flex-grow-1 text-uppercase ms-auto py-lg-2">                                    
                                    <li>
                                        <a href='/' className='mylink text-white'>Ana Sayfa</a>
                                    </li>
                                    
                                    <li>
                                        <a href='/about' className='mylink text-white'>Hakkımızda</a>
                                        
                                    </li>
                                    <li>
                                        
                                        <a href='/services' className='mylink text-white'>Hizmetlerimiz</a>
                                        
                                    </li>
                                    <li>
                                        
                                        <a href='/https://store.gokbeyteknoloji.com/' target="_blank" className='mylink text-white'>Mağaza</a>
                                        
                                    </li>
                                </ul>
                            </div>
                            
                      
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h3 className='text-uppercase fw-bold'>İletişim</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Adres: Esenevler mah. Yunus Emre cd. <br /> Ümraniye, İstanbul
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i>
                                    Telefon No: <a href ="tel:(+123) 456-7898">(+90) 532 201 46 62</a>
                                </li>
                                <li>
                                    <i className="far fa-envelope"></i>
                                    E-posta: <a href="mailto:gokbeyteknoloji@gmail.com">gokbeyteknoloji@gmail.com</a>
                                </li>
                                {/* <li>
                                    <i className="fas fa-fax"></i>
                                    Fax: <a href ="tel:+123456555">+123456555</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Bilgiler</h3>

                            <ul className="information-links">
                            <li>
                                    <a href='/about' className=''>Hakkımızda</a>
                                    
                                </li>
                                <li>
                                    <a href='/contact' className=''>Bize Ulaşın</a>
                                    
                                </li>

                            </ul>
                        </div>
                    </div> */}

                    
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>&copy;2023 Gökbey Teknoloji A.Ş.-Her Hakkı Saklıdır.  <a href="https://gokbeyteknoloji.com" >Gökbey Teknoloji</a></p>
                        </div>
                    </div>
                </div>
            </div>
</footer>

  )
}

export default Footer