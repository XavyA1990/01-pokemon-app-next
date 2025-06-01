import { PokemonsResponse, SimplePokemon } from "../interfaces";

export const getPokemons = async ({
  limit = 20,
  offset = 0,
}): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Pokemon");
  }

  const data: PokemonsResponse = await response.json();
  return data.results.map((pokemon) => {
    const { name, url } = pokemon;
    return {
      id: url.split("/").at(-2)!,
      name: name,
    };
  });
};
