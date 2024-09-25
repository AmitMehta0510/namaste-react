const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "616" },
  "Writing React in different JS file."
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "child1" },
      "This is nested h1 in React in diff file."
    ),
    React.createElement(
      "h2",
      { id: "child2" },
      "This is nested h2 in React in diff file."
    ),
  ])
);

root.render([parent, heading]);
