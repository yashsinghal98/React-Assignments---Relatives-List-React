import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const rel=["YASH","HARSH","HONEY","SID"];
        return(
            <div id="main">
            <ol>
            {
            rel.map((ele,index)=>{<li key=`relativeListItem${index+1}`>{ele}</li>});
            }
            </ol>
            </div>
        )
    }
}


export default App;
