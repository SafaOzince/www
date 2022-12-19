import React from 'react';
import Slideimage1 from '../images/header.jpeg';
import Slideimage2 from '../images/store-3.jpg';
import Slideimage3 from '../images/headerwallpaper.png';
import Slideimage4 from '../images/210941.jpg';

function Slide() {
  return (
    <section id='section-4' className='mySection p-0'>
    <div className='container-fluid p-0'>
      <div className='row g-0'>
        <div className='col'>

          <div className='carousel slide position-relative' id='mySlide' data-bs-ride='carousel'>
            
            <div className='carousel-indicators'>
              <button type='button' data-bs-target="#mySlide" data-bs-slide-to="0" className='active' aria-current='true' aria-label='ilk slayt'></button>
              <button type='button' data-bs-target="#mySlide" data-bs-slide-to="1" aria-label='ikinci slayt'></button>
              <button type='button' data-bs-target="#mySlide" data-bs-slide-to="2" aria-label='üçüncü slayt'></button>
              {/* <button type='button' data-bs-target="#mySlide" data-bs-slide-to="3" aria-label='dördüncü slayt'></button> */}
            </div>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img src={Slideimage1} className='d-block w-100' style={{height:"1080px"}} alt="slide 1"/>
                <div className='position-absolute my-first-slide'>
                    <div className='container text-start'>
                      <h2> Hizmetlerimiz</h2>
                      <div className='fs-subheading mb-4'>Hizmetlerimiz hakkında bilgi almak için</div>
                      <a href='#' className='btn btn-lg mycolor p-lg-3 mt-1 text-uppercase fw-bolder'>Hizmetlerimiz</a>
                    </div>
                </div>
                {/* <div className='carousel-caption d-none d-md-block'>
                <div className='container'>
                    <div className='background-heading text-uppercase mb-4'>Gökbey Teknoloji  </div>
                    <div className='background-sub mb-4'>Arge ve Danışmanlık</div>
                    <a href="/contact" className='btn btn-lg mycolor p-lg-3 mt-1 text-uppercase fw-bolder'>Bize Ulaşın</a>
                </div>
                  <h5>İlk Slayt Etiketi</h5>
                  <p>İlk Slayt Açıklaması</p>
                </div> */}
              </div>
              <div className='carousel-item'>
                <img src={Slideimage2} className='d-block w-100' style={{height:"1080px"}} alt="slide 2"/>
                <div className='position-absolute my-first-slide'>
                    <div className='container text-start'>
                      <h2> Gökbey Store</h2>
                      <div className='fs-subheading mb-4'>Ürünlerimiz hakkında bilgi almak için</div>
                      <a href='#' className='btn btn-lg mycolor p-lg-3 mt-1 text-uppercase fw-bolder'>Mağazaya git</a>
                    </div>
                </div>
                {/* <div className='carousel-caption d-none d-md-block'>
                  <h5>2. Slayt Etiketi</h5>
                  <p>2. Slayt Açıklaması</p>
                </div> */}
              </div>
              <div className='carousel-item'>
                <img src={Slideimage3} className='d-block w-100' style={{height:"1080px"}} alt="slide 3"/>
                <div className='position-absolute my-first-slide'>
                    <div className='container text-start'>
                      <h2> Gökbey Teknoloji</h2>
                      <div className='fs-subheading mb-4'>Arge ve Danışmanlık</div>
                      <a href='#' className='btn btn-lg mycolor p-lg-3 mt-1 text-uppercase fw-bolder'>Bize Ulaşın</a>
                    </div>
                </div>
                {/* <div className='carousel-caption d-none d-md-block'>
                  <h5>3. Slayt Etiketi</h5>
                  <p>3. Slayt Açıklaması</p>
                </div> */}
              </div>
              {/* <div className='carousel-item'>
                <img src={Slideimage4} className='d-block w-100' style={{height:"1080px"}} alt="slide 4"/>
                <div className='carousel-caption d-none d-md-block'>
                  <h5>4. Slayt Etiketi</h5>
                  <p>4. Slayt Açıklaması</p>
                </div>
              </div> */}
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
  )
}

export default Slide