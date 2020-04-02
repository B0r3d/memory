import React from 'react';
import { TileWrapper, TileInner, FrontTile, IconHolder, BackTile } from './Tile.styled';

export default ({ tile, isFlipped, onClick }) => (
  <TileWrapper>
      <TileInner isFlipped={ isFlipped }>
        <FrontTile onClick={ () => onClick(tile) }>
          <IconHolder>
            <img src="/images/questionmark.png" alt="Reveal"/>
          </IconHolder>
        </FrontTile>
        <BackTile>
          <IconHolder>
            <img src={ tile.img } alt="Image"/>
          </IconHolder>
        </BackTile>
      </TileInner>
  </TileWrapper>
)