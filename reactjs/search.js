function Search({model})
{
    const [type, setType]= React.useState(""); 
    const [query, setQuery]= React.useState("");

    const [promise, setPromise]= React.useState(null);  
    React.useEffect(()=>setPromise(DishSource.searchDishes({})), []);
    const[data,error] = usePromise(promise);

    return h(React.Fragment, {}
        , h(SearchFormView, {
            onText: query => setQuery(query) ,
            onType: type => setType(type) ,
            onSearch: ()=>setPromise(DishSource.searchDishes({type,query}))
            })
        , promiseNoData(promise, data, error)  // cases 0, 1, 3
            || h(SearchResultsView, {searchResults:data,
                dishChosen: dishId=> {model.setCurrentDish(dishId)}

            })// case 2
        
        
    );
}