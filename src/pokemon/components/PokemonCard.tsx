import Image from "next/image";
import { SimplePokemon } from "../interfaces";
import Card from "./Card/Card";

const PokemonCard = ({ name, id }: SimplePokemon) => {
  return (
    <Card
      url={`/${name}`}
      header={
        <h2 className="text-lg font-semibold capitalize text-white">{name}</h2>
      }
      content={
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          width={200}
          height={200}
          priority={false}
        />
      }
    />
  );
};

export default PokemonCard;
