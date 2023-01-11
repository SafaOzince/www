import React, {useState} from 'react';
import MyFirstModal from './MyFirstModal';
import MySecondModal from './MySecondModal';
import MyThirdModal from './MyThirdModal';
import MyFourthModal from './MyFourthModal';
import MyFifthModal from './MyFifthModal';
import MySixthModal from './MySixthModal';
import MySeventhModal from './MySeventhModal';
import MyEighthModal from './MyEighthModal'; 
import ModalImage1 from '../../images/new/22212a3d-4f8a-47ac-b631-f3c8b8712b6f.png';
import ModalImage2 from '../../images/new/rdrone-4256093.jpg';
import ModalImage3 from '../../images/new/transformation-g4b611f784_1920.jpg';
import ModalImage4 from '../../images/new/rr3440660.jpg';
import ModalImage5 from '../../images/new/rgrowth-g555e24171_1920.jpg';
import ModalImage6 from '../../images/new/network-g80080e81b_1920.jpg';
import CloseIcon from '../../images/close-icon.svg';

function ModalPopUp() {
    const [openModal, setOpenModal] = useState(false)
    const [openFirstModal, setOpenFirstModal] = useState(false)
    const [openSecondModal, setOpenSecondModal] = useState(false)
    const [openThirdModal, setOpenThirdModal] = useState(false)
    const [openFourthModal, setOpenFourthModal] = useState(false)
    const [openFifthModal, setOpenFifthModal] = useState(false)
    const [openSixthModal, setOpenSixthModal] = useState(false)
    const [openSeventhModal, setOpenSeventhModal] = useState(false)
    const [openEighthModal, setOpenEighthModal] = useState(false)
    

  return (
   
        
    <section id='section-5' className='mySection bg-light'>
        {/* <button onClick={() => setOpenModal(true)}>İncele</button>
        <MyFirstModal open={openModal} onClose={()=> setOpenModal(false)} /> */}
        <div className='myContainer'>
      <div className='container'>
        {/* <div className='text-center mb-5'>
          <h2 className='s-heading text-uppercase fw-bold'>Hizmetlerimiz</h2>
        </div> */}
        <div className='row gy-4'>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='/hizmetlerimiz'  className='p-link'>
                <div className='p-hover'>
                 
                  
                </div>
                <img className='img-fluid' src={ModalImage1} alt='' style={{borderRadius:"25px"}} />
                <summary className='my-summary'>
                <span className='name'>Yazılım Hizmetleri</span>
                  <span className='hover-text'>Görüntüle
                    {/* <i class="fas fa-angle-right px-1"></i> */}
                  </span>
                </summary>
              </a>
              {/* <div className='p-caption text-center bg-white '>
                <div className='pc-heading'>Yazılım Hizmetleri</div>
               
                <a href="#Pmodal1" onClick={() => setOpenFirstModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
               
                <MyFirstModal open={openFirstModal} onClose={()=> setOpenFirstModal(false)} />
              </div> */}
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
            <a href='/hizmetlerimiz'  className='p-link'>
              {/* <a href='#Pmodal2' onClick={() => setOpenSecondModal(true)} className='p-link' data-bs-toggle="modal"> */}
                <div className='p-hover'>
                
                </div>
                <img className='img-fluid' src={ModalImage2} alt='' style={{borderRadius:"25px"}}/>
                <summary className='my-summary'>
                <span className='name'>İHA Hizmetleri</span>
                  <span className='hover-text'>Görüntüle
                    {/* <i class="fas fa-angle-right px-1"></i> */}
                  </span>
                </summary>
              </a>
              {/* <div className='p-caption text-center bg-white '>
                <div className='pc-heading'>İHA Hizmetleri</div>
                
                <a href="#Pmodal2" onClick={() => setOpenSecondModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
                
                <MySecondModal open={openSecondModal} onClose={()=> setOpenSecondModal(false)} />
              </div> */}
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
            <a href='/hizmetlerimiz'  className='p-link'>
              {/* <a href='#Pmodal3' onClick={() => setOpenThirdModal(true)} className='p-link' data-bs-toggle="modal"> */}
                <div className='p-hover'>
                  {/* <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div> */}
                </div>
                <img className='img-fluid' src={ModalImage3} alt='' style={{borderRadius:"25px"}}/>
                <summary className='my-summary'>
                <span className='name'>Danışmanlık Hizmetleri</span>
                  <span className='hover-text'>Görüntüle
                    {/* <i class="fas fa-angle-right px-1"></i> */}
                  </span>
                </summary>
              </a>
              {/* <div className='p-caption text-center bg-white '>
                <div className='pc-heading'>Danışmanlık Hizmetleri</div>
                
                <a href="#Pmodal3" onClick={() => setOpenThirdModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
                
                <MyThirdModal open={openThirdModal} onClose={()=> setOpenThirdModal(false)} />
              </div> */}
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
            <a href='/hizmetlerimiz'  className='p-link'>
              {/* <a href='#Pmodal4' onClick={() => setOpenFourthModal(true)} className='p-link' data-bs-toggle="modal"> */}
                <div className='p-hover'>
                  {/* <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div> */}
                </div>
                <img className='img-fluid' src={ModalImage4} alt='' style={{borderRadius:"25px"}}/>
                <summary className='my-summary'>
                <span className='name'>ARGE Faaliyetleri</span>
                  <span className='hover-text'>Görüntüle
                    {/* <i class="fas fa-angle-right px-1"></i> */}
                  </span>
                </summary>
              </a>
              {/* <div className='p-caption text-center bg-white '>
                <div className='pc-heading'>ARGE Faaliyetleri</div>
                
                <a href="#Pmodal4" onClick={() => setOpenFourthModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
                
                <MyFourthModal open={openFourthModal} onClose={()=> setOpenFourthModal(false)} />
              </div> */}
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
              <a href='/hizmetlerimiz'  className='p-link'>
              {/* <a href='#Pmodal5' onClick={() => setOpenFifthModal(true)} className='p-link' data-bs-toggle="modal"> */}
                <div className='p-hover'>
                  {/* <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div> */}
                </div>
                <img className='img-fluid' src={ModalImage5} alt='' style={{borderRadius:"25px"}}/>
                <summary className='my-summary'>
                <span className='name'>Satış ve Pazarlama</span>
                  <span className='hover-text'>Görüntüle
                    {/* <i class="fas fa-angle-right px-1"></i> */}
                  </span>
                </summary>
              </a>
              {/* <div className='p-caption text-center bg-white '>
                <div className='pc-heading'>Satış ve Pazarlama</div>
                
                <a href="#Pmodal5" onClick={() => setOpenFifthModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
                
                <MyFifthModal open={openFifthModal} onClose={()=> setOpenFifthModal(false)} />
              </div> */}
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='p-item'>
            <a href='/hizmetlerimiz'  className='p-link'>
              {/* <a href='#Pmodal6' onClick={() => setOpenSixthModal(true)} className='p-link' data-bs-toggle="modal"> */}
                <div className='p-hover'>
                  {/* <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div> */}
                </div>
                <img className='img-fluid' src={ModalImage6} alt='' style={{borderRadius:"25px"}}/>
                <summary className='my-summary'>
                  <span className='name'>Teknik Servis</span>
                  <span className='hover-text'>Görüntüle
                    {/* <i class="fas fa-angle-right px-1"></i> */}
                  </span>
                </summary>
              </a>
              {/* <div className='p-caption text-center bg-white '>
                <div className='pc-heading'>Teknik Servis</div>
                
                <a href="#Pmodal6" onClick={() => setOpenSixthModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
                
                <MySixthModal open={openSixthModal} onClose={()=> setOpenSixthModal(false)} />
              </div> */}
            </div>
          </div>
          {/* <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal7' onClick={() => setOpenSeventhModal(true)} className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  // <div className='p-content text-white'>
                  //   <i class="bi bi-plus-circle"></i>
                  // </div>
                </div>
                <img className='img-fluid' src={ModalImage3} alt='' />
              </a>
              <div className='p-caption text-center bg-white '>
                <div className='pc-heading'>Gökbey7</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
                <a href="#Pmodal7" onClick={() => setOpenSixthModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
                {/* <button onClick={() => setOpenSeventhModal(true)}>Detaylı İncele</button> */}
                {/* <MySeventhModal open={openSeventhModal} onClose={()=> setOpenSeventhModal(false)} /> */}
              {/* </div>
            </div>
          </div> */}
          {/* <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal8' onClick={() => setOpenEighthModal(true)} className='p-link' data-bs-toggle="modal">
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
                <a href="#Pmodal8" onClick={() => setOpenEighthModal(true)}className='btn btn-md mycolor p-lg-2 mt-2 text-uppercase fw-bolder' data-bs-toggle="modal">İncele</a>
                {/* <button onClick={() => setOpenFifthModal(true)}>Detaylı İncele</button> */}
                {/* <MyEighthModal open={openEighthModal} onClose={()=> setOpenEighthModal(false)} /> */}
              {/* </div>
            </div>
          </div> */} 
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
    
  )
}

export default ModalPopUp