const  DishSource={
   apiCall(params) {
	   return fetch(BASE_URL+params, {
         "method": "GET",
         "headers": {
		   'X-Mashape-Key' : API_KEY
         }
      })
      // handle error
      .then(handleHTTPError)
      // from headers to response data
      .then(response => response.json())   ;
   } ,  // comma between object methods, like between any properties!  
  searchDishes({type, query}) { 
      let searchParams = new URLSearchParams({});
      if(query)
         searchParams.append("query", query);
      if(type)
         searchParams.append("type", type);
      
      let searchText = "recipes/search";
      let searchParamString = searchParams.toString();
      if(searchParamString)
         searchText += "?";
         searchText += searchParams.toString();

      return this.apiCall(searchText) 
      // leave out the unimportant parts of the response data
      .then(data=>data.results)
      // catch errors
      .catch(console.error);
   } ,  // comma between object methods, like between any properties! 
   getDishDetails(id){
      let infoText = "recipes/";
      infoText += id;
      infoText += "/information";
      return this.apiCall(infoText)
      // catch errors
      .catch(console.error);
   }
}; // end of DishSource

function handleHTTPError(response) {
   if(response.ok)
      return response;
   throw Error(response.statusText);
 }