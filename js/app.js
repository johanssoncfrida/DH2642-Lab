
const App = ({model}) => 
<div>
    
    <div className = "flexParent">
        <div className = "SidebarAndSummary">
        <div className = "Sidebar mainWindow"><Sidebar model ={model}/></div>
        <Show hash = "#summary">
            <div><Summary model = {model}/></div>
        </Show>
    </div>
        <div className = "mainContent">
        <div className = "Search mainWindow" ><Search model={model}/></div>
        <div className = "Details mainWindow"><Details model = {model}/></div>     
    </div>

    </div>
 
</div>
