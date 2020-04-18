import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection } from '../../settings/constants'
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    const nextPosition = handleNextPosition(direction, positionState);
    updatePositionState(nextPosition);
    updateDirectionState(direction);
    // if (event.key === 'ArrowLeft') {
    //   updatePositionState({ x: positionState.x -1, y: positionState.y });
    //   updateDirectionState('LEFT');
    // } else if (event.key === 'ArrowRight') {
    //   updatePositionState({ x: positionState.x +1, y: positionState.y });
    //   updateDirectionState('RIGHT');
    // } else if (event.key === 'ArrowDown') {
    //   updatePositionState({ x: positionState.x, y: positionState.y -1 });
    // } else if (event.key === 'ArrowUp') {
    //   updatePositionState({ x: positionState.x, y: positionState.y +1 });
    // }
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment