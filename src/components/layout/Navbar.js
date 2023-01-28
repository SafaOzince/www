import React, { useEffect, useState } from 'react'
import "../resources/style.css"
import Logo from "../images/logo-removebg-preview.png";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
// import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import * as bootstrap from 'bootstrap';
// window.ScrollSpy = bootstrap.ScrollSpy;
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { ScrollSpy } from 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Navbar() {

 //Mobile navbar close 
     var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
     for(let i = 0; i < BtnCanvas.length; i++) {
         BtnCanvas[i].addEventListener("click", function () {
             document.querySelector('[data-bs-dismiss="offcanvas"]').click();
         });
     }

//Change navbar background when scrolldown

    //  window.addEventListener("DOMContentLoaded",event=>{
    //      var navbarMobile=function(){
    //          const nCollapsible=document.body.querySelector('#mainNavbar');
    //          if(!nCollapsible){
    //              return;
    //          }
    //          if(window.scrollY ===0){
    //              nCollapsible.classList.remove('navbar-mobile');
    //          }else{
    //              nCollapsible.classList.add('navbar-mobile');
    //          }
    //      };
    //      navbarMobile();
    //      document.addEventListener('scroll',navbarMobile);
    //      const myNavbar=document.body.querySelector('#mainNavbar');
    //      if(myNavbar){
    //          new bootstrap.ScrollSpy(document.body,{
    //              target:'#mainNavbar',
    //              offset:74
    //          });
    //      }
    //  });

    useEffect(() => {
        let elementId = document.getElementById("mainNavbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY === 0) {
                elementId.classList.remove("navbar-mobile");
            } else {
                elementId.classList.add("navbar-mobile");
            }
        });
        window.scrollTo(0, 0);
    }, [])

    const languages = [
        {
            code: 'tr',
            name: 'Türkçe',
            country_code: 'tr',
        },
        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
        }
    ]

    const { t } = useTranslation()

  return (
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNavbar'>
        <div className='container'>
            <a href='/' className='navbar-brand text-uppercase' title='Gökbey Teknoloji website link'>
                <div className=' d-flex align-items-center justify-content-center'>
                    <img src={Logo} width={134} height={55} className="img-fluid" alt="logo"/> 
                </div>
            </a>
            <button type='button' className='navbar-toggler' data-bs-toggle="offcanvas" data-bs-target="#myNavbar" aria-controls='myNavbar' aria-label='menüyü açma kapama butonu' aria-expanded="false">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='offcanvas offcanvas-end' tabIndex={-1} id='myNavbar' aria-labelledby='myLabel'>
                <div className='offcanvas-header my-canvas'>
                    <h5 className='offcanvas-title' id='myLabel'>Menü</h5>
                    <button type='button' className='btn-close text-reset' data-bs-dismiss="offcanvas" aria-label="Kapat"></button>
                </div>
                <div className='offcanvas-body'>
                    <ul className='navbar-nav justify-content-end flex-grow-1 text-uppercase ms-auto py-lg-2'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link btn-close-canvas'>{t('nav_link_item_one')}</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/kurumsal' className='nav-link btn-close-canvas'>{t('nav_link_item_two')}</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/hizmetlerimiz' className='nav-link btn-close-canvas'>{t('nav_link_item_three')}</a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://store.gokbeyteknoloji.com/' target="_blank" className='nav-link disabled btn-close-canvas'>{t('nav_link_item_four')}</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/iletisim' className='nav-link btn-close-canvas'>{t('nav_link_item_five')}</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                        {/* <li className='nav-item'>
                            <div class="dropdown show">
                                <a class="btn btn-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="bi bi-globe2"></i>
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                {languages.map(({ code, name, country_code}) => (
                                    <li key={country_code}>
                                        <a className='nav-link btn-close-canvas' onClick={() => i18next.changeLanguage(code)}>
                                            <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>  
                                            
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </li> */}
                        {languages.map(({ code, name, country_code}) => (
                            <li className='nav-item' key={country_code}>
                                <a className='nav-link btn-close-canvas' onClick={() => i18next.changeLanguage(code)}>
                                  <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>  
                                    {/* {name} */}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar