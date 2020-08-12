class Pagination {
  constructor(items = [], pageSize = 10) {
    this.items = items;       // Holds the items array
    this.pageSize = pageSize;    // Holds the size of each page
    this.totalPages = Math.ceil(items.length / pageSize) || 1;  // Holds the total number of pages
    this.currentPage = 1; // Holds the current page number
  }
  
  // Methods
  // Goes to the previous page
  prevPage() {
    if (this.currentPage === 1 ){
      this.currentPage = 1
    } else this.currentPage -= 1
    return this
  }
  // Goes to the next page
  nextPage() {
    if (this.currentPage === this.totalPages){
      this.currentPage = this.totalPages
    } else this.currentPage += 1
    return this
  }
  // Goes to the first page
  firstPage() {
   this.currentPage = 1
   return this
  }
  // Goes to the last page
  lastPage() {
    this.currentPage = this.totalPages
    return this
  }
  // Goes to a page determined by the `page` argument
  goToPage(page) {
     	if (page <= 0 ) {
         this.currentPage = 1
        } else if (page > this.totalPages ) {
          this.currentPage = this.totalPages
          }
          else this.currentPage = page
    return this
  }
  // Returns the currently visible items as an array
  getVisibleItems() {
    return this.items.slice(this.currentPage * this.pageSize - this.pageSize, this.pageSize * this.currentPage)
  }
}