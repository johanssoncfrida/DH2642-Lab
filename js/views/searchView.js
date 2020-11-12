const SearchResultsView=({searchResults, dishChosen,h})=>
<div class = "searchView"> {
    searchResults.map(dish=>
    <span onClick = {() => {dishChosen(dish.id)}} key={dish.id} class="searchResult"> 
            <img class= "picsInSearchResult" src={"https://spoonacular.com/recipeImages/"+dish.image}></img> 
        <div> {dish.title} </div>
    </span>)
} </div>;

/*THIS IS STILL HERE SO VUE WORKS */

const SearchFormView=({onSearch, onType, onText, nav:[navCallback,navLabel],h})=> 
<div id = "SearchfieldInSearchView">

        <button  id = "summaryButton" onClick = {() => navCallback()}>{navLabel}</button>
 
    <input type="text" placeholder= "Enter type of dish here" onChange = {event => onText(event.target.value)}></input>
    <select defaultValue = "" onChange = {event=> onType(event.target.value)}>
        <option hidden value="" disabled>choose:</option>
        {["starter", "main course", "dessert"]
        .map (k => <option key={k} value={k} >{k}</option>)}
    </select>
    <button id = "searchButton" onClick = {() => onSearch()}>Search!</button>

</div>
