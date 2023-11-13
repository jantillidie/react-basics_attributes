import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return <article className="article">
    <h2 className="article__title">Article title</h2>
    <label htmlFor="userInput">Enter the article:</label>
    <input type="text" id="userInput" name="name" />
    <a href="https://react.dev/" className="article__link">Article link</a>
  </article>
}
