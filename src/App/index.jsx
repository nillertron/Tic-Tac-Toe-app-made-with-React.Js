import React, { Component } from 'react';
import TopBar from "../Components/Menu/topbar";
import Game from "../Components/TicTacToe/game";
class App  extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
        <TopBar></TopBar>
        <Game></Game>
            </React.Fragment>

        );
    }
}
 
export default App;