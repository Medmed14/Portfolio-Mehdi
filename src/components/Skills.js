import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faPassport } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// carousel and images
import { Carousel } from 'react-responsive-carousel';
import img1 from '../logos/css3.png';
import img2 from '../logos/jquery.png';
import img3 from '../logos/JS.png';
import img4 from '../logos/react.png';
import img5 from '../logos/sass.png';
import img6 from '../logos/npm.png';
import img7 from '../logos/vsc.png';
import img8 from '../logos/figma.png';



const Skills = () => {
    return (
        <div className="skills container-fluid p-5">
            <h1 className="skills-heading">Mes compétences</h1>
                <div className="row hard-skills">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-1 front-skills">
                        <h3 className="skill-heading">Front-end</h3>
                        <ul>
                            <li>Maquettage d'application (wireframes).</li>
                            <li>Intégration Html / CSS / SASS / TWIG.</li>
                            <li>Tests unitaires avec MOCHA.</li>
                            <li>Création d'applications web dynamiques avec ReactJS.</li>
                            <li>Animations et intéractions avec Javascript ou jQuery / (S)CSS.</li>
                            <li>Approche 100% responsive (mobile-first si besoin).</li>
                            <li>Utilisation de diverses librairies Javascript (GSAP, Matter-js, AOS,...).</li>
                            <li>Création d'icones SVG sur mesure.</li>
                            <li>Conception / intégration d'APIs REST.</li>
                            <li>Bonnes conaissances de Wordpress et WooCommerce.</li>
                            <li>Maîtrise des outils Git / GitLab.</li>
                        </ul>
                    </div>
                    <div className="back-end-skills col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-2">
                        <h3 className="skill-heading">Back-end</h3>
                        <ul>
                            <li>Modélisation et création de base de données.</li>
                            <li>Réalisation de schémas fonctionnels.</li>
                            <li>Conaissance de Sql et MySql.</li>
                            <li>Bases de PHP 7/8 POO.</li>
                            <li>Création des composants d'accès aux données en PHP (CRUD).</li>
                            <li>Respect des règles en matière de sécurité.</li>
                            <li>Patrons de conception : MVC, Singleton,...</li>
                            <li>Bonnes Conaissances sur Symfony 5.x</li>
                            <li>Sensible à l'approche DevOps, aux tests et conaissance de Docker.</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 offset-1 col-md-6 offset-md-2 col-lg-4 offset-lg-3 col-xl-4 offset-xl-1 col-xxl-2 offset-xxl-3 soft-skills">
                        <h3 className="skill-heading">Soft skills</h3>
                        <ul>
                            <li>Esprit d'équipe.</li>
                            <li>Sensible au #cleanCode</li>
                            <li>Passionné par la cybersécurité.</li>
                            <li>Persévérant, curieux, et autonome.</li>
                            <li>Veille technologique et informatique.</li>
                            <li>Centres d'interêts : 
                                <ul>
                                    <li><FontAwesomeIcon icon={faMotorcycle} /> moto</li>
                                    <li><FontAwesomeIcon icon={faCameraRetro} /> photographie</li>
                                    <li><FontAwesomeIcon icon={faCode} /> codage</li>
                                    <li><FontAwesomeIcon icon={faGamepad} /> jeux vidéos</li>
                                    <li><FontAwesomeIcon icon={faPassport} /> voyages</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-2 col-xxl-2 offset-xxl-2 logo-carousel">
                       <Carousel autoPlay infiniteLoop >
                           <div>
                               <img src={img1} />
                           </div>
                           <div>
                               <img src={img2}/>
                           </div>
                           <div>
                               <img src={img3}/>
                           </div>
                           <div>
                               <img src={img4}/>
                           </div>
                           <div>
                               <img src={img5}/>
                           </div>
                           <div>
                               <img src={img6}/>
                           </div>
                           <div>
                               <img src={img7}/>
                           </div>
                           <div>
                               <img src={img8}/>
                           </div>
                       </Carousel>
                      
                    </div>
                </div>
        </div>
    )
}

export default Skills
