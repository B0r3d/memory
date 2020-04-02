import styled from 'styled-components';

const flipDuration = 800;

const TileWrapper = styled.div`
  flex: 0 0 100px;
  border: 1px solid #f1f1f1;
`
const TileInner = styled.div`
  padding-top: 100%;
  position: relative;
  text-align: center;
  transition: transform ${ flipDuration }ms;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`
const BaseTile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`
const BackTile = styled(BaseTile)`
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`
const FrontTile = styled(BaseTile)`
  background-color: #bbb;
  color: black;
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


export { TileWrapper, TileInner, FrontTile, BackTile, IconHolder }