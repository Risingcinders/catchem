import React, { useState } from "react";
import "./styles.modules.css";

const PokeCard = (props) => {

    return (
        <div className="pokecard">
            <p>{props.pokemon.name}</p>
        </div>
    );
};

export default PokeCard;
