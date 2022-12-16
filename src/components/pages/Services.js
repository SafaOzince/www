import React from 'react';
import ModalPopUp from '../layout/modals/ModalPopUp';


export default function Services() {
  // const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <header className='background text-white text-center'>
      <div className='container'>
        <div className='background-heading text-uppercase mb-4'>Gökbey Teknoloji  </div>
        <div className='background-sub mb-4'>Arge ve Danışmanlık</div>
        <a href="/contact" className='btn btn-lg mycolor p-lg-3 mt-1 text-uppercase fw-bolder'>Bize Ulaşın</a>
      </div>
    </header>
    <ModalPopUp/>
    </>
  )
}
