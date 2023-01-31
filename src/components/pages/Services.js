import React from 'react';
import ModalPopUp from '../layout/modals/ModalPopUp';
import ServicesOne from '../images/new/rear-view-programmer-working-all-night-long.jpg';
import ServicesTwo from '../images/new/7114 (1).jpg';
import ServicesThree from '../images/Services4.jpg';
import ServicesFour from '../images/new/rpa-concept-with-blurry-hand-touching-screen.jpg';
import ServicesFive from '../images/new/chart-5746589.png';
import ServicesSix from '../images/new/mechanical-engineering-2993233_1920.jpg';
import { useTranslation } from 'react-i18next';

export default function Services() {
  // const [openModal, setOpenModal] = useState(false)

  const { t } = useTranslation()

  return (
    <>
    <section id='about-1' className='myaboutSection'>
      <div className='container'>
        <div className='text-center mb-3 pb-2'>
          <h2 className='about-heading text-uppercase text-white fw-bold mb-4'>{t('services_page_banner')}</h2>
          {/* <h3 className='about-sub mb-4 text-muted'> Gökbey Teknoloji {'>'} Hakkımızda</h3> */}
          {/* <div className='d-flex w-100 align-items-center justify-content-start'>
          <a href='/' className='about-sub mb-2 text-muted text-decoration-none'>Gökbey Teknoloji</a>
          <h3 className='about-sub mb-2 text-muted'>{'>'}</h3>
          <h3 className='about-sub mb-2 text-muted'> Hizmetlerimiz</h3>
          </div> */}
        </div>
      </div>
    </section>
    <section id='section-services' className='services'>
    <div className='container'>
      {/* <div className='text-center mb-5 pb-3'>
          <h2 className='s-heading text-uppercase fw-bold'>Hizmetlerimiz</h2>
          <h3 className='s-subheading text-muted'> Hizmetlerimiz hakkında detaylı bilgi almak için bizleri arayabilir, randevu için form doldurabilirsiniz.</h3>
      </div> */}
      <div className='row'>
          <div className='col-sm-12 col-lg-3 my-2'>
          <div className='d-flex align-items-start'>
            <div className='nav flex-column nav-pills' role="tablist" aria-orientation="vertical">
              <buton type="button" className="nav-link mycolor active" id="Tone" data-bs-toggle="pill" data-bs-target="#one" role="tab" aria-controls="one" aria-selected="true" >{t('services_page_side_menu_h1')}</buton>
              <buton type="button" className="nav-link mycolor" id="Ttwo" data-bs-toggle="pill" data-bs-target="#two" role="tab" aria-controls="two" aria-selected="false" >{t('services_page_side_menu_h2')}</buton>
              <buton type="button" className="nav-link mycolor" id="Tthree" data-bs-toggle="pill" data-bs-target="#three" role="tab" aria-controls="three" aria-selected="false" >{t('services_page_side_menu_h3')}</buton>
              <buton type="button" className="nav-link mycolor" id="Tfour" data-bs-toggle="pill" data-bs-target="#four" role="tab" aria-controls="four" aria-selected="false" >{t('services_page_side_menu_h4')}</buton>
              <buton type="button" className="nav-link mycolor" id="Tfive" data-bs-toggle="pill" data-bs-target="#five" role="tab" aria-controls="five" aria-selected="false" >{t('services_page_side_menu_h5')}</buton>
              <buton type="button" className="nav-link mycolor" id="Tsix" data-bs-toggle="pill" data-bs-target="#six" role="tab" aria-controls="six" aria-selected="false" >{t('services_page_side_menu_h6')}</buton>
              {/* <buton type="button" className="nav-link" id="Tseven" data-bs-toggle="pill" data-bs-target="#seven" role="tab" aria-controls="seven" aria-selected="false" >Deneme Hizmetleri</buton>
              <buton type="button" className="nav-link" id="Teight" data-bs-toggle="pill" data-bs-target="#eight" role="tab" aria-controls="eight" aria-selected="false" ></buton> */}
            </div>
            </div>
            </div>
          <div className='col-sm-12 col-lg-9 my-2'>
          <div className='tab-content'>
            <div className='tab-pane fade show active' id='one' role="tabpanel" aria-labelledby="Tone">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesOne} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>{t('services_page_h1')}</h3>
                    <p className='text-muted text-start'>{t('services_page_p1_1')}</p>
                    <p className='text-muted text-start'>{t('services_page_p1_2')}</p>
                    <p className='text-muted text-start'>{t('services_page_p1_3')}</p>
                    <p className='text-muted text-start'>{t('services_page_p1_4')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='two' role="tabpanel" aria-labelledby="Ttwo">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesTwo} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>{t('services_page_h2')}</h3>
                    <p className='text-muted text-start'>{t('services_page_p2_1')}</p>
                    <p className='text-muted text-start'>{t('services_page_p2_2')}</p>
                    <p className='text-muted text-start'>{t('services_page_p2_3')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='three' role="tabpanel" aria-labelledby="Tthree">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesThree} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>{t('services_page_h3')}</h3>
                    <p className='text-muted text-start'>{t('services_page_p3_1')}</p>
                    <p className='text-muted text-start'>{t('services_page_p3_2')}</p>
                    <p className='text-muted text-start'>{t('services_page_p3_3')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='four' role="tabpanel" aria-labelledby="Tfour">
            <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesFour} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>{t('services_page_h4')}</h3>
                    <p className='text-muted text-start'>{t('services_page_p4_1')}</p>
                    <p className='text-muted text-start'>{t('services_page_p4_2')}</p>
                    <p className='text-muted text-start'>{t('services_page_p4_3')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='five' role="tabpanel" aria-labelledby="Tfive">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                  <img className='img-fluid rounded text-center' src={ServicesFive} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                  <h3 className='display-7 fw-bold my-3 text-start'>{t('services_page_h5')}</h3>
                  <p className='text-muted text-start'>{t('services_page_p5_1')}</p>
                  <p className='text-muted text-start'>
                  {t('services_page_p5_2')}</p>
                  </div>
                </div>
                </div>
            </div>
            <div className='tab-pane fade' id='six' role="tabpanel" aria-labelledby="Tsix">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesSix} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>{t('services_page_h6')}</h3>
                    <p className='text-muted text-start'>{t('services_page_p6_1')}</p>
                    <p className='text-muted text-start'>
                    {t('services_page_p6_2')}</p>
                    <p className='text-muted text-start'>
                    {t('services_page_p6_3')}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          
          {/* <ul className='nav nav-pills' id='mytab' role="tablist">
            <li className='nav-item' role="presentation">
              <buton type="button" className="nav-link" id="Thome" data-bs-toggle="pill" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true" >Anasayfa</buton>
            </li>
            <li className='nav-item' role="presentation">
              <buton type="button" className="nav-link" id="Tprofile" data-bs-toggle="pill" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false" >Profil</buton>
            </li>
            <li className='nav-item' role="presentation">
              <buton type="button" className="nav-link" id="Tcontact" data-bs-toggle="pill" data-bs-target="#contact" role="tab" aria-controls="profile" aria-selected="false" >İletişim</buton>
            </li>
          </ul> */}
          {/* <div className='tab-content'>
            <div className='tab-pane fade show active' id='home' role="tabpanel" aria-labelledby="Thome">
              <h3 className='display-6'>Anasayfa</h3>
              <p className='text-muted'>asdgdsgadsgasdlkgnadsklasşdlgmşaslşgmadsşlgmşasldgmşsldagmsşadlgmsşadlgmasidglşmsadigmasidgmşsaidglşmsaiglşaisdgmlşaisdgmlşaidglşmasidglşmasdşglmasşdlgmsdaşgmşalsdmgşlasmdgiaslşdmgşiasglşm</p>
            </div>
            <div className='tab-pane fade' id='profile' role="tabpanel" aria-labelledby="Tprofile">
              <h3 className='display-6'>Profil</h3>
              <p className='text-muted'>asdgdsgadsgasdlkgnadsklasşdlgmşaslşgmadsşlgmşasldgmşsldagmsşadlgmsşadlgmasidglşmsadigmasidgmşsaidglşmsaiglşaisdgmlşaisdgmlşaidglşmasidglşmasdşglmasşdlgmsdaşgmşalsdmgşlasmdgiaslşdmgşiasglşm</p>
            </div>
            <div className='tab-pane fade' id='contact' role="tabpanel" aria-labelledby="Tcontact">
              <h3 className='display-6'>İletişim</h3>
              <p className='text-muted'>asdgdsgadsgasdlkgnadsklasşdlgmşaslşgmadsşlgmşasldgmşsldagmsşadlgmsşadlgmasidglşmsadigmasidgmşsaidglşmsaiglşaisdgmlşaisdgmlşaidglşmasidglşmasdşglmasşdlgmsdaşgmşalsdmgşlasmdgiaslşdmgşiasglşm</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </section>
    {/* <ModalPopUp/> */}
    </>
  )
}
