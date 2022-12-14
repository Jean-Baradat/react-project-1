import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    end
                    className={(nav) => nav.isActive ? "nav-active" : null}
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => nav.isActive ? "nav-active" : null}
                >
                    <li>À propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
