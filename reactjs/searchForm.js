const SearchFormReact=({onSearch, nav:[navCallback,navLabel]})=>{   
    const [text, setText]= React.useState("");
    const [type, setType]= React.useState("");
   

    return <div>
        <div id = "SearchfieldInSearchView">
            <button  id = "summaryButton" onClick = {() => navCallback()}>{navLabel}</button>
        <input type="text" placeholder= "Enter type of dish here"  onChange = {event=>setText(event.target.value)} />
        <select defaultValue = "" onChange = {event=> setType(event.target.value)}>
            <option hidden value="" disabled>choose:</option>
            {["starter", "main course", "dessert"]
            .map (k => <option key={k} value={k} >{k}</option>)}
        </select>
        <button id = "searchButton" onClick={e=> onSearch(type, text)}>Search!</button> 
    </div>
    </div>
}

