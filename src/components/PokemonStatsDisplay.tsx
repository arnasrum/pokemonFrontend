import { PokemonData } from "./Types";
import './PokemonStatsDisplay.css'

function PokemonStatsDisplay(props) {

    const pokemonData: PokemonData = props.pokemonData

    if(pokemonData) {
        return(
            <div>
                <div>
                    <label>
                        Attack:
                        {pokemonData.stats.attack}
                    </label>
                    <label>
                        Special Attack:
                        {pokemonData.stats.specialAttack}
                    </label>
                </div>

                <div>
                    <label>
                        Defense:
                        {pokemonData.stats.defense}
                    </label>
                    <label>
                        Special Defense:
                        {pokemonData.stats.specialDefense}
                    </label>
                </div>
            </div>
        );
    }
}

export default PokemonStatsDisplay