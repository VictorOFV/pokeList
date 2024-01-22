import { useState } from "react"

function useSearchPokemon() {
    const [search, setSearch] = useState("")
    
    const searchPokemon = ({ setPokemons, constantList }) => {
        if (search) {
            const getPokemon = constantList.current.filter(pokemon => pokemon.name.includes(search.toLocaleLowerCase()))
            setPokemons(getPokemon)
        } else {
            setPokemons(constantList.current)
        }
    }

    return { search, setSearch, searchPokemon }
}

export default useSearchPokemon