const summaryNav=[()=> window.location.hash="summary", "Summary"];
const backToSearch=[()=> window.location.hash= "search", "Back to search"];
const addToMenu =[()=> window.location.hash = "search", "Add to menu"];


const App = ({model,h}) => 


<div>

    <div class = "flexParent">
        
        <div class = "Sidebar"><Sidebar model ={model} dishChoice={()=>
            window.location.hash= "details"}/></div>

        <div class = "mainContent">
        
        <Show hash = "#summary">
            <div class = "mainWindow"><Summary model = {model} nav={backToSearch}/></div>
        </Show>   
    </div>
    </div>
</div>
function defaultRoute(){
    if(! ["#search", "#summary", "#details"].find(knownRoute=>
             knownRoute===window.location.hash))
	window.location.hash="#search";
}
defaultRoute();

addEventListener("hashchange", ()=>defaultRoute(), []);
/*
<Show hash="#search">
            <div className = "mainWindow" ><Search model={model} nav = {summaryNav} resultChoice={()=>
            window.location.hash= "details"}/></div>
        </Show>
        <Show hash ="#details">
            <div className = "mainWindow"><Details model = {model} ok={addToMenu} cancel = {backToSearch}/></div> 
        </Show> */