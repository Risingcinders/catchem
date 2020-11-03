import React, { useContext, useState } from "react";
import "./styles.modules.css";
import MyContext from '../context/MyContext';

const Picker = (props) => {

    const callAPI = (e) => {
        e.preventDefault();
        props.getPokeList()
    }

    return (
        <div className="picker">
            <form onSubmit={callAPI}>
                <h5> Do you want to catch 'em all?  And I mean all. </h5>
            <button type="submit">Go!</button>
            </form>
        </div>
    );
};

export default Picker;
