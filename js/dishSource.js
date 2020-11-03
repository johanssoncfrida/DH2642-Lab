const  DishSource={
   apiCall(params) {
	return fetch(BASE_URL+params, {
            "method": "GET",
            "headers": {
		 'X-Mashape-Key' : API_KEY
         }
	})
      // from headers to response data
      .then(response => response.json())   ;
   }
,  // comma between object methods, like between any properties!  
  searchDishes(searchParams) { return 
      this.apiCall("recipes/search")  
      // leave out the unimportant parts of the response data
      .then(data=>data.results);       
   }
}; // end of DishSource