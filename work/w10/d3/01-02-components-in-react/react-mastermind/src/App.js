import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">React Mastermind</header>
                <div className="gameContainer">
                    <GameBoard />
                    <div className='userPanel'>
                        <ColorPicker />
                        <GameTimer />
                        <NewGameButton />
                    </div>
                </div>
                <footer className='component' >Footer</footer>
            </div>
        );
    }
}

export default App;