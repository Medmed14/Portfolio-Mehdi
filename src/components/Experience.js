import React from 'react'

function Experience() {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>mon expérience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>juil 2021 - Aujourd'hui</h3>
                        <h4>Obtention de mon certificat RNCP niv5 + création de mon auto-entreprise</h4>
                        <p>Je suis actuellement à la recherche d'un CDI de développeur front-end ReactJS, en attendant de trouver et pour continuer de coder au quotidien, j'ai moté mon entreprise. Ainsi je réalise des projets en lien avec le front-end pour continuer d'accroitre mes compétences. Egalement je réalise des projets personnels pour m'exercer autant que possible et devenir, chaque jour qui passe, un meilleur développeur. </p>
                    </div>
                </div>
                {/*    */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Mai - Juin 2021</h3>
                        <h4>Stage de deux mois à l'agence DSPLY</h4>
                        <p>J'ai réalisé un stage de fin d'étude à l'agence DSPLY Paris. Pendant ce stage on m'a confié la mission de réaliser une application web complète avec le framework Symfony. Je me suis également occupé de réaliser tout le front-office de l'application. Le projet s'appelle Banner Studio, et permet (entre autre) l'upload et l'affichage dynamique côté client, de bannières publicitaires animées.</p>
                    </div>
                </div>
                {/*    */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> Nov 2020 - Avril 2021 </h3>
                        <h4>Formation de développeur Web et Web mobile AFPA</h4>
                        <p>Après plusieurs mois d'apprentissage des languages et concepts de base en autodidacte (via OpenClassrooms et Free_Code_Camp), je décide de transformer ma passion en activité principale. J'ai réalisé la formation de développement web (full-stack) de l'Afpa à plein temps, ce qui m'a permis de renforcer mes conaissances et acquérir beaucoup d'autres compétences. Celà m'a aussi permis de comprendre que je préférais le front-end au back-end. Etant créatif et visuel, je m'épanouis pleinement dans ce domaine.</p>
                    </div>
                </div>
                {/*    */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Oct 2014 - Nov 2020 </h3>
                        <h4>Fleuriste</h4>
                        <p>Fleuriste à l'hôtel Plaza Athénée Paris, je m'occupais de fleurir et décorer les lieux publics, les chambres et les suites de l'hôtel. Egalement j'étais en charge des décors et fleurissements de mariages lorsque l'occasion se présentait.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
