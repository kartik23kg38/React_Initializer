const heading = React.createElement("h1", {
    id: "par",
    abc: "xyz"
}, [
    React.createElement("h3", {
        id: "child1",
        abc: "xyz"
    }, [
        React.createElement("h4", {
            id: "minchild1",
            abc: "xyz",
            key: "key1"
        }, "first"),
        React.createElement("h4", {
            id: "minchild2",
            abc: "xyz",
            key: "key2"
        }, "second")
    ]),
    React.createElement("h3", {
        id: "child2",
        abc: "xyz"
    }, [
        React.createElement("h4", {
            id: "minchild1",
            abc: "xyz",
            key: "key1"
        }, "first"),
        React.createElement("h4", {
            id: "minchild2",
            abc: "xyz",
            key: "key2"
        }, "second")
    ])
]);
const roooot = ReactDOM.createRoot(document.getElementById("roooot"));
roooot.render(heading);

//# sourceMappingURL=index.672d4772.js.map