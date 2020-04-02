import React, { useState, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import Tile from './components/Tile';
import GameConstants from './constants/GameConstants';
import { createGlobalStyle } from 'styled-components';
import shuffle from './utils/Shuffle';

const tiles = shuffle(GameConstants.TILES);

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
`
export default () => {
  const [ flippedTile, setFlippedTile ] = useState(null);

  const flipTile = tile => {
    setFlippedTile(tile);
  };

  return (
    <>
      <Global />
      <GameBoard>
        { tiles.map((tile, index) => <Tile onClick={ flipTile } key={ index } tile={ tile } isFlipped={ flippedTile === tile } /> )}
      </GameBoard>
    </>
  );
}