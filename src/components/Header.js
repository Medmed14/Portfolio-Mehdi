import React from 'react';
import Typed from 'react-typed';



const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Bienvenue, je suis</h1>
                <Typed 
                    className="typed-text"
                    strings={["un développeur web front-end", "très curieux", "un dev créatif", "un React lover", "un passionné d'informatique", "sociable et coopératif", "un autodidacte", "hey, vous êtes encore là? :)" ]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
