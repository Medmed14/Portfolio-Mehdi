import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                    <img className="profile-img" src={author} alt="une photo de moi" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading mb-3"> Qui suis-je ?</h1>
                    <p>Je me présente, je m'appelle Mehdi, j'ai 28 ans. Je suis passionné depuis très jeune par l'informatique. J'ai eu l'envie
                        de devenir développeur Web en 2019 et j'ai entrepris une formation en 2020. Je suis donc passé du monde du végétal au monde du numérique, et ça me plaît
                        beaucoup.
                        J'ai effectué une formation à plein temps de développeur Web et Web mobile fullstack de 6 mois auprès d'un organisme reconnu
                        suivi d'un stage de deux mois dans une jeune agence Parisienne.
                        Ce qui me plaît par dessus tout dans ce métier c'est que le progrès est quotidien. On en apprend tous les jours et j'adore ça.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe
