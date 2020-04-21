export const TILE_SIZE = 48;

export const DEMON_TILE_SIZE = 48 * 2;

export const HEAD_OFFSET = 12;

export const GAME_SIZE = 20 * 48; //960px

export enum EDirection {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
}

export enum EWalker {
  HERO = "hero",
  ENEMY = "enemy",
}