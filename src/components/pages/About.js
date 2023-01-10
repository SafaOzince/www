import React from 'react'
import ImageAbout from '../images/aboutimage.jpg';
import MyAccordion from '../layout/Accordion/MyAccordion';
import { accordionData } from '../layout/Accordion/MyAccordionConten';

export default function About() {
  return (
    <>
    <section id='about-1' className='myaboutSection'>
      <div className='container'>
        <div className='text-center mb-3 pb-2'>
          <h2 className='about-heading text-uppercase text-white fw-bold mb-4'>Kurumsal</h2>
          {/* <h3 className='about-sub mb-4 text-muted'> Gökbey Teknoloji {'>'} Hakkımızda</h3> */}
          {/* <div className='d-flex w-100 align-items-center justify-content-start'>
          <a href='/' className='about-sub mb-2 text-muted text-decoration-none'>Gökbey Teknoloji</a>
          <h3 className='about-sub mb-2 text-muted'>{'>'}</h3>
          <h3 className='about-sub mb-2 text-muted'> Hakkımızda</h3>
          </div> */}
        </div>
      </div>
    </section>
    <section id='about-2' className='mySection bg-light'>
      <div className='myContainer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <img src={ImageAbout} className="img-fluid" style={{borderRadius:"50%", width:"300px", height:"300px"}}/>
          </div>
          <div className='col-lg-8'>
            <div className='text-center mb-2 '>
              <h2 className='s-heading text-center text-uppercase fw-bold'>Hakkımızda</h2>
              <p className='a-text mt-4 px-2'>2022 yılında mühendislik ve yazılım sektöründe önemli ARGE projelerinin geliştirilmesi, ülkemize yeni teknolojilerin getirilmesi ve son teknolojik yenilikleri yakından takip ederek mühendislik sektörünün gelişmiş ülkeler seviyesine ulaşmasında katkı sunmak amacıyla Gebze Teknik Üniversitesi Teknoparkta kurulmuş olan Gökbey Teknoloji, kuruluşundan beri sürdürdüğü profesyonellik ve vizyoner bakış açısı ile istikrarlı büyümeyi ilke edinmiştir.</p>
              <br/>
              <p className='a-text mt-0 px-2'>Pazardaki müşteri taleplerini ve sektördeki yenilikleri yakından takip eden, teknoloji ile birlikte değişen dünya koşullarına uyum sağlayabilen şirketimiz genç, alanında uzman ve  güçlü idari ve teknik kadrosu ile birçok ARGE projesine imza atarak sektörde gelişmeyi ve büyümeyi hedeflemektedir.</p>
            </div>
          </div>
          <div className='col'>
              <div className="accordion myaccordion">
                {accordionData.map(({ title, content }) => (
                <MyAccordion title={title} content={content} />
                ))}
              </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='about-box'>
                  <div className='about-icon'>
                    <i class="bi bi-shield-fill-check"></i>
                    
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='about-box'>
                  <div className='about-icon'>
                    <i class="bi bi-emoji-smile-fill"></i>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='about-box'>
                  <div className='about-icon'>
                    <i class="bi bi-globe-americas"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    {/* <div className='container a-container p-5 mb-5 myaboutcolor '>
    <h2 className='s-heading text-center text-uppercase text-white fw-bold'>Hakkımızda</h2>
      <div className='row'>
        <div className='col-12 col-lg-4 '>
          <img src={ImageAbout} className="a-image px-3 img-fluid mt-0" alt='' />
        </div>
        <div className='col-12 col-lg-8 myaboutcolor'>
          <div className='text-center mb-5 pb-3'>
            <p className='a-text text-white mt-4 px-2'>2022 yılında mühendislik ve yazılım sektöründe önemli ARGE projelerinin geliştirilmesi, ülkemize yeni teknolojilerin getirilmesi ve son teknolojik yenilikleri yakından takip ederek mühendislik sektörünün gelişmiş ülkeler seviyesine ulaşmasında katkı sunmak amacıyla Gebze Teknik Üniversitesi Teknoparkta kurulmuş olan Gökbey Teknoloji, kuruluşundan beri sürdürdüğü profesyonellik ve vizyoner bakış açısı ile istikrarlı büyümeyi ilke edinmiştir.</p>
            <br/>
            <p className='a-text text-white mt-0 px-2'>Pazardaki müşteri taleplerini ve sektördeki yenilikleri yakından takip eden, teknoloji ile birlikte değişen dünya koşullarına uyum sağlayabilen şirketimiz genç, alanında uzman ve  güçlü idari ve teknik kadrosu ile birçok ARGE projesine imza atarak sektörde gelişmeyi ve büyümeyi hedeflemektedir.</p>
            <h3 className='s-subheading text-center text-white text-uppercase'> vizyonumuz</h3>
            <p className='a-text text-white mt-0 px-2'>Mühendislik alanında hızlı ve güvenilir çözümler sağlayarak, üretim ve ihracat alanında Türkiye’nin önde gelen firmalarından olmak.</p>
            <h3 className='s-subheading text-center text-white text-uppercase'> misyonumuz</h3>
            <p className='a-text text-white mt-0 px-2'>Ülke ihtiyacı göz önünde bulundurularak, gelişen teknolojiyle beraber birçok farklı sektörde dijitalleşmeyi sağlamak.</p>
          </div>
        </div>
      </div>
    </div> */}

    {/* akordion */}
      {/* <div className=' myContainer'>
        <div className='container'>
        <MyAccordion/>
        </div>
      </div> */}
      

    </section>
    </>
  )
}
