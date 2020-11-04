function Search()
{
   
    const [promise, setPromise]= React.useState(null);  
    React.useEffect(()=>setPromise(DishSource.searchDishes({})), []);
    const[data,error] = usePromise(promise);

    return h("div", {}     // Stub!
          , "data: ",  JSON.stringify(data)
          , "error: ", error);
}