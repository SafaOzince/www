import React from 'react';
import ModalPopUp from '../layout/modals/ModalPopUp';
import ServicesOne from '../images/new/rear-view-programmer-working-all-night-long.jpg';
import ServicesTwo from '../images/new/7114.jpg';
import ServicesThree from '../images/Services4.jpg';
import ServicesFour from '../images/new/rpa-concept-with-blurry-hand-touching-screen.jpg';
import ServicesFive from '../images/new/chart-5746589.png';
import ServicesSix from '../images/new/mechanical-engineering-2993233_1920.jpg';

export default function Services() {
  // const [openModal, setOpenModal] = useState(false)

  return (
    <>
    <section id='about-1' className='myaboutSection'>
      <div className='container'>
        <div className='text-center mb-3 pb-2'>
          <h2 className='about-heading text-uppercase text-white fw-bold mb-4'>Hizmetlerimiz</h2>
          {/* <h3 className='about-sub mb-4 text-muted'> Gökbey Teknoloji {'>'} Hakkımızda</h3> */}
          {/* <div className='d-flex w-100 align-items-center justify-content-start'>
          <a href='/' className='about-sub mb-2 text-muted text-decoration-none'>Gökbey Teknoloji</a>
          <h3 className='about-sub mb-2 text-muted'>{'>'}</h3>
          <h3 className='about-sub mb-2 text-muted'> Hizmetlerimiz</h3>
          </div> */}
        </div>
      </div>
    </section>
    <section id='section-services' className='services'>
    <div className='container'>
      {/* <div className='text-center mb-5 pb-3'>
          <h2 className='s-heading text-uppercase fw-bold'>Hizmetlerimiz</h2>
          <h3 className='s-subheading text-muted'> Hizmetlerimiz hakkında detaylı bilgi almak için bizleri arayabilir, randevu için form doldurabilirsiniz.</h3>
      </div> */}
      <div className='row'>
          <div className='col-sm-12 col-lg-3 my-2'>
          <div className='d-flex align-items-start'>
            <div className='nav flex-column nav-pills' role="tablist" aria-orientation="vertical">
              <buton type="button" className="nav-link mycolor active" id="Tone" data-bs-toggle="pill" data-bs-target="#one" role="tab" aria-controls="one" aria-selected="true" >Yazılım Hizmetleri</buton>
              <buton type="button" className="nav-link mycolor" id="Ttwo" data-bs-toggle="pill" data-bs-target="#two" role="tab" aria-controls="two" aria-selected="false" >İHA Hizmetleri</buton>
              <buton type="button" className="nav-link mycolor" id="Tthree" data-bs-toggle="pill" data-bs-target="#three" role="tab" aria-controls="three" aria-selected="false" >Danışmanlık Hizmetleri</buton>
              <buton type="button" className="nav-link mycolor" id="Tfour" data-bs-toggle="pill" data-bs-target="#four" role="tab" aria-controls="four" aria-selected="false" >ARGE Faaliyetleri</buton>
              <buton type="button" className="nav-link mycolor" id="Tfive" data-bs-toggle="pill" data-bs-target="#five" role="tab" aria-controls="five" aria-selected="false" >Satış ve Pazarlama</buton>
              <buton type="button" className="nav-link mycolor" id="Tsix" data-bs-toggle="pill" data-bs-target="#six" role="tab" aria-controls="six" aria-selected="false" >Teknik Servis</buton>
              {/* <buton type="button" className="nav-link" id="Tseven" data-bs-toggle="pill" data-bs-target="#seven" role="tab" aria-controls="seven" aria-selected="false" >Deneme Hizmetleri</buton>
              <buton type="button" className="nav-link" id="Teight" data-bs-toggle="pill" data-bs-target="#eight" role="tab" aria-controls="eight" aria-selected="false" ></buton> */}
            </div>
            </div>
            </div>
          <div className='col-sm-12 col-lg-9 my-2'>
          <div className='tab-content'>
            <div className='tab-pane fade show active' id='one' role="tabpanel" aria-labelledby="Tone">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesOne} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>Yazılım Hizmetleri</h3>
                    <p className='text-muted text-start'>Yazılım elektronik aygıtların belirlenen görevleri yerine getirmesi için kullanılan talimat dizileri olarak tanımlanabilir. Gelişen teknoloji ile birlikte yazılım sektörü tüm dünyada olduğu gibi ülkemizde de ilerlemesini sürdürmektedir. Yazılım sektörünün gelişimi ile beraber sağladığı kolaylıklarla birçok sektöründe büyümesine katkı sağlamaktadır.</p>
                    <p className='text-muted text-start'>
                    Gökbey Teknoloji olarak uzman yazılım kadromuzla beraber başta tarım olmak üzere birçok farklı alanda müşteri istekleri doğrultusunda en doğru ve verimli yazılımı hazırlıyoruz. Yazılım hizmetimizin her aşamasında sizlerle fikir alışverişinde bulunarak en iyi sonuçlara beraber ulaşıyoruz.</p>
                    <p className='text-muted text-start'>
                    Gökbey Teknoloji olarak hazırladığımız yazılımlar ilgili sektörde kullanım kolaylığı, verim artırımı ve maliyet azalımı sağlıyoruz.</p>
                    <p className='text-muted text-start'>
                    Sektördeki tecrübemiz ve bilgilimiz ile bu alanda sıfır hata politikası ile çalışıyoruz. Her yaptığımız için arkasında durarak, geliştirilen yazılım için gerekli olan tüm testleri başarılı bir şekilde gerçekleştirdikten sonra hizmetimizi sizlere sunuyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='two' role="tabpanel" aria-labelledby="Ttwo">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesTwo} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>İHA Hizmetleri</h3>
                    <p className='text-muted text-start'>Gelişen teknoloji ile birlikte İnsansız Hava Aracı (İHA) kullanımı tüm dünya da ve ülkemizde artış göstermektedir. Bununla beraber insansız hava araçları günümüzde savunma, çevre, taşımacılık ve tarım gibi birçok alanda farklı amaçlar için kullanılmaktadır.</p>
                    <p className='text-muted text-start'>
                    Özellikle tarımda kullanılan kamera ve sensörler ile donatılmış İnsansız hava araçları ile bitki sağlığı analizi, toprak analizi ve tarımsal ilaçlama gibi faaliyetler gerçekleştirilmektedir. İnsansız hava araçlarının tarımda kullanımı ile beraber tarımsal verimlilik artmış ve modern tarım yöntemlerine geçiş sağlanabilmiştir.
                    Gökbey Teknoloji olarak tarımda birçok farklı faaliyet alanında kullanılan çeşitli insansız hava araçlarını siz müşterilerimizin ihtiyacı doğrultusunda temin etmekteyiz. Uzman ziraat mühendisi kadrosu ve geniş bayi ağı ile sizlerin ihtiyaçlarınızı doğru olarak belirleyip, ihtiyaçlarının doğrultusunda hizmet sağlamaktayız.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='three' role="tabpanel" aria-labelledby="Tthree">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesThree} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>Danışmanlık Hizmetleri</h3>
                    <p className='text-muted text-start'>Danışmanlık, genel olarak bir firmanın belirli iş süreçlerini, verimlilik ve kar artışıyla beraber maliyet azaltma noktasında düzenlemektir.</p>
                    <p className='text-muted text-start'>
                    Gelişen teknoloji ile beraber işletmeler zaman ve personel gibi kaynakları optimum seviyede kullanmak, faaliyetleriyle alakalı maliyetlerin düşürmek, müşterilerine daha kaliteli hizmet sunmak ve pazardaki rekabet gücünü artırmak istemektedirler. Birçok işletme bu isteklerini gerçekleştirmek için farklı teknolojik yatırımlar yapmakta fakat başarılı olamamaktadır. Çünkü birçok işletme alanında başarılı olabilmek için teknolojik faaliyetlere nereden başlanılacağı, yatırım miktarları, personel ve iş planlamaları gibi noktalarda hataya düşmektedirler.</p>
                    <p className='text-muted text-start'>
                    Gökbey Teknoloji olarak uzman danışmanlık kadromuz ile teknolojik alanda birçok yatırım kaleminde müşterilerimize danışmanlık faaliyetlerimizi gerçekleştirmekteyiz. Danışmanlık faaliyetleri ile müşterilerimizin istekleri doğrultusunda en iyi sonucu elde etmelerini hedeflemekteyiz.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='four' role="tabpanel" aria-labelledby="Tfour">
            <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesFour} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>ARGE Faaliyetleri</h3>
                    <p className='text-muted text-start'>Gelişmekte olan ülkeler arasında yerini alan ülkemiz de ekonomik kalkınma için birçok faaliyet yürütülmektedir. ARGE projeleri de bu faaliyetlerden bir tanesidir.</p>
                    <p className='text-muted text-start'>
                    ARGE projeleri için ülkemizde çok sayıda teknoloji merkezleri (teknoparklar) bulunmaktadır. Bu teknoloji merkezlerinin sayıları ise her geçen gün artmaktadır. Teknoloji merkezlerinin ve devlet kurumlarının da destekleriyle şirketler birçok farklı ARGE projesi faaliyeti yürütmektedir.</p>
                    <p className='text-muted text-start'>
                    Gökbey Teknoloji olarak Gebze Teknik Üniversitesi Teknoparkında bulunan ofisimizde ARGE faaliyetlerimizi sürdürmekteyiz.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='tab-pane fade' id='five' role="tabpanel" aria-labelledby="Tfive">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                  <img className='img-fluid rounded text-center' src={ServicesFive} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                  <h3 className='display-7 fw-bold my-3 text-start'>Satış ve Pazarlama</h3>
                  <p className='text-muted text-start'>Küreselleşen dünya ekonomisi ile tüketicinin sınırsız seçenekleri sahip olması ve rekabetçi piyasa koşullarıyla satış ve pazarlama firmalar için önemli bir durum haline gelmiştir. Çünkü firmalar ürettikleri ürünleri ve hizmetleri satabildikleri sürece varlıklarını devam ettirebilmektedirler.</p>
                  <p className='text-muted text-start'>
                  Gökbey teknoloji olarak her alanda olduğu gibi satış ve pazarlama alanında da uzman kadromuzla müşterilerimiz istekleri doğrultusunda çalışmalarımızı planlıyoruz. Küresel piyasalara uygun satış ve pazarlama stratejileri ile müşterilerimize ürün satışlarımızı gerçekleştiriyoruz.</p>
                  </div>
                </div>
                </div>
            </div>
            <div className='tab-pane fade' id='six' role="tabpanel" aria-labelledby="Tsix">
              <div className='container text-center'>
                <div className='row justify-content-center'>
                  <div className='col-lg-12'>
                    <img className='img-fluid rounded text-center' src={ServicesSix} alt=''/>
                  </div>
                  <div className='col-lg-12'>
                    <h3 className='display-7 fw-bold my-3 text-start'>Teknik Servis</h3>
                    <p className='text-muted text-start'>Teknik servis hayatımızın her alanında kullanmış olduğumuz elektronik cihazların bakım, onarım, tamirat ve montaj işlemlerinin zamanında ve eksiksiz olarak sağlanması olarak tanımlanabilir. Teknik servis hizmetleri ürünün satışından sonraki en büyük öneme sahip hizmetlerdendir.</p>
                    <p className='text-muted text-start'>
                    Gökbey Teknoloji olarak satışını gerçekleştirdiğimiz ürünlerin, yetenekli mühendis ve tekniker kadrosu ile teknik servis hizmetini gerçekleştirmekteyiz. Hizmetlerimizi en kısa sürede gerçekleştirilerek, müşterilerimize teslim ediyoruz. Ayrıca müşterilerimize aldıkları ürünler ile alakalı satış sonrası destek ile bakım zamanlarını bildirerek, olası arıza durumlarında  online destek sağlıyoruz.</p>
                    <p className='text-muted text-start'>
                    Ürünlerin teknik seviş hizmetleri tamamlandıktan sonra, müşteriye göndermeden önce gerekli testleri gerçekleştirerek sağlam bir şekilde gönderim sağlıyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          
          {/* <ul className='nav nav-pills' id='mytab' role="tablist">
            <li className='nav-item' role="presentation">
              <buton type="button" className="nav-link" id="Thome" data-bs-toggle="pill" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true" >Anasayfa</buton>
            </li>
            <li className='nav-item' role="presentation">
              <buton type="button" className="nav-link" id="Tprofile" data-bs-toggle="pill" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false" >Profil</buton>
            </li>
            <li className='nav-item' role="presentation">
              <buton type="button" className="nav-link" id="Tcontact" data-bs-toggle="pill" data-bs-target="#contact" role="tab" aria-controls="profile" aria-selected="false" >İletişim</buton>
            </li>
          </ul> */}
          {/* <div className='tab-content'>
            <div className='tab-pane fade show active' id='home' role="tabpanel" aria-labelledby="Thome">
              <h3 className='display-6'>Anasayfa</h3>
              <p className='text-muted'>asdgdsgadsgasdlkgnadsklasşdlgmşaslşgmadsşlgmşasldgmşsldagmsşadlgmsşadlgmasidglşmsadigmasidgmşsaidglşmsaiglşaisdgmlşaisdgmlşaidglşmasidglşmasdşglmasşdlgmsdaşgmşalsdmgşlasmdgiaslşdmgşiasglşm</p>
            </div>
            <div className='tab-pane fade' id='profile' role="tabpanel" aria-labelledby="Tprofile">
              <h3 className='display-6'>Profil</h3>
              <p className='text-muted'>asdgdsgadsgasdlkgnadsklasşdlgmşaslşgmadsşlgmşasldgmşsldagmsşadlgmsşadlgmasidglşmsadigmasidgmşsaidglşmsaiglşaisdgmlşaisdgmlşaidglşmasidglşmasdşglmasşdlgmsdaşgmşalsdmgşlasmdgiaslşdmgşiasglşm</p>
            </div>
            <div className='tab-pane fade' id='contact' role="tabpanel" aria-labelledby="Tcontact">
              <h3 className='display-6'>İletişim</h3>
              <p className='text-muted'>asdgdsgadsgasdlkgnadsklasşdlgmşaslşgmadsşlgmşasldgmşsldagmsşadlgmsşadlgmasidglşmsadigmasidgmşsaidglşmsaiglşaisdgmlşaisdgmlşaidglşmasidglşmasdşglmasşdlgmsdaşgmşalsdmgşlasmdgiaslşdmgşiasglşm</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </section>
    {/* <ModalPopUp/> */}
    </>
  )
}
