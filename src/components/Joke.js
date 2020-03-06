import React from "react"

export default function Joke(props){
return(
  <div>
     <h3 style={{display: props.question ? "block" : "none"}}>Question:{props.question}</h3>
     <h3 style={{color: !props.question && "#808000"}}> Answer: {props.punchLine}</h3>
     <hr/>

    </div>

)
}