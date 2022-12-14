import React from 'react';
import Modal from '../../images/3.jpg';

const MyEighthModal = ({open, onClose }) => {
    if(!open) return null;
  return (
    <div>
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => {e.stopPropagation()}} className='modalContainer'>
                <div className='modal-content my-content'>
                    <div className='close-modal rounded-circle'>
                        <i class="bi bi-x-circle" onClick={onClose}></i>
                        {/* <img src={CloseIcon} onClick={onClose}  alt=''/> */}
                    </div>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8'>
                                <div className='modal-body'>
                                    <img className="img-fluid d-block mx-auto" src={Modal} alt='' />
                                    <h2 className='text-uppercase mt-2 mb-3'>Gökbey8</h2>
                                    <p className='p text-muted fw-bold fst-italic'>sadgasdgasgasgadsgsagasdgasgsagasdgsadgsadgdsagdasgggggsadgasdgasgasgadsgsagasdgasgsagasdgsadgsadgdsagdasgggggsadgasdgasgasgadsgsagasdgasgsagasdgsadgsadgdsagdasgggggsadgasdgasgasgadsgsagasdgasgsagasdgsadgsadgdsagdasgggggsadgasdgasgasgadsgsagasdgasgsagasdgsadgsadgdsagdasgggggsadgasdgasgasgadsgsagasdgasgsagasdgsadgsadgdsagdasggggg</p>
                                    <a href='/hizmetlerimiz' className='btn btn-md mycolor p-lg-3 mt-1 mb-2 text-uppercase fw-bolder'>Detaylı Bilgi</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <p onClick={onClose} className='closeBtn'>X</p> */}
                    {/* <div className='content'>
                        <h2>Gökbey1</h2>
                        <p>Açıklaması</p>
                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary'>
                            <span className='bold'>Yes</span>, I love nft
                        </button>
                        <button className='btnOutline'>
                            <span className='bold'>No</span>, thanks
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyEighthModal;