const summaryNav=[()=> window.location.hash="summary", "Summary"];
const backToSearch=[()=> window.location.hash= "search", "Back to search"];
const App = ({model}) => 
<div>
    
    <div className = "flexParent">
        <div className = "Sidebar">
        <div className = "Sidebar mainWindow"><Sidebar model ={model}/></div>
        
    </div>
        <div className = "mainContent">
        <Show hash="#search">
            <div className = "mainWindow" ><Search model={model} nav = {summaryNav} resultChoice={()=>
            window.location.hash= "details"}/></div>
        </Show>
        <Show hash ="#details">
            <div className = "mainWindow"><Details model = {model} cancel = {backToSearch}/></div> 
        </Show> 
        <Show hash = "#summary">
            <div className = "mainWindow"><Summary model = {model} nav={backToSearch}/></div>
        </Show>   
    </div>

    </div>
 
</div>
