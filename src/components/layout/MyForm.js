// import React, {useState} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { showErrorMsg, showSuccessMsg, validateAnyFormField } from '../helpers/ValidationHelper';
// import {MakeApiCallAsync} from '../helpers/ApiHelpers';

// function MyForm() {
  
//   const dispatch = useDispatch();
//   const [formStatus, setFormStatus] = React.useState('Gönder')
//   const [FullName, setFullName] = useState('');
//   const [Email, setEmail] = useState('');
//   const [PhoneNumber, setPhoneNumber] = useState('');
//   const [Subject, setSubject] = useState('');
//   const [Message, setMessage] = useState('');

//   const handleContactUsForm = async (event) => {
//     event.preventDefault();
   
//     try {


//         //--start loader
//         dispatch(rootAction.commonAction.setLoading(true));


//      let isValid = false;
//      let validationArray = [];


//      isValid = validateAnyFormField('Name', FullName, 'text', null, 200, true);
//      if (isValid == false) {
//        validationArray.push({
//          isValid: isValid
//        });
//      }


//      isValid = validateAnyFormField('Email', Email, 'email', null, 100, true);
//      if (isValid == false) {
//        validationArray.push({
//          isValid: isValid
//        });
//      }

//      isValid = validateAnyFormField('Phone Number', PhoneNumber, 'text', null, 20, true);
//      if (isValid == false) {
//        validationArray.push({
//          isValid: isValid
//        });
//      }

//      isValid = validateAnyFormField('Subject', Subject, 'text', null, 150, true);
//      if (isValid == false) {
//        validationArray.push({
//          isValid: isValid
//        });
//      }

//      isValid = validateAnyFormField('Message', Message, 'text', null, 2000, true);
//      if (isValid == false) {
//        validationArray.push({
//          isValid: isValid
//        });
//      }



//      //--check if any field is not valid
//      if (validationArray != null && validationArray.length > 0) {

//        isValid = false;
//        return false;
//      } else {
//        isValid = true;
//      }

//      if (isValid) {

//     //    const headers = {
//     //      Accept: 'application/json',
//     //      'Content-Type': 'application/json',
//     //    }


//        const param = {
//          requestParameters: {
//            FullName: FullName,
//            Email: Email,
//            PhoneNumber: PhoneNumber,
//            Subject: Subject,
//            Message: Message

//          },
//        };


//        //--make api call for data operation
//        const response = await MakeApiCallAsync(Config.END_POINT_NAMES['CONTACT_US'], null, param, "POST", true);
//        if (response != null && response.data != null) {
//          let userData = JSON.parse(response.data.data);
//          if (userData.length > 0 && userData[0].ResponseMsg != undefined && userData[0].ResponseMsg == "Saved Successfully") {
//            showSuccessMsg("Message sent successfully!");

//            //--Empty form fields
//            setFullName('');
//            setEmail('');
//            setPhoneNumber('');
//            setSubject('');
//            setMessage('');

//          }
//          else {
//            showErrorMsg("Bir hata oluştu. Lütfen tekrar deneyin!");
//            return false;
//          }
//        }
//      }



//    } catch (err) {
//      console.log(err);
//      showErrorMsg("Bir hata oluştu. Lütfen tekrar deneyin!");

//      return false;

//    } finally {
//      //--stop loader
//      setTimeout(() => {
//        dispatch(rootAction.commonAction.setLoading(false));
//      }, LOADER_DURATION);

//    }
    
//   }
//   return (
//     <section id='section-contact' className='mySection bg-light'>
//       <div className='myContainer'>
//         <div className='container'>
//             <div className='myForm text-center pb-3'>
//             <h2 className='s-heading text-uppercase fw-bold'>İletişim</h2>
//             <h3 className='s-subheading text-muted'> Hizmetlerimiz hakkında detaylı bilgi almak için bizleri arayabilir, randevu için form doldurabilirsiniz.</h3>
//             </div>
//         </div>
//         <div className='container'>
//           <div className='row justify-content-center'>
//         <div className='col-lg-6'>
//             <div className='card p-2 p-md-5 h-100'>
//               <div className='container'>
//               <h2 className="myformheader pt-3 pb-3">Bize Ulaşın</h2>
//               <div className='devider'></div>
//                 <form onSubmit={handleContactUsForm}>
//                   <div className="mb-3">
                    
//                     <input className="form-control my-form" type="text" data-error="Please enter your name" placeholder='Adınızı Girin' id="FullName" value={FullName} required={true} onChange={(e) => setFullName(e.target.value)} />
//                   </div>
//                   <div className="mb-3">
                   
//                     <input className="form-control my-form" type="email" placeholder='E-postanızı Girin' id="Email" required={true}
//                           data-error="Please enter your email"
//                           value={Email}
//                           onChange={(e) => setEmail(e.target.value)} />
//                   </div>
//                   <div className="mb-3">
                   
//                     <input className="form-control my-form" type="text" placeholder='Telefon numaranızı girin' id="PhoneNumber" required={true}
//                           data-error="Please enter your phone number"
//                           value={PhoneNumber}
//                           onChange={(e) => setPhoneNumber(e.target.value)} />
//                   </div>
//                   <div className="mb-3">
                    
//                     <input className="form-control my-form" type="text" placeholder='Konu Girin' id="Subject" required={true}
//                     data-error="Please enter subject"
//                     value={Subject}
//                     onChange={(e) => setSubject(e.target.value)}/>
//                   </div>
//                   <div className="mb-3">
                    
//                     <textarea className="form-control my-form" cols="30" rows="8" placeholder='Mesajınızı Bu Alana Yazın' id="message" required={true} 
//                     data-error="Please enter your message"
//                     value={Message}
//                           onChange={(e) => setMessage(e.target.value)}/>
//                   </div>
//                   <button className="btn myformbutton p-lg-3 mt-1 fw-bold mb-3 mb-md-0" type="submit">
//                     Gönder
//                   </button>
                  
//                   <div id="msgSubmit" className="h3 text-center hidden"></div>
                  
//                   <div className="clearfix"></div>
//                 </form>
//                 </div>
//               </div>
//             </div>
//             </div>
//         </div>
//         </div>
//     </section>
//   )
// }

// export default MyForm