function Search({model,nav,resultChoice})
{
    const [promise, setPromise]= React.useState(null);  
    React.useEffect(()=>setPromise(DishSource.searchDishes({})), []);
    const[data,error] = usePromise(promise);

    return h(React.Fragment, {}
        , h(SearchFormReact, {
            onSearch: (type, query)=>setPromise(DishSource.searchDishes({type,query})),
            nav: nav})
        , promiseNoData(promise, data, error)  // cases 0, 1, 3
            || h(SearchResultsView, {searchResults:data,
                dishChosen: dishId=> {
                    model.setCurrentDish(dishId);
                    resultChoice();
                },


            })// case 2
        
        
    );
}