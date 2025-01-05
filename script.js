import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div" , 
    {id: "par", abc:"xyz"} , [
        React.createElement(
            "div" , 
            {id: "child1", abc:"xyz", key: "key_a"} , 
            [
                React.createElement("h4" , {id: "minchild1", abc:"xyz", key: "key1"} , "asdfljkasdfjklasdjkkjdf") , 
                React.createElement("h4" , {id: "minchild2", abc:"xyz", key: "key2"} , "second")
            ]
        ) , 
        React.createElement(
            "div" , 
            {id: "child2", abc:"xyz", key: "key_b"} , 
            [
                React.createElement("h4" , {id: "minchild1", abc:"xyz", key: "key1"} , "first") , 
                React.createElement("h4" , {id: "minchild2", abc:"xyz", key: "key2"} , "second")
            ]
        ) 
    ]
);
const roooot = ReactDOM.createRoot(document.getElementById("roooot"));
roooot.render(heading);