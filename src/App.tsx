import './App.css';
import './style.css';
import { useState, useEffect } from 'react';
import PokemonForm from './components/PokemonForm';
import PokemonDisplay from './components/PokemonDisplay'
import {PokemonData, PokemonObject} from "./components/Types";
import { Types } from './components/PokemonTypes';
import PokemonStatsDisplay from './components/PokemonStatsDisplay';

function App() {

    const [query, setQuery] = useState<String>();
    const [pokemonData, setPokemonData] = useState<PokemonData>();
    const [pokemonCounters, setPokemonCounters] = useState<PokemonObject>();


    useEffect(() => {
        if(query) {
            let url: string = "http://localhost:8080/pokemon/";
            let counterUrl: string = "http://localhost:8080/counter/";
            url += query;
            counterUrl += query;
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => setPokemonData(data))
                .catch(error => {
                    console.log(error);
                    setQuery(undefined);
                });
            fetch(counterUrl)
                .then(response => response.json())
                .then(data => setPokemonCounters(data))
                .catch(error => {
                    console.log(error);
                    setQuery(undefined);
                });
            }

    }, [query]);

    if(query && pokemonData && pokemonCounters) {
        return (
        <>
            <div>
                {query}
            </div>
            <div>
                <img src={pokemonData.sprites.defaultFront} />
                <img src={pokemonData.sprites.defaultBack} />
            </div>
            <div>
                {Object.values(pokemonData.type).map((type: string, index: number) => {
                    if(type) {
                        return (<img className={type} 
                            key={crypto.randomUUID()} 
                            src={Types[type]} 
                            width={30} 
                            height={30}
                        />);
                    }
                })}

                <PokemonStatsDisplay pokemonData={pokemonData} /> 
                <PokemonForm setQuery={setQuery}/>
                {Object.values(pokemonCounters).map((pokemon: PokemonData, index: number) => {
                    return(
                        <PokemonDisplay pokemonData={pokemon}/> 
                    );
                })}
            </div>
        </>
    
    );
    } else {
        return (
            <>
                <PokemonForm setQuery={setQuery}/>
            </>
        );
    }
}

export default App
