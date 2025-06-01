import Image from "next/image";

const PokemonLogo = () => {
  return (
    <Image
      src="/assets/svg/pokemon-logo.svg"
      alt="Pokemon Logo"
      width={400}
      height={146}
      priority={true}
    />
  );
};

export default PokemonLogo;
