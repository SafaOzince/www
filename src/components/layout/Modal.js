import React from "react";
import styles from "./Modal.module.css";
// import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <><header className='background text-white text-center'>
    <div className='container'>
      <div className='background-heading text-uppercase mb-4'>Gökbey Teknoloji  </div>
      <div className='background-sub mb-4'>Arge ve Danışmanlık</div>
      <a href="/contact" className='btn btn-lg mycolor p-lg-3 mt-1 text-white text-uppercase fw-bolder'>Bize Ulaşın</a>
    </div>
  </header>
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
  {/* ----------------------------------------------------------------------------------------------- */}
      <button className="btn btn-info" data-bs-target="MyModal" onClick={() => setIsOpen(true)}>
               OpenMyModal
      </button>
      <div id="MyModal"className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                <i style={{ marginBottom: "0px" }} class="bi bi-x-circle"></i>
            {/* <RiCloseLine style={{ marginBottom: "-3px" }} /> */}
          </button>
          <div className={styles.modalContent}>
            Are you sure you want to delete the item?
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;