function Search()
{
    const [promise, setPromise]= React.useState(null);  
    React.useEffect(()=>setPromise(DishSource.searchDishes({})), []);
    const[data,error] = usePromise(promise);

    return promiseNoData(promise, data, error)  // cases 0, 1, 3
        || h(SearchResultsView, {searchResults:data});// case 2
}