
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
                 "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  a { color: inherit; text-decoration: none; }

  /* ==== moved from old index.css ==== */
  form label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  form input {
    padding: 0.3rem 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    width: 100%;
  }
  form button {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    float: right;
    color: #ffffff;
    background-color: #28a745;
    border-radius: 0.25rem;
    border: none;
  }
  .UpdateForm__delete-button {
    background: none;
    color: #ea4f3e;
    float: left;
    padding: 0;
  }
  form .input-group { margin-bottom: 1.5rem; }
`;

export default GlobalStyle;
