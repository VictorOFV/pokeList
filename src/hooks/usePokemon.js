import { useEffect, useRef, useState } from 'react';
import pLimit from 'p-limit';

const limit = pLimit(50);

async function getPokemonList() {
    const api = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
    const data = await api.json();
    return data.results;
}

async function getPokemonData(pokemon) {
    try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return {
            name: pokemon.name,
            data
        };
    } catch (error) {
        console.error(`Erro ao processar ${pokemon.name}:`, error);
        return null;
    }
}

function usePokemon() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const constantList = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pokemonList = await getPokemonList();
                const allData = await Promise.all(pokemonList.map(pokemon => limit(() => getPokemonData(pokemon)))); // Executa todas as promisse de uma vez, respeitando o limite setado.
                setPokemons(() => {
                    const data = allData.filter(Boolean) // Filtra valores nulos se ocorrer um erro
                    constantList.current = data // Adiciona a lista contante em memoria
                    return data
                }); 
                setLoading(false)
            } catch (error) {
                console.warn("Um erro inesperado aconteceu!");
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return { pokemons, loading, setPokemons, constantList }
}

export default usePokemon