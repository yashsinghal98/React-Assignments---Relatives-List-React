import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const rel=["YASH","HARSH","HONEY","SID"];
        return(
            <div id="main">
            <ol key="relativeList">
            {
            rel.map((ele,index)=><li key={`relativeListItem${index+1}`}>{ele}</li>)
            }
            </ol>
            </div>
        )
    }
}


export default App;
