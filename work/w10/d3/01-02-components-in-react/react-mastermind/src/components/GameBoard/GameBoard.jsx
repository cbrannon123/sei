import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = (props) => (
    <div class='component GameBoard' >
        GameBoard
        <GuessRow rowNum='1' />
        <GuessRow rowNum='2' />
    </div>
);


export default GameBoard;