import React, { useEffect, useState } from 'react'
import "../resources/style.css"
import Logo from "../images/logo-removebg-preview.png";
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

  return (
    <nav className='navbar navbar-expand-lg navbar-dark fixed-top' id='mainNavbar'>
        <div className='container'>
            <a href='/' className='navbar-brand text-uppercase' title='G??kbey Teknoloji website link'>
                <div className=' d-flex align-items-center justify-content-center'>
                    <img src={Logo} width={134} height={55} className="img-fluid" alt="logo"/> 
                </div>
            </a>
            <button type='button' className='navbar-toggler' data-bs-toggle="offcanvas" data-bs-target="#myNavbar" aria-controls='myNavbar' aria-label='men??y?? a??ma kapama butonu' aria-expanded="false">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='offcanvas offcanvas-end' tabIndex={-1} id='myNavbar' aria-labelledby='myLabel'>
                <div className='offcanvas-header my-canvas'>
                    <h5 className='offcanvas-title' id='myLabel'>Men??</h5>
                    <button type='button' className='btn-close text-reset' data-bs-dismiss="offcanvas" aria-label="Kapat"></button>
                </div>
                <div className='offcanvas-body'>
                    <ul className='navbar-nav justify-content-end flex-grow-1 text-uppercase ms-auto py-lg-2'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link btn-close-canvas'>Ana Sayfa</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/kurumsal' className='nav-link btn-close-canvas'>Kurumsal</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/hizmetlerimiz' className='nav-link btn-close-canvas'>Hizmetlerimiz</a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://store.gokbeyteknoloji.com/' target="_blank" className='nav-link disabled btn-close-canvas'>Ma??aza</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/iletisim' className='nav-link btn-close-canvas'>??leti??im</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar