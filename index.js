function makePagination(resultSet, start,end){
        let startParsed = parseInt(start);
        let endParsed = parseInt(end);
        const startIndex = (startParsed - 1) * endParsed; // Calculando o começo da página
        const endIndex = startParsed * endParsed; // Calculando o limite da página
        
        let nextPage = startParsed + 1;
        let previousPage = null;

        if((startParsed - 1) < 0){
            previousPage = 0;
        }else{
            previousPage = startParsed - 1;
        }

        let totalPage = null
        if((resultSet % endParsed) != 0){
             totalPage = parseInt((resultSet.length / endParsed) + 1)

             if(nextPage > totalPage){
                 nextPage = null;
             }
        }else{
            totalPage = resultSet.length / endParsed
        }
        let content = resultSet.slice(startIndex,endIndex);

        let results = {
            content:content,
            totalPages:totalPage,
            nextPage: nextPage,
            actualPage:startParsed,
            prevPage: previousPage,
        }

        return results;

    }

    module.exports = makePagination;