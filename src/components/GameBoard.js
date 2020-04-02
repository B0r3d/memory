import React from 'react';
import styled from 'styled-components';

export default ({ children }) => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    margin: 0 auto;
    padding: 15px 0;
  `;

  return (
    <Container>{ children }</Container>
  )
}