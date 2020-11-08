function promiseNoData(promise, data, error)
{  
    return  !promise && "no dish is chosen"     // case "0"  
          || error && <h1>{error.message}</h1>   // case 3 
          || !data && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>;     // case 1
}
