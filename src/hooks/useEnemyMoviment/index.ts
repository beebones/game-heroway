import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection, EWalker } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';

function useEnemyMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

  useInterval(function move() {
    var random = Math.floor(Math.random() *4);
    var directionArry = Object.values(EDirection);
    const randomDirection = directionArry[random];

    const moviment = canvasContext.updateCanvas(randomDirection, positionState, EWalker.ENEMY);

    if(moviment.nextMove.valid) {
      updateDirectionState(randomDirection);
      updatePositionState(moviment.nextPosition);
    }    
  }, 2000);

  return {
    position: positionState,
    direction: direction
  }
}

export default useEnemyMoviment