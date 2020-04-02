import React from 'react';
import styled from 'styled-components';
import GameConstants from '../constants/GameConstants';

export default ({ tile }) => {
  const TileInner = styled.div`
    padding-top: 100%;
    position: relative;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  `
  const TileWrapper = styled.div`
    flex: 0 0 100px;
    border: 1px solid #f1f1f1;
    &:hover ${TileInner} {
      transform: rotateY(180deg);
    }
  `
  const BaseTile = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  `
  const FrontTile = styled(BaseTile)`
    background-color: #bbb;
    color: black;
  `
  const BackTile = styled(BaseTile)`
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  `
  const IconHolder = styled.div`
    padding: 12px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    img {
      max-width: calc(100% - 12px);
      max-height: calc(100% - 12px);
    }
  `
  return (
    <TileWrapper>
      <TileInner>
        <FrontTile>
          <IconHolder>
            <img src="/images/questionmark.png" alt="React"/>
          </IconHolder>
        </FrontTile>
        <BackTile>
          <IconHolder>
            <img src={ tile.img } alt="React"/>
          </IconHolder>
        </BackTile>
      </TileInner>
    </TileWrapper>
  )
}