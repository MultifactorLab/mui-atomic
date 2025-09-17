export class PagedData {
  constructor(
    public totalCount: number,
    public totalPages: number,
    public currentPage: number,
    public pageSize: number
  ) {}
}
