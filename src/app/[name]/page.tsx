import { Metadata } from "next";
import { PageProps } from "../../../.next/types/app/[name]/page";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { name } = await params;
  return {
    title: `Pokémon: ${name}`,
    description: `Details about the Pokémon ${name}.`,
  };
}

const PokemonShowPage = async ({ params }: PageProps) => {
  const { name } = await params;
  return <div>{name}</div>;
};

export default PokemonShowPage;
