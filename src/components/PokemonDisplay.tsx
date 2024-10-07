import PokemonStatsDisplay from "./PokemonStatsDisplay";
import { PokemonData } from "./Types";
import { Types } from './PokemonTypes'

function PokemonDisplay(props) {

    const pokemon: PokemonData = props.pokemonData

    if(pokemon) {
        if(pokemon.typeName.type2) {
            return(
            <>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.defaultFront} />
                <div>
                    <img className={pokemon.typeName.type1}
                        key={crypto.randomUUID()} 
                        src={Types[pokemon.typeName.type1]}
                        width={20} 
                        height={20}
                    />
                    <img className={pokemon.typeName.type2}
                        key={crypto.randomUUID()} 
                        src={Types[pokemon.typeName.type2]}
                        width={20} 
                        height={20}
                    />
                </div>
                <PokemonStatsDisplay pokemonData={pokemon}/>
            </>);
        } else {
            return(
            <>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.defaultFront} />
                <div>
                    <img className={pokemon.typeName.type1}
                        key={crypto.randomUUID()} 
                        src={Types[pokemon.typeName.type1]}
                        width={20} 
                        height={20}
                    />
                </div>
                <PokemonStatsDisplay pokemonData={pokemon}/>
        </>);}
    }
}

export default PokemonDisplay