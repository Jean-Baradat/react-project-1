import React from "react";

const Card = ({ CountryFlag, CountryNameFR, CountryCapital, CountryPopulation, CountryGoogleMaps }) => {
    return (
        <a className="card" href={CountryGoogleMaps} target="_blank" rel="noopener noreferrer">
            <img src={CountryFlag} alt={`Drapeau ${CountryNameFR}`} />
            <div className="infos">
                <h2>Pays : {CountryNameFR}</h2>
                <h3>Capitale : {CountryCapital}</h3>
                <p>Pop. {CountryPopulation.toLocaleString()}</p>
            </div>
        </a>
    );
};

export default Card;
