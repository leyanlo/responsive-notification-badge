import { css, cx } from "@emotion/css";
import * as React from "react";

const liStyle = css`
  position: relative;
  ::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
    bottom: -20px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const badgeStyle = (count: number) => css`
  ::after {
    content: "${count}";
    background: #FF3B30EE;
    color: white;
    position: absolute;
    right: 0;
    top: ${count < 100 ? 0 : count < 1000 ? 36 : 0}px;
    width: ${count < 10 ? 64 : count < 100 ? 128 : 172}px;
    height: ${count < 10 ? 64 : count < 100 ? 96 : count < 1000 ? 100 : 172}px;
    border-radius: ${count < 10 ? 32 : 48}px;
    font-size: ${count < 10 ? 32 : count < 100 ? 48 : count < 1000 ? 56 : 64}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-variant-numeric: tabular-nums;
  }
`;

export default function App() {
  const [count, setCount] = React.useState(1);
  const handleChange = React.useCallback((e) => {
    setCount(e.target.value);
  }, []);
  const handleLogChange = React.useCallback((e) => {
    setCount(~~(10 ** e.target.value));
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
          position: relative;
          margin-bottom: 20px;
        `}
      >
        <ul
          className={css`
            position: absolute;
            margin: 0 auto;
            padding: 12px 12px 24px;
            right: 12px;
            left: 12px;
            bottom: 12px;
            width: max-content;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            display: flex;
            justify-content: center;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            list-style: none;
          `}
        >
          <li className={liStyle}>
            <img
              src="img/safari-icon.png"
              alt="Safari"
              width="172"
              height="172"
            />
          </li>
          <li className={cx(liStyle, badgeStyle(count))}>
            <img src="img/mail-icon.png" alt="Mail" width="172" height="172" />
          </li>
          <li className={liStyle}>
            <img
              src="img/messages-icon.png"
              alt="Messages"
              width="172"
              height="172"
            />
          </li>
        </ul>
      </div>
      <label
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        Notification count:&nbsp;
        <input
          type="number"
          min="1"
          max="1000"
          value={count}
          onChange={handleChange}
        />
        <input
          type="range"
          min="0"
          max="3"
          step=".1"
          value={Math.log10(count)}
          onChange={handleLogChange}
        />
      </label>
    </div>
  );
}
