import Picker from "./components/picker";
import PokeCard from "./components/pokemoncard";
import { useState } from "react";
import "./App.css";

function App() {
    const [pokeList, setPokeList] = useState([]);

    const getPokeList = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response.results);
                setPokeList(response.results);
            })
            .catch((err) => {
                console.log(err);
            });
        // This is where we do the API stuff
        
    };

    return (
        <div className="App">
            <Picker getPokeList={getPokeList} />
            <div id="thelist">
                {pokeList.map((pokemon, index) => {
                    return <PokeCard key={index} pokemon={pokemon}></PokeCard>;
                })}
            </div>
        </div>
    );
}

export default App;
