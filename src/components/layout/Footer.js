import React, { useEffect, useState } from 'react'
import "../resources/style.css"
import Logo from "../images/logo-removebg-preview.png";

function Footer() {

  return (
    <footer className="text-white text-start py-4" id='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className='col-12 my-0'>
                            <div className='rounded-circle d-flex align-items-center justify-content-center'>
                                <img src={Logo} width={270} height={134} className="img-fluid" alt="logo"/> 
                            </div>
                        </div>
                        <div className='col-12 mybrand text-white'>
                            <p>Gökbey Teknoloji ARGE İnovasyon Danışmanlık Üretim Sanayi ve Ticaret Anonim Şirketi</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3 className='text-uppercase fw-bold my-2'>Hızlı Linkler</h3>
                        <ul className="footer-link justify-content-end flex-grow-1 text-uppercase py-lg-2">                                    
                            <li className='footer-item'>
                                <a href='/' className='btn text-white'>Ana Sayfa</a>
                            </li>
                            <li className='footer-item'>
                                <a href='/about' className='btn text-white'>Hakkımızda</a>
                            </li>
                            <li>
                                <a href='/services' className='btn text-white'>Hizmetlerimiz</a>
                            </li>
                            <li>
                                <a href='/https://store.gokbeyteknoloji.com/' target="_blank" className='btn text-white'>Mağaza</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3 className='text-uppercase fw-bold my-2'>İletişim</h3>
                        <ul className="list-style-none justify-content-end flex-grow-1 py-lg-2">
                            <li>
                                <i className="bi bi-telephone">TELEFON NO: </i>
                                <a href ="tel:(+123) 456-7898" className='btn text-white'>(+90) 532 201 46 62</a>
                            </li>
                            <li>
                                <i className="bi bi-envelope-fill"> E-POSTA: </i>
                                <a href="mailto:info.gokbeyteknoloji@gmail.com"className='btn text-white'>info.gokbeyteknoloji@gmail.com</a>
                            </li>
                            <li>
                                <i className="bi bi-geo-alt-fill">ADRES: </i>
                                    Esenevler mah. Yunus Emre cd. <br /> Ümraniye, İstanbul
                            </li>
                        </ul>
                            <a href='https://www.linkedin.com/company/g%C3%B6kbey-teknoloji/' target="_blank" className='btn-primary mx-2 text-white btn-social'><i class="bi bi-linkedin"></i></a>
                            <a href='https://wa.me/+905322014662' target="_blank"  className='btn-success mx-2 text-white btn-social'><i class="bi bi-whatsapp"></i></a>
                            <a href='https://store.gokbeyteknoloji.com/' target="_blank" className='btn-warning mx-2 text-white btn-social'><i class="bi bi-cart-plus"></i></a>
                            <a href="mailto:info.gokbeyteknoloji@gmail.com" className='btn-danger mx-2 text-white btn-social'><i class="bi bi-envelope-paper"></i></a>
                    </div>
                </div>
            </div>
            <div className="container text-muted">
            <p>&copy;2023 Gökbey Teknoloji A.Ş. -Her Hakkı Saklıdır.  <a href="https://gokbeyteknoloji.com" className='text-decoration-none'>Gökbey Teknoloji</a></p>
                {/* <div className="row">
                    <div className="col-lg-6 col-md-6 text-muted">
                        
                    </div>
                    <div className='col-lg-6 col-md-6 text-center'>
                            
                    </div>
                </div> */}
            </div>
            
    </footer>

  )
}

export default Footer