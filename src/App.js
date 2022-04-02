import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const [category, setCategory] =useState("Fictional");
  const books = {
    Fictional: [
      {
        name: "One Indian Girl"
      },
      {
        name: "Half Girlfriend"
      },
      {
          name: "One Arranged Murder"
      }
    ],
    Motivational: [
      {
        name: "The Power of Positive Thinking"
      },
      {
        name: "Think and Grow Rich"
      },
      {
          name: "The test of my life"
      }
    ],
    NonFictional: [
      {
          name: "Think Straight"
      },
        {
            name: "The Secret"
        },
        {
            name: "Attitude is everything"
        }
    ],
    SelfDevelopment: [
      {
          name: "IKIGAI"
      },
      {
          name: " Rich Dad Poor Dad"
      },
      {
          name: "Awaken The Giant Within"
      },
      {
          name:  "The Compound Effect"
      },
      {
          name: "Pyjama Profit"
      }
    ]
  };
  return (
    <div className="App">
      <h1>My Favourite Books 👇</h1>
      <div className="btn-container">
        {Object.keys(books).map((c) => (
          <button key={c} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <hr />
      <div className="list">
        {books[category].map((book) => (
          <div className="item" key={book.name}>
            <h2>{book.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
