import { SimplePokemon } from "../interfaces";
import PokemonCard from "./PokemonCard";

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {pokemons.map((pokemon: SimplePokemon) => (
        <PokemonCard key={pokemon.id} name={pokemon.name} id={pokemon.id} />
      ))}
    </div>
  );
};

export default PokemonGrid;
