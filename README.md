# MakerPage
MarkerPage is a npm library to implement simple pagination o JavaScript applications.

With MarkerPage you can implement a pagination out of any array of elements based on the page number and the limit of elements per page.

## Usage
With npm installed, run
```
npm install makerpage
```

```javascript
require('markerpage');

const pageableList = markerpage.makePagination(resultSet, start,end);
```

## Parameters
To create a pagination object you just need to call the "makePagination" function, and that receives as arguments the <b>array to paginate</b>, the <b>page number</b> and the <b>total elements</b> of the page.

The return pageable object:
``` javascript
const results = {
  content:content,
  totalPages:totalPage,
  nextPage: nextPage,
  actualPage:startParsed,
  prevPage: previousPage,
}
```
* <b>content</b> : Page content.
* <b>totalPages</b>: Total pages based on the array.
* <b>nextPage</b>: Next page based on the actualPage, it may be null if the the number of the nextPage be greater than totalPages.
* <b>actualPage</b>: Actual page requested.
* <b>PrevPage</b>: Previous page based on the actualPage.

## Authors
* [Raphael Dias](https://github.com/RaphaelDiasc21) - RaphaelDiasc21