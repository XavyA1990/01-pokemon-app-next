import PokemonLogo from "@/pokemon/assets/PokemonLogo/PokemonLogo";
import { getPokemons } from "@/pokemon/services/pokemon.service";
import PokemonGrid from "@/pokemon/components/PokemonGrid";
import Pagination from "@/pokemon/components/Pagination/Pagination";
import { PaginationProps } from '../pokemon/interfaces';
import { paginationDto } from "@/pokemon/dto/pagination.dto";
import PokemonSnackBar from "@/pokemon/components/PokemonSnackBar";

export default async function Home({ searchParams }: PaginationProps) {
  const { page, limit, message } = await paginationDto(searchParams);
  const offset = (page - 1) * limit;

  const pokemons = await getPokemons({
    limit,
    offset,
  });

  return (
    <>
      <PokemonLogo />
      {message && (<PokemonSnackBar message={message} type="error"/>)}
      <PokemonGrid pokemons={pokemons} />
      <Pagination
        page={page}
        limit={limit} 
      />
    </>
  );
}
