import React, {useState} from 'react';
import MyFirstModal from './MyFirstModal';
import MySecondModal from './MySecondModal';
import MyThirdModal from './MyThirdModal';
import MyFourthModal from './MyFourthModal';
import MyFifthModal from './MyFifthModal';
import MySixthModal from './MySixthModal';
import MySeventhModal from './MySeventhModal'; 
import ModalImage1 from '../../images/6005000.jpg';
import ModalImage2 from '../../images/6005001.jpg';
import ModalImage3 from '../../images/6005002.jpg';
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
    

  return (
   
        
    <section id='section-5' className='mySection bg-light'>
        {/* <button onClick={() => setOpenModal(true)}>İncele</button>
        <MyFirstModal open={openModal} onClose={()=> setOpenModal(false)} /> */}
      <div className='container'>
        <div className='text-center mb-5'>
          <h2 className='s-heading text-uppercase fw-bold'>Hakkımızda</h2>
          <h3 className='s-subheading text-muted'> Yaptıklarımız ve bizim hakkımızda bölümü burada.</h3>
        </div>
        <div className='row gy-4'>
          <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal1' onClick={() => setOpenFirstModal(true)} className='p-link' data-bs-toggle="modal">
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
                {/* <button onClick={() => setOpenFirstModal(true)}>Detaylı İncele</button> */}
                <MyFirstModal open={openFirstModal} onClose={()=> setOpenFirstModal(false)} />
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal2' onClick={() => setOpenSecondModal(true)} className='p-link' data-bs-toggle="modal">
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
                {/* <button onClick={() => setOpenSecondModal(true)}>Detaylı İncele</button> */}
                <MySecondModal open={openSecondModal} onClose={()=> setOpenSecondModal(false)} />
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal3' onClick={() => setOpenThirdModal(true)} className='p-link' data-bs-toggle="modal">
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
                {/* <button onClick={() => setOpenThirdModal(true)}>Detaylı İncele</button> */}
                <MyThirdModal open={openThirdModal} onClose={()=> setOpenThirdModal(false)} />
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal4' onClick={() => setOpenFourthModal(true)} className='p-link' data-bs-toggle="modal">
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
                {/* <button onClick={() => setOpenFourthModal(true)}>Detaylı İncele</button> */}
                <MyFourthModal open={openFourthModal} onClose={()=> setOpenFourthModal(false)} />
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal5' onClick={() => setOpenFifthModal(true)} className='p-link' data-bs-toggle="modal">
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
                {/* <button onClick={() => setOpenFifthModal(true)}>Detaylı İncele</button> */}
                <MyFifthModal open={openFifthModal} onClose={()=> setOpenFifthModal(false)} />
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal6' onClick={() => setOpenSixthModal(true)} className='p-link' data-bs-toggle="modal">
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
                {/* <a href="#section-5" onClick={() => setOpenSixthModal(true)}className='btn btn-lg mycolor p-lg-3 mt-1 text-uppercase fw-bolder'>İncele</a> */}
                {/* <button onClick={() => setOpenSixthModal(true)}>Detaylı İncele</button> */}
                <MySixthModal open={openSixthModal} onClose={()=> setOpenSixthModal(false)} />
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3'>
            <div className='p-item'>
              <a href='#Pmodal7' onClick={() => setOpenSeventhModal(true)} className='p-link' data-bs-toggle="modal">
                <div className='p-hover'>
                  <div className='p-content text-white'>
                    <i class="bi bi-plus-circle"></i>
                  </div>
                </div>
                <img className='img-fluid' src={ModalImage3} alt='' />
              </a>
              <div className='p-caption text-center bg-white p-4'>
                <div className='pc-heading'>Gökbey7</div>
                <div className='pc-subheading text-muted fst-italic'>Açıklaması</div>
                {/* <button onClick={() => setOpenSeventhModal(true)}>Detaylı İncele</button> */}
                <MySeventhModal open={openSeventhModal} onClose={()=> setOpenSeventhModal(false)} />
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
    
  )
}

export default ModalPopUp