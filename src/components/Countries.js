import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const Continents = [];

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => setData(response.data));
    }, []);

    data.forEach((country) => {
        if (!Continents.includes(country.continents[0])) {
            Continents.push(country.continents[0]);
        }
    });

    return (
        <div className="countries">
            <ul className="radio-container">
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {Continents.map((continent) => (
                    <li key={continent}>
                        <input
                            type="radio"
                            name="continentRadio"
                            id={continent}
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
            )}
            <ul>
                {data
                    .filter((country) =>
                        country.continents[0].includes(selectedRadio)
                    )
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country) => {
                        return (
                            <Card
                                key={`${country.name.common}_${country.region}`}
                                CountryFlag={country.flags.svg}
                                CountryNameFR={country.translations.fra.common}
                                CountryCapital={country.capital}
                                CountryPopulation={country.population}
                                CountryGoogleMaps={country.maps.googleMaps}
                            />
                        );
                    })}
            </ul>
        </div>
    );
};

export default Countries;
