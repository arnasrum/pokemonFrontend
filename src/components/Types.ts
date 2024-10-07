export interface PokemonData {
    name: string,
    pokedexID: number,
    typeName: PokemonType,
    sprites: Sprites,
    stats: Stats
}

interface Stats {
    attack: number,
    specialAttack: number,
    defense: number,
    specialDefense: number,
    hp: number,
    speed: number

}

export interface PokemonType {
    type1: string,
    type2: string,
}

export interface PokemonTypes {
    [key: string]: string 
}

interface Sprites {
    defaultFront: string,
    defaultBack: string
}

export interface PokemonObject {
    [key: number]: PokemonData
}