import React from 'react';
import Slider from '../layout/Slider'
import Slideimage1 from '../images/210901.jpg';
import Slideimage2 from '../images/210906.jpg';
import Slideimage3 from '../images/210908.jpg';
import Slideimage4 from '../images/210941.jpg';
import ModalImage1 from '../images/6005000.jpg';
import ModalImage2 from '../images/6005001.jpg';
import ModalImage3 from '../images/6005002.jpg';
import CloseIcon from '../images/close-icon.svg';

export default function Home() {
  return (
    <>
    <header className='background text-white text-center'>
      <div className='container'>
        <div className='background-heading text-uppercase mb-4'>Gökbey Teknoloji  </div>
        <div className='background-sub mb-4'>Arge ve Danışmanlık</div>
        <a href="/contact" className='btn btn-lg mycolor p-lg-3 mt-1 text-uppercase fw-bolder'>Bize Ulaşın</a>
      </div>
    </header>
    {/* Section-2 */}
    <section id='section-2' className='mySection bg-secondary'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h2 className='s-heading text-uppercase fw-bold p'> Hizmetlerimiz</h2>
          <h3 className='s-subheading text-white'>Sizler İçin Neler Yapıyoruz?</h3>
        </div>
        <div className='row text-center'>
          <div className='col-md-4'>
            <div className='rounded-circle mycolor text-white d-flex align-items-center justify-content-center m-auto' style={{width:"8rem", height:"8rem"}} aria-hidden="true">
              <i class="bi bi-cart" style={{fontSize:"4.5rem" }}></i>
            </div>
            <h4 className='my-3 fw-bold'>E-Ticaret</h4>
            <p className='p text-white' >asdgsadgsdgdasgasdgsgasgadsgdsgasgsagasdgsadgdsagsdagasdgasdgdsagasdasdgdsagasdgasdgsadgsdag</p>
          </div>
          <div className='col-md-4'>
            <div className='rounded-circle mycolor text-white d-flex align-items-center justify-content-center m-auto' style={{width:"8rem", height:"8rem"}} aria-hidden="true">
              <i class="bi bi-headset-vr" style={{fontSize:"4.5rem" }}></i>
            </div>
            <h4 className='my-3 fw-bold'>Drone Teknolojileri</h4>
            <p className='p text-white' >asdgsadgsdgdasgasdgsgasgadsgdsgasgsagasdgsadgdsagsdagasdgasdgdsagasdasdgdsagasdgasdgsadgsdagasdgsadgsdgdasgasdgsgasgadsgdsgasgsagasdgsadgdsagsdagasdgasdgdsagasdasdgdsagasdgasdgsadgsdagasdgsadgsdgdasgasdgsgasgadsgdsgasgsagasdgsadgdsagsdagasdgasdgdsagasdasdgdsagasdgasdgsadgsdag</p>
          </div>
          <div className='col-md-4'>
            <div className='rounded-circle mycolor text-white d-flex align-items-center justify-content-center m-auto' style={{width:"8rem", height:"8rem"}} aria-hidden="true">
              <i class="bi bi-cpu-fill" style={{fontSize:"4.5rem" }}></i>
            </div>
            <h4 className='my-3 fw-bold'>Danışmanlık</h4>
            <p className='p text-white '  >asdgsadgsdgdasgasdgsgasgadsgdsgasgsagasdgsadgdsagsdagasdgasdgdsagasdasdgdsagasdgasdgsadgsdag</p>
          </div>
        </div>
      </div>
    </section>
    {/* Section-3 */}
    <section id='section-3' className='mySection bg-light'>
      <div className='container'>
      <div className='text-center mb-5'>
          <h2 className='s-heading text-uppercase fw-bold p'> Hizmetlerimiz</h2>
          <h3 className='s-subheading text-muted'>Sizler İçin Neler Yapıyoruz?</h3>
        </div>
      </div>
    </section>
    {/* Section-4 */}
    {/* <Slider/> */}
    <section id='section-4' className='mySection bg-secondary'>
      <div className='container-fluid p-0'>
        <div className='row g-0'>
          <div className='col'>

            <div className='carousel slide' id='mySlide' data-bs-ride='carousel'>
              <div className='carousel-indicators'>
                <button type='button' data-bs-target="#mySlide" data-bs-slide-to="0" className='active' aria-current='true' aria-label='ilk slayt'></button>
                <button type='button' data-bs-target="#mySlide" data-bs-slide-to="1" aria-label='ikinci slayt'></button>
                <button type='button' data-bs-target="#mySlide" data-bs-slide-to="2" aria-label='üçüncü slayt'></button>
                <button type='button' data-bs-target="#mySlide" data-bs-slide-to="3" aria-label='dördüncü slayt'></button>
              </div>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img src={Slideimage1} className='d-block w-100' style={{height:"1080px"}} alt="slide 1"/>
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>İlk Slayt Etiketi</h5>
                    <p>İlk Slayt Açıklaması</p>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img src={Slideimage2} className='d-block w-100' style={{height:"1080px"}} alt="slide 2"/>
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>2. Slayt Etiketi</h5>
                    <p>2. Slayt Açıklaması</p>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img src={Slideimage3} className='d-block w-100' style={{height:"1080px"}} alt="slide 3"/>
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>3. Slayt Etiketi</h5>
                    <p>3. Slayt Açıklaması</p>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img src={Slideimage4} className='d-block w-100' style={{height:"1080px"}} alt="slide 4"/>
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>4. Slayt Etiketi</h5>
                    <p>4. Slayt Açıklaması</p>
                  </div>
                </div>
              </div>
              <button type='button' className='carousel-control-prev' data-bs-target="#mySlide" data-bs-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Önceki</span>
              </button>
              <button type='button' className='carousel-control-next' data-bs-target="#mySlide" data-bs-slide="next">
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
                <span className='visually-hidden'>Sonraki</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section-5 */}
    <section id='section-5' className='mySection bg-light'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h2 className='s-heading text-uppercase fw-bold'>Hakkımızda</h2>
          <h3 className='s-subheading text-muted'> Yaptıklarımız ve bizim hakkımızda bölümü burada.</h3>
        </div>
        <div className='row gy-4'>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='#Pmodal1' className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div>
                </div>
                <img className='img-fluid' src={ModalImage1} alt='' />
              </a>
              <div className='p-caption text-center bg-white p-4'>
                <div className='pc-heading'>Gökbey1</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='#Pmodal2' className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div>
                </div>
                <img className='img-fluid' src={ModalImage2} alt='' />
              </a>
              <div className='p-caption text-center bg-white p-4'>
                <div className='pc-heading'>Gökbey2</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='#Pmodal3' className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div>
                </div>
                <img className='img-fluid' src={ModalImage3} alt='' />
              </a>
              <div className='p-caption text-center bg-white p-4'>
                <div className='pc-heading'>Gökbey3</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='#Pmodal4' className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div>
                </div>
                <img className='img-fluid' src={ModalImage3} alt='' />
              </a>
              <div className='p-caption text-center bg-white p-4'>
                <div className='pc-heading'>Gökbey4</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='#Pmodal5' className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div>
                </div>
                <img className='img-fluid' src={ModalImage1} alt='' />
              </a>
              <div className='p-caption text-center bg-white p-4'>
                <div className='pc-heading'>Gökbey5</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='#Pmodal6' className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div>
                </div>
                <img className='img-fluid' src={ModalImage2} alt='' />
              </a>
              <div className='p-caption text-center bg-white p-4'>
                <div className='pc-heading'>Gökbey6</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    {/* Section-5-Modals */}
    <div className='modal fade p-modal' id='#PModal1' role="dialog" aria-labelledby="myTitle1" aria-hidden="true">
      <div className='modal-dialog modal-dialog-scrollable'>
        <div className='modal-content'>
          <div className='close-modal' data-bs-dismiss="modal" aria-label="Kapat">
            <img src={CloseIcon} alt=''/>
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='modal-body'>
                  <h2 className='text-uppercase mb-3' id="myTitle1">Gökbey1</h2>
                  <p className='p-intro text-muted mb-4 fst-italic'>asdgsadgsdgdasgasdgsgasgadsgdsgasgsagasdgsadgdsagsdagasdgasdgdsagasdasdgdsagasdgasdgsadgsdag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    {/* Section-6 */}
    <section id='section-6' className='mySection bg-secondary'>
      <div className='container'>
        <div className='text-center mb-5 pb-3'>
          <h2 className='s-heading text-uppercase fw-bold'>Hakkımızda</h2>
          <h3 className='s-subheading text-white'> Yaptıklarımız ve bizim hakkımızda bölümü burada.</h3>
        </div>
      </div>
    </section>
    {/* Section-7 */}
    <section id='section-7' className='mySection bg-light'>
      <div className='container'>
        <div className='text-center mb-5 pb-3'>
          <h2 className='s-heading text-uppercase fw-bold'>İletişim</h2>
          <h3 className='s-subheading text-muted'> Bizimle iletişime geçmek için bölümü burada.</h3>
        </div>
      </div>
    </section>
    </>
  )
}
