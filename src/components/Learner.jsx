import React from "react";
import { data } from "../data";
import Score from "./Score";

export default function Learner({learner}) {
    return (<div>
<h2>{learner.name}</h2>
<p>{learner.bio}</p>

<h3>Score</h3>

{learner.scores.map((score, index) => (
        <Score key={index} score={score} />
        ))}

    </div>)
    



}
