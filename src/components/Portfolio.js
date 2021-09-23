import React from 'react';
import dsply from '../portfolio-images/dsply.png';
import eco2 from '../portfolio-images/eco2.png';
import actu from '../portfolio-images/actu.png';
import montres from '../portfolio-images/montres.png';
// fontawwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//  popupbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

function Portfolio() {

    // dsply
    const openPopupboxDsply = () => {
        const content = (
        <>
        <h3 className="title-popupbox">DSPLY Banner Studio</h3>
        <img className="portfolio-image-popupbox" src={dsply} alt="dsply bannerStudio project illustration"/>
        <p>Banner Studio est une web app qui permet d'uploader, associer et afficher côté client des bannières pub dynamiques. J'ai réalisé ce projet seul.</p>
        <p>Technos utilisées: Symfony 5 / php 8 pour le back-end, TWIG / Sass / Javascript pour le front-end. </p>
        <p>lien vers le site de démonstration</p><a className="hyper-link" onClick={() => window.open("https://github.com") } > le lien </a>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigDsply = {
        titleBar: {
            enable: true,
            closeButton: true
          },
        fadeIn: true,
        fadeInSpeed: 1500
    }

     // eco2
     const openPopupboxEco2 = () => {
        const content = (
        <>
        <h3 className="title-popupbox">eCo2 game Store</h3>
        <img className="portfolio-image-popupbox" src={eco2} alt="eco2 project illustration"/>
        <p>eCo2 game store est un site de vente de jeux dématérialisés, on y trouve des licences retro gaming et actuelles. Il s'agissait d'un examen en cours de formation où l'on devait exploiter le LocalStorage avec ReactJS. </p>
        <p>Technos utilisées: ReactJS / CSS  </p>
        <p>lien vers github</p><a className="hyper-link" onClick={() => window.open("https://medmed14.github.io/eCo2/", "_blank") } > www.eco2-game-store.com </a>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigEco2 = {
        titleBar: {
            enable: true,
            closeButton: true
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // ActuWeb
    // const openPopupboxActu = () => {
    //     const content = (
    //     <>
    //     <h3 className="title-popupbox">Blog actu wWweb</h3>
    //     <p>Blog d'actualités du web </p>
    //     <p>Technos utilisées: ReactJS / CSS  </p>
    //     <img className="portfolio-image-popupbox" src={actu} alt="Actu project illustration"/>
    //     <p>lien vers github</p><a className="hyper-link" onClick={() => window.open("", "_blank") } > le lien </a>
    //     </>
    //     )
        
    //     PopupboxManager.open({content})
    // }

    // const popupboxConfigActu = {
    //     titleBar: {
    //         enable: true,
    //         closeButton: true
    //     },
    //     fadeIn: true,
    //     fadeInSpeed: 500
    // }

     // Passion montres
     const openPopupboxMontres = () => {
        const content = (
        <>
        <h3 className="title-popupbox">Passion montres</h3>
        <img className="portfolio-image-popupbox" src={montres} alt="Montre e-commerce project illustration"/>
        <p>Site e-commerce de vente de montres d'occasion en ligne.</p>
        <p>Technos utilisées: Wordpress / WooCommerce  </p>
        <p>lien vers github</p><a className="hyper-link" onClick={() => window.open("", "_blank") } > le lien </a>
        </>
        )
        
        PopupboxManager.open({content})
    }

    const popupboxConfigMontres = {
        titleBar: {
            enable: true,
            closeButton: true
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
       <div className="portfolio-wrapper">
           <div className="container-lg">
               <h1 className="text-uppercase text-center py-5">portfolio</h1>
               <div className="row gy-4 row-cols-2 row-cols-sm-2 row-cols-md-4">
                    <div className="col portfolio-item" onClick={openPopupboxDsply}>
                        <img className="portfolio-image" src={dsply} alt="dsply bannerStudio project illustration" />
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="col portfolio-item" onClick={openPopupboxEco2}>
                        <img className="portfolio-image" src={eco2} alt="eco2 project illustration" />
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="col portfolio-item">
                        <img className="portfolio-image" src={actu} alt="actu wWweb project illustration" />
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/*  */}
                    <div className="col portfolio-item" onClick={openPopupboxMontres}>
                        <img className="portfolio-image" src={montres} alt="Passion Montres project illustration" />
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
           </div>
           <PopupboxContainer {...popupboxConfigDsply} />
           <PopupboxContainer {...popupboxConfigEco2} />
           {/* <PopupboxContainer {...popupboxConfigActu} /> */}
           <PopupboxContainer {...popupboxConfigMontres} />
       </div>
    )
}

export default Portfolio
