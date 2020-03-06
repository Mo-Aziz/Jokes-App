import React from "react";
import Joke from "./components/Joke";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Joke question ="What is Whitney Houston’s favorite type of coordination"
      punchLine="HAAANNNNND EYEEEEEEE." />

      <Joke question="Why did David Hasselhoff change his name to 'The Hoff?' "
      punchLine="It’s less hassle."
      />
      <Joke  question="Guy walks up to the widow at her husbands funeral and says, “May I just say one word?”"
      punchLine="Sure,she replies."/>
      <Joke  question="My wife told me to stop acting like a flamingo."
      punchLine="I had to put my foot down."/>
     <Joke  question=""
      punchLine=""/>
      
      <Joke  question=""
             punchLine=""
             />
    </div>
  );
}
