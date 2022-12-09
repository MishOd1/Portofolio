import React, { useState } from "react";
import "../Card3.css";
import YoutubeEmbed from "../assets/Youtube";
function Card3() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Who Can Mine (Extart) Bitcoin",
      options: [
        { id: 0, text: "Goverments Only", isCorrect: false },
        { id: 1, text: "Banks", isCorrect: false },
        { id: 2, text: "Bitcoin Founder", isCorrect: false },
        { id: 3, text: "Anyone", isCorrect: true },
      ],
    },
    {
      text: "What Type Of Equipment Is Used In Bitcoin Mining?",
      options: [
        { id: 0, text: "Super Computers", isCorrect: true },
        { id: 1, text: "Coal Mining Equipment", isCorrect: false },
        { id: 2, text: "Gold Mining Equipment", isCorrect: false },
        { id: 3, text: "Crude Oil Extraction Equipment", isCorrect: false },
      ],
    },
    {
      text: "What Physical Shape Does Bitcoin Have?",
      options: [
        { id: 0, text: "Paper Money", isCorrect: false },
        { id: 1, text: "Precious Metal", isCorrect: false },
        {
          id: 2,
          text: "Its Digital Money (No Physical Form)",
          isCorrect: true,
        },
        { id: 3, text: "Flash Drive", isCorrect: false },
      ],
    },
    {
      text: "Bitcoin Has A Backup Of 100Tons Of Gold Saved In",
      options: [
        { id: 0, text: "California", isCorrect: false },
        {
          id: 1,
          text: "Bitcoin Is Not Backedup By Gold Or Paper Money",
          isCorrect: true,
        },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "To Send A Bitcoin To Another Person, You Have To..",
      options: [
        { id: 0, text: "Ask The Bank To Send", isCorrect: false },
        { id: 1, text: "Send Directly (peer-to-peer)", isCorrect: true },
        { id: 2, text: "Send Throw Paypal", isCorrect: true },
        { id: 3, text: "Deliver It By Hand", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App3 mt-20" name="Quiz">
         <footer className="footer mt-[-5%] text-[#15243f]">'</footer>
      <div className="question-card2">
        <div className="again">
          <p className="text-4xl pt-10 font-bold inline border-b-4 border-pink-600 text-red-50 ">
            The Bitcoin Quiz
          </p>
          <p className="py-4 text-gray-300">
            / Expand your knowledge about BTC
          </p>
        </div>
        <h2 className="text-1xl lg:text-3xl mb-[-3.4%] text-[#8892b0]">
          Please play the 1 minute video below<br></br>
          then procced to the 5 qustion quiz below it and answer all the
          qustions..
        </h2>

      </div>
      <YoutubeEmbed embedId="wrPklp6PIew" />

      {showResults ? (
        <div className="final-results w-[100%] h-auto lg:w-[60%] lg:ml-[20%] mt-[70%] lg:mt-[20rem]">
          <h1 className="text-3xl text-gray-200">Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="button" onClick={() => restartGame()}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-car w-[100%] h-auto lg:w-[60%] lg:ml-[20%] mt-[70%] lg:mt-[20rem]">
          <h2 className="qustion1">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="Hi">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className="hello"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Card3;
