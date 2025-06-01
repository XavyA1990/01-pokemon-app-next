import Link from "next/link";

interface CardLinkProps {
  children: React.ReactNode;
  url: string;
}

const CardLink = ({ url, children }: CardLinkProps) => {
  return (
    <Link
      href={url}
      className="block hover:shadow-lg transition-shadow duration-300"
    >
      {children}
    </Link>
  );
};

export default CardLink;
