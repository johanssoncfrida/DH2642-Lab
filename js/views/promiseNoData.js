function promiseNoData(promise, data, error, h)
{  
    return  !promise && "no dish is chosen"     // case "0"  
          || error && <h1>try something else</h1>   // case 3 
          || !data && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>;     // case 1
}
