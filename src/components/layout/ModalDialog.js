import React from 'react';
// import { Modal, Button } from 'react-bootstrap';


function ModalDialog() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!false)
  }
  return (
    <></>
    // <header className='background text-white text-center'>
    //   <div className='container'>
    //     <div className='background-heading text-uppercase mb-4'>Gökbey Teknoloji  </div>
    //     <div className='background-sub mb-4'>Arge ve Danışmanlık</div>
    //     <a href="/contact" className='btn btn-lg mycolor p-lg-3 mt-1 text-white text-uppercase fw-bolder'>Bize Ulaşın</a>
    //   </div>
    
    // <div className='container'>
    //   <Button variant="success" onClick={initModal}>
    //     Open Modal
    //   </Button>
    //   <Modal show={isShow}>
    //     <Modal.Header closeButton onClick={initModal}>
    //       <Modal.Title>React Modal Popover Example</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="danger" onClick={initModal}>
    //         Close
    //       </Button>
    //       <Button variant="dark" onClick={initModal}>
    //         Store
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
    // </header>
      )
}
export default ModalDialog