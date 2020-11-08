
const App = ({model}) => 
<div>
    
    <div className = "flexParent">
        <div className = "sidebar debug"><Sidebar model ={model}/></div>
        <div className = "mainContent debug">
            <div className = "debug" ><Search model={model} /></div>
            <div className = "debug" ><Details model = {model}/></div>
            <div className = "debug"><Summary model = {model}/></div>
        </div>

    </div>
 
</div>
