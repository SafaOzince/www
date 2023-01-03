import React from 'react'

function Form() {
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
    <section id='section-contact' className='mySection bg-light'>
      <div className='myContainer'>
        <div className='container'>
            <div className='myForm text-center pb-3'>
            <h2 className='s-heading text-uppercase fw-bold'>İletişim</h2>
            <h3 className='s-subheading text-muted'> Hizmetlerimiz hakkında detaylı bilgi almak için bizleri arayabilir, randevu için form doldurabilirsiniz.</h3>
            </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
        <div className='col-lg-8'>
            <div className='card p-2 p-md-5 h-100'>
              <div className='container'>
              <h2 className="text-white myformheader pt-3 pb-3">Bize Ulaşın</h2>
              <div className='devider'></div>
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
        </div>
    </section>
  )
}

export default Form