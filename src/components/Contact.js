import React from 'react';

function Contact() {
    return (
        <>
        <div className="container-fluid p-5">
        <h1 className="contact-heading">Contact</h1>
            <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-5 offset-lg-0">
                    <div id="formulaire" className="card">

                        <div className="card-body">

                            <form className="row g-3 needs-validation" >
                                <div className="col-12">
                                    <label htmlFor="societe" className="form-label">Société</label>
                                    <input type="text" className="form-control" id="societe" name="societe" />

                                </div>
                                <div className="col-12">
                                    <label htmlFor="nom" className="form-label">Nom*</label>
                                    <input type="text" className="form-control" id="nom" name="nom" />

                                </div>

                                <div className="col-12">
                                    <label htmlFor="prenom" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" id="prenom" name="prenom" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="prix" className="form-label">Mail*</label>
                                    <input type="email" className="form-control" id="prix" name="prix" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Commentaire*</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-secondary col-10 offset-1 col-md-8 offset-md-2" type="submit">envoyer</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
                <div id="social" className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-5 offset-lg-1 pt-5 border border-white rounded">
                <ul class="list">
                    <li class="item-social">Link</li>
                    <li class="item-social">Twit</li>
                    <li class="item-social">Inst</li>
                </ul>
                </div>
            </div>
            <div className="col-12">
                <iframe id="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1313.1974075338878!2d2.325305366774271!3d48.83160736751188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b40139aaed%3A0x4fd6e73111363f74!2s182-186%20Avenue%20du%20Maine%2C%2075014%20Paris!5e0!3m2!1sfr!2sfr!4v1613127370872!5m2!1sfr!2sfr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
        </>
    )
}

export default Contact
