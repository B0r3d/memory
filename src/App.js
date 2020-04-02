import React from 'react';
import GameBoard from './components/GameBoard';
import Tile from './components/Tile';
import GameConstants from './constants/GameConstants';
import { createGlobalStyle } from 'styled-components';
import shuffle from './utils/Shuffle';

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
  const tiles = shuffle([...GameConstants.TILES, ...GameConstants.TILES]);
  return (
    <>
      <Global />
      <GameBoard>
        { tiles.map((tile, index) => <Tile key={ index } tile={ tile } /> )}
      </GameBoard>
    </>
  );
}