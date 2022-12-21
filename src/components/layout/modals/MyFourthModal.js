import React from 'react';
import Modal from '../../images/s4.jpg';

const MyFourthModal = ({open, onClose }) => {
    if(!open) return null;
  return (
    <div>
        <div onClick={onClose} className='overlay'>
            <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-sm-10 col-md-6'>
            <div onClick={(e) => {e.stopPropagation()}} className='modalContainer'>
                <div className='modal-content my-content'>
                    <div className='close-modal rounded-circle'>
                        <i class="bi bi-x-circle" onClick={onClose}></i>
                        {/* <img src={CloseIcon} onClick={onClose}  alt=''/> */}
                    </div>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-12 col-lg-10'>
                                <div className='modal-body'>
                                    <img className="img-fluid d-block mx-auto" src={Modal} alt='' />
                                    <div className='my-heading mt-2 mb-3 fw-bold'>ARGE Faaliyetleri</div>
                                    <div className='my-sub'>Gökbey Teknoloji olarak yürütmekte olduğumuz ARGE projeleri ile ülkemize ve müşterilerimize dijital tarımda birçok farklı yenilik sağlamaktayız.</div>
                                    <a href='/services' className='btn btn-sm mycolor p-lg-2 mt-1 mb-1 text-uppercase fw-bolder'>Detaylı Bilgi</a>
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
            </div>
        </div>
    </div>
  )
}

export default MyFourthModal;