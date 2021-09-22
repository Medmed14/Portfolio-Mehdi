import React from 'react';
import dsply from '../portfolio-images/dsply.png';
import eco2 from '../portfolio-images/eco2.png';
import actu from '../portfolio-images/actu.png';
import montres from '../portfolio-images/montres.png';


function Portfolio() {
    return (
       <div className="portfolio-wrapper">
           <div className="container-lg">
               <h1 className="text-uppercase text-center py-5">portfolio</h1>
               <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col portfolio-item">
                        <img className="portfolio-image" src={dsply} alt="dsply bannerStudio project illustration" />
                    </div>
                    {/*  */}
                    <div className="col portfolio-item">
                        <img className="portfolio-image" src={eco2} alt="eco2 project illustration" />
                    </div>
                    {/*  */}
                    <div className="col portfolio-item">
                        <img className="portfolio-image" src={actu} alt="actu wWweb project illustration" />
                    </div>
                    {/*  */}
                    <div className="col portfolio-item">
                        <img className="portfolio-image" src={montres} alt="Passion Montres project illustration" />
                    </div>
                </div>
           </div>
       </div>
    )
}

export default Portfolio
