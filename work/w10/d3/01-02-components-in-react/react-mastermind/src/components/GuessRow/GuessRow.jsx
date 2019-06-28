import React from 'react';
import GuessScore from '../GuessScore/GuessScore';
import GamePegs from '../GuessPegs/GuessPegs';

const GuessRow = (props) => (
    <div class='component' id='guessRow'>
        Guess Row {props.rowNum}
        <GamePegs />
        <GuessScore />
    </div>
);

export default GuessRow;