import React from "react";

function Header(props) {
  function resetData() {
    window.location.reload();
  }
  return (
    <div className="columns">
      <span className="column title is-5">
        Time elapsed:{" "}
        <span class="has-text-primary has-text-weight-bold">
          {props.timeElapsed}
        </span>
      </span>
      <div className="column has-text-right">
        <button onClick={resetData} className="button is-primary is-light">
          Restart
        </button>
      </div>
    </div>
  );
}

export default Header;
