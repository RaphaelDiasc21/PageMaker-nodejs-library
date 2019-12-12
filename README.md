# PageMaker-nodejs-library
Nodejs library to implement pagination on the applications

This library allows the users implements pagination of any array of elements based on the page number and the limit of elements per page

There is only one function called makePagination, that receives on it's arguments the array to paginate, the page number and the total elements
of the page.

The return of the function is a object:
  results = {
            content:content,
            totalPages:totalPage,
            nextPage: nextPage,
            actualPage:startParsed,
            prevPage: previousPage,
        }
        
   content : Contents of the page
   totalPages: Total pages based on the array,
   nextPage: Next page based on the actualPage, it may be null if the the number of the nextPage be greater than totalPages
   actualPage: Actual page requested
   PrevPage: Previous page based on the actualPage
