import { css } from "@emotion/css";
import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(1);
  const handleChange = React.useCallback((e) => {
    setCount(e.target.value);
  }, []);
  return (
    <div
      className={css`
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        text-align: center;
      `}
    >
      <h1>Responsive notification badge</h1>
      <h2>
        Inspired by{" "}
        <a
          href="https://twitter.com/neilsardesai/status/1386469816987537417"
          target="_blank"
          rel="noopener noreferrer"
        >
          this tweet
        </a>
      </h2>
      <div
        className={css`
          background: url("img/wallpaper.jpg") no-repeat center;
          width: 600px;
          height: 320px;
          margin: auto;
        `}
      >
        <img src="img/safari-icon.png" alt="Safari" width="140" height="140" />
        <img src="img/mail-icon.png" alt="Mail" width="140" height="140" />
        <img
          src="img/messages-icon.png"
          alt="Messages"
          width="140"
          height="140"
        />
      </div>
      <label
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        Notification count:&nbsp;
        <input type="text" value={count} onChange={handleChange} />
        <input
          type="range"
          min="0"
          max="1000"
          value={count}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
