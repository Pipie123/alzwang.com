const bruh = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {key: 1}, `Word: ${props.word}`),
        React.createElement("p", {key: 2}, `Definition: ${props.def}`),
        React.createElement("p", {key: 3}, `Source: ${props.sorc}`)
    ])
};

const App = () => {
  return React.createElement(
      "div", {}, React.createElement(
          "h1", {}, [
              React.createElement(bruh, {word: "Bruh", def: "A type of moment", sorc: "alzwang.com", key: "bruh"}),
              React.createElement(bruh, {word: "Yeet", def: "When you ya", sorc: "alzwang.com", key: "yeet"}),
              React.createElement(bruh, {word: "Dab", def: "A type of motion", sorc: "alzwang.com", key: "dab"}),
          ]
      )
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
