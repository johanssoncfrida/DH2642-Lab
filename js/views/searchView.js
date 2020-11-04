const SearchResultsView=({searchResults})=>
<div id = "searchView"> {
    searchResults.map(dish=>
    <span key={dish.id} class="searchResult"> <img src={"https://spoonacular.com/recipeImages/"+dish.image}></img> 
        <div> {dish.title} </div>
    </span>)
} </div>;

const SearchFormView=({onSearch, onType, onText})=> 
<div>
{/*
TODO1: INPUT box that triggers onText(event.target.value) when the onChange DOM event fires
TODO2: SELECT box with the OPTIONS :
"choose one", value ""
["starter", "main course", "dessert"]
   .map(k=> <option key={k} >*TODO*</option>)
SELECT triggers onType(event.target.value) when the onChange DOM event fires
TODO3:BUTTON that triggers onSearch when the onClick DOM event fires
*/}
    <input type="text" onChange = {event => onText(event.target.value)}></input>
    <select defaultValue = "choose one:" onChange = {event=> onType(event.target.value)}>
        {["starter", "main course", "dessert"]
        .map (k => <option key={k} value={k} >{k}</option>)}
    </select>
    <button onClick = {() => onSearch()}>Search!</button>

</div>;

