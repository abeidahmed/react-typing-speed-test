import React from "react";

function Result(props) {
  const wpm = () => {
    if (props.timeElapsed > 0) {
      return Math.floor(props.totalWord / (props.timeElapsed / 60));
    } else {
      return 0;
    }
  };
  return (
    <div
      style={{ marginTop: 40, marginLeft: "auto", marginRight: "auto" }}
      className="column is-half"
    >
      <h3 class="title is-size-5 has-text-centered">Result</h3>
      <table className="table is-striped is-fullwidth">
        <tbody>
          <tr className="subtitlle is-size-5">
            <td className="has-text-grey">Words per minute</td>
            <td className="has-text-weight-bold has-text-primary">
              {wpm()}
            </td>
          </tr>
          <tr className="subtitlle is-size-5">
            <td className="has-text-grey">Correct characters typed</td>
            <td className="has-text-weight-bold has-text-primary">
              {props.totalChars}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Result;
