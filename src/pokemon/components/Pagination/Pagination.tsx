import Link from "next/link";
import { ArrowBack } from "../../assets/icons/ArrowBack";
import LimitSelect from "./LimitSelect";
import PageInput from "./PageInput";

interface Props {
  page: number;
  limit: number;
}

const Pagination = ({ page, limit }: Props) => {
  return (
    <div className="flex justify-center mt-8">
      <nav className="flex space-x-4">
        {page > 1 && (
          <Link
            href={`/?page=${page - 1}&limit=${limit}`}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover disabled:opacity-50 flex items-center justify-end"
          >
            <ArrowBack className="inline-block" />
          </Link>
        )}
        <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
          <PageInput page={page} limit={limit} />
        </span>
        <Link
          href={`/?page=${page + 1}&limit=${limit}`}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover flex items-center justify-start"
        >
          <ArrowBack className="inline-block transform rotate-180" />
        </Link>
        <LimitSelect limit={limit} page={page} />
      </nav>
    </div>
  );
};

export default Pagination;
