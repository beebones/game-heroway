import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection, EWalker } from '../../settings/constants'
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';

function useHeroMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const chestContext = React.useContext(ChestsContext);

  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key as EDirection;

    if(direction.indexOf('Arrow') === -1) {
      return;
    }

    const moviment = canvasContext.updateCanvas(direction, positionState, EWalker.HERO);

    if(moviment.nextMove.valid){
      updatePositionState(moviment.nextPosition);
      updateDirectionState(direction);
    }

    if(moviment.nextMove.dead) {
      setTimeout(() => {
        alert('Você Morreu!');
      })      
      window.location.reload();
    }

    if(moviment.nextMove.chest) {
      chestContext.updateOpenedChests(moviment.nextPosition);
    }
    
    if (chestContext.totalChests === chestContext.openedChests.total && moviment.nextMove.door) {
      setTimeout(() => {
        alert('Você venceu!')
      })      
      window.location.reload();
    }
  });

  return {
    position: positionState,
    direction: direction,
  }
}

export default useHeroMoviment;