import React from 'react';
import styled from 'styled-components';

function px(value) {
  return typeof value === 'number' ? `${value}px` : value;
}

function getSpacing(position) {
  return (props) => {
    switch (position) {
      case 'top':
        return px(props.gapTop || '');
      case 'left':
        return px(props.gapLeft || '');
      case 'right':
        return px(props.gapRight || '');
      case 'bottom':
        return px(props.gapBottom || '');
      default:
        return px(props.gap || '');
    }
  };
}

const HStack = styled.div`
  display: flex;
  > * {
    margin: ${getSpacing()};
    margin-top: ${getSpacing('top')};
    margin-right: ${getSpacing('right')};
    margin-bottom: ${getSpacing('bottom')};
    margin-left: ${getSpacing('left')};
  }
`;

const VStack = styled(HStack)`
  flex-direction: column;
`;

const Square = styled.div`
  background-color: crimson;
  width: 24px;
  height: 24px;
`;

export default function App() {
  return (
    <article>
      <h2>Horizontal stack</h2>
      <HStack gapRight={40} gap={4}>
        <Square />
        <Square />
        <Square />
        <Square />
      </HStack>
      <h2>Vertical stack</h2>
      <VStack gapTop={4}>
        <Square />
        <Square />
        <Square />
        <Square />
      </VStack>
    </article>
  );
}
