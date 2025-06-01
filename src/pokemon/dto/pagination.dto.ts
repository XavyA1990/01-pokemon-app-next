import { PaginationProps } from "../interfaces";

const DEFAULT_PAGINATION_PARAMS = {
  page: 1,
  limit: 20,
};

export const paginationDto = async (
  searchParams: PaginationProps["searchParams"]
) => {
  const { page = "1", limit = "20" } = await searchParams;

  if (isNaN(parseInt(page)) || isNaN(parseInt(limit))) {
    return {
      ...DEFAULT_PAGINATION_PARAMS,
      message: "Invalid pagination parameters.",
    };
  }
  if (parseInt(page) < 1 || parseInt(limit) < 1) {
    return {
      ...DEFAULT_PAGINATION_PARAMS,
      message:
        "Pagination parameters must be greater than 0.",
    };
  }

  return {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    message: null
  };
};
