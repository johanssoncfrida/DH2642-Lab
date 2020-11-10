const SearchResultsView=({searchResults, dishChosen})=>
<div className = "searchView"> {
    searchResults.map(dish=>
    <span onClick = {() => {dishChosen(dish.id)}} key={dish.id} className="searchResult"> 
            <img className= "picsInSearchResult" src={"https://spoonacular.com/recipeImages/"+dish.image}></img> 
        <div> {dish.title} </div>
    </span>)
} </div>;

const SearchFormView=({onSearch, onType, onText, nav:[navCallback,navLabel]})=> 
<div id = "SearchfieldInSearchView">
    <button onClick = {() => navCallback()}>{navLabel}</button>
    <input type="text" placeholder= "Enter type of dish here" onChange = {event => onText(event.target.value)}></input>
    <select defaultValue = "" onChange = {event=> onType(event.target.value)}>
        <option hidden value="" disabled>choose:</option>
        {["starter", "main course", "dessert"]
        .map (k => <option key={k} value={k} >{k}</option>)}
    </select>
    <button onClick = {() => onSearch()}>Search!</button>

</div>
