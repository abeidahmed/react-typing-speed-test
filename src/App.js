import React, { Component } from "react";

import RandomQuote from "./components/RandomQuote";
import Result from "./components/Result";
import Header from "./components/Header";

const URL = "http://api.quotable.io/random";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      input: "",
      seconds: 0,
      started: false,
      finished: false,
      typedLength: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          quote: data.content
        });
      });
  }

  handleChange(event) {
    const userTyped = event.target.value;
    this.setTimer();
    this.onFinish(userTyped);
    this.setState({
      input: userTyped,
      typedLength: this.quoteCharLength()
    });
  }

  setTimer() {
    if (!this.state.started) {
      this.setState({
        started: true
      });
      this.interval = setInterval(() => {
        this.setState(prevState => {
          return { seconds: prevState.seconds + 1 };
        });
      }, 1000);
    }
  }

  onFinish(input) {
    if (input === this.state.quote) {
      clearInterval(this.interval);
      this.setState({
        finished: true
      });
    }
  }

  quoteCharLength() {
    return this.state.quote.replace(" ", "").split("").length;
  }

  quoteWordLength() {
    return this.state.quote.split(" ").length;
  }

  render() {
    return (
      <div style={{ marginTop: 50 }} className="columns is-centered">
        <div className="column is-half">
          <Header timeElapsed={this.state.seconds} />
          <RandomQuote
            quote={this.state.quote}
            inputuser={this.state.input}
          />
          <textarea
            placeholder="Start typing..."
            style={{ marginTop: 30, resize: "none" }}
            type="text"
            className="textarea is-primary"
            value={this.state.input}
            onChange={this.handleChange}
          ></textarea>
          <Result
            totalWord={this.quoteWordLength()}
            timeElapsed={this.state.seconds}
            totalChars={this.state.typedLength}
            finished={this.state.finished}
          />
        </div>
      </div>
    );
  }
}

export default App;
