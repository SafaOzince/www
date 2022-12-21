import React from 'react'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Mesaj Gönder')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Gönderildi')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <section id='about-1' className='myaboutSection'>
      <div className='container'>
        <div className='text-center mb-3 pb-2'>
          <h2 className='about-heading text-uppercase text-white fw-bold mb-4'>İletişim</h2>
          {/* <h3 className='about-sub mb-4 text-muted'> Gökbey Teknoloji {'>'} Hakkımızda</h3> */}
          <div className='d-flex w-100 align-items-center justify-content-start'>
          <a href='/' className='about-sub mb-2 text-muted text-decoration-none'>Gökbey Teknoloji</a>
          <h3 className='about-sub mb-2 text-muted'>{'>'}</h3>
          <h3 className='about-sub mb-2 text-muted'> İletişim</h3>
          </div>
        </div>
      </div>
    </section>
    
    <section id='section-contact' className='mySection bg-light'>
      <div className='container'>
        <div className='text-center mb-5 pb-3'>
          <h2 className='s-heading text-uppercase fw-bold'>İletişim</h2>
          <h3 className='s-subheading text-muted'> Hizmetlerimiz hakkında detaylı bilgi almak için bizleri arayabilir, randevu için form doldurabilirsiniz.</h3>
        </div>
        <div className='row'>
          <div className='col-md-6 col-lg-6 col-xl-4 my-3 my-md-0 '>
            <div className='card p-2 p-md-4 h-100'>
              <div className='container'>
                <div className='text-start'>
                  <h2 className='f-heading text-uppercase text-white fw-bold py-2'>İletişim</h2>
                    <a href='https://www.linkedin.com/company/g%C3%B6kbey-teknoloji/' target="_blank" className='btn-primary mx-2 text-white btn-social'><i class="bi bi-linkedin"></i></a>
                    <a href='https://wa.me/+905322014662' target="_blank"  className='btn-success mx-2 text-white btn-social'><i class="bi bi-whatsapp"></i></a>
                    <a href='https://store.gokbeyteknoloji.com/' target="_blank" className='btn-warning mx-2 text-white btn-social'><i class="bi bi-cart-plus"></i></a>
                    <a href="mailto:info.gokbeyteknoloji@gmail.com" className='btn-danger mx-2 text-white btn-social'><i class="bi bi-envelope-paper"></i></a>
                    <div className='devider'></div>
                    <h2 className='f-heading text-uppercase text-white'><i className="bi bi-telephone mx-2"></i>Bilgi Hattı</h2>
                    <h3 className='f-subheading'> <a href ="tel:(+123) 456-7898" className='btn btn myformbutton'>(+90) 532 201 46 62</a></h3>
                    <div className='devider'></div>
                    <h2 className='f-heading text-uppercase text-white'><i className="bi bi-envelope-paper mx-2"></i>E-posta</h2>
                    <h3 className='f-subheading'> <a href="mailto:info.gokbeyteknoloji@gmail.com"className='btn myformbutton'>info.gokbeyteknoloji@gmail.com</a></h3>
                    <div className='devider'></div>
                    <h2 className='f-heading text-uppercase text-white'><i className="bi bi-geo-alt-fill mx-2"></i>Adres</h2>
                    <h3 className='f-subheading text-muted fst-italic'> Cumhuriyet Mah. Şişecam Yolu sok. GTÜ AR-GE 3 blok No:12 İç Kapı No:29 Gebze/KOCAELİ</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-6 col-xl-8'>
            <div className='card p-2 p-md-4 h-100'>
              <div className='container'>
              <h2 className="text-white py-3">Bize Ulaşın</h2>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label text-white" htmlFor="name">
                      Ad, Soyad:
                    </label>
                    <input className="form-control my-form" type="text" placeholder='Adınızı Girin' id="name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white" htmlFor="email">
                      E-posta:
                    </label>
                    <input className="form-control my-form" type="email" placeholder='E-postanızı Girin' id="email" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white" htmlFor="message">
                      Mesaj Kutusu:
                    </label>
                    <textarea className="form-control my-form" placeholder='Mesajınızı Bu Alana Yazın' id="message" required />
                  </div>
                  <button className="btn myformbutton p-lg-3 mt-1 text-uppercase fw-bold mb-3 mb-md-0" type="submit">
                    {formStatus}
                  </button>
                </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fluid p-0 my-0">
      <div className='row g-0'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7182.516472447278!2d29.353949496931502!3d40.8087146932649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cade5b60c2e3f5%3A0xc9e56bd8efc8afac!2sCumhuriyet%2C%20%C5%9Ei%C5%9Fecam%20Yolu%20Sk.%20Ar-ge%3A12%20No%3A54%2C%2041420%20Gebze%2FKocaeli!5e0!3m2!1str!2str!4v1670999532654!5m2!1str!2str" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  )
}
export default ContactForm