import { data } from "../data";
import React from "react";

export const Score = ({ score }) => {
    return (
    <>
        <li>
        Date: {score.date}&nbsp;&nbsp;&nbsp; Score: {score.score}
        </li>
        <br />
    </>
    );
};
export default Score;