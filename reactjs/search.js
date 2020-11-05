function Search()
{
    const [type, setType]= React.useState(""); 
    const [query, setQuery]= React.useState("");

    const [promise, setPromise]= React.useState(null);  
    React.useEffect(()=>setPromise(DishSource.searchDishes({})), []);
    const[data,error] = usePromise(promise);

    return h(React.Fragment, {}
        , h(SearchFormView, {
            onText: text=> console.log("text changed: ", text),
            onType: type=> console.log("type changed: ", type),
            onSearch: ()=> console.log("search triggered!")
            })
        , promiseNoData(promise, data, error)  // cases 0, 1, 3
            || h(SearchResultsView, {searchResults:data})// case 2
    );
}