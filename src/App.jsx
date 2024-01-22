import { useState } from "react";
import styles from './styles/app.module.scss';
import Search from './components/Search';
import usePokemon from "./hooks/usePokemon";
import useSearchPokemon from "./hooks/useSearchPokemon";
import useBadgesPokemon from './hooks/useBadgesPokemon';
import PokemonInfo from "./components/CardInfo";
import useInfoPokemon from "./hooks/useInfosPokemon";
import ListPokemon from "./components/ListPokemon";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { loading, pokemons, constantList, setPokemons } = usePokemon()
  const { search, setSearch, searchPokemon } = useSearchPokemon()
  const [infoPokemon, setInfoPokemon] = useState(null)
  const { badges } = useBadgesPokemon(infoPokemon)
  const { about, type } = useInfoPokemon(infoPokemon)

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.pokemonContainer}>
          <Search search={search} setSearch={setSearch} searchPokemon={() => searchPokemon({ constantList, setPokemons })} />
          <ListPokemon pokemons={pokemons} loading={loading} setInfoPokemon={setInfoPokemon} />
        </div>
        <div>
          {!infoPokemon ? (null) : <PokemonInfo data={infoPokemon} badges={badges} about={about} type={type} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
