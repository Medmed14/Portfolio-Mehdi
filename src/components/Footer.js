import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import icones reseaux sociaux
import linkedin from '../iconeRS/in.png';
import github from '../iconeRS/github.png';
import insta from '../iconeRS/insta.png';
import tweeter from '../iconeRS/tweeter.png';



const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-2 col-md-6 col-sm-10 offset-sm-1 col-12 p-5 mt-5">
                        <ul className="medias p-0">
                            <li className="bulle"><a href="https://github.com/Medmed14" target="blank"><img src={github}
                                alt="logo reseau github" className="logo-medias" /></a></li>
                            <li className="bulle"><a href="https://www.linkedin.com/in/mehdi-memmi-410759b9/?originalSubdomain=fr"
                                target="blank"><img src={linkedin} className="logo-medias" alt="logo reseau social linkedin" /></a>
                            </li>
                            <li className="bulle"><a href="https://www.instagram.com/mehdi_flower_power/?hl=fr" target="blank"><img
                                src={insta} alt="logo reseau social instagram" className="logo-medias" /></a></li>
                            <li className="bulle"><a href="https://twitter.com/MemmiMehdi" target="blank"><img src={tweeter}
                                className="logo-medias" alt="logo reseau social twitter" /></a></li>
                        </ul>
                    </div>
                    <div className="mt-1 mt-sm-5 col-lg-3 offset-lg-2 col-md-4 offset-md-1 col-sm-6 offset-sm-1 col-11 offset-1">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Accueil</a><br />
                                <a className="footer-nav">Présentation</a><br />
                                <a className="footer-nav">Compétences</a><br />
                                <a className="footer-nav">Portfolio</a><br />
                                <a className="footer-nav">Contact</a><br />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-5 pb-3 text-center text-white">
                    <p>Fait avec <FontAwesomeIcon className="text-danger" icon={faHeart} /> par Mehdi &copy; 2021</p>
                    <p className="host">Site personnel hebergé par Hostinger International Ltd.
                        61 Lordou Vironos Street
                        6023 Larnaca, Cyprus</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
