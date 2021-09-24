import React, {setState} from 'react';
import pictomail from '../pictogrammes/picto-mail.png';
// emailJS
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {

        const serviceID = "service_ID";
        const templateID = "template_ID";
        const userID = "user_TcbsLdItRxUpSC612Aa90";

        e.preventDefault();
    
       

        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          window.location.reload(false);
      };

    return (
        <>
        <div className="container-fluid p-5">
        <h1 className="contact-heading">Contact</h1>
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-2">
                    <div id="formulaire" className="card">

                        <div className="card-body">

                            <form onSubmit={sendEmail} className="row g-3 needs-validation" >
                               
                                <div className="col-12">
                                    <label className="form-label">Nom *</label>
                                    <input type="text" className="form-control" name="name" required/>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Mail *</label>
                                    <input type="email" className="form-control" name="email" required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message *</label>
                                    <textarea className="form-control" rows="3" name="message" required></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary col-10 offset-1 col-md-8 offset-md-2" type="submit">envoyer</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
                <div className="pictoMail col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-3 offset-lg-1">
                    <img src={pictomail} alt="picto mail"/>
                </div>
            </div>
            <div className="col-12  col-lg-8 offset-lg-2">
            <iframe id="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90635.30060914582!2d-0.6222130715360024!3d44.77360535110438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552132d74e7485%3A0x40665174816cf60!2s33140%20Villenave-d&#39;Ornon!5e0!3m2!1sfr!2sfr!4v1632398131124!5m2!1sfr!2sfr" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        </>
    )
}

export default Contact
