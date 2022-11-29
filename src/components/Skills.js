import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faPassport } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import cvPdf from '../documents/Mehdi_Memmi_dev.pdf';

const Skills = () => {
    return (
        <div className="skills container-fluid p-5">
            <h1 className="skills-heading">Mes compétences</h1>
            <div className="row hard-skills">
                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-1 front-skills">
                    <div className="surline"></div>
                    <h3 className="skill-heading">Front-end</h3>
                    <ul>
                        <li>Maquettage d'application (wireframes).</li>
                        <li>Intégration Html / CSS / SASS / TWIG.</li>
                        <li>Création d'applications web dynamiques avec ReactJS.</li>
                        <li>Animations et intéractions avec Javascript / (S)CSS.</li>
                        <li>Approche 100% responsive (mobile-first ou desktop-first).</li>
                        <li>Utilisation de diverses librairies Javascript (GSAP, Matter-js, AOS,...).</li>
                        <li>Conception / consommation d'APIs REST.</li>
                        <li>Conaissances de Wordpress et WooCommerce.</li>
                        <li>Maîtrise des outils Git / GitLab.</li>
                    </ul>
                </div>
                <div className="back-end-skills col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-2">
                    <div className="surline"></div>
                    <h3 className="skill-heading">Back-end</h3>
                    <ul>
                        <li>Modélisation et création de base de données.</li>
                        <li>Conaissance de Sql et MySql.</li>
                        <li>PHP 7/8 POO et procédural.</li>
                        <li>Création des composants d'accès aux données en PHP (CRUD).</li>
                        <li>Respect des règles en matière de sécurité.</li>
                        <li>Utilisation du framework Symfony 4.x / 5.x</li>
                        <li>Sensible à l'approche DevOps, aux tests et connaissance de Docker.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 col-md-6 offset-md-2 col-lg-4 offset-lg-3 col-xl-4 offset-xl-1 col-xxl-2 offset-xxl-3 soft-skills">
                    <div className="surline"></div>
                    <h3 className="skill-heading">Soft skills</h3>
                    <ul>
                        <li>Esprit d'équipe.</li>
                        <li>Curieux et passionné.</li>
                        <li>Veille technologique, sécurité et informatique.</li>
                        <li>Centres d'interêts :
                            <ul>
                                <li><FontAwesomeIcon icon={faGamepad} /> jeux vidéos rétro / actuels</li>
                                <li><FontAwesomeIcon icon={faMotorcycle} /> moto</li>
                                <li><FontAwesomeIcon icon={faCameraRetro} /> photographie</li>
                                <li><FontAwesomeIcon icon={faPassport} /> voyages</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-10 offset-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-2 col-xxl-2 offset-xxl-2 logo-carousel">
                    <div className="col-6 offset-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-3 col-xxl-2 offset-xxl-3 logo-carousel container-btn">
                        <div className="round-button">
                            <div className="round-button-circle">
                                <a className="round-button" href={cvPdf} target="_blank">CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
