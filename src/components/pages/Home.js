import React from 'react';
import Slider from '../layout/Slider/Slider'
import Slideimage1 from '../images/210901.jpg';
import Slideimage2 from '../images/210906.jpg';
import Slideimage3 from '../images/210908.jpg';
import Store from '../images/store1.jpeg';
import ModalPopUp from '../layout/modals/ModalPopUp';
import Slide from '../layout/Slide';
import Form from '../layout/Form';
import MyForm from '../layout/MyForm';
import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t } = useTranslation()
  return (
    <>
    <Slide/>
    <ModalPopUp/>
    <header className='background text-white text-center'>
      <div className='container'>
        <div className='background-heading text-uppercase mb-4'>{t('home_page_header_bg_header')}  </div>
        <div className='background-sub mb-4'>{t('home_page_header_bg_subheader')}</div>
        <a href="/iletisim" className='btn btn-lg mycolor py-lg-2 px-lg-5 mt-1 fw-bold' style={{border:"2px solid #61dafb"}}>{t('home_page_header_bg_buton')}</a>
      </div>
    </header>
    
  
   
    {/* Section-4 */}
    {/* <Slider/> */}
    {/* <Slide/> */}
    {/* Section-5 */}
    
    
    {/* Section-6 */}
    {/* <section id='section-6' className='mySection bg-secondary'>
      <div className='container'>
        <div className='text-center mb-5 pb-3'>
          <h2 className='s-heading text-uppercase fw-bold'>Hakkımızda</h2>
          <h3 className='s-subheading text-white'> Yaptıklarımız ve bizim hakkımızda bölümü burada.</h3>
        </div>
      </div>
    </section> */}
     {/* Section-3 */}
     <section id='section-3' className='mySection bg-light'>
      <div className=' myContainer'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h2 className='s-heading text-uppercase fw-bold p'> {t('home_page_store_bg_header')}</h2>
          <h3 className='s-subheading text-muted'>{t(('home_page_store_bg_subheader'))}</h3>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-lg-12'>
              <div className='p-item'>
                <a href='#' className='p-link'>
                  {/* <a href='https://store.gokbeyteknoloji.com/' target="_blank" className='p-link'> */}
                  <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-cart-plus"></i>
                  </div>
                </div>
                <img className='img-fluid' src={Store} alt='' style={{borderRadius:"25px"}}/>
                </a>
              </div>
            
              {/* <img className='img-fluid' src={Store} alt='' style={{borderRadius:"25px"}}/>
              </a> */}
            </div>
            {/* <div className='col-sm-12 col-lg-12'>
              
            </div> */}
          </div>
        </div>

      </div>
      </div>
    </section>
    {/* Section-2 */}
    <section id='section-2' className='mySection'>
      <div className='myContainer'>
      <div className='container'>
        <div className='text-center mb-5'>
          {/* <h2 className='s-heading text-uppercase fw-bold p'> Hizmetlerimiz</h2>
          <h3 className='s-subheading text-white'>Sizler İçin Neler Yapıyoruz?</h3> */}
        </div>
        <div className='row text-center'>
          <div className='col-md-4'>
            <div className='rounded-circle myiconcolor d-flex align-items-center justify-content-center m-auto' style={{width:"8rem", height:"8rem"}} aria-hidden="true">
              <i class="bi bi-briefcase" style={{fontSize:"4.5rem" }}></i>
            </div>
            <h4 className='my-3 fw-bold text-white'>{t('home_page_icon_section_header_one')}</h4>
            <p className='text-white'>{t('home_page_icon_section_p_one')}</p>
          </div>
          <div className='col-md-4'>
            <div className='rounded-circle myiconcolor d-flex align-items-center justify-content-center m-auto' style={{width:"8rem", height:"8rem"}} aria-hidden="true">
              <i class="bi bi-headset-vr" style={{fontSize:"4.5rem" }}></i>
            </div>
            <h4 className='my-3 fw-bold text-white'>{t('home_page_icon_section_header_two')}</h4>
            <p className='text-white'>{t('home_page_icon_section_p_two')}</p>
          </div>
          <div className='col-md-4'>
            <div className='rounded-circle myiconcolor d-flex align-items-center justify-content-center m-auto' style={{width:"8rem", height:"8rem"}} aria-hidden="true">
              <i class="bi bi-cpu-fill" style={{fontSize:"4.5rem" }}></i>
            </div>
            <h4 className='my-3 fw-bold text-white'>{t('home_page_icon_section_header_three')}</h4>
            <p className='text-white'>{t('home_page_icon_section_p_three')}</p>
          </div>
        </div>
        </div>
      </div>
    </section>
    {/* Section-7 */}
      
        <Form/>
        {/* <MyForm/> */}
     
    </>
  )
}
