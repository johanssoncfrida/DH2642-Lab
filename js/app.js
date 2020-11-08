
const App = ({model}) => 
<div>
    
    <div className = "flexParent">
        <div className = "SidebarAndSummary">
        <div className = "Sidebar mainWindow"><Sidebar model ={model}/></div>
        <div className = "Summary "><Summary model = {model}/></div></div>
        <div className = "mainContent">
            <div className = "Search mainWindow" ><Search model={model}/></div>
            <div className = "Details mainWindow"><Details model = {model}/></div>
            
        </div>

    </div>
 
</div>
