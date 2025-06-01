export interface PaginationProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}
