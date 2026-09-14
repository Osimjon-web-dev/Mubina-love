import { useState } from "react";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  const romanticWords = [
    "You are my favorite person ❤️",
    "You make my world brighter",
    "Forever grateful for you",
    "You are so special to me",
    "My heart belongs to you",
    "You make me smile",
    "I am lucky to have you",
    "You mean so much to me",
  ];

  return (
    <main className={`love-page ${opened ? "opened" : ""}`}>
      {!opened ? (
        <section className="welcome">
          <div className="small-heart">♡</div>

          <h1>Hello, Mubina ❤️</h1>

          <p>There is something special waiting for you.</p>

          <span>Press the heart below</span>

          <button
            className="heart-button"
            onClick={() => setOpened(true)}
            aria-label="Open my message"
          >
            <span>♥</span>
          </button>
        </section>
      ) : (
        <section className="message">
          <div className="floating-words">
            {romanticWords.map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </div>

          <div className="big-heart">
            <div className="heart-text">
              <h1>I love you, Mubina</h1>
              <p>❤️</p>
              <h2>Thank you for being in my life.</h2>
            </div>
          </div>

          <p className="bottom-text">
            You are a beautiful part of my story. ❤️
          </p>
        </section>
      )}
    </main>
  );
}

export default App;