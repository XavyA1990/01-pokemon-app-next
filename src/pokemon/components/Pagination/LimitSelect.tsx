"use client";

import { useRouter } from "next/navigation";

const LimitSelect = ({ limit, page }: { limit: number; page: number }) => {
  const router = useRouter();
  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;
    router.push(`/?page=${page}&limit=${newLimit}`);
  };
  return (
    <select
      className="ml-4 px-2 py-1 bg-white border border-gray-300 rounded hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      value={limit}
      onChange={handleLimitChange}
    >
      {Array.from({ length: 5 }, (_, i) => (i + 1) * 10).map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
export default LimitSelect;
