import React, { useEffect, useState } from 'react'
import "../resources/style.css"
import Logo from "../images/logo-removebg-preview.png";
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation()

  return (
    <footer className="text-white text-start myfooter" id='footer-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className='col-12 my-0'>
                            <div className='rounded-circle d-flex align-items-center justify-content-center'>
                                <img src={Logo} width={270} height={134} className="img-fluid" alt="logo"/> 
                            </div>
                        </div>
                        <div className='col-12 mybrand text-white'>
                            <p>{t('footer_brand')}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3 className='text-uppercase fw-bold myfooterheader mb-2 mt-2'>{t('footer_buton_header')}</h3>
                        <ul className="footer-link justify-content-end flex-grow-1 py-lg-2">                                    
                            <li>
                                <a href='/' className='btn footerbutton'>{t('footer_buton_one')}</a>
                            </li>
                            <li className='footer-item'>
                                <a href='/kurumsal' className='btn footerbutton'>{t('footer_buton_two')}</a>
                            </li>
                            <li>
                                <a href='/hizmetlerimiz' className='btn footerbutton'>{t('footer_buton_three')}</a>
                            </li>
                            <li>
                                <a href='/https://store.gokbeyteknoloji.com/' target="_blank" className='btn disabled footerbutton'>{t('footer_buton_four')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h3 className='text-uppercase myfooterheader fw-bold mb-2 mt-2'>{t('footer_contact_header')}</h3>
                        <ul className="list-style-none justify-content-end flex-grow-1 py-lg-2">
                            <li className='d-flex flex-wrap align-items-center'>
                                <i className="bi bi-telephone"></i>
                                <a href ="tel:(+90)5322014662" className='btn footerbutton'>(+90) 532 201 46 62</a>
                            </li>
                            <li className='d-flex flex-wrap align-items-center'>
                                <i className="bi bi-envelope-fill"></i>
                                <a href="mailto:info@gokbeyteknoloji.com"className='btn footerbutton'>info@gokbeyteknoloji.com</a>
                            </li>
                            <li className='d-flex flex-wrap align-items-center d-100 h-100'>
                                <i className="bi bi-geo-alt-fill"></i>
                                <a href="/iletisim" className='btn footerbutton'>GTÜ AR-Ge 3 Blok No:12 Gebze/KOCAELİ</a>    
                            </li>
                        </ul>
                            <a href='https://www.linkedin.com/company/g%C3%B6kbey-teknoloji/' target="_blank" className='btn-primary mx-2 text-white btn-social'><i class="bi bi-linkedin"></i></a>
                            <a href='https://wa.me/+905322014662' target="_blank"  className='btn-success mx-2 text-white btn-social'><i class="bi bi-whatsapp"></i></a>
                            {/* <a href='https://store.gokbeyteknoloji.com/' target="_blank" className='btn-warning mx-2 text-white btn-social'><i class="bi bi-cart-plus"></i></a> */}
                            <a href="mailto:info.gokbeyteknoloji@gmail.com" className='btn-danger mx-2 text-white btn-social'><i class="bi bi-envelope-paper"></i></a>
                    </div>
                </div>
            </div>
            <div className="container text-muted">
            <p>&copy;{t('footer_copy_right')}  <a href="https://gokbeyteknoloji.com" className='text-decoration-none'>{t('footer_copy_right_gt')}</a></p>
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