import React, { Component } from "react";

class RandomQuote extends Component {
  classes = {
    container: {
      marginTop: 20
    },
    innerContainer: {
      border: 1,
      borderStyle: "solid",
      borderColor: "#eee",
      borderRadius: 4
    },
    paragraph: {
      marginTop: 30,
      letterSpacing: 1.2,
      padding: 20
    }
  };
  render() {
    const { container, innerContainer, paragraph } = this.classes;
    const renderedQuote = this.props.quote.split("");

    return (
      <div style={container}>
        <div style={innerContainer} className="has-text-centered">
          <p
            style={paragraph}
            className="subtitle is-4 has-text-weight-semibold"
          >
            {renderedQuote.map((character, index) => {
              let textColor;
              if (index < this.props.inputuser.length) {
                textColor =
                  character === this.props.inputuser[index]
                    ? "has-text-primary"
                    : "has-text-danger";
              }
              return (
                <span className={textColor} key={index}>
                  {character}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}

export default RandomQuote;
