"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PageInput = ({ page, limit }: { page: number; limit: number }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(page);
  useEffect(() => {
    router.push(`/?page=${currentPage}&limit=${limit}`);
  }, [currentPage, router, limit]);
  return (
    <div className="flex items-center">
      <span className="text-gray-700">Page:</span>
      <input
        type="number"
        value={currentPage}
        className="ml-2 w-16 px-2 py-1 bg-white border border-gray-300 rounded hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(event) => setCurrentPage(Number(event.target.value))}
        min="1"
      />
    </div>
  );
};

export default PageInput;
