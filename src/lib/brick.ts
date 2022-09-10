export type Brick = {
  x: number
  y: number
  w: number
  h: number
  state: BrickState
  destroy: () => void
  getKey: () => string
  setStateChangedCallback: (cb: StateChangedCallback) => void
}

type StateChangedCallback = (state: BrickState) => void

export enum BrickState {
  Alive,
  Dead,
}

const WIDTH = 51.2
const HEIGHT = 25.6 // 51.2 * 0.5

function createBrick(col: number, row: number): Brick {
  let state = BrickState.Alive
  let stateChangedCB: StateChangedCallback | null = null

  function destroy() {
    state = BrickState.Dead
    if (stateChangedCB) {
      stateChangedCB(state)
    }
  }

  function getKey() {
    return `${col}_${row}`
  }

  function setStateChangedCallback(cb: (state: BrickState) => void) {
    stateChangedCB = cb
  }

  return {
    x: col * WIDTH,
    y: row * HEIGHT,
    w: WIDTH,
    h: HEIGHT,
    state,
    destroy,
    getKey,
    setStateChangedCallback,
  }
}

export { createBrick }
