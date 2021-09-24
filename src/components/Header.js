import React from 'react';
import Typed from 'react-typed';



const Header = () => {
    return (
        <>
            <div id="home" className="header-wraper">
                <div className="main-info">
                    <h1>Bienvenue, je suis</h1>
                    <Typed
                        className="typed-text"
                        strings={["un développeur web front-end", "un dev créatif", "un ReactJS lover", "un passionné d'informatique", "sociable et coopératif", "un autodidacte", "hey, vous êtes encore là? :)"]}
                        typeSpeed={80}
                        backSpeed={50}
                        loop
                    />
                </div>
            </div>
        </>
    )
}

export default Header
