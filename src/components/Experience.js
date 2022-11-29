import React from 'react'

function Experience() {
    return (
        <>
        <div id="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>mon expérience</h1>
            </div>
            <div className="container experience-wrapper">
            <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Février 2022 - Aujourd'hui</h3>
                        <h4>Développeur web chez Castel Frères</h4>
                        <p>Mes missions consistent à la mise à jour, la création, l'amélioration, des sites de marques du groupe de vins et spiritueux Castel Frères. J'ai également été amené à créer divers jeu et animations pour les temps forts de nos marques. A la fois capable d'intervenir sur du back-end en PHP, du front en JavaScript, de la retouche Photo, du templating,... mes missions sont variées et la routine n'existe pas.</p><br/><br/>
                    </div>
                </div>
                {/*    */}
            <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Septembre 2021 - Février 2022</h3>
                        <h4>création de mon auto-entreprise et réalisation de missions freelance</h4>
                        <p>J'ai crée mon statut d'auto-entrepreneur tout en continuant à me former en parallèle afin de me perfectionner et approfondir les notions abordées en formation.</p><br/><br/>
                    </div>
                </div>
                {/*    */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>juil 2021</h3>
                        <h4>Obtention de mon certificat RNCP niv5</h4>
                        <p>J'ai obtenu ma certification avec les félicitations du jury. Une belle consécration pour tous les efforts fournis durant ces 8 mois de formation. </p><br/><br/>
                    </div>
                </div>
                {/*    */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>Mai - Juin 2021</h3>
                        <h4>Stage de deux mois à l'agence DSPLY</h4>
                        <p>J'ai réalisé un stage de fin d'étude à l'agence DSPLY Paris. Pendant ce stage on m'a confié la mission de réaliser une application web complète avec le framework Symfony. Je me suis également occupé de réaliser tout le front-office de l'application. Le projet s'appelle Banner Studio, et permet (entre autre) l'upload et l'affichage dynamique côté client, de bannières publicitaires animées.</p><br/><br/>
                    </div>
                </div>
                {/*    */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> Nov 2020 - Avril 2021 </h3>
                        <h4>Formation de développeur Web et Web mobile AFPA</h4>
                        <p>Après plusieurs mois d'apprentissage des languages et concepts de base en autodidacte (via OpenClassrooms et Free_Code_Camp), je décide de transformer ma passion en activité principale. J'ai réalisé la formation de développement web (full-stack) de l'Afpa à plein temps, ce qui m'a permis de renforcer mes conaissances et acquérir beaucoup d'autres compétences. Celà m'a aussi permis de comprendre que je préférais le front-end au back-end. Etant créatif et visuel, je m'épanouis pleinement dans ce domaine.</p><br/><br/>
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
        </>
    )
}

export default Experience
