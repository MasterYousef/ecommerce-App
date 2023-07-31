import React from 'react'
import ReactPaginate from 'react-paginate'
function Pagination({numberOfPages,SetPage}) {
    let handlePageClick =(data)=>{
      SetPage(data.selected +1)
          };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        pageCount={numberOfPages}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName='pagination justify-content-center p-3 m-0 ul'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-link'
        activeClassName='active'
      />
    </>
  )
}

export default Pagination