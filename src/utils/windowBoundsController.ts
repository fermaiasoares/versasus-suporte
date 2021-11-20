import { Rectangle } from 'electron';

import { config } from '../store/config';

export const getWindowBounds = (): Rectangle => {
  const { width, height, x, y } = config.get('windowBounds') as Rectangle;

  return {
    width,
    height,
    x,
    y
  }
}

export const setWindowBounds = (bounds: Rectangle | undefined): void => {
  if (!bounds) {
    return;
  }

  const { width, height, x, y } = bounds;

  config.set('windowBounds', {
    width: width || 1100,
    height: height || 700,
    x,
    y
  })
}