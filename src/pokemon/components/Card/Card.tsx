import CardLink from "./CardLink";

interface CardProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  url?: string;
}

const Card = ({ header, content, footer, url }: CardProps) => {
  const cardContent = (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm h-full">
      {header && <div className="px-4 py-5 sm:px-6 bg-secondary">{header}</div>}
      <div className="px-4 py-5 sm:p-6">{content}</div>
      {footer && <div className="px-4 py-4 sm:px-6">{footer}</div>}
    </div>
  );

  if (url) return <CardLink url={url}>{cardContent}</CardLink>;

  return cardContent;
};

export default Card;
