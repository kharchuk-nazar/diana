import React from "react";
import "./index.css"

const Header = () => {
    return (
        <div className="my_header">
            <img src="/img/logo.png" />
            <h1>
                навчально-виховний комплекс "Малинківський заклад освіти І ст.-сад"
            </h1>
            <div>
                <img src="/img/01.jpg"/>
                <img src="/img/02.jpg"/>
            </div>
        </div>
    );
}

export default Header