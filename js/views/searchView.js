const SearchResultsView=({searchResults, dishChosen})=>
<div id = "searchView"> {
    searchResults.map(dish=>
    <span onClick = {() => {dishChosen(dish.id)}} key={dish.id} className="searchResult"> 
            <img className= "picsInSearchResult" src={"https://spoonacular.com/recipeImages/"+dish.image}></img> 
        <div> {dish.title} </div>
    </span>)
} </div>;

const SearchFormView=({onSearch, onType, onText})=> 
<div>
    <input type="text" onChange = {event => onText(event.target.value)}></input>
    <select defaultValue = "choose one:" onChange = {event=> onType(event.target.value)}>
        {["starter", "main course", "dessert"]
        .map (k => <option key={k} value={k} >{k}</option>)}
    </select>
    <button onClick = {() => onSearch()}>Search!</button>

</div>
