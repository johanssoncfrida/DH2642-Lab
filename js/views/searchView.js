const SearchResultsView=({searchResults})=>
<div id = "searchView"> {
    searchResults.map(dish=>
    <span key={dish.id} class="searchResult"> <img src={"https://spoonacular.com/recipeImages/"+dish.image}></img> 
        <div> {dish.title} </div>
    </span>)
} </div>;
