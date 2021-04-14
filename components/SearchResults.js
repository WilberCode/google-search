import PaginationButtons from "./PaginationButtons"

const SearchResults = ({results}) => {
    const information = results.searchInformation
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%]  md:pl-[14%] lg:pl-54" >
         <p  className="text-sm text-gray-600 mt-3 mb-5" >Cerca de {information?.formattedTotalResults} resultados ({information?.formattedSearchTime} segundos) </p>
            { results.items?.map(result =>(
                <div key={result.link} className="max-w-xl mb-8" >
                    <a href={result.formattedUrl} className="group" >
                        <p className=" text-sm " >{result.formattedUrl} </p>
                        <h2 className=" truncate text-blue-800 text-xl font-medium group-hover:underline" >{result.title}</h2>
                     </a>
                     {/* <p className="line-clamp-2 text-gray-600  " dangerouslySetInnerHTML={{__html:result.htmlSnippet}} />  */}
                     <p className="line-clamp-2 text-gray-600  "  > {result.snippet} </p>
                </div>
            ) )}
              {/* Pagina Buttons */}
              <PaginationButtons/>
        </div>
    )
}

export default SearchResults
